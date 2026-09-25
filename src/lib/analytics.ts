type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Props }) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const KEY = "yrt_src";

/** Reads ?src= on first load and keeps it for the session. Defaults to "direct". */
export function initSource() {
  if (typeof window === "undefined") return;
  const param = new URLSearchParams(window.location.search).get("src");
  if (param) sessionStorage.setItem(KEY, param.slice(0, 50));
  else if (!sessionStorage.getItem(KEY)) sessionStorage.setItem(KEY, "direct");
}

export function getSource(): string {
  if (typeof window === "undefined") return "direct";
  return sessionStorage.getItem(KEY) ?? "direct";
}

export function track(eventName: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(eventName, { props });
    if (eventName === "dm_click") window.fbq?.("track", "Contact");
  } catch {
    /* never break the page for analytics */
  }
}
