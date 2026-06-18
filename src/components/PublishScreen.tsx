import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/userAuth";
import { platform } from "../platform";
import { framerEndpoints } from "../config/endpoints";
import "../styles/publish.css";
import "../styles/payment.css";

const whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);
// Accessibility icon as data URL (Font Awesome 5 style: ring + figure)
const icon1 = new URL("../assets/Accessibility.webp", import.meta.url).href;
const icon2 = new URL("../assets/icon2.svg", import.meta.url).href;
const icon3 = new URL("../assets/icon3.svg", import.meta.url).href;
const icon4 = new URL("../assets/icon4.svg", import.meta.url).href;
const icon5 = new URL("../assets/icon5.svg", import.meta.url).href;
const icon6 = new URL("../assets/icon6.svg", import.meta.url).href;
const icon7 = new URL("../assets/icon7.svg", import.meta.url).href;
const icon8 = new URL("../assets/icon8.svg", import.meta.url).href;
const footerBrandSvg = new URL("../assets/footer-brand.svg", import.meta.url).href;
const footerPoweredSvg = new URL("../assets/footer-powered.svg", import.meta.url).href;

// Icon options matching CustomizationScreen
const iconOptions = [
  { id: "accessibility", label: icon1, name: "Accessibility" },
  { id: "person", label: icon2, name: "Person" },
  { id: "wheelchair", label: icon3, name: "Wheelchair" },
  { id: "ad", label: icon4, name: "AD" },
  { id: "eye", label: icon5, name: "Eye" },
  { id: "ramp", label: icon6, name: "Ramp" },
  { id: "gear", label: icon7, name: "Gear" },
  { id: "ad-triple", label: icon8, name: "AD)))" },
];

/** Exact Stripe URLs opened from this screen — only these may be passed to `window.open`. */
const STRIPE_PORTAL_URL = "https://billing.stripe.com/p/login/test_3cI8wRgGjaLt0MY3x64Ni00";
const STRIPE_BUY_ANNUAL_URL = "https://buy.stripe.com/test_3cI8wRgGjaLt0MY3x64Ni00";
const STRIPE_BUY_MONTHLY_URL = "https://buy.stripe.com/test_8x23cx9dRaLt2V6ffO4Ni01";
const TRUSTED_STRIPE_URLS = new Set<string>([
  STRIPE_PORTAL_URL,
  STRIPE_BUY_ANNUAL_URL,
  STRIPE_BUY_MONTHLY_URL,
]);

function openTrustedStripeUrl(url: string): void {
  if (!TRUSTED_STRIPE_URLS.has(url)) return;
  window.open(url, "_blank", "noopener,noreferrer");
}


type CustomizationData = {
  selectedIcon: string;
  triggerButtonColor: string;
  triggerButtonShape: string;
  triggerHorizontalPosition: string;
  triggerVerticalPosition: string;
  triggerButtonSize: string;
};

type PublishScreenProps = {
  onBack: () => void;
  customizationData?: any;
};

const PublishScreen: React.FC<PublishScreenProps> = ({ onBack, customizationData }) => {
  const { publishSettings, makeAuthenticatedRequest } = useAuth();
  const [showModal, setShowModal] = useState(true);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishError, setPublishError] = useState<string | null>(null);
  const [publishSuccess, setPublishSuccess] = useState<string | false>(false);
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [isCheckingSubscription, setIsCheckingSubscription] = useState(true);
  const [isAnnual, setIsAnnual] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [accessibilityProfiles, setAccessibilityProfiles] = useState({
    seizureSafe: false,
    visionImpaired: false,
    adhdFriendly: false,
    cognitiveDisability: false,
    keyboardNavigation: false,
    blindUsers: false,
  });

  const handleToggle = (profile: keyof typeof accessibilityProfiles) => {
    setAccessibilityProfiles((prev: typeof accessibilityProfiles) => {
      const nextValue = !prev[profile];

      // Keep Keyboard Navigation + Blind Users in sync
      if (profile === "keyboardNavigation" || profile === "blindUsers") {
        return {
          ...prev,
          keyboardNavigation: nextValue,
          blindUsers: nextValue,
        };
      }

      return {
        ...prev,
        [profile]: nextValue,
      };
    });
  };


  const handlePublish = () => {
    setPublishSuccess(false);
    setPublishError(null);
    setShowPublishModal(true);
  };
