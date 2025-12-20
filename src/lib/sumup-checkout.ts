export const SUMUP_CHECKOUT_ID_KEY = "sumup_last_checkout_id";
export const SUMUP_CHECKOUT_TS_KEY = "sumup_last_checkout_ts";

const COOKIE_NAME = "sumup_last_checkout_id";
const DEFAULT_MAX_AGE_SECONDS = 2 * 60 * 60; // 2h

function getCookie(name: string): string | null {
  try {
    const parts = document.cookie.split(";").map((p) => p.trim());
    const found = parts.find((p) => p.startsWith(`${name}=`));
    if (!found) return null;
    return decodeURIComponent(found.substring(name.length + 1));
  } catch {
    return null;
  }
}

function setCookie(value: string, maxAgeSeconds: number) {
  try {
    const host = window.location.hostname;
    const base = `${COOKIE_NAME}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax; Secure`;

    // Toujours écrire le cookie "hôte" (www ou racine)
    document.cookie = base;

    // Et aussi un cookie cross-subdomain quand on est sur logo-foot.com
    if (host.endsWith("logo-foot.com")) {
      document.cookie = `${base}; Domain=.logo-foot.com`;
    }
  } catch {
    // ignore
  }
}

export function persistSumupCheckoutId(checkoutId: string) {
  try {
    localStorage.setItem(SUMUP_CHECKOUT_ID_KEY, checkoutId);
    localStorage.setItem(SUMUP_CHECKOUT_TS_KEY, String(Date.now()));
  } catch {
    // ignore
  }

  setCookie(checkoutId, DEFAULT_MAX_AGE_SECONDS);
}

export function readPersistedSumupCheckoutId(maxAgeMs = DEFAULT_MAX_AGE_SECONDS * 1000): string | null {
  try {
    const storedId = localStorage.getItem(SUMUP_CHECKOUT_ID_KEY);
    const ts = Number(localStorage.getItem(SUMUP_CHECKOUT_TS_KEY) || 0);
    if (storedId && ts && Date.now() - ts < maxAgeMs) return storedId;
  } catch {
    // ignore
  }

  // Fallback cross-subdomain
  return getCookie(COOKIE_NAME);
}

export function clearPersistedSumupCheckoutId() {
  try {
    localStorage.removeItem(SUMUP_CHECKOUT_ID_KEY);
    localStorage.removeItem(SUMUP_CHECKOUT_TS_KEY);
  } catch {
    // ignore
  }

  // Clear cookie (avec et sans Domain pour couvrir les 2 cas)
  try {
    document.cookie = `${COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
    document.cookie = `${COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax; Secure; Domain=.logo-foot.com`;
  } catch {
    // ignore
  }
}
