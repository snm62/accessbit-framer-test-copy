import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { User, DecodedToken } from "../types/types";
import { WebflowAPI } from "../types/webflowtypes";
import { WORKER_BASE_URL } from '../util/constants';

// Use the real Webflow API from the global scope,
declare const webflow: WebflowAPI;
let inMemorySessionToken: string | null = null;
let inMemorySessionTokenExpiry: number | null = null;
let sessionTokenRefreshPromise: Promise<string> | null = null;

const SESSION_TOKEN_BUFFER_MS = 60 * 1000; // refresh 1 minute before expiry

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

const refreshSessionToken = async (): Promise<string> => {
  if (sessionTokenRefreshPromise) {
    return sessionTokenRefreshPromise;
  }

  sessionTokenRefreshPromise = (async () => {
    
    const siteInfo = await webflow.getSiteInfo();
    if (!siteInfo?.siteId) {
      throw new Error('No site information available');
    }

    const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteId: siteInfo.siteId }),
    });

    const data = await response.json().catch(() => ({}));

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
  const isExchangingToken = { current: false };

  // Query for managing auth state and token validation
  const { data: authState, isLoading: isAuthLoading } = useQuery<AuthState>({
    queryKey: ["auth"],
    queryFn: async () => {
      const storedUser = localStorage.getItem("accessbit-userinfo") || localStorage.getItem("accessbit-userinfo");
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

  // Mutation for requesting session token from backend
  const tokenMutation = useMutation({
    mutationFn: async () => {
      // Get site info from Webflow (Designer Extension API - allowed)
      const siteInfo = await webflow.getSiteInfo();

      const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteId: siteInfo.siteId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to exchange token: ${JSON.stringify(errorData)}`
        );
      }

      const data = await response.json();
      if (!data.sessionToken) {
        throw new Error("No session token received");
      }

      // Return both auth data and site info
      return { ...data, siteInfo };
    },
    onSuccess: (data) => {
      try {
        // Decode the new token
       const decodedToken = jwtDecode(data.sessionToken) as DecodedToken;
       // Worker now sends real email, so use it directly
       const realEmail = data.email || '';
        const siteInfoWithEmail = data.siteInfo ? { ...data.siteInfo, email: realEmail } : undefined;
        // Get custom domain from Webflow site data
        let customDomain: string | undefined;
        
        // Get production domain from domains array (custom domain)
        if (data.siteInfo?.domains && Array.isArray(data.siteInfo.domains)) {
          const productionDomain = data.siteInfo.domains.find(
            (d: any) => d.stage === 'production' || d.default === true
          );
          if (productionDomain?.url) {
            customDomain = `https://${productionDomain.url}`;
          }
        }
        
        // Fallback to staging domain if no production domain found
        if (!customDomain && data.siteInfo?.shortName) {
          customDomain = `https://${data.siteInfo.shortName}.webflow.io`;
        }

        setInMemorySessionToken(data.sessionToken);

        // SECURITY FIX: Remove email (PII) from localStorage per Webflow Marketplace requirements
        // Email should be retrieved from session token or API when needed, not stored in localStorage
        const userData = {
          // sessionToken is kept only in memory; do not persist
          firstName: data.firstName,
          // email removed - PII should not be stored in localStorage
          siteId: data.siteId, // Store the siteId from server response
          customDomain: customDomain,
          // siteInfo stored without email
          siteInfo: data.siteInfo ? { ...data.siteInfo } : undefined, // Remove email from siteInfo
        };

                 
        localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
        localStorage.removeItem("explicitly_logged_out");

        // No separate siteInfo key anymore

        // Directly update the query data instead of invalidating
        queryClient.setQueryData<AuthState>(["auth"], {
          user: {
            firstName: decodedToken.user.firstName,
            email: decodedToken.user.email,
            siteId: data.siteId, // Include siteId in user data
          },
        });
      } catch (error) {
      }
    },
  });

  // Function to request session token from backend
  // SECURITY: idToken is NOT sent to worker - it's only used for client-side identity verification
  // Worker uses stored access_token from OAuth to verify identity and make Webflow API calls
  const exchangeAndVerifyIdToken = async () => {
    try {
      // Get fresh ID token for client-side identity verification (short-lived, ~15 minutes)
      // This is used locally to verify the user is authenticated, but NOT sent to worker
      const idToken = await webflow.getIdToken();
      if (!idToken) {
        throw new Error('Failed to get ID token from Webflow');
      }
      
      // Get site info from Webflow (Designer Extension API - allowed)
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo || !siteInfo.siteId) {
        throw new Error('Failed to get site info from Webflow');
      }
      
      // SECURITY: Do NOT send idToken to worker
      // Worker will use stored access_token from OAuth to verify identity and make API calls
      const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          siteId: siteInfo.siteId
          // idToken is NOT sent - worker uses stored access_token from OAuth
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Token exchange failed: ${data.error || 'Unknown error'}`);
      }

      if (!data.sessionToken) {
        throw new Error('No session token received from server');
      }

      setInMemorySessionToken(data.sessionToken);
      
      // Worker now sends real email, so use it directly
      const realEmail = data.email || '';
      const siteInfoWithEmail = siteInfo ? { ...siteInfo, email: realEmail } : undefined;
      
      // Get custom domain from Webflow site data
      let customDomain: string | undefined;
      // Prefer production domain from siteInfo.domains if present
      try {
        const siAny: any = siteInfo as any;
        if (siAny?.domains && Array.isArray(siAny.domains)) {
          const productionDomain = siAny.domains.find(
            (d: any) => d?.stage === 'production' || d?.default === true || d?.primary === true
          );
          if (productionDomain?.url) {
            customDomain = `https://${productionDomain.url}`;
          }
        }
      } catch {}
      
      // Fallback to staging domain via shortName
      if (!customDomain && siteInfo?.shortName) {
        customDomain = `https://${siteInfo.shortName}.webflow.io`;
      }

        // SECURITY FIX: Remove email (PII) from localStorage per Webflow Marketplace requirements
        const userData = {
        // sessionToken is kept only in memory; do not persist
          firstName: data.firstName,
          // email removed - PII should not be stored in localStorage
          siteId: siteInfo.siteId, // Store the siteId
          customDomain: customDomain,
          // siteInfo stored without email
          siteInfo: siteInfo ? { ...siteInfo } : undefined, // Remove email from siteInfo
      };

            localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
      localStorage.removeItem("explicitly_logged_out");

      

      // Update React Query cache
      queryClient.setQueryData<AuthState>(["auth"], {
        user: {
          firstName: data.firstName,
          email: data.email,
          siteId: siteInfo.siteId
        },
      });

      return data;

    } catch (error) {
      localStorage.removeItem("accessbit-userinfo");
      localStorage.removeItem("accessbit-userinfo");
      throw error;
    }
  };

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
    
   
    
    const authUrl = `${WORKER_BASE_URL}/api/auth/authorize?state=webflow_designer_${siteInfo.siteId}&siteId=${siteInfo.siteId}`;
 
    
    // Try to open popup
    let authWindow: Window | null = null;
    try {
      authWindow = window.open(
        authUrl,
        "accessbit_auth",
        "width=600,height=700,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=yes"
      );
    } catch (e) {
     
      return;
    }

    if (!authWindow || authWindow.closed) {
      return;
    }
    
   
    
    // Check if popup navigates away from about:blank
    let checkCount = 0;
    const checkNavigation = setInterval(() => {
      checkCount++;
      try {
        if (authWindow && !authWindow.closed) {
          const popupUrl = authWindow.location.href;
          if (popupUrl && popupUrl !== 'about:blank' && !popupUrl.startsWith('about:')) {
    
            clearInterval(checkNavigation);
          } else if (checkCount > 10) {
          
            clearInterval(checkNavigation);
            if (authWindow && !authWindow.closed) {
              authWindow.close();
            }
           
          }
        } else {
          clearInterval(checkNavigation);
        }
      } catch (e) {
        // Cross-origin error is expected once popup navigates to different domain
        if (checkCount > 5) {
        
          clearInterval(checkNavigation);
        }
      }
    }, 1000);
    
    // Monitor popup window for completion and URL changes
    const checkPopupClosed = setInterval(async () => {
      if (authWindow.closed) {
        
        clearInterval(checkPopupClosed);
        
        // Check for auth success when popup closes
        const url = new URL(window.location.href);
        const authSuccess = url.searchParams.get('auth_success');
        
        
        
        if (authSuccess === 'true') {
         
          await processAuthSuccess(url);
        } else {
          // Check localStorage as fallback when popup closes
       
          const stored = localStorage.getItem('accessbit-userinfo');
          
          if (stored) {
            try {
              const parsed = JSON.parse(stored);
              
              if (parsed.siteId) {
               
                // Trigger success
                window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail: parsed }));
              } else {
            
              }
            } catch (e) {
              
            }
          } else {
           
          }
        }
      } else {
        // Popup still open - try to check its URL (may fail due to cross-origin)
        try {
          if (authWindow.location) {
            const popupUrl = authWindow.location.href;
           
            if (popupUrl.includes('auth-success')) {
             
            } else if (popupUrl.includes('oauth/authorize')) {
              
            } else if (popupUrl === 'about:blank' || !popupUrl) {
             
            } else {
           
            }
          }
        } catch (e) {
          // Expected - can't access popup URL due to cross-origin
          // This is normal when popup is on different domain
          if (e.message && e.message.includes('cross-origin')) {
            // This is expected and normal
          } else {
           
          }
        }
      }
    }, 1000);
    
    // Listen for postMessage from popup
    const handleMessage = (event: MessageEvent) => {
      // Log ALL messages for debugging (will help identify if message is received)
      // SECURITY: Do NOT log sessionToken - it's sensitive
      const safeData = event.data ? { ...event.data } : null;
      if (safeData && safeData.sessionToken) {
        safeData.sessionToken = '[REDACTED]'; // Remove sensitive token from logs
      }
      
      

      
      const allowedOrigin = 'https://app.accessbit.io';
      
      // Normalize origin for comparison (remove trailing slashes, lowercase)
      const normalizeOrigin = (origin: string) => origin.replace(/\/+$/, '').toLowerCase();
      const normalizedEventOrigin = normalizeOrigin(event.origin);
      const normalizedAllowedOrigin = normalizeOrigin(allowedOrigin);
      
      // STRICT validation: event.origin must EXACTLY match our worker domain
      // This is secure because event.origin is set by browser to actual sender origin
      if (normalizedEventOrigin !== normalizedAllowedOrigin) {
       
        return; // REJECT message - do not process
      }
      
      // Additional validation: Ensure origin is exactly our worker domain
      // Double-check to be extra safe
      if (!event.origin || !event.origin.includes('app.accessbit.io')) {
       
        return;
      }
      
      // Only process AUTH_SUCCESS messages
      if (event.data && event.data.type === 'AUTH_SUCCESS') {
       
        clearInterval(checkPopupClosed);
        clearInterval(checkUrlChange);
        
        // Close popup immediately to prevent app UI from loading in it
        try {
          if (authWindow && !authWindow.closed) {
            authWindow.close();
          }
        } catch (e) {
          // Ignore if we can't close the window
        }
        
        // Process the auth success with the data from the popup
        const { sessionToken, user, siteInfo } = event.data;
        
        
        
        // Ensure we have required data - be more lenient with user data
        if (!siteInfo || !siteInfo.siteId) {
         
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
        clearInterval(checkUrlChange);
        
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
    };
    
    // Add global message listener (will catch ALL postMessages)
    // Use capture phase to catch messages early
    window.addEventListener('message', handleMessage, true);
    window.addEventListener('storage', handleStorageChange, false);
    
 
    
    // Also add a direct window.message listener as backup (bubble phase)
    const backupHandler = (event: MessageEvent) => {
      // SECURITY: Redact sessionToken from logs
      const safeData = event.data ? { ...event.data } : null;
      if (safeData && safeData.sessionToken) {
        safeData.sessionToken = '[REDACTED]';
      }
   
      handleMessage(event);
    };
    window.addEventListener('message', backupHandler, false);
   
    
    // Debug: Log all message events (even if not handled)
    const debugHandler = (event: MessageEvent) => {
      if (event.data?.type !== 'AUTH_SUCCESS') {
        // SECURITY: Redact any sensitive data from logs
        const safeData = event.data ? { ...event.data } : null;
        if (safeData && safeData.sessionToken) {
          safeData.sessionToken = '[REDACTED]';
        }
        
      }
    };
    window.addEventListener('message', debugHandler, false);
    
    // Also add a fallback: check localStorage periodically in case postMessage fails
    const checkLocalStorage = setInterval(() => {
      const stored = localStorage.getItem('accessbit-userinfo');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.siteId) {
          
            clearInterval(checkLocalStorage);
            clearInterval(checkPopupClosed);
            clearInterval(checkUrlChange);
            // Trigger the success handler
            window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail: parsed }));
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
    }, 1000);
    
    // Clean up localStorage checker after 2 minutes
    setTimeout(() => clearInterval(checkLocalStorage), 2 * 60 * 1000);
    
    // Cleanup after 5 minutes
    setTimeout(cleanup, 5 * 60 * 1000);
    
    // Also monitor for URL changes in the main window (in case popup redirects back)
    const checkUrlChange = setInterval(async () => {
      const url = new URL(window.location.href);
      const authSuccess = url.searchParams.get('auth_success');
      
      if (authSuccess === 'true') {
        clearInterval(checkUrlChange);
        clearInterval(checkPopupClosed);
        
        // Process auth success using helper function
        await processAuthSuccess(url);
      }
    }, 500);
    
    // Check immediately for auth success (in case popup already completed)
    const checkImmediateAuth = async () => {
      try {
        const url = new URL(window.location.href);
        const authSuccess = url.searchParams.get('auth_success');
        
        if (authSuccess === 'true') {
          
          // Clear intervals since we found auth success
          clearInterval(checkUrlChange);
          clearInterval(checkPopupClosed);
          
          // Process auth success (same logic as above)
          await processAuthSuccess(url);
        }
      } catch (error) {
        
      }
    };
    
    // Helper function to process auth success
    const processAuthSuccess = async (url: URL) => {
      try {
        
        
        localStorage.removeItem("accessbit-userinfo");
        localStorage.removeItem("accessbit-userinfo");
        localStorage.removeItem("explicitly_logged_out");
        localStorage.removeItem("siteInfo");
        
        // Get auth data from URL parameters (sessionToken removed for security - use postMessage instead)
        const firstName = url.searchParams.get('firstName');
        const email = url.searchParams.get('email');
        const siteId = url.searchParams.get('siteId');
        const siteName = url.searchParams.get('siteName');
        const shortName = url.searchParams.get('shortName');
        
        // Get custom domain - will be updated from actual siteInfo if available
        // For now use staging domain as fallback
        let customDomain: string | undefined;
        if (shortName) {
          customDomain = `https://${shortName}.webflow.io`;
        }

        // Get sessionToken via token exchange instead of URL (more secure)
        // This ensures sessionToken never appears in browser history or server logs
        try {
          const sessionToken = await refreshSessionToken();
          if (sessionToken) {
            setInMemorySessionToken(sessionToken);
          }
        } catch (error) {
          // If token exchange fails, continue without sessionToken
          // User may need to re-authenticate
        }

        // SECURITY FIX: Remove email (PII) from localStorage
        // Store the user data from the OAuth popup
        const userData = {
          // sessionToken is kept only in memory; do not persist
          firstName: firstName,
          // email removed - PII should not be stored in localStorage
          siteId: siteId,
          customDomain: customDomain,
          siteInfo: {
            siteId: siteId,
            siteName: siteName,
            shortName: shortName
            // email removed from siteInfo
          }
        };
        
        
        
        
        localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
        localStorage.removeItem("explicitly_logged_out");
        
        // Clear React Query cache and update with new data
        queryClient.clear();
        queryClient.setQueryData<AuthState>(["auth"], {
          user: {
            firstName: firstName,
            email: email || '',
            siteId: siteId
          },
        });
        
        // Dispatch custom event immediately after localStorage is set
        window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail: userData }));
        
        // Clean up URL parameters
        const cleanUrl = new URL(window.location.href);
        cleanUrl.searchParams.delete('auth_success');
        cleanUrl.searchParams.delete('sessionToken');
        cleanUrl.searchParams.delete('firstName');
        cleanUrl.searchParams.delete('email');
        cleanUrl.searchParams.delete('siteId');
        cleanUrl.searchParams.delete('siteName');
        cleanUrl.searchParams.delete('shortName');
        window.history.replaceState({}, '', cleanUrl.toString());
      } catch (error) {
       
      }
    };
    
    // Helper function to process auth success from data object
    const processAuthSuccessFromData = (authData: any) => {
      try {
        
        
        localStorage.removeItem("accessbit-userinfo");
        localStorage.removeItem("explicitly_logged_out");
        localStorage.removeItem("siteInfo");
        
        // Get custom domain - will be updated from actual siteInfo if available
        // For now use staging domain as fallback
        let customDomain: string | undefined;
        if (authData.shortName) {
          customDomain = `https://${authData.shortName}.webflow.io`;
        }

        if (authData.sessionToken) {
          setInMemorySessionToken(authData.sessionToken);
          
        }

        
        const userData = {
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
        const customEvent = new CustomEvent('accessbit-auth-success', { detail: userData });
        window.dispatchEvent(customEvent);
 
        
      } catch (error) {
       
      }
    };
    
    // Check immediately for auth success
    checkImmediateAuth();
    
    // Set a timeout to clear intervals after 5 minutes
    setTimeout(() => {
      clearInterval(checkUrlChange);
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

      

      const result = await makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/publish?siteId=${siteInfo.siteId}`, {
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
      const storedUser = localStorage.getItem("accessbit-userinfo") || localStorage.getItem("accessbit-userinfo");
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          
          // Check if site has changed
          if (userData.siteId && userData.siteId !== currentSiteInfo.siteId) {
            
            
            localStorage.removeItem('accessbit-userinfo');
            localStorage.removeItem('accessbit-userinfo');
            localStorage.removeItem('siteInfo');
            
            return false; // Force silent auth for new site
          }
          
          // Check if user data exists
          if (userData.email && userData.siteId) {
            return true; // User data exists
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
      

      const currentStoredData = localStorage.getItem('accessbit-userinfo');
     
      
      
      const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          siteId: siteInfo.siteId
        }),
      });
      
      // If 400 or 401, user hasn't completed OAuth yet - this is expected
      if (!response.ok && (response.status === 400 || response.status === 401)) {
        return false;
      }
      
      if (response.ok) {
        
        const data = await response.json();
        
        
        
        if (!data.sessionToken) {
          throw new Error('No session token received from server');
        }

        setInMemorySessionToken(data.sessionToken);

        if (data.firstName || data.email) {
       
          // SECURITY FIX: Remove email (PII) from localStorage
          const userData = {
            firstName: data.firstName || 'User',
            // email removed - PII should not be stored in localStorage
            siteId: siteInfo.siteId,
            siteInfo: {
              siteId: siteInfo.siteId,
              siteName: siteInfo.siteName,
              shortName: siteInfo.shortName
              // email removed from siteInfo
            }
          };
          
        
          try {
            let customDomain: string | undefined;
            
            // Prefer production domain from siteInfo.domains if present
            const siAny: any = siteInfo as any;
            if (siAny?.domains && Array.isArray(siAny.domains)) {
              const productionDomain = siAny.domains.find(
                (d: any) => d?.stage === 'production' || d?.default === true || d?.primary === true
              );
              if (productionDomain?.url) {
                customDomain = `https://${productionDomain.url}`;
              }
            }
            // Fallback to staging domain via shortName
            if (!customDomain && siteInfo?.shortName) {
              customDomain = `https://${siteInfo.shortName}.webflow.io`;
            }
            
            if (customDomain) {
              (userData as any).customDomain = customDomain;
            }
          } catch (_err) {
            // Non-fatal: absence of domain data should not block auth
          }
          
          localStorage.setItem('accessbit-userinfo', JSON.stringify(userData));
          localStorage.removeItem('explicitly_logged_out');
          
          // Site info is now included in accessbit-userinfo above
          
          // Update React Query cache
          queryClient.setQueryData<AuthState>(["auth"], {
            user: { 
              firstName: data.firstName, 
              email: data.email, 
              siteId: siteInfo.siteId 
            },
          });
          
          // Verify the data was stored
          const storedData = localStorage.getItem('accessbit-userinfo');
          
          
          return true;
        } else {
          
          return false;
        }
      }
      
      const data = await response.json();
      
      
      
      
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

      const result = await makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/domain`, {
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


      
      const result = await makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/settings?siteId=${siteInfo.siteId}`, {
        method: 'GET',
      });
      

      
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

      const result = await makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/settings?siteId=${siteInfo.siteId}`, {
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
        `${WORKER_BASE_URL}/api/accessibility/register-script?siteId=${siteInfo.siteId}`,
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
        `${WORKER_BASE_URL}/api/accessibility/apply-script?siteId=${siteInfo.siteId}`,
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
    exchangeAndVerifyIdToken,
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

