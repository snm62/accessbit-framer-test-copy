import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CustomizationScreen from "./components/CustomizationScreen";
import PublishScreen from "./components/PublishScreen";
import { useAuth} from "./hooks/userAuth";
import { getAuthStorageItem,setAuthStorageItem,removeAuthStorageItem } from "./util/authStorage";
import { WORKER_BASE_URL } from './util/constants';
import { WebflowAPI } from './types/webflowtypes';

// Webflow API is available globally in the Webflow Designer environment
declare const webflow: WebflowAPI;

type AppState = 'welcome' | 'customization' | 'publish';
const App: React.FC = () => {
 
  const [currentScreen, setCurrentScreen] = useState<AppState>('welcome');
  const [customizationData, setCustomizationData] = useState<any>(null);
  const [isLoadingExistingData, setIsLoadingExistingData] = useState(false);
 
  const { openAuthScreen, getPublishedSettings, attemptAutoRefresh, isAuthLoading, attemptSilentAuth, checkPublishedDataExists, getSessionToken, makeAuthenticatedRequest, user } = useAuth();
 
  const [isAppInitializing, setIsAppInitializing] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Only run when user is authenticated
    if (!isAuthenticated || isAuthLoading) return;

    const detectAppInstallation = async () => {
      try {
        const userData = localStorage.getItem('accessbit-userinfo');
        if (!userData) return;

        const parsed = JSON.parse(userData);
        const { siteId, siteInfo } = parsed;
        
        // SECURITY FIX: Email removed from localStorage (PII)
        // Only siteId is required, email is retrieved from session token when needed
        if (!siteId) return;

        // Check if installation already exists on server
        // Try to get the installation record directly from KV
        let installationExists = false;
        try {
          const checkData = await makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/check-installation?siteId=${encodeURIComponent(siteId)}`, {
            method: 'GET'
          });
          installationExists = checkData?.exists === true;
        } catch (checkError: any) {
          // If endpoint doesn't exist or returns 404, assume first install
          if (checkError?.message?.includes('404') || checkError?.message?.includes('not found')) {
            installationExists = false;
          } else {
            // For other errors, assume first install
            installationExists = false;
          }
        }
        
        // Only send email on first install
        // If installation already exists, skip webhook
        if (!installationExists) {
          
          
          // Construct staging URL from shortName if available
          const shortName = siteInfo?.shortName || null;
          const stagingUrl = shortName ? `https://${shortName}.webflow.io` : null;
          
          // SECURITY FIX: Get email from auth state (session token) instead of localStorage
          // Email is PII and should not be stored in localStorage
          const userEmail = user?.email || ''; // Get from auth state (decoded from session token)
          
          const installationPayload = {
            siteId: siteId,
            userId: parsed.userId || siteId, // Use siteId as fallback if userId not available
            userEmail: userEmail, // Get from auth state, not localStorage
            siteName: siteInfo?.siteName || 'Unknown Site',
            installationData: {
              timestamp: new Date().toISOString(),
              source: 'webflow_app',
              firstName: parsed.firstName || 'User',
              email: userEmail, // Get from auth state, not localStorage
              customDomain: parsed.customDomain || null,
              stagingUrl: stagingUrl, // Include staging URL if available
              exp: parsed.exp || null,
              siteInfo: siteInfo || null,
             
              siteId: siteInfo?.siteId || siteId,
              siteName: siteInfo?.siteName || 'Unknown Site',
              shortName: shortName
            }
          };
          
          
          
          // Send installation data to worker
          try {
            await makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/webflow/app-installed`, {
              method: 'POST',
              body: JSON.stringify(installationPayload)
            });
          } catch (error) {
            // Silent fail - installation data send failed
          }
        } else {
         
        }
      } catch (error) {
    
      }
    };
    
    // Run installation detection after authentication is complete
    const timer = setTimeout(detectAppInstallation, 1000);
    return () => clearTimeout(timer);
  }, [isAuthenticated, isAuthLoading]);

  // Load existing customization data when user becomes authenticated
  useEffect(() => {
    if (isAuthenticated && !isAuthLoading) {
      loadExistingCustomizationData();
      // Ensure the hosted script is registered and applied on app launch
      (async () => {
        try {
          const stored = localStorage.getItem('accessbit-userinfo');
          const siteId = stored ? (JSON.parse(stored)?.siteId || '') : '';
          if (!siteId) return;
          
          const base = WORKER_BASE_URL.replace(/\/+$/,'');
          
          try {
            await makeAuthenticatedRequest(`${base}/api/accessibility/register-script?siteId=${encodeURIComponent(siteId)}`, {
              method: 'POST'
            });
          } catch (error) {
            // Silent fail; user can use Publish to repair
          }
          
          try {
            await makeAuthenticatedRequest(`${base}/api/accessibility/apply-script?siteId=${encodeURIComponent(siteId)}`, {
              method: 'POST',
              body: JSON.stringify({ targetType: 'site', scriptId: 'accessbit', location: 'header', version: '1.0.0' })
            });
          } catch (error) {
            // Silent fail; user can use Publish to repair
          }
        } catch (e) {
          // Silent fail; user can use Publish to repair
        }
      })();
    }
  }, [isAuthenticated, isAuthLoading]);

  const loadExistingCustomizationData = async () => {
    if (!isAuthenticated) return;
    setIsLoadingExistingData(true);
    try {
   
      // Add a small delay to ensure authentication is fully complete
      await new Promise(resolve => setTimeout(resolve, 500));
      const existingSettings = await getPublishedSettings();

      if (existingSettings && existingSettings.customization) {
        setCustomizationData(existingSettings.customization);

      } else {

      }
    } catch (error) {

      // Don't show error to user, just continue with empty data
    } finally {
      setIsLoadingExistingData(false);
    }
  };
  useEffect(() => {
    // Prevent multiple initializations
    if (hasInitialized) {

      return;
    }
    const initializeApp = async () => {
      const startTime = performance.now();

      setHasInitialized(true);
      setIsAppInitializing(false);
      setIsCheckingAuth(true);
      

      try {
        // Try fresh background authentication (silent) with timeout
        const authPromise = attemptAutoRefresh();
        const timeoutPromise = new Promise<boolean>((resolve) => {
          setTimeout(() => {
           
            resolve(false);
          }, 5000); // 5 second timeout
        });
        
        const refreshSuccess = await Promise.race([authPromise, timeoutPromise]);
        
        if (refreshSuccess) {
         
          setIsAuthenticated(true);
          
          
          const storedData = localStorage.getItem('accessbit-userinfo');

          if (storedData) {
            const parsedData = JSON.parse(storedData);
        
          }
          
          // Now check if published data exists for this user
          setTimeout(async () => {
            try {
             
              const hasPublishedData = await checkPublishedDataExists();
              
              if (hasPublishedData) {

                const existingData = await loadExistingCustomizationData();

              } else {

              }
            } catch (error) {

            }
          }, 500); // Small delay to ensure auth state is updated
          
          // Stay on welcome screen for authenticated users instead of auto-redirecting
          setCurrentScreen('welcome');
        } else {

          setIsAuthenticated(false);
          // Show welcome screen with authorize button as fallback
          setCurrentScreen('welcome');
        }
      } catch (error) {

        setIsAuthenticated(false);
        setCurrentScreen('welcome');
      } finally {
        setIsCheckingAuth(false);
      }
    };
    initializeApp();
  }, [hasInitialized]);
  const handleAuthorize = async () => {
   
    try {
      await openAuthScreen();
   
      
      // Listen for auth success to update state
      const handleAuthSuccess = () => {
  
        // Check localStorage to verify auth data was saved
        const userData = localStorage.getItem('accessbit-userinfo');
        if (userData) {
          try {
            const parsed = JSON.parse(userData);
           
            if (parsed.siteId) {
             
              setIsAuthenticated(true);
              // Force React Query to refetch auth state
              window.dispatchEvent(new Event('storage'));
            } else {
           
            }
          } catch (e) {
      
          }
        } else {
       
        }
      };
      
      // Set up listeners BEFORE auth completes (in case it's fast)
      window.addEventListener('accessbit-auth-success', handleAuthSuccess, false);
     
      
      // Also listen for storage events as fallback
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'accessbit-userinfo' && e.newValue) {
        
          handleAuthSuccess();
        }
      };
      window.addEventListener('storage', handleStorageChange, false);
      
      
      // Fallback: Poll localStorage every second for 2 minutes
      let pollCount = 0;
      const maxPolls = 120; // 2 minutes
      const pollInterval = setInterval(() => {
        pollCount++;
        const stored = localStorage.getItem('accessbit-userinfo');
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (parsed.siteId) {
             
              clearInterval(pollInterval);
              handleAuthSuccess();
            }
          } catch (e) {
            // Ignore
          }
        }
        if (pollCount >= maxPolls) {
       
          clearInterval(pollInterval);
        }
      }, 1000);
      
      // Cleanup listeners after 5 minutes
      const cleanup = () => {
        window.removeEventListener('accessbit-auth-success', handleAuthSuccess);
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(pollInterval);
        
      };
      setTimeout(cleanup, 5 * 60 * 1000);
     
    } catch (error: any) {

      
    }
  };
  // (kept) data loader above handles auth + loading state
  const handleNeedHelp = () => {

    // Add your help logic here
  };
  const handleWelcomeScreen = () => {

    setCurrentScreen('customization');
  };
  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };
  const handleBackToCustomization = () => {
    
    setCurrentScreen('customization');
  };
  const handleNextToPublish = (data: any) => {
    setCustomizationData(data);
    setCurrentScreen('publish');
  };
 
  return (
    <div>
      {currentScreen === 'welcome' ? (
        <WelcomeScreen
          onAuthorize={handleAuthorize}
          onNeedHelp={handleNeedHelp}
          authenticated={isAuthenticated}
          handleWelcomeScreen={handleWelcomeScreen}
        />
      ) : currentScreen === 'customization' ? (
        <CustomizationScreen
          onBack={handleBackToWelcome}
          onNext={handleNextToPublish}
          existingCustomizationData={customizationData}
          isLoadingExistingData={isLoadingExistingData}
        />
      ) : (
        <PublishScreen
          onBack={handleBackToCustomization}
          customizationData={customizationData || {}}
        />
      )}
    </div>
  );
};
export default App;
