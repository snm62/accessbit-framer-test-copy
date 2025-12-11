import React, { useState, useEffect } from 'react';
import '../styles/payment.css';
import { getSiteId } from '../util/siteId';
import { WORKER_BASE_URL } from '../util/constants';

const whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);


interface PaymentScreenProps {
  onBack: () => void;
  customizationData: any;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ onBack, customizationData }) => {
  
  const [isAnnual, setIsAnnual] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [actualPlanType, setActualPlanType] = useState<'annual' | 'monthly' | null>('annual');
  


  // Debug: Monitor actualPlanType changes
  useEffect(() => {
    ;
  }, [actualPlanType]);
  const [showDomainModal, setShowDomainModal] = useState(false);
  const [newDomain, setNewDomain] = useState('');
  const [isUpdatingDomain, setIsUpdatingDomain] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error' | 'info', message: string} | null>(null);

  // Helper function to show notifications
  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message });
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };




  const handlePurchaseNow = () => {
    
    const stripeUrl = isAnnual 
      ? `https://buy.stripe.com/3cI8wRgGjaLt0MY3x64Ni00`  // Annual plan
      : `https://buy.stripe.com/8x23cx9dRaLt2V6ffO4Ni01`; // Monthly plan
    window.open(stripeUrl, '_blank');
  };





  const handleEditDomain = () => {
   
    setShowDomainModal(true);
  };


  return (
    <div className="payment-screen">
      {/* Header */}
      <div className="payment-header">
        <div className="app-name"></div>
        <div className="header-buttons">
          <button className="back-btn" onClick={onBack} disabled={isProcessing}>
            <img src={whitearrow} alt="" style={{ transform: 'rotate(180deg)', width: '14px', height: '15px', marginRight: '8px' }} />
            Close
          </button>
        </div>
      </div>

      {/* Step Navigation Removed - Payment screen now shown as modal from Publish screen */}

      {/* Main Content */}
      <div className="main-content">
        <div className="payment-card">
          <div className="pricing-flex">
            {/* Left side - Main pricing */}
            <div className="pricing-left">
              <div className="main-price">
                <div className="price-number">${isAnnual ? '19' : '24'}</div>
                <div className="price-period">/{isAnnual ? 'month: Purchased Annually' : 'month'}</div>
              </div>
              
              <div className={`payment-toggle ${isAnnual ? 'annually' : 'monthly'}`}>
                <button 
                  className={`toggle-option ${!isAnnual ? 'active' : ''}`}
                  onClick={() => {
                    setIsAnnual(false);
                    setActualPlanType('monthly');
                  }}
                >
                  Monthly
                </button>
                <button 
                  className={`toggle-option ${isAnnual ? 'active' : ''}`}
                  onClick={() => {
                    setIsAnnual(true);
                    setActualPlanType('annual');
                  }}
                >
                  Annually
                </button>
              </div>
              
              <div className="savings-info" style={{ opacity: isAnnual ? 1 : 0, visibility: isAnnual ? 'visible' : 'hidden' }}>
                You Save 20%
              </div>
            </div>

            {/* Right side - Secondary pricing and button */}
            <div className="pricing-right">
              <div className="secondary-price">
                ${isAnnual ? '19' : '24'}/month{isAnnual ? ': Purchased Annually' : ''}
              </div>
              
              <button 
                className="purchase-btn" 
                onClick={handlePurchaseNow}
                disabled={isProcessing}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>

        {/* Stripe replaced full-screen above; nothing inline here */}
      </div>
      
      {/* Notification Popup */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 10000,
          backgroundColor: notification.type === 'success' ? '#10b981' : 
                          notification.type === 'error' ? '#ef4444' : 'rgba(46, 43, 69, 1)',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          maxWidth: '400px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animation: 'slideInRight 0.3s ease-out',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>
            {notification.type === 'success' ? '' : 
             notification.type === 'error' ? '' : ''}
          </div>
          <div style={{ flex: 1 }}>
            {notification.message}
          </div>
          <button
            onClick={() => setNotification(null)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              fontSize: '18px',
              lineHeight: 1,
              opacity: 0.8
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentScreen;
