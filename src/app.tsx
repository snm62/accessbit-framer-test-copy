import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CustomizationScreen from "./components/CustomizationScreen";
import PublishScreen from "./components/PublishScreen";
import { useAuth } from "./hooks/userAuth";
import { platform } from "./platform";
import { loadStoredFramerToken, decodeJWTPayload } from "./api/framer";

type AppState = 'welcome' | 'customization' | 'publish';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppState>('welcome');
  const [customizationData, setCustomizationData] = useState<any>(null);
  const [isLoadingExistingData, setIsLoadingExistingData] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const { requestOTP, verifyOTP, getPublishedSettings, attemptAutoRefresh } = useAuth();

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
          // JWT is valid — but check if it belongs to THIS project.
          // If the user opens the plugin in a different Framer project,
          // the JWT siteId won't match and we must show OTP to register the new site.
          const token = loadStoredFramerToken();
          const payload = token ? decodeJWTPayload(token) : null;
          const currentSite = await platform.getSiteInfo().catch(() => null);
          const isSameProject = payload?.siteId && currentSite?.siteId && payload.siteId === currentSite.siteId;
          setIsAuthenticated(!!isSameProject);
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

  const handleNeedHelp = () => {};
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
