const ALLOWED_URL_PROTOCOLS = new Set(['https:', 'http:', 'mailto:']);
const SAFE_EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Checks whether a configuration string is empty or still contains a bracketed placeholder (e.g. `[EMAIL]`).
 */
export const isUnfilled = (val?: string): boolean => {
  if (!val) return true;
  return val.includes('[') || val.includes(']');
};

/**
 * Validates and sanitizes a URL before rendering in `href` or passing to `window.open`.
 * Blocks `javascript:`, `data:`, `vbscript:`, protocol-relative (`//`), and malformed URLs.
 */
export const sanitizeUrl = (url?: string): string => {
  if (!url || isUnfilled(url)) return '#';
  const trimmed = url.trim();
  if (!trimmed) return '#';

  // Allow in-page hash anchors (e.g. "#projects", "#")
  if (trimmed.startsWith('#')) {
    return trimmed;
  }

  // Allow root-relative paths (e.g. "/documents/resume.pdf") while blocking protocol-relative "//" or "/\"
  if (trimmed.startsWith('/') && !trimmed.startsWith('//') && !trimmed.startsWith('/\\')) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (ALLOWED_URL_PROTOCOLS.has(parsed.protocol)) {
      return parsed.toString();
    }
  } catch {
    return '#';
  }

  return '#';
};

/**
 * Constructs a safe `mailto:` URI after validating the email address format.
 * Prevents `mailto:` query/header injection or scheme spoofing.
 */
export const sanitizeMailto = (email?: string): string => {
  if (!email || isUnfilled(email)) return '#contact';
  const trimmed = email.trim();
  if (!SAFE_EMAIL_PATTERN.test(trimmed)) return '#contact';
  return `mailto:${trimmed}`;
};

/**
 * Safely reads a key from `localStorage` without throwing in restricted/private browsing contexts.
 */
export const safeGetStorage = (key: string): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

/**
 * Safely writes a key/value pair to `localStorage` without throwing in restricted/private browsing contexts.
 */
export const safeSetStorage = (key: string, value: string): void => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage quota or SecurityError exceptions in restricted contexts
  }
};

/**
 * Resolves the preferred color theme from persisted storage or OS preference.
 */
export const getInitialTheme = (storageKey: string): 'light' | 'dark' => {
  const saved = safeGetStorage(storageKey);
  if (saved === 'dark' || saved === 'light') return saved;
  if (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
};

/**
 * Smoothly scrolls the window to the top of the document.
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Copies text to the clipboard and resolves to true on success.
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
