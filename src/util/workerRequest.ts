import { WORKER_BASE_URL } from "./constants";

const WORKER_ORIGIN = new URL(WORKER_BASE_URL).origin;


export function workerUrl(pathAndQuery: string): string {
  if (!pathAndQuery.startsWith("/")) {
    throw new Error("workerUrl: path must start with /");
  }
  const base = WORKER_BASE_URL.replace(/\/+$/, "");
  return `${base}${pathAndQuery}`;
}

/** Reject any URL whose origin is not exactly WORKER_BASE_URL. */
export function assertTrustedWorkerUrl(url: string): void {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error("Invalid request URL");
  }
  if (parsed.origin !== WORKER_ORIGIN) {
    throw new Error(
      "Refusing request: URL is not the configured AccessBit backend"
    );
  }
}

/** `fetch` only after origin check — use for unauthenticated worker calls. */
export function fetchWorker(url: string, init?: RequestInit): Promise<Response> {
  assertTrustedWorkerUrl(url);
  return fetch(url, init);
}
