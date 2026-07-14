

import { framerEndpoints } from '../config/endpoints';
import { platform } from '../platform';
import type { User } from '../types/types';

// ─── JWT constants ────────────────────────────────────────────────────────────

export const FRAMER_TOKEN_KEY = "accessbit-framer-token";

// ─── In-memory session token ──────────────────────────────────────────────────

let inMemorySessionToken: string | null = null;
let inMemorySessionTokenExpiry: number | null = null;
let sessionTokenRefreshPromise: Promise<string> | null = null;

const SESSION_TOKEN_BUFFER_MS = 60 * 1000;

// ─── JWT helpers ──────────────────────────────────────────────────────────────

export const decodeJWTPayload = (token: string): Record<string, any> | null => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    return JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return null;
  }
};

export const loadStoredFramerToken = (): string | null => {
  try {
    const token = localStorage.getItem(FRAMER_TOKEN_KEY);
    if (!token) return null;
    const payload = decodeJWTPayload(token);
    if (!payload) return null;
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      localStorage.removeItem(FRAMER_TOKEN_KEY);
      return null;
    }
    return token;
  } catch {
    return null;
  }
};

export const setInMemorySessionToken = (token: string | null) => {
  if (!token) {
    inMemorySessionToken = null;
    inMemorySessionTokenExpiry = null;
    return;
  }
  inMemorySessionToken = token;
  const payload = decodeJWTPayload(token);
  inMemorySessionTokenExpiry = payload?.exp
    ? payload.exp * 1000
    : Date.now() + 30 * 24 * 60 * 60 * 1000;
};

export const clearInMemorySessionToken = () => setInMemorySessionToken(null);

const hasUsableSessionToken = () => {
  if (!inMemorySessionToken) return false;
  if (!inMemorySessionTokenExpiry) return true;
  return inMemorySessionTokenExpiry - Date.now() > SESSION_TOKEN_BUFFER_MS;
};

const refreshSessionToken = async (): Promise<string> => {
  if (sessionTokenRefreshPromise) return sessionTokenRefreshPromise;
  sessionTokenRefreshPromise = (async () => {
    const stored = loadStoredFramerToken();
    if (stored) {
      setInMemorySessionToken(stored);
      return stored;
    }
    throw new Error("Session expired. Please log in again.");
  })();
  try {
    return await sessionTokenRefreshPromise;
  } finally {
    sessionTokenRefreshPromise = null;
  }
};

export const getValidSessionToken = async (): Promise<string> => {
  if (hasUsableSessionToken()) return inMemorySessionToken as string;
  return refreshSessionToken();
};

// ─── Authenticated fetch ──────────────────────────────────────────────────────

export const makeAuthenticatedRequest = async (url: string, options: RequestInit = {}) => {
  const token = await getValidSessionToken();
  const headers = new Headers(options.headers as HeadersInit | undefined);
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }
  headers.set('Authorization', `Bearer ${token}`);
  const response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    clearInMemorySessionToken();
    throw new Error("Session expired. Please log in again.");
  }
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Request failed: ${response.status} - ${(errorData as any).error || 'Unknown error'}`);
  }

  const text = await response.text();
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; }
};

// ─── OTP auth ────────────────────────────────────────────────────────────────

export const requestOTP = async (email: string, firstName?: string): Promise<void> => {
  const res = await fetch(framerEndpoints.otp.request(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.trim().toLowerCase(), firstName: firstName?.trim() || "" }),
  });
  const data = await res.json() as any;
  if (!res.ok) throw new Error(data?.error || "Failed to send verification code.");
};

// Returns raw token + user so the hook can update React state after the network call.
// Only sends email + otp — no site metadata in the auth request.
export const verifyOTPNetwork = async (email: string, otp: string): Promise<{ token: string; user: User }> => {
  const res = await fetch(framerEndpoints.otp.verify(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      otp: otp.trim(),
    }),
  });
  const data = await res.json() as any;
  if (!res.ok) throw new Error(data?.error || "Verification failed.");

  const token = data.token || "";
  const user: User = {
    firstName: data.user?.firstName || "",
    email: data.user?.email || email,
    siteId: "",
  };
  return { token, user };
};

// Called immediately after OTP verification — registers the site in a separate
// authenticated step so site metadata is never bundled with the auth request.
// Returns a new JWT with siteId embedded so silent auth works correctly.
export const registerSite = async (): Promise<{ siteId: string; siteToken: string; token: string }> => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error('No site information available');
  const result = await makeAuthenticatedRequest(framerEndpoints.otp.registerSite(), {
    method: 'POST',
    body: JSON.stringify({
      siteId: siteInfo.siteId,
      siteName: siteInfo.siteName || null,
    }),
  });
  // Store the new token (with siteId) immediately so all subsequent requests use it
  if (result?.token) {
    setInMemorySessionToken(result.token);
    localStorage.setItem(FRAMER_TOKEN_KEY, result.token);
  }
  return result;
};

// ─── Publish / settings ───────────────────────────────────────────────────────

export const publishSettings = async (customizationData: any, accessibilityProfiles: any): Promise<any> => {
  const [siteInfo, publishInfo] = await Promise.all([
    platform.getSiteInfo(),
    platform.getPublishInfo().catch(() => ({ stagingUrl: null, productionUrl: null })),
  ]);
  if (!siteInfo?.siteId) throw new Error('No site information available');
  return makeAuthenticatedRequest(
    framerEndpoints.site.publish(siteInfo.siteId),
    {
      method: 'POST',
      body: JSON.stringify({
        customization: customizationData,
        accessibilityProfiles,
        stagingUrl: publishInfo.stagingUrl || null,
        productionUrl: publishInfo.productionUrl || null,
      }),
    }
  );
};

export const getPublishedSettings = async (): Promise<any> => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error('No site information available');
  return makeAuthenticatedRequest(framerEndpoints.site.settings(siteInfo.siteId), { method: 'GET' });
};

export const connectCustomDomain = async (domain: string): Promise<any> => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error('No site information available');
  return makeAuthenticatedRequest(framerEndpoints.site.domain(), {
    method: 'POST',
    body: JSON.stringify({ siteId: siteInfo.siteId, customDomain: domain }),
  });
};

export const registerAccessibilityScript = async (): Promise<any> => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error('No site information available');
  return makeAuthenticatedRequest(framerEndpoints.site.registerScript(siteInfo.siteId), { method: 'POST' });
};

export const applyAccessibilityScript = async (params: {
  targetType: 'site' | 'page';
  scriptId: string;
  location: 'header' | 'footer';
  version: string;
}): Promise<any> => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error('No site information available');
  return makeAuthenticatedRequest(framerEndpoints.site.applyScript(siteInfo.siteId), {
    method: 'POST',
    body: JSON.stringify(params),
  });
};
