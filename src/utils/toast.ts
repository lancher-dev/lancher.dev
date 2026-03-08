/**
 * showToast — shows #toast for `duration` ms.
 * Use directly when you control the call site.
 */
export function showToast(duration = 1800): void {
  const el = document.getElementById("toast");
  if (!el) return;
  el.classList.replace("opacity-0", "opacity-100");
  el.classList.replace("translate-y-2", "translate-y-0");
  setTimeout(() => {
    el.classList.replace("opacity-100", "opacity-0");
    el.classList.replace("translate-y-0", "translate-y-2");
  }, duration);
}

/**
 * onCopy — zero-argument wrapper around showToast.
 * Pass directly to `.then()` without triggering the TS signature mismatch.
 *
 * @example
 *   navigator.clipboard.writeText(cmd).then(onCopy);
 */
export const onCopy = (): void => showToast();
