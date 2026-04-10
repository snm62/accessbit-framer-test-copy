import { useQueryClient, useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { User, DecodedToken } from "../types/types";
import { WebflowAPI } from "../types/webflowtypes";
import { WORKER_BASE_URL } from '../util/constants';
import { assertTrustedWorkerUrl, fetchWorker, workerUrl } from '../util/workerRequest';

// Use the real Webflow API from the global scope,
declare const webflow: WebflowAPI;
let inMemorySessionToken: string | null = null;
let inMemorySessionTokenExpiry: number | null = null;
let sessionTokenRefreshPromise: Promise<string> | null = null;

const SESSION_TOKEN_BUFFER_MS = 60 * 1000; // refresh 1 minute before expiry

type StoredUserInfo = {
  firstName: string;
  siteId: string;
  customDomain?: string;
  siteInfo?: {
    siteId: string;
    siteName?: string;
    shortName?: string;
  };
};

const readStoredUserInfo = (): StoredUserInfo | null => {
  const raw = localStorage.getItem('accessbit-userinfo');
  if (!raw || raw === 'null' || raw === 'undefined') return null;
  try {
    const parsed = JSON.parse(raw);
    return parsed?.siteId ? (parsed as StoredUserInfo) : null;
  } catch {
    return null;
  }
};

const dispatchAuthSuccess = (detail: any) => {
  window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail }));
};

const resolveCustomDomainFromSiteInfo = (siteInfo: any): string | undefined => {
  try {
    if (siteInfo?.domains && Array.isArray(siteInfo.domains)) {
      const productionDomain = siteInfo.domains.find(
        (d: any) => d?.stage === 'production' || d?.default === true || d?.primary === true
      );
      if (productionDomain?.url) {
        return `https://${productionDomain.url}`;
      }
    }
  } catch {
    // ignore
  }
  if (siteInfo?.shortName) {
    return `https://${siteInfo.shortName}.webflow.io`;
  }
  return undefined;
};

const setInMemorySessionToken = (token: string | null) => {
  if (!token) {
    inMemorySessionToken = null;
    inMemorySessionTokenExpiry = null;
    return;
  }

  inMemorySessionToken = token;
  try {
    const decoded = jwtDecode(token) as DecodedToken;
    if (decoded?.exp) {
      inMemorySessionTokenExpiry = decoded.exp * 1000;
    } else {
      inMemorySessionTokenExpiry = Date.now() + 15 * 60 * 1000;
    }
  } catch {
    inMemorySessionTokenExpiry = Date.now() + 15 * 60 * 1000;
  }
};

const clearInMemorySessionToken = () => {
  setInMemorySessionToken(null);
};

const hasUsableSessionToken = () => {
  if (!inMemorySessionToken) return false;
  if (!inMemorySessionTokenExpiry) return true;
  return inMemorySessionTokenExpiry - Date.now() > SESSION_TOKEN_BUFFER_MS;
};

const requestAuthToken = async (siteId: string) => {
  const response = await fetchWorker(workerUrl("/api/auth/token"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ siteId }),
  });
  const data = await response.json().catch(() => ({}));
  return { response, data };
};

const refreshSessionToken = async (): Promise<string> => {
  if (sessionTokenRefreshPromise) {
    return sessionTokenRefreshPromise;
  }

  sessionTokenRefreshPromise = (async () => {
    
    const siteInfo = await webflow.getSiteInfo();
    if (!siteInfo?.siteId) {
      throw new Error('No site information available');
    }

    const { response, data } = await requestAuthToken(siteInfo.siteId);

    if (!response.ok) {
      throw new Error(`Token exchange failed: ${data.error || 'Unknown error'}`);
    }

    if (!data.sessionToken) {
      throw new Error('No session token received from server');
    }

    setInMemorySessionToken(data.sessionToken);
    return data.sessionToken as string;
  })();

  try {
    return await sessionTokenRefreshPromise;
  } finally {
    sessionTokenRefreshPromise = null;
  }
};

