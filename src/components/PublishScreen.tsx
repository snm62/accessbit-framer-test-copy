import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/userAuth";
import { getSiteId, getCustomDomain } from "../util/siteId";
import { WORKER_BASE_URL } from "../util/constants";
import PaymentScreen from "./PaymentScreen";
import { WebflowAPI } from "../types/webflowtypes";
import "../styles/publish.css";


declare const webflow: WebflowAPI;

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
  const { publishSettings, user, registerAccessibilityScript, applyAccessibilityScript, makeAuthenticatedRequest } = useAuth();
  const [showModal, setShowModal] = useState(true);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishError, setPublishError] = useState<string | null>(null);
  const [publishSuccess, setPublishSuccess] = useState<string | false>(false);
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [isCheckingSubscription, setIsCheckingSubscription] = useState(true);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [accessibilityProfiles, setAccessibilityProfiles] = useState({
    seizureSafe: false,
    visionImpaired: false,
    adhdFriendly: false,
    cognitiveDisability: false,
    keyboardNavigation: false,
    blindUsers: false,
  });

  const handleToggle = (profile: keyof typeof accessibilityProfiles) => {
    setAccessibilityProfiles(prev => ({
      ...prev,
      [profile]: !prev[profile]
    }));
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

    
    // Step 1: Publish settings to KV store

    const publishResult = await publishSettings(customizationData, accessibilityProfiles);

    // Step 2: Handle script registration

    const registerResult = await registerAccessibilityScript();
   
    
    // Determine success message based on result
    let successMessage = '';
    
    if (registerResult.success) {
      // Always attempt to apply to head to repair manual deletions
      const applyData = {
        targetType: 'site' as const,
        scriptId: registerResult.result?.id || 'accessbit',
        location: 'header' as const,
        version: '1.0.0'
      };
      const applyResult = await applyAccessibilityScript(applyData);
      if (applyResult.success) {
        successMessage = applyResult.alreadyApplied
          ? 'Settings published! Script was already active in head.'
          : 'Settings published! Script has been registered and applied to your site.';
      } else {
        setPublishError('Settings published, but failed to apply script. Please try again.');
        return;
      }
    } else {
      setPublishError('Settings published, but failed to register script. Please try again.');
      return;
    }
    
    
    
    // Set success message immediately
    setPublishSuccess(successMessage);
    
    setShowPublishModal(false);
    
    // Clear success message after 8 seconds
    setTimeout(() => {
    
      setPublishSuccess(false);
    }, 8000);
    
  } catch (error) {
   
    const errorMessage = error instanceof Error ? error.message : "Failed to publish settings";
    setPublishError(errorMessage);
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
        
        
        let customDomain = getCustomDomain();
        
       
        if (!customDomain) {
          try {
            
            const siteId = await getSiteId();
            
            if (siteId) {
              // Use backend proxy endpoint instead of calling Webflow API directly
              // This prevents idToken leakage and uses accessToken stored during OAuth
              const base = WORKER_BASE_URL.replace(/\/+$/, '');
              const data = await makeAuthenticatedRequest(
                `${base}/api/accessibility/custom-domains?siteId=${encodeURIComponent(siteId)}`,
                { method: 'GET' }
              );
              
              // makeAuthenticatedRequest returns JSON directly (not Response object)
              if (data && data.customDomains && Array.isArray(data.customDomains)) {
                // Find the default/primary custom domain
                const defaultDomain = data.customDomains.find((d: any) => d.default === true) || data.customDomains[0];
                if (defaultDomain?.domain) {
                  customDomain = defaultDomain.domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
                }
              }
            }
          } catch (error) {
            
            // Fallback to publishSite API if REST API fails
            try {
              const publishInfo = await webflow.publishSite();
              if (publishInfo?.customDomains && Array.isArray(publishInfo.customDomains) && publishInfo.customDomains.length > 0) {
                customDomain = publishInfo.customDomains[0].url.replace(/^https?:\/\//, '').replace(/\/$/, '');
              }
            } catch (fallbackError) {
             
            }
          }
        }
        
        // Step 2: Check if it's a staging domain (always allow, no payment check needed)
        if (customDomain) {
          const isStaging = (
            customDomain.includes('.webflow.io') ||
            customDomain.includes('.webflow.com') ||
            customDomain.includes('localhost') ||
            customDomain.includes('127.0.0.1') ||
            customDomain.includes('staging')
          );
          
          if (isStaging) {
            // Staging domain = no payment required
            setHasSubscription(false);
            setIsCheckingSubscription(false);
            return;
          }
        }
        
       
        if (customDomain) {
          // Normalize domain (remove protocol, www, trailing slash)
          const normalizedDomain = customDomain
            .replace(/^https?:\/\//, '')
            .replace(/^www\./, '')
            .replace(/\/$/, '')
            .split('/')[0];
          
          // Call backend to check payment status
        
          const response = await makeAuthenticatedRequest(
            `${WORKER_BASE_URL}/api/accessibility/check-payment-status?domain=${encodeURIComponent(normalizedDomain)}`,
            { method: 'GET' }
          );
          
          
          if (response?.hasAccess === true && response?.isStaging !== true) {
            setHasSubscription(true);
          } else {
            setHasSubscription(false);
          }
        } else {
          // No custom domain = no subscription
          setHasSubscription(false);
        }
      } catch (error) {
        
        setHasSubscription(false);
      } finally {
        setIsCheckingSubscription(false);
      }
    };
    
    checkSubscriptionStatus();
  }, []); // Only run on mount

  const handlePublishClick = () => {
    handlePublish();
  };

  const handleCancelSubscription = () => {
    // Open Stripe billing portal in new window
    window.open('https://billing.stripe.com/p/login/3cI8wRgGjaLt0MY3x64Ni00', '_blank');
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
              {isCheckingSubscription ? (
                <span style={{ 
                  color: '#a3a3a3', 
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Checking subscription...
                </span>
              ) : hasSubscription === false ? (
                <span style={{ 
                  color: 'rgba(147, 51, 234, 1)', 
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }} onClick={() => setShowPaymentScreen(true)}>
                  You need a subscription to publish the production
                </span>
              ) : hasSubscription === true ? (
                <span style={{ 
                  color: 'rgba(147, 51, 234, 1)', 
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }} onClick={handleCancelSubscription}>
                  Cancel Subscription
                </span>
              ) : null}
              <button 
                className="publish-btn" 
                onClick={handlePublishClick}
              >
                Publish
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
                    <div className="modal-header">
                      <button className="close-btn" onClick={() => setShowModal(false)}>
                        ×
                      </button>
                      <h2>Accessibility Adjustments</h2>
                      <div className="modal-buttons">
                        <button className="modal-btn">
                          Reset Settings
                        </button>
                        <button className="modal-btn">
                          Hide Interface
                        </button>
                      </div>
                    </div>
                    <div className="modal-content">
                      <p className="modal-intro">Choose the right accessibility profile for you</p>
                      <div className="profile-list">
                        <div className="profile-item">
                          <div className="toggle-switch">
                            <input
                              type="checkbox"
                              id="seizureSafe"
                              checked={accessibilityProfiles.seizureSafe}
                              onChange={() => handleToggle('seizureSafe')}
                              disabled
                            />
                            <label htmlFor="seizureSafe" className="toggle-label">
                              <span className="toggle-off">OFF</span>
                              <span className="toggle-on">ON</span>
                            </label>
                          </div>
                          <div className="profile-info">
                            <h4>Seizure Safe Profile</h4>
                            <p>Clear flashes & reduces color</p>
                          </div>
                        </div>

                        <div className="profile-item">
                          <div className="toggle-switch">
                            <input
                              type="checkbox"
                              id="visionImpaired"
                              checked={accessibilityProfiles.visionImpaired}
                              onChange={() => handleToggle('visionImpaired')}
                              disabled
                            />
                            <label htmlFor="visionImpaired" className="toggle-label">
                              <span className="toggle-off">OFF</span>
                              <span className="toggle-on">ON</span>
                            </label>
                          </div>
                          <div className="profile-info">
                            <h4>Vision Impaired Profile</h4>
                            <p>Enhances website's visuals</p>
                          </div>
                        </div>

                        <div className="profile-item">
                          <div className="toggle-switch">
                            <input
                              type="checkbox"
                              id="adhdFriendly"
                              checked={accessibilityProfiles.adhdFriendly}
                              onChange={() => handleToggle('adhdFriendly')}
                              disabled
                            />
                            <label htmlFor="adhdFriendly" className="toggle-label">
                              <span className="toggle-off">OFF</span>
                              <span className="toggle-on">ON</span>
                            </label>
                          </div>
                          <div className="profile-info">
                            <h4>ADHD Friendly Profile</h4>
                            <p>ADHD Friendly Profile</p>
                          </div>
                        </div>

                        <div className="profile-item">
                          <div className="toggle-switch">
                            <input
                              type="checkbox"
                              id="cognitiveDisability"
                              checked={accessibilityProfiles.cognitiveDisability}
                              onChange={() => handleToggle('cognitiveDisability')}
                              disabled
                            />
                            <label htmlFor="cognitiveDisability" className="toggle-label">
                              <span className="toggle-off">OFF</span>
                              <span className="toggle-on">ON</span>
                            </label>
                          </div>
                          <div className="profile-info">
                            <h4>Cognitive Disability Profile</h4>
                            <p>Assists with reading & focusing</p>
                          </div>
                        </div>

                        <div className="profile-item">
                          <div className="toggle-switch">
                            <input
                              type="checkbox"
                              id="keyboardNavigation"
                              checked={accessibilityProfiles.keyboardNavigation}
                              onChange={() => handleToggle('keyboardNavigation')}
                              disabled
                            />
                            <label htmlFor="keyboardNavigation" className="toggle-label">
                              <span className="toggle-off">OFF</span>
                              <span className="toggle-on">ON</span>
                            </label>
                          </div>
                          <div className="profile-info">
                            <h4>Keyboard Navigation (Motor)</h4>
                            <p>Keyboard Navigation (Motor)</p>
                          </div>
                        </div>

                        <div className="profile-item">
                          <div className="toggle-switch">
                            <input
                              type="checkbox"
                              id="blindUsers"
                              checked={accessibilityProfiles.blindUsers}
                              onChange={() => handleToggle('blindUsers')}
                              disabled
                            />
                            <label htmlFor="blindUsers" className="toggle-label">
                              <span className="toggle-off">OFF</span>
                              <span className="toggle-on">ON</span>
                            </label>
                          </div>
                          <div className="profile-info">
                            <h4>Blind Users (Screen Reader)</h4>
                            <p>Optimize website for screen-readers</p>
                          </div>
                        </div>
                      </div>
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
      </div>

      {/* Payment Screen Modal/Overlay */}
      {showPaymentScreen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'relative'
          }}>
            <PaymentScreen
              onBack={() => setShowPaymentScreen(false)}
              customizationData={customizationData || {}}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishScreen;
