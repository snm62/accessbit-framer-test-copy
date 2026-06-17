import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CustomizationScreen from "./components/CustomizationScreen";
import PublishScreen from "./components/PublishScreen";
import { useAuth } from "./hooks/userAuth";
import { platform } from "./platform";

type AppState = 'welcome' | 'customization' | 'publish';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppState>('welcome');
  const [customizationData, setCustomizationData] = useState<any>(null);
  const [isLoadingExistingData, setIsLoadingExistingData] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [siteNotPublished, setSiteNotPublished] = useState(false);

  const { requestOTP, verifyOTP, getPublishedSettings, attemptAutoRefresh } = useAuth();

  // Listen for auth success events (fired after OTP verification)
  useEffect(() => {
    const onAuthSuccess = async () => {
      setIsAuthenticated(true);
      try {
        const publishInfo = await platform.getPublishInfo();
        const hasUrl = !!(publishInfo?.stagingUrl || publishInfo?.productionUrl);
        setSiteNotPublished(!hasUrl);
      } catch {
        setSiteNotPublished(true);
      }
    };
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
        setIsAuthenticated(ok);
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
          siteNotPublished={siteNotPublished}
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
