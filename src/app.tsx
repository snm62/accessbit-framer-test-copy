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
            const shortName = siteInfo?.shortName || null;
            const stagingUrl = shortName ? `https://${shortName}.webflow.io` : null;
            const userEmail = user?.email || '';

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
                stagingUrl: stagingUrl,
                exp: parsed.exp || null,
                siteInfo: siteInfo || null,
                siteId: siteInfo?.siteId || siteId,
                siteName: siteInfo?.siteName || 'Unknown Site',
                shortName: shortName,
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
