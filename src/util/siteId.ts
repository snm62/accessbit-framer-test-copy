import { WORKER_BASE_URL } from './constants';

// Shared utility for getting siteId from accessbit-userinfo
export const getSiteId = async (): Promise<string | null> => {
  const userData = localStorage.getItem('accessbit-userinfo');
  
  if (userData) {
    try {
      const parsed = JSON.parse(userData);
      return parsed.siteId || null;
    } catch (error) {
      console.warn('Failed to parse accessbit-userinfo:', error);
    }
  }
  
  return null;
};

// Shared utility for getting custom domain from accessbit-userinfo
export const getCustomDomain = (): string | null => {
  const userData = localStorage.getItem('accessbit-userinfo');
  
  if (userData) {
    try {
      const parsed = JSON.parse(userData);
      const customDomain = parsed.customDomain;
      
      if (customDomain) {
        // Extract domain from URL (remove https://, http://, trailing slash)
        const domain = customDomain
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '')
          .split('/')[0]; // Get just the domain part
        
        return domain;
      }
    } catch (error) {
      
    }
  }
  
  return null;
};



