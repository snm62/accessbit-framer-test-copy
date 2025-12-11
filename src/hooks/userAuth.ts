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
    const idToken = await webflow.getIdToken();
    if (!idToken) {
      throw new Error('Failed to get ID token from Webflow');
    }

    const siteInfo = await webflow.getSiteInfo();
    if (!siteInfo?.siteId) {
      throw new Error('No site information available');
    }

    const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken, siteId: siteInfo.siteId }),
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
 *
 * Authentication Flow:
 * 1. User initiates auth -> exchangeAndVerifyIdToken()
 *    - Gets ID token from Webflow (Designer APIs)
 *    - Exchanges it for a session token via API
 *
 * 2. Token Exchange -> tokenMutation
 *    - Sends ID token to Data Client
 *    - Data Client validates and returns session token
 *    - On success, decodes and stores token + user data
 *
 * 3. Session Management -> useQuery for token validation
 *    - Automatically checks for existing valid session
 *    - Handles token expiration
 *    - Manages loading states
 *
 * @returns {Object} Authentication utilities and state
 * - user: Current user information
 * - sessionToken is managed in memory and never persisted
 * - isAuthLoading: Loading state
 * - exchangeAndVerifyIdToken: Exchange ID token for session token
 * - logout: Clear authentication state
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
        
        // Return valid auth state (no sessionToken stored - use getIdToken() instead)
        const authState = {
          user: {
            firstName: userData.firstName || "",
            email: userData.email || "",
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
    staleTime: Infinity, // Never consider the data stale
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    gcTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  // Mutation for exchanging ID token for session token
  const tokenMutation = useMutation({
    mutationFn: async (idToken: string) => {
      // Get site info from Webflow
      const siteInfo = await webflow.getSiteInfo();

      // Exchange token with backend
      const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: idToken, siteId: siteInfo.siteId }),
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

        const userData = {
          // sessionToken is kept only in memory; do not persist
          firstName: data.firstName,
          email: realEmail,
          siteId: data.siteId, // Store the siteId from server response
          customDomain: customDomain,
          siteInfo: siteInfoWithEmail, // store full site info under the same key
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

  // Function to initiate token exchange process
  const exchangeAndVerifyIdToken = async () => {
    try {
      // Get new ID token from Webflow
      const idToken = await webflow.getIdToken();
      if (!idToken) {
        throw new Error('Failed to get ID token from Webflow');
      }
     
      // Get site info from Webflow
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo || !siteInfo.siteId) {
        throw new Error('Failed to get site info from Webflow');
      }
      
      const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          idToken, 
          siteId: siteInfo.siteId 
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

        const userData = {
        // sessionToken is kept only in memory; do not persist
        firstName: data.firstName,
        email: realEmail,
        siteId: siteInfo.siteId, // Store the siteId
        customDomain: customDomain,
        siteInfo: siteInfoWithEmail, // consolidate site info here
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
    
    const authWindow = window.open(
      `${WORKER_BASE_URL}/api/auth/authorize?state=webflow_designer_${siteInfo.siteId}&siteId=${siteInfo.siteId}`,
      "_blank",
      "width=600,height=600"
    );

    if (!authWindow) {
      return;
    }
    
    // Monitor popup window for completion and URL changes
    const checkPopupClosed = setInterval(() => {
      if (authWindow.closed) {
        clearInterval(checkPopupClosed);
        
        // Check for auth success when popup closes
        const url = new URL(window.location.href);
        const authSuccess = url.searchParams.get('auth_success');
        
        if (authSuccess === 'true') {
          
          processAuthSuccess(url);
        }
      }
    }, 1000);
    
    // Listen for postMessage from popup
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'oauth-success') {
        
        clearInterval(checkPopupClosed);
        clearInterval(checkUrlChange);
        
        // Process the auth success with the data from the popup
        const authData = event.data.data;
        processAuthSuccessFromData(authData);
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
    
    window.addEventListener('message', handleMessage);
    window.addEventListener('storage', handleStorageChange);
    
    // Also monitor for URL changes in the main window (in case popup redirects back)
    const checkUrlChange = setInterval(() => {
      const url = new URL(window.location.href);
      const authSuccess = url.searchParams.get('auth_success');
      
      if (authSuccess === 'true') {
        clearInterval(checkUrlChange);
        clearInterval(checkPopupClosed);
        
        // Process auth success using helper function
        processAuthSuccess(url);
      }
    }, 500);
    
    // Check immediately for auth success (in case popup already completed)
    const checkImmediateAuth = () => {
      try {
        const url = new URL(window.location.href);
        const authSuccess = url.searchParams.get('auth_success');
        
        if (authSuccess === 'true') {
          
          // Clear intervals since we found auth success
          clearInterval(checkUrlChange);
          clearInterval(checkPopupClosed);
          
          // Process auth success (same logic as above)
          processAuthSuccess(url);
        }
      } catch (error) {
        
      }
    };
    
    // Helper function to process auth success
    const processAuthSuccess = (url: URL) => {
      try {
        
        
        localStorage.removeItem("accessbit-userinfo");
        localStorage.removeItem("accessbit-userinfo");
        localStorage.removeItem("explicitly_logged_out");
        localStorage.removeItem("siteInfo");
        
        // Get auth data from URL parameters
        const sessionToken = url.searchParams.get('sessionToken');
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

        if (sessionToken) {
          setInMemorySessionToken(sessionToken);
        }

        // Store the user data from the OAuth popup (no sessionToken - use getIdToken() instead)
        const userData = {
          // sessionToken is kept only in memory; do not persist
          firstName: firstName,
          email: email || '',
          siteId: siteId,
          customDomain: customDomain,
          siteInfo: {
            siteId: siteId,
            siteName: siteName,
            shortName: shortName,
            email: email || ''
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
          firstName: authData.firstName,
          email: authData.email || '',
          siteId: authData.siteId,
          customDomain: customDomain,
          siteInfo: {
            siteId: authData.siteId,
            siteName: authData.siteName,
            shortName: authData.shortName,
            email: authData.email || ''
          }
        };
        
        
        
      
        localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
        localStorage.removeItem("explicitly_logged_out");
        
        // Clear React Query cache and update with new data
        queryClient.clear();
        queryClient.setQueryData<AuthState>(["auth"], {
          user: {
            firstName: authData.firstName,
            email: authData.email || '',
            siteId: authData.siteId
          },
        });
        
        
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
          
          // Check if user data exists (no sessionToken check needed - use getIdToken() instead)
          if (userData.email && userData.siteId) {
            return true; // User data exists, can use getIdToken()
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
      
     
      
      const idToken = await webflow.getIdToken();
      
      
      if (idToken) {
        // Decode and log the ID token payload for debugging
        try {
          const tokenParts = idToken.split('.');
          if (tokenParts.length === 3) {
            const payload = JSON.parse(atob(tokenParts[1]));
            
            
            
            
          }
        } catch (error) {
          
        }
      }
      
      if (!idToken) {
        
        
        return false;
      }
      
      
      
      // Get site info from Webflow
      
      const siteInfo = await webflow.getSiteInfo();
      if (!siteInfo || !siteInfo.siteId) {
        
        return false;
      }
      

      const currentStoredData = localStorage.getItem('accessbit-userinfo');
     
      
      
      
      // Try the token endpoint first (it might work now)
      
      const response = await fetch(`${WORKER_BASE_URL}/api/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idToken,
          siteId: siteInfo.siteId
        }),
      });
      
      
      if (response.ok) {
        
        const data = await response.json();
        
        
        
        if (!data.sessionToken) {
          throw new Error('No session token received from server');
        }

        setInMemorySessionToken(data.sessionToken);

        if (data.firstName || data.email) {
       
          const userData = {
            firstName: data.firstName || 'User',
            email: data.email || '',
            siteId: siteInfo.siteId,
            siteInfo: {
              siteId: siteInfo.siteId,
              siteName: siteInfo.siteName,
              shortName: siteInfo.shortName,
              email: data.email || ''
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
      console.error('Register script error:', error);
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
      console.error('Apply script error:', error);
      throw error;
    }
  };

  const getSessionToken = async () => {
    return getValidSessionToken();
  };

  // Expose debug helpers to window for easy inspection in browser console
  if (typeof window !== 'undefined') {
    (window as any).__accessbitDebug = {
      getSessionToken: () => inMemorySessionToken,
      getSessionTokenExpiry: () => inMemorySessionTokenExpiry,
      hasUsableToken: hasUsableSessionToken,
      clearToken: clearInMemorySessionToken,
      refreshToken: refreshSessionToken
    };
  }


  
  return {
    user: authState?.user || { firstName: "", email: "" },
    // sessionToken is managed in memory and exposed via getSessionToken
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
