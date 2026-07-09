// All Framer worker URLs and endpoint builders live here.
// To change the worker URL in future, update only FRAMER_WORKER_URL — nothing else needs editing.

export const FRAMER_WORKER_URL = "https://accessbit-framer.web-8fb.workers.dev";

export const framerEndpoints = {
  otp: {
    request:      () => `${FRAMER_WORKER_URL}/email/request-otp`,
    verify:       () => `${FRAMER_WORKER_URL}/email/verify-otp`,
    registerSite: () => `${FRAMER_WORKER_URL}/api/register-site`,
  },
  site: {
    publish:        (siteId: string) => `${FRAMER_WORKER_URL}/api/publish?siteId=${encodeURIComponent(siteId)}`,
    settings:       (siteId: string) => `${FRAMER_WORKER_URL}/api/settings?siteId=${encodeURIComponent(siteId)}`,
    domain:         ()               => `${FRAMER_WORKER_URL}/api/domain`,
    registerScript: (siteId: string) => `${FRAMER_WORKER_URL}/api/register-script?siteId=${encodeURIComponent(siteId)}`,
    applyScript:    (siteId: string) => `${FRAMER_WORKER_URL}/api/apply-script?siteId=${encodeURIComponent(siteId)}`,
    checkPayment:   (domain: string) => `${FRAMER_WORKER_URL}/api/check-payment?domain=${encodeURIComponent(domain)}`,
  },
};
