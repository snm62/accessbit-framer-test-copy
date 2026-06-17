import { FRAMER_WORKER_URL } from '../config/endpoints';

const FRAMER_WORKER_ORIGIN = new URL(FRAMER_WORKER_URL).origin;

export class HttpError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export function assertTrustedWorkerUrl(url: string): void {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error('Invalid request URL');
  }
  if (parsed.origin !== FRAMER_WORKER_ORIGIN) {
    throw new Error('Refusing request: URL is not the configured AccessBit backend');
  }
}

export async function httpJson<T = any>(
  url: string,
  init: RequestInit & { token?: string } = {},
): Promise<T> {
  assertTrustedWorkerUrl(url);
  const { token, ...fetchInit } = init;
  const headers = new Headers(fetchInit.headers as HeadersInit | undefined);
  if (!headers.has('Content-Type') && !(fetchInit.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  const response = await fetch(url, { ...fetchInit, headers });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new HttpError(
      response.status,
      errorData.code || String(response.status),
      errorData.error || errorData.message || 'Unknown error',
    );
  }
  const text = await response.text();
  if (!text) return null as T;
  try {
    return JSON.parse(text);
  } catch {
    return text as unknown as T;
  }
}