const handleConfirmPublish = async () => {
  setIsPublishing(true);
  setPublishError(null);
  setPublishSuccess(false);

  try {
    // Step 1: Get Framer project info
    const siteInfo = await platform.getSiteInfo();
    if (!siteInfo?.siteId) throw new Error('Could not read Framer project ID.');

    // Step 2: Save customization + profiles to KV; worker returns scriptHtml with the widget URL
    const publishData = await publishSettings(customizationData, accessibilityProfiles);
    if (!publishData?.scriptHtml) {
      throw new Error('Could not retrieve script from server. Please try again.');
    }

    // Step 3: Inject AccessBit widget script into site footer (bodyEnd)
    const injected = await platform.injectScript({ html: publishData.scriptHtml, location: 'bodyEnd' });

    if (!injected) {
      setPublishError(
        'Settings saved, but the script could not be injected. ' +
        'You may not have the "setCustomCode" permission — check your Framer plan.'
      );
      return;
    }

    setPublishSuccess('Accessibility settings published and script installed in your site footer!');
    setShowPublishModal(false);
    setTimeout(() => setPublishSuccess(false), 8000);
  } catch (error) {
    setPublishError(error instanceof Error ? error.message : 'Failed to publish settings');
  } finally {
    setIsPublishing(false);
  }
};

  const handleCancelPublish = () => {
    setShowPublishModal(false);
  };


  const handleReset = () => {
    setAccessibilityProfiles({
      seizureSafe: false,
      visionImpaired: false,
      adhdFriendly: false,
      cognitiveDisability: false,
      keyboardNavigation: false,
      blindUsers: false,
    });
  };

  const handleHideInference = () => {
    setShowModal(false);
  };


  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        setIsCheckingSubscription(true);

        // Get the site's production URL from Framer
        const publishInfo = await platform.getPublishInfo();
        const productionUrl = publishInfo.productionUrl || '';
        const domain = productionUrl
          .replace(/^https?:\/\//, '')
          .replace(/^www\./, '')
          .replace(/\/$/, '')
          .split('/')[0];

        // Framer staging domains (.framer.app) don't need a subscription
        const isStaging = (
          !domain ||
          domain.includes('.framer.app') ||
          domain.includes('.framer.com') ||
          domain.includes('localhost') ||
          domain.includes('127.0.0.1')
        );

        if (isStaging) {
          setHasSubscription(false);
          return;
        }

        // Custom domain — check payment status via Framer worker
        const response = await makeAuthenticatedRequest(
          framerEndpoints.site.checkPayment(domain),
          { method: 'GET' }
        );
        setHasSubscription(response?.hasAccess === true);
      } catch {
        setHasSubscription(false);
      } finally {
        setIsCheckingSubscription(false);
      }
    };

    checkSubscriptionStatus();
  }, []);

  const handlePublishClick = () => {
    handlePublish();
  };

  const handleCancelSubscription = () => {
    openTrustedStripeUrl(STRIPE_PORTAL_URL);
  };

  const handlePurchaseNow = () => {
    openTrustedStripeUrl(isAnnual ? STRIPE_BUY_ANNUAL_URL : STRIPE_BUY_MONTHLY_URL);
  };

  return (
    <div className="publish-screen" style={{ paddingTop: '0' }}>
      {/* Publish Confirmation Modal */}
      {showPublishModal && (
        <div className="publish-modal-overlay">
          <div className="publish-modal">
            <div className="publish-modal-content">
              <p>We are installing the script in your site custom code.</p>
              <p>Click confirm to proceed.</p>
              <div className="publish-modal-buttons">
                <button 
                  className="confirm-btn" 
                  onClick={handleConfirmPublish}
                  disabled={isPublishing}
                >
                  {isPublishing ? "Publishing..." : "Confirm"}
                </button>
                <button 
                  className="cancel-btn" 
                  onClick={handleCancelPublish}
                  disabled={isPublishing}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="publish-header">
          <div className="app-logo">
            <span className="app-name"></span>
          </div>
          <div className="header-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <button className="back-btn" onClick={onBack}>
              <img src={whitearrow} alt="" style={{ transform: 'rotate(180deg)', width: '14px', height: '15px', marginRight: '8px' }} />
              Back
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isCheckingSubscription && (
                <span style={{ 
                  color: '#a3a3a3', 
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Checking subscription...
                </span>
              )}
              {hasSubscription === true && (
                <span 
                  className="cancel-subscription-link" 
                  onClick={handleCancelSubscription}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCancelSubscription(); } }}
                >
                  Cancel Subscription
                </span>
              )}
              <button 
                className="publish-btn" 
                onClick={handlePublishClick}
              >
                {hasSubscription === true ? 'Publish to live domain' : 'Publish to Staging'}
                <img src={whitearrow} alt="" style={{ width: '14px', height: '15px', marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>

      {/* Success Toast Notification - Top Right */}
      {publishSuccess && (
        <div className="success-toast" style={{ 
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(10, 8, 27, 1)',
          color: '#ffffff',
          padding: '16px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
          maxWidth: '400px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'slideInRight 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#10b981',
              flexShrink: 0
            }}></div>
            <span style={{ fontSize: '14px', lineHeight: '1.5' }}>
              {typeof publishSuccess === 'string' ? publishSuccess : 'Accessibility settings published successfully!'}
            </span>
          </div>
        </div>
      )}

      


      {/* Step Navigation */}
      <div className="step-navigation">
        <div className="step completed">
          <span className="step-number">STEP 1</span>
          <span className="step-name">Customization</span>
        </div>
        <div className="step active">
          <span className="step-number">STEP 2</span>
          <span className="step-name">Publish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Panel - Preview */}
        <div className="preview-panel">
          <div className="panel-header">
            <h3>Preview</h3>
          </div>
          <div className="preview-window1">
            <div className="browser-window">
              <div className="browser-controls">
                <div className="traffic-lights">
                  <div className="traffic-light red"></div>
                  <div className="traffic-light yellow"></div>
                  <div className="traffic-light green"></div>
                </div>
              </div>
              <div className="browser-content">
                {/* Accessibility Modal */}
                {showModal && (
                  <div
                    className={`accessibility-modal ${customizationData?.triggerHorizontalPosition === 'Left' ? 'position-left' :
                      customizationData?.triggerHorizontalPosition === 'Right' ? 'position-right' : 'position-center'
                      }`}
                  >
                    <div className="ab-preview-header">
                      <div className="ab-preview-close-container" aria-hidden="true">
                        <button
                          className="ab-preview-close-btn"
                          onClick={() => setShowModal(false)}
                          aria-label="Close accessibility panel"
                          type="button"
                        >
                          ×
                        </button>
                      </div>

                      <div className="ab-preview-lang" aria-label="Select language">
                        <span className="ab-preview-flag" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="12">
                            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                          </svg>
                        </span>

                        <span className="ab-preview-lang-text">English</span>

                        <span className="ab-preview-lang-arrow" aria-hidden="true">
                          <svg width="6" height="4" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M0.666748 0.666666L4.66675 4.66667L8.66675 0.666666"
                              stroke="white"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>

                      <h2>Accessibility Controls</h2>

                      <div className="ab-preview-actions">
                        <div className="ab-preview-actions-row">
                          <button
                            className="action-btn reset-settings-btn"
                            onClick={handleReset}
                            aria-label="Reset all accessibility settings"
                            type="button"
                          >
                            <span className="reset-settings-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M2 8C2 9.18669 2.35189 10.3467 3.01118 11.3334C3.67047 12.3201 4.60754 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.32263 2.00631 4.71265 2.66082 3.50667 3.82667L2 5.33333"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 2V5.33333H5.33333"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Reset Settings
                          </button>

                          <button className="action-btn statement-btn" type="button" aria-label="View accessibility statement">
                            <span className="statement-btn-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0001 1.33334H4.00008C3.64646 1.33334 3.30732 1.47381 3.05727 1.72386C2.80722 1.97391 2.66675 2.31305 2.66675 2.66667V13.3333C2.66675 13.687 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V4.66667L10.0001 1.33334Z"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.33325 1.33334V4C9.33325 4.35362 9.47373 4.69276 9.72378 4.94281C9.97383 5.19286 10.313 5.33334 10.6666 5.33334H13.3333"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path d="M6.66659 6H5.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.6666 8.66667H5.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.6666 11.3333H5.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            Statement
                          </button>
                        </div>

                        <div className="ab-preview-actions-row ab-preview-actions-row--center">
                          <button
                            className="action-btn hide-interface-btn"
                            onClick={handleHideInference}
                            aria-label="Hide accessibility interface"
                            type="button"
                          >
                            <span className="hide-interface-btn-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.15527 3.384C8.7082 3.19894 10.279 3.52721 11.6279 4.3187C12.9767 5.11019 14.0294 6.32138 14.6253 7.76733C14.6808 7.91701 14.6808 8.08166 14.6253 8.23133C14.3803 8.82533 14.0565 9.38367 13.6626 9.89133"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.38942 9.43866C9.01222 9.80298 8.50702 10.0046 7.98262 10C7.45823 9.99546 6.9566 9.78512 6.58579 9.4143C6.21497 9.04349 6.00463 8.54186 6.00008 8.01747C5.99552 7.49307 6.19711 6.98787 6.56142 6.61066"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.6527 11.666C10.7683 12.1899 9.78165 12.5173 8.75959 12.6263C7.73752 12.7352 6.70398 12.623 5.7291 12.2973C4.75422 11.9715 3.86081 11.4399 3.10949 10.7385C2.35816 10.0371 1.76651 9.18224 1.37468 8.232C1.31912 8.08232 1.31912 7.91768 1.37468 7.768C1.96577 6.33457 3.00579 5.1315 4.33868 4.33933"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1.33325 1.33334L14.6666 14.6667"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Hide Interface
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ab-preview-content">
                      <h3 className="ab-preview-title">Accessibility Adjustments</h3>

                      <div className="profile-list">
                        <div className={`profile-item ${accessibilityProfiles.seizureSafe ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path
                                d="M6.5 1.5L2.5 8H7L5.5 14.5L13 6.5H8.5L10 1.5H6.5Z"
                                stroke="black"
                                strokeWidth="1.2"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Seizure Safe Profile</h4>
                            <p>Clear flashes &amp; reduces color</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="seizureSafe">
                            <input
                              type="checkbox"
                              id="seizureSafe"
                              checked={accessibilityProfiles.seizureSafe}
                              onChange={() => handleToggle("seizureSafe")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${reduceMotion ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 43 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <circle cx="21.5" cy="21.5" r="21.5" fill="#ECEDED" />
                              <circle cx="21.5" cy="21.5" r="21" stroke="black" strokeOpacity="0.1" />
                              <path
                                d="M13.2854 27.1478C13.2854 27.0302 13.2816 26.9164 13.2863 26.8028C13.2955 26.5779 13.2888 26.3497 13.3263 26.1292C13.3875 25.7694 13.5787 25.4669 13.8327 25.2114C14.0382 25.0049 14.2636 24.8183 14.4802 24.6228C14.5003 24.6047 14.5269 24.5903 14.5398 24.5681C14.6089 24.4485 14.7169 24.4422 14.8398 24.4443C15.1889 24.4502 15.5382 24.446 15.8874 24.4458C15.9172 24.4457 15.9469 24.4458 15.9935 24.4458C15.9715 25.0389 15.6353 25.4367 15.1876 25.8002C15.2828 25.8002 15.3502 25.8006 15.4176 25.8001C15.7757 25.7976 16.1342 25.8048 16.4917 25.7888C16.7545 25.7771 16.9501 25.6262 17.1057 25.4214C17.1111 25.4142 17.1163 25.4068 17.1211 25.3992C17.1784 25.3079 17.2159 25.1811 17.2984 25.1352C17.3815 25.0889 17.5093 25.1221 17.6175 25.122C18.5387 25.1218 19.4599 25.1261 20.3811 25.1207C21.3076 25.1152 22.2015 24.9396 23.0498 24.5621C23.2987 24.4513 23.5332 24.3078 23.7743 24.1794C23.8032 24.164 23.8326 24.1498 23.8699 24.1309C23.9464 24.401 24.0149 24.6668 24.0976 24.928C24.1853 25.2051 24.3188 25.4598 24.5148 25.6783C24.5897 25.7617 24.6828 25.8016 24.7943 25.8015C25.3422 25.801 25.8901 25.8007 26.4379 25.8002C26.4549 25.8002 26.472 25.7977 26.5141 25.7943C26.4531 25.7388 26.4101 25.6948 26.3622 25.6569C26.1358 25.4773 25.9069 25.3003 25.7456 25.0542C25.5911 24.8186 25.4896 24.5632 25.484 24.279C25.4697 23.5618 25.5651 22.8645 25.8861 22.2125C26.1467 21.6832 26.5433 21.2757 27.0306 20.9516C27.4775 20.6544 27.9702 20.444 28.4496 20.2087C28.8878 19.9937 29.3203 19.7681 29.6779 19.4292C29.8299 19.2851 29.9604 19.118 30.099 18.96C30.1752 18.8733 30.2051 18.7795 30.1879 18.6561C30.1391 18.306 30.0514 17.9727 29.8361 17.6854C29.5986 17.3683 29.2703 17.1878 28.8954 17.088C28.5435 16.9943 28.1848 16.9661 27.8224 17.0121C27.5032 17.0526 27.2586 17.2265 27.0833 17.4818C26.7976 17.8975 26.5231 18.3216 26.2593 18.7517C25.7986 19.503 25.2968 20.2208 24.6563 20.8331C24.0339 21.4282 23.3306 21.9063 22.5613 22.2902C21.5394 22.8002 20.4574 23.1264 19.3416 23.3521C18.5782 23.5065 17.8079 23.616 17.0319 23.6692C16.2969 23.7196 15.5596 23.7552 14.8231 23.7587C14.3896 23.7608 14.0353 23.9032 13.7317 24.1895C13.5596 24.3517 13.4101 24.5378 13.2508 24.7135C13.2328 24.7333 13.2168 24.7548 13.1964 24.7797C12.8035 24.5552 12.4131 24.3322 12 24.0961C12.1492 23.8959 12.2851 23.6985 12.4365 23.5139C12.6689 23.2304 12.9464 22.9956 13.2564 22.7989C13.2834 22.7818 13.3066 22.7411 13.3109 22.7086C13.3676 22.2833 13.4871 21.8808 13.7404 21.5282C13.7845 21.4669 13.8548 21.4252 13.9071 21.3689C13.9317 21.3425 13.9601 21.3008 13.9564 21.2698C13.9006 20.8039 13.9101 20.3381 13.965 19.8739C14.086 18.8511 14.4386 17.9232 15.1164 17.1337C15.5667 16.6091 16.1061 16.1963 16.7153 15.8729C17.4298 15.4937 18.1934 15.2609 18.986 15.118C19.5264 15.0206 20.0728 14.9799 20.6208 15.0095C21.6714 15.0661 22.6389 15.3654 23.4739 16.0294C23.8254 16.309 24.1217 16.6386 24.3639 17.0172C24.3814 17.0446 24.4106 17.0766 24.4395 17.0828C24.7989 17.1608 25.1309 17.3004 25.4357 17.5224C25.4732 17.462 25.5082 17.407 25.5419 17.3512C25.8063 16.9126 26.117 16.5141 26.5248 16.1969C27.0721 15.7713 27.6926 15.5968 28.3805 15.6431C28.8295 15.6733 29.2676 15.751 29.6862 15.9236C30.5268 16.27 31.0829 16.8808 31.3756 17.7367C31.531 18.1912 31.5838 18.6608 31.5728 19.1387C31.5718 19.181 31.5546 19.2262 31.5341 19.2643C31.0809 20.1107 30.4076 20.7345 29.5668 21.1805C29.148 21.4027 28.7161 21.6001 28.2912 21.8108C27.9752 21.9675 27.6689 22.1398 27.4157 22.3913C27.0971 22.7076 26.9382 23.101 26.8805 23.5373C26.8522 23.7513 26.8439 23.9685 26.8364 24.1846C26.8347 24.2339 26.8605 24.2994 26.8966 24.3321C27.0747 24.4937 27.2682 24.6388 27.4421 24.8045C27.8489 25.1922 28.1144 25.6624 28.1697 26.2258C28.1995 26.529 28.175 26.8374 28.175 27.1548C28.1395 27.1548 28.1041 27.1548 28.0687 27.1548C27.012 27.1548 25.9552 27.143 24.8987 27.1586C24.0997 27.1705 23.5604 26.7747 23.1572 26.1328C23.1275 26.0855 23.1108 26.03 23.0861 25.9739C22.9026 26.0353 22.7225 26.0984 22.5407 26.1559C21.8566 26.3723 21.1537 26.4707 20.4379 26.4748C19.6341 26.4794 18.8303 26.4754 18.0265 26.4776C17.9861 26.4777 17.9324 26.4899 17.9073 26.5171C17.4934 26.9654 16.9758 27.1568 16.3741 27.1552C15.3717 27.1526 14.3692 27.1546 13.3667 27.1544C13.3432 27.1544 13.3198 27.1507 13.2854 27.1478Z"
                                fill="black"
                              />
                              <path
                                d="M29.1583 18.1889C29.1503 18.5743 28.8483 18.8597 28.4552 18.8533C28.1043 18.8477 27.7993 18.5291 27.807 18.1762C27.8153 17.794 28.1203 17.494 28.4947 17.4998C28.8671 17.5055 29.1661 17.816 29.1583 18.1889Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Reduce Motion</h4>
                            <p>Disable animations and transitions</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="reduceMotion">
                            <input
                              type="checkbox"
                              id="reduceMotion"
                              checked={reduceMotion}
                              onChange={() => setReduceMotion((v: boolean) => !v)}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.visionImpaired ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon vision-impaired-icon">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path
                                d="M1 8C2.7 5.5 5 4 8 4C11 4 13.3 5.5 15 8C13.3 10.5 11 12 8 12C5 12 2.7 10.5 1 8Z"
                                fill="none"
                                stroke="black"
                                strokeWidth="1.2"
                              />
                              <circle className="vision-impaired-pupil" cx="8" cy="8" r="2.2" fill="black" />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Vision Impaired Profile</h4>
                            <p>Enhances text readability and visual clarity</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="visionImpaired">
                            <input
                              type="checkbox"
                              id="visionImpaired"
                              checked={accessibilityProfiles.visionImpaired}
                              onChange={() => handleToggle("visionImpaired")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.adhdFriendly ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon ab-icon-adhd">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <rect x="2" y="3" width="12" height="10" rx="2" stroke="black" strokeWidth="1.2" />
                              <path d="M2 8H14" stroke="black" strokeWidth="1.2" />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>ADHD Friendly Profile</h4>
                            <p>More focus &amp; fewer distractions</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="adhdFriendly">
                            <input
                              type="checkbox"
                              id="adhdFriendly"
                              checked={accessibilityProfiles.adhdFriendly}
                              onChange={() => handleToggle("adhdFriendly")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.cognitiveDisability ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 43 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <circle cx="21.5" cy="21.5" r="21.5" fill="#ECEDED" />
                              <circle cx="21.5" cy="21.5" r="21" stroke="black" strokeOpacity="0.1" />
                              <path
                                d="M22.0001 24.5C23.3808 24.5 24.5001 23.3807 24.5001 22C24.5001 20.6193 23.3808 19.5 22.0001 19.5C20.6194 19.5 19.5001 20.6193 19.5001 22C19.5001 23.3807 20.6194 24.5 22.0001 24.5Z"
                                fill="black"
                              />
                              <path
                                d="M22.8334 15.3909V13.6667H21.1667V15.3909C19.7002 15.5778 18.3373 16.2465 17.2919 17.2919C16.2465 18.3372 15.5779 19.7002 15.3909 21.1667H13.6667V22.8334H15.3909C15.5777 24.2999 16.2463 25.6629 17.2918 26.7083C18.3372 27.7538 19.7002 28.4224 21.1667 28.6092V30.3334H22.8334V28.6092C24.3 28.4224 25.663 27.7538 26.7084 26.7083C27.7538 25.6629 28.4224 24.2999 28.6092 22.8334H30.3334V21.1667H28.6092C28.4223 19.7002 27.7536 18.3372 26.7083 17.2919C25.6629 16.2465 24.2999 15.5778 22.8334 15.3909ZM22.0001 27C19.2426 27 17.0001 24.7575 17.0001 22C17.0001 19.2425 19.2426 17 22.0001 17C24.7576 17 27.0001 19.2425 27.0001 22C27.0001 24.7575 24.7576 27 22.0001 27Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Cognitive Disability Profile</h4>
                            <p>Assists with reading &amp; focusing</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="cognitiveDisability">
                            <input
                              type="checkbox"
                              id="cognitiveDisability"
                              checked={accessibilityProfiles.cognitiveDisability}
                              onChange={() => handleToggle("cognitiveDisability")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.keyboardNavigation ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon keyboard-icon" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle className="kb-ring-off" cx="21.5" cy="21.5" r="20.5" fill="#ECEDED" />
                              <circle className="kb-ring-off" cx="21.5" cy="21.5" r="20" stroke="black" strokeOpacity="0.1" />
                              <circle className="kb-ring-on" cx="21.5" cy="21.5" r="19.5" fill="#D9F8F0" stroke="#01CE9C" strokeWidth="2" />
                              <g transform="translate(15,15)">
                                <path
                                  className="kb-path"
                                  d="M8 7L2 7L2 0H0L0 8C0 8.26522 0.105356 8.51957 0.292892 8.70711C0.480429 8.89464 0.734783 9 1 9H8V12L13 8L8 4L8 7Z"
                                  fill="black"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Keyboard Navigation (Motor)</h4>
                            <p>This profile prompts automatically for keyboard users.</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="keyboardNavigation">
                            <input
                              type="checkbox"
                              id="keyboardNavigation"
                              checked={accessibilityProfiles.keyboardNavigation}
                              onChange={() => handleToggle("keyboardNavigation")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.blindUsers ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon blind-icon" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle className="blind-ring-off" cx="21.5" cy="21.5" r="20.5" fill="#ECEDED" />
                              <circle className="blind-ring-off" cx="21.5" cy="21.5" r="20" stroke="black" strokeOpacity="0.1" />
                              <circle className="blind-ring-on" cx="21.5" cy="21.5" r="19.5" fill="#D9F8F0" stroke="#01CE9C" strokeWidth="2" />
                              <g transform="translate(15,15)">
                                <path
                                  className="blind-path"
                                  d="M8 7L2 7L2 0H0L0 8C0 8.26522 0.105356 8.51957 0.292892 8.70711C0.480429 8.89464 0.734783 9 1 9H8V12L13 8L8 4L8 7Z"
                                  fill="black"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Blind Users (Screen Reader)</h4>
                            <p>Optimize website for screen-readers</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="blindUsers">
                            <input
                              type="checkbox"
                              id="blindUsers"
                              checked={accessibilityProfiles.blindUsers}
                              onChange={() => handleToggle("blindUsers")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Preview footer (copied from widget UI; links removed for preview) */}
                    <div className="panel-footer" aria-hidden="true">
                      <img
                        className="panel-footer-link panel-footer-link--brand"
                        src={footerBrandSvg}
                        alt=""
                      />

                      <img
                        className="panel-footer-link panel-footer-link--powered"
                        src={footerPoweredSvg}
                        alt=""
                      />
                    </div>
                  </div>
                )}

                {/* Accessibility Widget */}
                {customizationData?.hideTriggerButton !== 'Yes' && (
                  <div
                    className="accessibility-widget"
                    style={{
                      left: customizationData?.triggerHorizontalPosition === 'Left' ?
                        `calc(10px + ${parseInt(customizationData?.triggerHorizontalOffset || '0px')}px)` :
                        customizationData?.triggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                      right: customizationData?.triggerHorizontalPosition === 'Right' ?
                        `calc(10px + ${parseInt(customizationData?.triggerHorizontalOffset || '0px')}px)` : 'auto',
                      top: customizationData?.triggerVerticalPosition === 'Top' ?
                        `calc(10px + ${parseInt(customizationData?.triggerVerticalOffset || '0px')}px)` : 'auto',
                      bottom: customizationData?.triggerVerticalPosition === 'Bottom' ?
                        `calc(10px + ${parseInt(customizationData?.triggerVerticalOffset || '0px')}px)` : 'auto',
                      transform: customizationData?.triggerHorizontalPosition === 'Center' ?
                        (customizationData?.triggerVerticalPosition === 'Middle' ? 'translateX(-50%)' : 'translateX(-50%)') :
                        (customizationData?.triggerVerticalPosition === 'Middle' ? 'translateY(-50%)' : 'none')
                    }}
                  >
                    <div
                      className={`widget-trigger ${customizationData?.triggerButtonShape?.toLowerCase() || 'circle'} ${customizationData?.triggerButtonSize?.toLowerCase() || 'medium'}`}
                      style={{ backgroundColor: customizationData?.triggerButtonColor || '#007bff' }}
                      onClick={() => setShowModal(!showModal)}
                    >
                      <img
                        src={iconOptions.find(icon => icon.id === customizationData?.selectedIcon)?.label || icon1}
                        alt="Accessibility Icon"
                        className="widget-icon"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Payment card (aligned with Preview) */}
        <div className="publish-page-payment-panel">
          <div className="panel-header">
            <h3>Subscription</h3>
          </div>
          <div className="publish-page-payment-window">
            <div className="payment-card publish-page-payment-card">
              <div className="pricing-flex publish-page-pricing-flex">
                <div className="pricing-single-column">
                  <div className="main-price">
                    <div className="price-number">${isAnnual ? '19' : '24'}</div>
                    <div className="price-period">/{isAnnual ? 'month: Purchased Annually' : 'month'}</div>
                  </div>
                  <div className={`payment-toggle ${isAnnual ? 'annually' : 'monthly'}`}>
                    <button
                      className={`toggle-option ${!isAnnual ? 'active' : ''}`}
                      onClick={() => setIsAnnual(false)}
                    >
                      Monthly
                    </button>
                    <button
                      className={`toggle-option ${isAnnual ? 'active' : ''}`}
                      onClick={() => setIsAnnual(true)}
                    >
                      Annually
                    </button>
                  </div>
                  <div className="savings-info" style={{ opacity: isAnnual ? 1 : 0, visibility: isAnnual ? 'visible' : 'hidden' }}>
                    You Save 20%
                  </div>
                  <div className="secondary-price">
                    ${isAnnual ? '19' : '24'}/month{isAnnual ? ': Purchased Annually' : ''}
                  </div>
                  <button
                    className="purchase-btn"
                    onClick={handlePurchaseNow}
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishScreen;
