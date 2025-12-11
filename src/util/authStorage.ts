export interface AuthData {
  firstName: string;
  email: string;
  siteId: string;
  customDomain?: string;
  exp?: number;
}
export interface SiteInfo {
  siteId: string;
  name?: string;
  siteName?: string;
  shortName: string;
  url?: string;
  email?: string;
  
}

function getStorage(key: string): Storage {
  return localStorage; // Always use localStorage now
}

export function setAuthStorageItem(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  const storage = getStorage(key);
  storage.setItem(key, value);
}

export function getAuthStorageItem(key: string): string | null {
  if (typeof window === 'undefined') return null;
  const storage = getStorage(key);
  return storage.getItem(key);
}

export function removeAuthStorageItem(key: string): void {
  if (typeof window === 'undefined') return;
  const storage = getStorage(key);
  storage.removeItem(key);
}

export function getAuthData(): AuthData | null {
  // Only use the AccessBit key
  const authData = getAuthStorageItem('accessbit-userinfo');
  if (!authData) return null;
  try {
    return JSON.parse(authData);
  } catch (error) {
    return null;
  }
}
/**
* Set authentication data in localStorage
*/
export function setAuthData(authData: AuthData): void {
  // Store only under AccessBit key
  setAuthStorageItem('accessbit-userinfo', JSON.stringify(authData));
  
}
/**
* Get site info from localStorage for a specific site
*/
export function getSiteInfo(siteId?: string): SiteInfo | null {
  // If no siteId provided, try to get current site ID
  if (!siteId) {
    siteId = getAuthStorageItem('currentSiteId');
  }
  if (!siteId) {
    // Fallback to old key for backward compatibility
    const siteInfo = getAuthStorageItem('siteInfo');
    if (siteInfo) {
      try {
        return JSON.parse(siteInfo);
      } catch (error) {
        return null;
      }
    }
    return null;
  }
  const siteSpecificKey = `siteInfo_${siteId}`;
  const siteInfo = getAuthStorageItem(siteSpecificKey);
  if (!siteInfo) return null;
  try {
    return JSON.parse(siteInfo);
  } catch (error) {
    return null;
  }
}
/**
* Set site info in localStorage with site-specific key
*/
export function setSiteInfo(siteInfo: SiteInfo): void {
  const siteSpecificKey = `siteInfo_${siteInfo.siteId}`;
  setAuthStorageItem(siteSpecificKey, JSON.stringify(siteInfo));
  // Also store the current site ID for reference
  setAuthStorageItem('currentSiteId', siteInfo.siteId);
}
/**
* Update current site ID (useful when switching between sites)
*/
export function setCurrentSiteId(siteId: string): void {
  setAuthStorageItem('currentSiteId', siteId);
}
/**
* Check if user is authenticated
*/
export function isAuthenticated(): boolean {
  const authData = getAuthData();
  if (!authData || typeof authData.exp !== 'number') return false;
  // Check if token is expired
  const now = Math.floor(Date.now() / 1000);
  return authData.exp > now;
}