const getValidSessionToken = async (): Promise<string> => {
  if (hasUsableSessionToken()) {
    return inMemorySessionToken as string;
  }
  return refreshSessionToken();
};

interface AuthState {
  user: User;
  
}

/**
 * Custom hook for managing authentication state and token exchange.
 * @returns {Object} Authentication utilities and state
 */
export function useAuth() {
  
  const queryClient = useQueryClient();

  // Query for managing auth state and token validation
  const { data: authState, isLoading: isAuthLoading } = useQuery<AuthState>({
    queryKey: ["auth"],
    queryFn: async () => {
      const storedUser = localStorage.getItem("accessbit-userinfo");
      const wasExplicitlyLoggedOut = localStorage.getItem(
        "explicitly_logged_out"
      );

      // Return initial state if no stored user or logged out
      if (!storedUser || wasExplicitlyLoggedOut) {
        return { user: { firstName: "", email: "" } };
      }

      try {
        const userData = JSON.parse(storedUser);
        
        
        const authState = {
          user: {
            firstName: userData.firstName || "",
            email: "", // Email removed from localStorage - retrieve from session token when needed
            siteId: userData.siteId, // Include siteId from stored data
          },
        };
        return authState;
      } catch (error) {
        // Clear invalid data
        localStorage.removeItem("accessbit-userinfo");
        return { user: { firstName: "", email: "" } };
      }
    },
    staleTime: Infinity, 
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    gcTime: 1000 * 60 * 60, // Cache for 1 hour
  });

 

  // Function to handle user logout
  const logout = () => {
    // Set logout flag and clear storage
    localStorage.setItem("explicitly_logged_out", "true");
    localStorage.removeItem("accessbit-userinfo");
    clearInMemorySessionToken();
    queryClient.setQueryData(["auth"], {
      user: { firstName: "", email: "" },
    });
    queryClient.clear();
  };

  const openAuthScreen = async () => {
    // Get current site info first
    const siteInfo = await webflow.getSiteInfo();
    
   
    
    const authUrl = `${workerUrl("/api/auth/authorize")}?state=webflow_designer_${siteInfo.siteId}&siteId=${siteInfo.siteId}`;
 
    
    // Try to open popup
    let authWindow: Window | null = null;
    try {
      authWindow = window.open(
        authUrl,
        "accessbit_auth",
        "width=600,height=700,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=yes,noopener,noreferrer"
      );
    } catch (e) {
      // Continue with server-state polling path even if popup handle is unavailable.
    }
    
   
    
    const completeFromServerState = async () => {
      // 1) Use existing localStorage if complete
      // 2) Otherwise retry backend token exchange briefly
      const stored = readStoredUserInfo();
      if (stored) {
        dispatchAuthSuccess(stored);
        return;
      }

      const maxAttempts = 15;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          const ok = await attemptSilentAuth();
          if (ok) {
            const latest = readStoredUserInfo();
            if (latest) {
              dispatchAuthSuccess(latest);
              break;
            }
          }
        } catch {
          // Continue retrying until maxAttempts
        }

        if (attempt < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 800));
        }
      }
    };

    // Monitor popup window for completion when a handle is available
    const checkPopupClosed = setInterval(async () => {
      if (authWindow && authWindow.closed) {
        clearInterval(checkPopupClosed);
        await completeFromServerState();
      } else {
        // Popup still open - try to check its URL (may fail due to cross-origin)
        try {
          if (authWindow && authWindow.location) {
            const popupUrl = authWindow.location.href;
           
            if (popupUrl.includes('auth-success')) {
             
            } else if (popupUrl.includes('oauth/authorize')) {
              
            } else if (popupUrl === 'about:blank' || !popupUrl) {
             
            } else {
           
            }
          }
        } catch (e: any) {
          // Expected - can't access popup URL due to cross-origin
          // This is normal when popup is on different domain
          if (e.message && e.message.includes('cross-origin')) {
            // This is expected and normal
          } else {
           
          }
        }
      }
    }, 1000);

    
    let noHandleCompletionPoll: ReturnType<typeof setInterval> | null = null;
    let noHandleFocusListener: ((this: Window, ev: FocusEvent) => any) | null = null;
    if (!authWindow) {
      noHandleFocusListener = () => {
        if (noHandleCompletionPoll) return;
        let attempts = 0;
        const maxAttempts = 20; // ~20s
        noHandleCompletionPoll = setInterval(async () => {
          attempts++;
          await completeFromServerState();
          const hasSiteId = !!readStoredUserInfo();
          if (hasSiteId || attempts >= maxAttempts) {
            if (noHandleCompletionPoll) {
              clearInterval(noHandleCompletionPoll);
              noHandleCompletionPoll = null;
            }
            if (noHandleFocusListener) {
              window.removeEventListener('focus', noHandleFocusListener);
              noHandleFocusListener = null;
            }
          }
        }, 1000);
      };
      window.addEventListener('focus', noHandleFocusListener);
    }
    
    // Listen for postMessage from popup
    const handleMessage = async (event: MessageEvent) => {
      
      const safeData = event.data ? { ...event.data } : null;
      if (safeData && safeData.sessionToken) {
        safeData.sessionToken = '[REDACTED]'; // Remove sensitive token from logs
      }
      
      

      
      const normalizeOrigin = (origin: string) => origin.replace(/\/+$/, '').toLowerCase();
      const normalizedAllowedOrigin = normalizeOrigin(WORKER_BASE_URL);
      // Strict equality only: event.origin is the browser-supplied sender origin (scheme+host+port).
      if (!event.origin || normalizeOrigin(event.origin) !== normalizedAllowedOrigin) {
        return;
      }
      
      // Only process AUTH_SUCCESS messages
      if (event.data && event.data.type === 'AUTH_SUCCESS') {
       
        clearInterval(checkPopupClosed);
        
        try {
          if (authWindow && !authWindow.closed) {
            authWindow.close();
          }
        } catch (e) {
          
        }
        
        // Process the auth success with the data from the popup
        const { sessionToken, user, siteInfo } = event.data;
        
        
        
        // If popup sends a minimal success payload (no user/siteInfo), complete via backend.
        if (!siteInfo || !siteInfo.siteId) {
          await completeFromServerState();
          return;
        }
        
        // Convert worker data format to our internal format
        const authData = {
          sessionToken: sessionToken || '',
          firstName: user?.firstName || user?.name || '',
          email: user?.email || '',
          siteId: siteInfo?.siteId || '',
          siteName: siteInfo?.siteName || '',
          shortName: siteInfo?.shortName || ''
        };
        
        
        
        // Process if we have siteId
        if (authData.siteId) {
          processAuthSuccessFromData(authData);
        } else {
        
        }
      } else {
       
      }
    };
    
    // Listen for storage events (when popup stores data)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'accessbit-userinfo' && event.newValue) {
        
        clearInterval(checkPopupClosed);
        
        try {
          const authData = JSON.parse(event.newValue);
          processAuthSuccessFromData(authData);
        } catch (error) {
          
        }
      }
    };
    
    // Store cleanup function to remove listeners later
    const cleanup = () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('storage', handleStorageChange);
      if (noHandleCompletionPoll) {
        clearInterval(noHandleCompletionPoll);
        noHandleCompletionPoll = null;
      }
      if (noHandleFocusListener) {
        window.removeEventListener('focus', noHandleFocusListener);
        noHandleFocusListener = null;
      }
    };
    
    // Add global message listener (will catch ALL postMessages)
    // Use capture phase to catch messages early
    window.addEventListener('message', handleMessage, true);
    window.addEventListener('storage', handleStorageChange, false);
    
 
    
    // Cleanup after 5 minutes
    setTimeout(cleanup, 5 * 60 * 1000);
    
    
    // Helper function to process auth success from data object
    const processAuthSuccessFromData = (authData: any) => {
      try {
        
        
        localStorage.removeItem("accessbit-userinfo");
        localStorage.removeItem("explicitly_logged_out");
        localStorage.removeItem("siteInfo");
        
        const customDomain = resolveCustomDomainFromSiteInfo({ shortName: authData.shortName });

        if (authData.sessionToken) {
          setInMemorySessionToken(authData.sessionToken);
          
        }

        
        const userData: StoredUserInfo = {
        // sessionToken is kept only in memory; do not persist
          firstName: authData.firstName || '',
        
          siteId: authData.siteId || '',
          customDomain: customDomain,
          siteInfo: {
            siteId: authData.siteId || '',
            siteName: authData.siteName || '',
            shortName: authData.shortName || ''
            // email removed from siteInfo
          }
        };
        
        
        
      
        localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
        localStorage.removeItem("explicitly_logged_out");
        
        // Clear React Query cache and update with new data
        queryClient.clear();
        queryClient.setQueryData<AuthState>(["auth"], {
          user: {
            firstName: authData.firstName || '',
            email: authData.email || '',
            siteId: authData.siteId || ''
          },
        });
        
        
        // Dispatch custom event immediately after localStorage is set
        dispatchAuthSuccess(userData);
 
        
      } catch (error) {
       
      }
    };
    
    // Set a timeout to clear intervals after 5 minutes
    setTimeout(() => {
      clearInterval(checkPopupClosed);
      
    }, 5 * 60 * 1000); // 5 minutes
  };

  // Function to check if user is authenticated for current site
  const isAuthenticatedForCurrentSite = async (): Promise<boolean> => {
    try {
     
      // Check if user has basic authentication
      if (!authState?.user?.email) {
        return false;
      }

      // Get current site info from Webflow
      const currentSiteInfo = await webflow.getSiteInfo();
      
      if (!currentSiteInfo?.siteId) {
        return false;
      }

      // Check if user is authenticated for this specific site
      const storedSiteId = authState.user.siteId;
      const currentSiteId = currentSiteInfo.siteId;
      const isMatch = storedSiteId === currentSiteId;
      
    
      
      return isMatch;
    } catch (error) {
      return false;
    }
  };

  // Function to make authenticated API requests with bearer token
  const makeAuthenticatedRequest = async (url: string, options: RequestInit = {}) => {
    assertTrustedWorkerUrl(url);

    const executeRequest = async (token: string) => {
      const headers = new Headers(options.headers as HeadersInit | undefined);
      if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
      }
      headers.set('Authorization', `Bearer ${token}`);

      return fetch(url, {
        ...options,
        headers,
      });
    };

    let sessionToken = await getValidSessionToken();
    let response = await executeRequest(sessionToken);

    if (response.status === 401) {
      clearInMemorySessionToken();
      sessionToken = await refreshSessionToken();
      response = await executeRequest(sessionToken);
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API request failed: ${response.status} - ${errorData.error || 'Unknown error'}`);
    }

    const text = await response.text();
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  // Function to publish accessibility settings and customizations
  const publishSettings = async (customizationData: any, accessibilityProfiles: any) => {
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
      
    try {
      // Get user email from auth state
      let userEmail = authState?.user?.email;
      
      if (!userEmail) {
        const storedUser = localStorage.getItem("accessbit-userinfo");
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          userEmail = userData.email;
        }
      }
        

      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo?.siteId) {
        throw new Error('No site information available');
      }

      // Ensure customization data has the correct structure for the widget
      const publishData = {
        customization: {
          // Trigger button customization
          triggerButtonColor: customizationData?.triggerButtonColor || '#007bff',
          triggerButtonShape: customizationData?.triggerButtonShape || 'Circle',
          triggerButtonSize: customizationData?.triggerButtonSize || 'Medium',
          triggerHorizontalPosition: customizationData?.triggerHorizontalPosition || 'Right',
          triggerVerticalPosition: customizationData?.triggerVerticalPosition || 'Bottom',
          triggerHorizontalOffset: customizationData?.triggerHorizontalOffset || '0px',
          triggerVerticalOffset: customizationData?.triggerVerticalOffset || '3px',
          hideTriggerButton: customizationData?.hideTriggerButton || 'No',
          
          // Interface customization
          interfaceLeadColor: customizationData?.interfaceLeadColor || '#FFFFFF',
          interfacePosition: customizationData?.interfacePosition || 'Left',
          interfaceFooterContent: customizationData?.interfaceFooterContent || '',
          accessibilityStatementLink: customizationData?.accessibilityStatementLink || '',
          
          // Icon customization
          selectedIcon: customizationData?.selectedIcon || 'accessibility',
          selectedIconName: customizationData?.selectedIconName || 'Accessibility',
          
          // Mobile customization
          showOnMobile: customizationData?.showOnMobile || 'Show',
          mobileTriggerHorizontalPosition: customizationData?.mobileTriggerHorizontalPosition || 'Left',
          mobileTriggerVerticalPosition: customizationData?.mobileTriggerVerticalPosition || 'Bottom',
          mobileTriggerSize: customizationData?.mobileTriggerSize || 'Medium',
          mobileTriggerShape: customizationData?.mobileTriggerShape || 'Round',
          mobileTriggerHorizontalOffset: customizationData?.mobileTriggerHorizontalOffset || '3',
          mobileTriggerVerticalOffset: customizationData?.mobileTriggerVerticalOffset || '3'
        },
        accessibilityProfiles: accessibilityProfiles,
        customDomain: null,
        publishedAt: new Date().toISOString(),
      };

      

      const result = await makeAuthenticatedRequest(workerUrl(`/api/accessibility/publish?siteId=${siteInfo.siteId}`), {
        method: 'POST',
        body: JSON.stringify(publishData),
      });

      
      return result;
    } catch (error) {
      
      throw error;
    }
  };

 // Function to attempt automatic token refresh on app load
  const attemptAutoRefresh = async (): Promise<boolean> => {
    try {
      
      // Check if user was explicitly logged out
      const wasExplicitlyLoggedOut = localStorage.getItem("explicitly_logged_out");
      if (wasExplicitlyLoggedOut) {
        
        return false;
      }
      
      // Get current site info to check if site has changed
      const currentSiteInfo = await webflow.getSiteInfo();
      if (!currentSiteInfo?.siteId) {
        
        return false;
      }
      
      
      
      // Check if there's existing auth data that might be expired or invalid
      const storedUser = localStorage.getItem("accessbit-userinfo");
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          
          // Check if site has changed
          if (userData.siteId && userData.siteId !== currentSiteInfo.siteId) {
            
            
            localStorage.removeItem('accessbit-userinfo');
            localStorage.removeItem('siteInfo');
            
            return false; // Force silent auth for new site
          }
          
          // Email is intentionally removed from localStorage (PII); siteId is the persisted auth marker.
          if (userData.siteId) {
            return true;
          }
        } catch (error) {
          
        }
      } else {
        
      }

      // Attempt silent auth to refresh token with timeout
      
      const silentAuthPromise = attemptSilentAuth();
      const timeoutPromise = new Promise<boolean>((resolve) => {
        setTimeout(() => {
          
          resolve(false);
        }, 3000); // 3 second timeout for silent auth
      });
      
      const result = await Promise.race([silentAuthPromise, timeoutPromise]);
      
      return result;
    } catch (error) {
      
      return false;
    }
  };

// Function to attempt silent authorization without user interaction
  const attemptSilentAuth = async (): Promise<boolean> => {
    try {
      // Get site info from Webflow (Designer Extension API - allowed)
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo || !siteInfo.siteId) {
        return false;
      }
      

      const { response, data } = await requestAuthToken(siteInfo.siteId);
      
      // If 400 or 401, user hasn't completed OAuth yet - this is expected
      if (!response.ok && (response.status === 400 || response.status === 401)) {
        return false;
      }
      
      if (response.ok) {
        
        if (!data.sessionToken) {
          throw new Error('No session token received from server');
        }

        setInMemorySessionToken(data.sessionToken);

       
        const userData = {
          firstName: data.firstName || 'User',
          siteId: siteInfo.siteId,
          siteInfo: {
            siteId: siteInfo.siteId,
            siteName: siteInfo.siteName,
            shortName: siteInfo.shortName
          }
        };

        const customDomain = resolveCustomDomainFromSiteInfo(siteInfo as any);
        if (customDomain) {
          (userData as any).customDomain = customDomain;
        }

        localStorage.setItem('accessbit-userinfo', JSON.stringify(userData));
        localStorage.removeItem('explicitly_logged_out');

        // Update React Query cache (in-memory / UI state); do not persist PII beyond this client.
        queryClient.setQueryData<AuthState>(["auth"], {
          user: {
            firstName: data.firstName || 'User',
            email: data.email || '',
            siteId: siteInfo.siteId
          },
        });

        return true;
      }
      return false;
      
    } catch (error) {
      
      return false;
    }
  };


  // Function to connect custom domain to site
  const connectCustomDomain = async (domain: string) => {
    try {
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo?.siteId) {
        throw new Error('No site information available');
      }

      const domainData = {
        siteId: siteInfo.siteId,
        customDomain: domain,
        connectedAt: new Date().toISOString(),
      };

      const result = await makeAuthenticatedRequest(workerUrl("/api/accessibility/domain"), {
        method: 'POST',
        body: JSON.stringify(domainData),
      });

      return result;
    } catch (error) {

      throw error;
    }
  };

  // Function to check if published data exists for current user
  const checkPublishedDataExists = async (): Promise<boolean> => {
    try {

      
      // Get siteId from Webflow
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo?.siteId) {

        return false;
      }

      const result = await getPublishedSettings();
      

      
      // If we get here without error, published data exists
      if (result && (result.customization || result.accessibilityProfiles)) {
       
        return true;
      } else {
        
        return false;
      }
    } catch (error) {
     
      return false;
    }
  };

  // Function to get published accessibility settings
  const getPublishedSettings = async () => {
    try {
      // Get siteId from Webflow
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo?.siteId) {
        throw new Error('No site information available');
      }

      const result = await makeAuthenticatedRequest(workerUrl(`/api/accessibility/settings?siteId=${siteInfo.siteId}`), {
        method: 'GET',
      });

      return result;
    } catch (error) {

      throw error;
    }
  };

 
  const registerAccessibilityScript = async () => {
    try {
      // Get siteId from Webflow
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo?.siteId) {
        throw new Error('No site information available');
      }

      // Call backend worker endpoint which calls Webflow API server-side
      const result = await makeAuthenticatedRequest(
        workerUrl(`/api/accessibility/register-script?siteId=${siteInfo.siteId}`),
        { method: 'POST' }
      );

      return result;
    } catch (error) {
     
      throw error;
    }
  };


  const applyAccessibilityScript = async (params: {
    targetType: 'site' | 'page';
    scriptId: string;
    location: 'header' | 'footer';
    version: string;
  }) => {
    try {
      // Get siteId from Webflow
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo?.siteId) {
        throw new Error('No site information available');
      }

      // Call backend worker endpoint which calls Webflow API server-side
      const result = await makeAuthenticatedRequest(
        workerUrl(`/api/accessibility/apply-script?siteId=${siteInfo.siteId}`),
        {
          method: 'POST',
          body: JSON.stringify(params),
        }
      );

      return result;
    } catch (error) {
  
      throw error;
    }
  };

  const getSessionToken = async () => {
    return getValidSessionToken();
  };

  return {
    user: authState?.user || { firstName: "", email: "" },
    
    isAuthLoading,
    logout,
    openAuthScreen,
    isAuthenticatedForCurrentSite,
    makeAuthenticatedRequest,
    publishSettings,
    connectCustomDomain,
    getPublishedSettings,
    checkPublishedDataExists,
    registerAccessibilityScript,
    applyAccessibilityScript,
    attemptSilentAuth,
    attemptAutoRefresh,
    getSessionToken,
  };
}

