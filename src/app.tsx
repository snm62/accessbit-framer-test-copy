import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CustomizationScreen from "./components/CustomizationScreen";
import PublishScreen from "./components/PublishScreen";
import { useAuth} from "./hooks/userAuth";
import { workerUrl } from './util/workerRequest';
import { WebflowAPI } from './types/webflowtypes';

// Webflow API is available globally in the Webflow Designer environment
declare const webflow: WebflowAPI;

type AppState = 'welcome' | 'customization' | 'publish';
const App: React.FC = () => {
 
  const [currentScreen, setCurrentScreen] = useState<AppState>('welcome');
  const [customizationData, setCustomizationData] = useState<any>(null);
  const [isLoadingExistingData, setIsLoadingExistingData] = useState(false);
 
  const { openAuthScreen, getPublishedSettings, attemptAutoRefresh, isAuthLoading, makeAuthenticatedRequest, user } = useAuth();
 
  const [isAppInitializing, setIsAppInitializing] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Single source of truth: `userAuth.ts` dispatches this event whenever auth completes
  useEffect(() => {
    const onAuthSuccess = () => {
      try {
        const raw = localStorage.getItem('accessbit-userinfo');
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (parsed?.siteId) {
          setIsAuthenticated(true);
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener('accessbit-auth-success', onAuthSuccess as EventListener, false);
    return () => window.removeEventListener('accessbit-auth-success', onAuthSuccess as EventListener);
  }, []);

  useEffect(() => {
    if (!isAuthenticated || isAuthLoading) return;

    let cancelled = false;

    const run = async () => {
      // Run installation detection after authentication is complete
      setTimeout(async () => {
        if (cancelled) return;
        try {
          const userData = localStorage.getItem('accessbit-userinfo');
          if (!userData) return;

          const parsed = JSON.parse(userData);
          const { siteId, siteInfo } = parsed;
          if (!siteId) return;

          let installationExists = false;
          try {
            const checkData = await makeAuthenticatedRequest(
              workerUrl(`/api/accessibility/check-installation?siteId=${encodeURIComponent(siteId)}`),
              { method: 'GET' }
            );
            installationExists = checkData?.exists === true;
          } catch {
            installationExists = false;
          }

          if (!installationExists) {
            const userEmail = user?.email || '';

            // NOTE: staging/preview URL is derived server-side by the worker from
            // the Webflow API; the client no longer constructs or sends any
            // Webflow preview URL to avoid leaking staging references in the bundle.
            const installationPayload = {
              siteId: siteId,
              userId: parsed.userId || siteId,
              userEmail: userEmail,
              siteName: siteInfo?.siteName || 'Unknown Site',
              installationData: {
                timestamp: new Date().toISOString(),
                source: 'webflow_app',
                firstName: parsed.firstName || 'User',
                email: userEmail,
                customDomain: parsed.customDomain || null,
                exp: parsed.exp || null,
                siteInfo: siteInfo || null,
                siteId: siteInfo?.siteId || siteId,
                siteName: siteInfo?.siteName || 'Unknown Site',
              },
            };

            try {
              await makeAuthenticatedRequest(workerUrl("/api/webflow/app-installed"), {
                method: 'POST',
                body: JSON.stringify(installationPayload),
              });
            } catch {
              // silent
            }
          }
        } catch {
          // silent
        }
      }, 1000);

      // Load existing customization data once authenticated
      await loadExistingCustomizationData();
    };

    run();
    return () => {
      cancelled = true;
    };
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
        // Try fresh background authentication (silent) with timeout.
        // attemptAutoRefresh now retries up to 5 times with 2-second gaps
        // to cover Cloudflare KV propagation after a Marketplace install,
        // so the outer timeout here needs to be generous enough for the
        // full retry loop (~12 seconds) plus network round-trip.
        const authPromise = attemptAutoRefresh();
        const timeoutPromise = new Promise<boolean>((resolve) => {
          setTimeout(() => {
            resolve(false);
          }, 25000); // 25 second timeout — covers the full retry back-off (~20s) inside attemptAutoRefresh
        });

        const refreshSuccess = await Promise.race([authPromise, timeoutPromise]);
        
        if (refreshSuccess) {
         
          setIsAuthenticated(true);
          
          
          const storedData = localStorage.getItem('accessbit-userinfo');

          if (storedData) {
            const parsedData = JSON.parse(storedData);
        
          }
          
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
          isCheckingAuth={isCheckingAuth}
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
