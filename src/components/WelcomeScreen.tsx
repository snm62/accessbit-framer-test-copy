import React, { useState, useEffect, useRef } from "react";
import "../styles/welcomescreen.css";
import { platform } from "../platform";
const leftLines = new URL("../assets/leftlines.svg", import.meta.url).href;
const rightLines = new URL("../assets/rightlines.svg", import.meta.url).href;
const tutorialThumb = new URL("../assets/tutorial-thumbnail.svg", import.meta.url).href;
const playButton = new URL("../assets/play-button.svg", import.meta.url).href;

type Step = "email" | "otp" | "done";

type WelcomeScreenProps = {
  requestOTP: (email: string, firstName?: string) => Promise<void>;
  verifyOTP: (email: string, otp: string) => Promise<void>;
  authenticated?: boolean;
  isCheckingAuth?: boolean;
  handleWelcomeScreen: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  requestOTP,
  verifyOTP,
  authenticated,
  isCheckingAuth: parentIsChecking,
  handleWelcomeScreen,
}) => {
  const [step, setStep] = useState<Step>(authenticated ? "done" : "email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const helpTriggerRef = useRef<HTMLDivElement>(null);
  const helpDropdownRef = useRef<HTMLDivElement>(null);

  const isCheckingAuth = parentIsChecking ?? false;

  // If parent marks authenticated (e.g. silent auth on load), jump to done
  useEffect(() => {
    if (authenticated) setStep("done");
  }, [authenticated]);

  // Listen for auth-success event (fired by processAuthSuccessFromData)
  useEffect(() => {
    const onSuccess = () => setStep("done");
    window.addEventListener("accessbit-auth-success", onSuccess);
    return () => window.removeEventListener("accessbit-auth-success", onSuccess);
  }, []);

  useEffect(() => {
    if (!helpOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const inTrigger = helpTriggerRef.current?.contains(e.target as Node);
      const inDropdown = helpDropdownRef.current?.contains(e.target as Node);
      if (!inTrigger && !inDropdown) setHelpOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [helpOpen]);

  const handleSendCode = async () => {
    if (!email.trim()) { setError("Please enter your email address."); return; }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailValid) { setError("Please enter a valid email address."); return; }
    setError(null);
    setIsLoading(true);
    try {
      const publishInfo = await platform.getPublishInfo();
      if (!publishInfo.productionUrl && !publishInfo.stagingUrl) {
        setError("Please publish your Framer site first, then come back to authorize.");
        setIsLoading(false);
        return;
      }
      await requestOTP(email.trim());
      setStep("otp");
    } catch (err: any) {
      const msg = err?.message || "";
      setError(msg === "Failed to fetch"
        ? "Could not reach the server. Make sure the Framer worker is deployed."
        : msg || "Failed to send code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!otp.trim()) { setError("Please enter the verification code."); return; }
    setError(null);
    setIsLoading(true);
    try {
      await verifyOTP(email.trim(), otp.trim());
      // step will be set to "done" via the accessbit-auth-success event
    } catch (err: any) {
      setError(err?.message || "Invalid code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setError(null);
    setOtp("");
    setIsLoading(true);
    try {
      await requestOTP(email.trim());
      setError(null);
    } catch (err: any) {
      setError(err?.message || "Failed to resend code.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderInstructions = () => {
    if (isCheckingAuth) return "Checking your account...";
    if (step === "done") return "You're connected! Click Next to customize your widget.";
    if (step === "otp") return `We sent a 6-digit code to ${email}. Enter it below.`;
    return "Enter your email to connect your AccessBit account.";
  };

  const renderForm = () => {
    if (isCheckingAuth) {
      return <button className="welcome-authorize-btn" disabled>Loading...</button>;
    }

    if (step === "done") {
      return (
        <button className="welcome-authorize-btn" onClick={handleWelcomeScreen}>Next</button>
      );
    }

    if (step === "email") {
      return (
        <div className="otp-form">
          <input
            className="otp-input-field"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(null); }}
            onKeyDown={e => e.key === "Enter" && handleSendCode()}
            disabled={isLoading}
            autoFocus
          />
          {error && <p className="otp-error">{error}</p>}
          <button
            className="welcome-authorize-btn"
            onClick={handleSendCode}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Code"}
          </button>
        </div>
      );
    }

    // step === "otp"
    return (
      <div className="otp-form">
        <input
          className="otp-input-field otp-code"
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="000000"
          value={otp}
          onChange={e => { setOtp(e.target.value.replace(/\D/g, "")); setError(null); }}
          onKeyDown={e => e.key === "Enter" && handleVerifyCode()}
          disabled={isLoading}
          autoFocus
        />
        {error && <p className="otp-error">{error}</p>}
        <button
          className="welcome-authorize-btn"
          onClick={handleVerifyCode}
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Verify"}
        </button>
        <button className="otp-resend-btn" onClick={handleResend} disabled={isLoading}>
          Resend code
        </button>
        <p className="otp-disclosure">We'll save your site info to set up your accessibility widget.</p>
      </div>
    );
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-main-content">
        <img src={leftLines} alt="" className="welcome-bg-lines-left" />
        <img src={rightLines} alt="" className="welcome-bg-lines-right" />

        {/* Need help */}
        <div ref={helpTriggerRef} className="help-trigger" onClick={() => setHelpOpen(o => !o)}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ width: "18px", height: "18px", minWidth: "18px", minHeight: "18px", flexShrink: 0 }}>
            <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="#191728" stroke="#33304A" />
            <path d="M5.96387 7.60141C5.96387 7.01874 6.08677 6.49069 6.33259 6.01726C6.58751 5.53474 6.94713 5.15691 7.41145 4.88378C7.88487 4.61065 8.43568 4.47409 9.06387 4.47409C9.64655 4.47409 10.1609 4.57879 10.607 4.78819C11.0532 4.99759 11.3946 5.28437 11.6313 5.64854C11.8771 6.01271 12 6.42696 12 6.89128C12 7.44664 11.8816 7.90185 11.6449 8.25692C11.4082 8.61198 11.0805 8.93519 10.6617 9.22652C10.2065 9.54517 9.88326 9.81375 9.69207 10.0323C9.50088 10.2416 9.40528 10.5148 9.40528 10.8516V11.2067H8.35374V10.7287C8.35374 10.3919 8.41747 10.1005 8.54493 9.85472C8.67239 9.6089 8.82716 9.40861 9.00925 9.25384C9.20044 9.08996 9.46901 8.88966 9.81498 8.65295C10.1518 8.41624 10.4022 8.17043 10.5661 7.91551C10.7391 7.66059 10.8256 7.35559 10.8256 7.00053C10.8256 6.56352 10.6617 6.20846 10.3339 5.93533C10.0153 5.65309 9.59647 5.51198 9.07753 5.51198C8.48575 5.51198 8.00778 5.70317 7.64361 6.08555C7.28854 6.46793 7.11101 6.97321 7.11101 7.60141H5.96387ZM8.12158 13.4327C8.12158 13.2051 8.19441 13.023 8.34008 12.8864C8.48575 12.7408 8.67239 12.6679 8.9 12.6679C9.1276 12.6679 9.31424 12.7408 9.45991 12.8864C9.60558 13.023 9.67841 13.2051 9.67841 13.4327C9.67841 13.6603 9.60558 13.8469 9.45991 13.9926C9.31424 14.1292 9.1276 14.1975 8.9 14.1975C8.67239 14.1975 8.48575 14.1292 8.34008 13.9926C8.19441 13.8469 8.12158 13.6603 8.12158 13.4327Z" fill="white" />
          </svg>
          <span className="help-trigger-text">Need help ?</span>
        </div>

        {helpOpen && (
          <div ref={helpDropdownRef} className="help-dropdown">
            <p className="help-dropdown-heading">Help</p>
            <a href="https://www.youtube.com/watch?v=EXTnI4GxN6g" target="_blank" rel="noopener noreferrer" className="help-dropdown-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4.5L11.5 8L6 11.5V4.5Z" style={{ fill: "currentColor" }} /></svg>
              Watch tutorial
            </a>
            <a href="https://www.accessbit.io/help-center" target="_blank" rel="noopener noreferrer" className="help-dropdown-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" /><line x1="5.5" y1="5.5" x2="10.5" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><line x1="5.5" y1="8" x2="10.5" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><line x1="5.5" y1="10.5" x2="8.5" y2="10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
              Check docs
            </a>
            <a href="https://www.accessbit.io/contact" target="_blank" rel="noopener noreferrer" className="help-dropdown-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M2.5 13.5C2.5 11.015 5.015 9 8 9C10.985 9 13.5 11.015 13.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" /></svg>
              Get support
            </a>
            <a href="https://www.accessbit.io/contact" target="_blank" rel="noopener noreferrer" className="help-dropdown-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V10C14 10.5523 13.5523 11 13 11H5.5L2 14V3Z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" /></svg>
              Send feedback
            </a>
          </div>
        )}

        <div className="welcome-center-wrapper">
          <div className="welcome-content">
            <h1 className="welcome-title">
              Welcome to{" "}
              <span className="welcome-title-highlight">AccessBit</span>
            </h1>
            <p className="welcome-instructions">{renderInstructions()}</p>
          </div>

          {renderForm()}

          <a
            href="https://www.youtube.com/watch?v=EXTnI4GxN6g"
            target="_blank"
            rel="noopener noreferrer"
            className="tutorial-card"
          >
            <div className="tutorial-thumbnail">
              <img src={tutorialThumb} alt="Tutorial thumbnail" className="tutorial-thumb-img" />
            </div>
            <img
              src={playButton}
              alt=""
              style={{ position: "absolute", top: "55px", left: "78px", width: "66px", height: "38px", zIndex: 10, pointerEvents: "none", display: "block" }}
            />
            <div className="tutorial-info">
              <div className="tutorial-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
                </svg>
                Tutorial
              </div>
              <p className="tutorial-title">
                How to Install AccessBit Accessibility Widget in Framer | Setup &amp; Customization
              </p>
              <p className="tutorial-subtitle">
                Welcome to AccessBit for Framer! 🎉
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
