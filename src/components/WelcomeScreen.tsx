import React, { useState, useEffect } from "react";
import "../styles/welcomescreen.css";
const leftLines = new URL("../assets/leftlines.svg", import.meta.url).href;
const rightLines = new URL("../assets/rightlines.svg", import.meta.url).href;


type WelcomeScreenProps = {
  onAuthorize: () => void;
  onNeedHelp: () => void;
  authenticated?: boolean;
  isCheckingAuth?: boolean;
  handleWelcomeScreen: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onAuthorize, onNeedHelp, authenticated, isCheckingAuth: parentIsChecking, handleWelcomeScreen }) => {
  const [hasUserData, setHasUserData] = useState(false);
  const [isAuthorizing, setIsAuthorizing] = useState(false);

 
  const isCheckingAuth = parentIsChecking ?? false;

  // React to authentication changes from parent
  useEffect(() => {
    if (authenticated) {
      setHasUserData(true);
      setIsAuthorizing(false);
    } else if (!isCheckingAuth) {
      
      // as a fallback (e.g. if auth completed via storage event)
      const userinfo = localStorage.getItem("accessbit-userinfo");
      const hasData = userinfo && userinfo !== "null" && userinfo !== "undefined";
      setHasUserData(!!hasData);
    }
  }, [authenticated, isCheckingAuth]);

 
  // Listen for auth completion when authorizing
  useEffect(() => {
    if (!isAuthorizing) return;

    const checkAuthCompletion = () => {
      const userinfo = localStorage.getItem("accessbit-userinfo");
      const hasData = userinfo && userinfo !== "null" && userinfo !== "undefined";
      
      if (hasData) {
        // OAuth completed successfully
        setHasUserData(true);
        setIsAuthorizing(false);
      }
    };

    // Check immediately
    checkAuthCompletion();

    // Listen for storage events (when popup stores data)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'accessbit-userinfo' && event.newValue) {
        checkAuthCompletion();
      }
    };

    // Listen for custom event (when postMessage is received)
    const handleAuthSuccess = () => {
      // Force immediate check and state update
      const userinfo = localStorage.getItem("accessbit-userinfo");
      const hasData = userinfo && userinfo !== "null" && userinfo !== "undefined";
      if (hasData) {
        setHasUserData(true);
        setIsAuthorizing(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('accessbit-auth-success', handleAuthSuccess);

    // Poll for changes (fallback if events don't fire)
    const pollInterval = setInterval(() => {
      checkAuthCompletion();
    }, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('accessbit-auth-success', handleAuthSuccess);
      clearInterval(pollInterval);
    };
  }, [isAuthorizing]);

  const handleAuthorizeClick = () => {
    setIsAuthorizing(true);
    onAuthorize();
  };

   return (
    <div className="welcome-screen">
      <div className="welcome-main-content">
        {/* Background line images - commented out until assets are added */}
        <img src={leftLines} alt="" className="welcome-bg-lines-left" />
        <img src={rightLines} alt="" className="welcome-bg-lines-right" />
        {/* Main content */}
        <div className="welcome-content">
          <h1 className="welcome-title">
            Welcome to{" "}
            <span className="welcome-title-highlight">AccessBit</span>
          </h1>
          {isCheckingAuth ? (
            <p className="welcome-instructions">
              Checking your authentication status...
            </p>
          ) : isAuthorizing ? (
            <p className="welcome-instructions">
              Please complete the authorization process in the popup window...
            </p>
          ) : hasUserData ? (
            <p className="welcome-instructions">
              Click on Next and customize your widget and publish when you are ready.
            </p>
          ) : (
            <p className="welcome-instructions">
              The authorization process appears to be incomplete. To continue with the next step, please ensure that all necessary authorization steps have been successfully carried out.
            </p>
          )}
          {isCheckingAuth ? (
            <button className="welcome-authorize-btn" disabled>
              Loading...
            </button>
          ) : isAuthorizing ? (
            <button className="welcome-authorize-btn" disabled>
              Authorizing...
            </button>
          ) : hasUserData ? (
            <button
              className="welcome-authorize-btn scan-project"
              onClick={handleWelcomeScreen}
            >
              Next
            </button>
          ) : (
            <button className="welcome-authorize-btn" onClick={handleAuthorizeClick}>
              Authorize
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
