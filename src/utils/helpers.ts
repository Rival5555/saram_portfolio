/**
 * Checks whether a configuration string is empty or still contains a bracketed placeholder (e.g. `[EMAIL]`).
 */
export const isUnfilled = (val?: string): boolean => {
  if (!val) return true;
  return val.includes('[') || val.includes(']');
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
