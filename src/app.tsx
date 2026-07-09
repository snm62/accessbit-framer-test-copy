import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CustomizationScreen from "./components/CustomizationScreen";
import PublishScreen from "./components/PublishScreen";
import { useAuth } from "./hooks/userAuth";
import { platform } from "./platform";
import { loadStoredFramerToken, decodeJWTPayload } from "./api/framer";
import { framerEndpoints } from "./config/endpoints";

type AppState = 'welcome' | 'customization' | 'publish';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppState>('welcome');
  const [customizationData, setCustomizationData] = useState<any>(null);
  const [isLoadingExistingData, setIsLoadingExistingData] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const { requestOTP, verifyOTP, getPublishedSettings, attemptAutoRefresh, registerSiteIfNeeded } = useAuth();

  // Listen for auth success events (fired after OTP verification)
  useEffect(() => {
    const onAuthSuccess = () => setIsAuthenticated(true);
    window.addEventListener('accessbit-auth-success', onAuthSuccess);
    return () => window.removeEventListener('accessbit-auth-success', onAuthSuccess);
  }, []);

  // On first mount: attempt silent auth from stored JWT (instant localStorage check)
  useEffect(() => {
    if (hasInitialized) return;
    setHasInitialized(true);

    const initializeApp = async () => {
      setIsCheckingAuth(true);
      try {
        const ok = await attemptAutoRefresh();
        if (ok) {
          const token = loadStoredFramerToken();
          const payload = token ? decodeJWTPayload(token) : null;
          const currentSite = await platform.getSiteInfo().catch(() => null);

          if (payload?.siteId) {
            // Old token format — siteId was embedded. Check it matches current project.
            const isSameProject = currentSite?.siteId && payload.siteId === currentSite.siteId;
            setIsAuthenticated(!!isSameProject);
          } else {
            // New token format — siteId registered separately. Check if THIS site is
            // already registered on the backend before trusting the JWT silently.
            // This prevents a JWT from Site A auto-authenticating on an unregistered Site B.
            let siteIsRegistered = false;
            if (currentSite?.siteId) {
              try {
                const res = await fetch(framerEndpoints.site.get(currentSite.siteId));
                siteIsRegistered = res.ok;
              } catch { siteIsRegistered = false; }
            }
            if (siteIsRegistered) {
              setIsAuthenticated(true);
              registerSiteIfNeeded().catch(() => {});
            } else {
              // Site not registered — user must go through OTP to register it
              setIsAuthenticated(false);
            }
          }
        } else {
          setIsAuthenticated(false);
        }
        setCurrentScreen('welcome');
      } catch {
        setIsAuthenticated(false);
        setCurrentScreen('welcome');
      } finally {
        setIsCheckingAuth(false);
      }
    };

    initializeApp();
  }, [hasInitialized]);

  // Load existing settings once authenticated
  useEffect(() => {
    if (!isAuthenticated) return;
    let cancelled = false;

    const loadSettings = async () => {
      setIsLoadingExistingData(true);
      try {
        const existingSettings = await getPublishedSettings();
        if (!cancelled && existingSettings?.customization) {
          setCustomizationData(existingSettings.customization);
        }
      } catch {
        // Settings not published yet — continue with empty data
      } finally {
        if (!cancelled) setIsLoadingExistingData(false);
      }
    };

    loadSettings();
    return () => { cancelled = true; };
  }, [isAuthenticated]);

  const handleWelcomeScreen = () => setCurrentScreen('customization');
  const handleBackToWelcome = () => setCurrentScreen('welcome');
  const handleBackToCustomization = () => setCurrentScreen('customization');
  const handleNextToPublish = (data: any) => {
    setCustomizationData(data);
    setCurrentScreen('publish');
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {currentScreen === 'welcome' ? (
        <WelcomeScreen
          requestOTP={requestOTP}
          verifyOTP={verifyOTP}
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
