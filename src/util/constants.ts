/**
 * AccessBit API origin 
 *
 * Trust model (Designer Extension):
 * - All OAuth, session tokens, publish, script register/apply, and settings traffic
 *   goes to this host only. The extension does not send bearer tokens to any other origin.
 * - Network allowlisting: CSP `connect-src` in `public/index.html` must include this origin.
 * - Runtime: use `workerUrl()` / `fetchWorker()` / `makeAuthenticatedRequest()` (after URL assert)
 *   so tokens cannot be exfiltrated via a mistaken absolute URL.
 *
 * Server-side validation, least-privilege OAuth scopes, and TLS are enforced on the worker;

 */
export const WORKER_BASE_URL = "https://app.accessbit.io";



