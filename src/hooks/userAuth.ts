

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { User } from "../types/types";
import { platform } from '../platform';
import {
  FRAMER_TOKEN_KEY,
  decodeJWTPayload,
  loadStoredFramerToken,
  setInMemorySessionToken,
  clearInMemorySessionToken,
  getValidSessionToken,
  makeAuthenticatedRequest,
  requestOTP,
  verifyOTPNetwork,
  registerSite,
  publishSettings,
  getPublishedSettings,
  connectCustomDomain,
  registerAccessibilityScript,
  applyAccessibilityScript,
} from '../api/framer';

// ─── Auth state type ──────────────────────────────────────────────────────────

interface AuthState {
  user: User;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

const dispatchAuthSuccess = (detail: any) => {
  window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail }));
};

export function useAuth() {
  const queryClient = useQueryClient();

  // Reads user data directly from the JWT payload — no separate localStorage entry.
  const { data: authState, isLoading: isAuthLoading } = useQuery<AuthState>({
    queryKey: ["auth"],
    queryFn: async () => {
      if (localStorage.getItem("explicitly_logged_out")) {
        return { user: { firstName: "", email: "" } };
      }
      const token = loadStoredFramerToken();
      if (!token) return { user: { firstName: "", email: "" } };
      const payload = decodeJWTPayload(token);
      if (!payload) return { user: { firstName: "", email: "" } };
      return {
        user: {
          firstName: payload.firstName || "",
          email: payload.email || "",
          siteId: payload.siteId || "",
        },
      };
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    gcTime: 1000 * 60 * 60,
  });

  // ── Logout ──────────────────────────────────────────────────────────────────

  const logout = () => {
    localStorage.setItem("explicitly_logged_out", "true");
    localStorage.removeItem(FRAMER_TOKEN_KEY);
    clearInMemorySessionToken();
    queryClient.setQueryData(["auth"], { user: { firstName: "", email: "" } });
    queryClient.clear();
  };

  // ── Auth success handler (updates React state after network call) ─────────────

  const processAuthSuccessFromData = (token: string, user: User) => {
    try {
      setInMemorySessionToken(token);
      localStorage.setItem(FRAMER_TOKEN_KEY, token);
      localStorage.removeItem("explicitly_logged_out");

      queryClient.clear();
      queryClient.setQueryData<AuthState>(["auth"], { user });

      dispatchAuthSuccess(user);
    } catch {
      // ignore
    }
  };

  // ── OTP auth ────────────────────────────────────────────────────────────────

  const verifyOTP = async (email: string, otp: string): Promise<void> => {
    const { token, user } = await verifyOTPNetwork(email, otp);
    processAuthSuccessFromData(token, user);
    // Register the site in a separate post-auth call — never bundled with OTP verify.
    // Failure here does not block the user; they are already authenticated.
    try {
      const { siteId } = await registerSite();
      if (siteId) {
        queryClient.setQueryData<AuthState>(["auth"], (prev) => ({
          user: { ...prev?.user, siteId },
        }));
      }
    } catch {
      // Non-blocking — site will be registered on next publish if this fails
    }
  };

  // ── Silent auth (restore from JWT on startup, no server call) ───────────────

  const attemptSilentAuth = async (): Promise<boolean> => {
    try {
      if (localStorage.getItem("explicitly_logged_out")) return false;
      const token = loadStoredFramerToken();
      if (!token) return false;

      setInMemorySessionToken(token);
      const payload = decodeJWTPayload(token);

      // Get siteId from JWT if present (old tokens), otherwise from platform
      let siteId = payload?.siteId || "";
      if (!siteId) {
        try {
          const siteInfo = await platform.getSiteInfo();
          siteId = siteInfo?.siteId || "";
        } catch {}
      }

      queryClient.setQueryData<AuthState>(["auth"], {
        user: {
          firstName: payload?.firstName || "",
          email: payload?.email || "",
          siteId,
        },
      });

      return true;
    } catch {
      return false;
    }
  };

  const attemptAutoRefresh = async (): Promise<boolean> => {
    try {
      if (localStorage.getItem("explicitly_logged_out")) return false;
      return await attemptSilentAuth();
    } catch {
      return false;
    }
  };

  // ── Per-site auth check ──────────────────────────────────────────────────────

  const isAuthenticatedForCurrentSite = async (): Promise<boolean> => {
    try {
      if (!authState?.user?.email) return false;
      const currentSiteInfo = await platform.getSiteInfo();
      if (!currentSiteInfo?.siteId) return false;
      return authState.user.siteId === currentSiteInfo.siteId;
    } catch {
      return false;
    }
  };

  // ── Convenience wrappers ────────────────────────────────────────────────────

  const checkPublishedDataExists = async (): Promise<boolean> => {
    try {
      const result = await getPublishedSettings();
      return !!(result && (result.customization || result.accessibilityProfiles));
    } catch {
      return false;
    }
  };

  const getSessionToken = async () => getValidSessionToken();

  const openAuthScreen = async () => {
    throw new Error("Use requestOTP() and verifyOTP() instead.");
  };

  return {
    user: authState?.user || { firstName: "", email: "" },
    isAuthLoading,
    logout,
    requestOTP,
    verifyOTP,
    openAuthScreen,
    isAuthenticatedForCurrentSite,
    makeAuthenticatedRequest,
    publishSettings,
    connectCustomDomain,
    getPublishedSettings,
    checkPublishedDataExists,
    registerAccessibilityScript,
    applyAccessibilityScript,
    attemptSilentAuth,
    attemptAutoRefresh,
    getSessionToken,
  };
}
