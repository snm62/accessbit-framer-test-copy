
export type StatementLinkResult = {
  ok: boolean;
  value: string;
  reason?: string;
};


function stripControlChars(input: string): string {
  let out = '';
  for (const ch of input) {
    const code = ch.codePointAt(0) || 0;
    // C0 controls + space (<= 0x20), DEL (0x7F), and C1 controls (0x80-0x9F).
    if (code <= 0x20 || code === 0x7f || (code >= 0x80 && code <= 0x9f)) continue;
    out += ch;
  }
  return out;
}

const HAS_SCHEME = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;


export function normalizeStatementLink(raw: unknown): StatementLinkResult {
  if (raw === null || raw === undefined) return { ok: true, value: '' };

  const trimmed = String(raw).trim();
  if (!trimmed) return { ok: true, value: '' };

  // Remove whitespace/control characters anywhere in the string before any scheme check.
  const cleaned = stripControlChars(trimmed);
  if (!cleaned) return { ok: true, value: '' };

  // No scheme at all (`example.com/a11y`) -> assume https. Leading slashes are dropped so
  // a protocol-relative `//example.com` does not become `https:////example.com`.
  const candidate = HAS_SCHEME.test(cleaned)
    ? cleaned
    : `https://${cleaned.replace(/^\/+/, '')}`;

  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    return { ok: false, value: '', reason: 'Enter a valid link, for example https://example.com/accessibility' };
  }

  // Upgrade http -> https. Anything that is not http(s) (javascript:, data:, vbscript:,
  // file:, blob:, ...) is rejected outright - there is no safe upgrade for those.
  if (parsed.protocol === 'http:') {
    parsed.protocol = 'https:';
  } else if (parsed.protocol !== 'https:') {
    return { ok: false, value: '', reason: 'Link must start with https://' };
  }

  // Credentials in a URL (`https://user:pass@host`) are used to disguise the real host.
  if (parsed.username || parsed.password) {
    return { ok: false, value: '', reason: 'Link must not contain a username or password' };
  }

  // Only the default https port is allowed. `parsed.port` is '' when the port is default.
  if (parsed.port && parsed.port !== '443') {
    return { ok: false, value: '', reason: 'Link must not specify a port' };
  }

  // A public statement page always lives on a dotted public hostname. This also rejects
  // degenerate hosts produced by odd input such as `https://javascript`.
  if (!parsed.hostname || !parsed.hostname.includes('.')) {
    return { ok: false, value: '', reason: 'Enter a valid link, for example https://example.com/accessibility' };
  }

  return { ok: true, value: parsed.toString() };
}


export function sanitizeStatementLink(raw: unknown): string {
  const result = normalizeStatementLink(raw);
  return result.ok ? result.value : '';
}
