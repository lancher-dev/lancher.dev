/**
 * initTabs
 * Wires up accessible tab switching (ARIA role=tab / tabpanel).
 *
 * Tab buttons declare their own active/inactive classes via data attributes
 * so initTabs never hardcodes design tokens:
 *
 *   data-active-class="class-a class-b"    — applied when tab is selected
 *   data-inactive-class="class-c class-d"  — applied when tab is not selected
 *
 * Panels use opacity-0 + pointer-events-none to stay in the DOM and keep
 * the container height stable regardless of which panel is visible.
 */
export function initTabs(tabSelector: string, panelSelector: string): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>(tabSelector);
  const panels = document.querySelectorAll<HTMLElement>(panelSelector);

  function activate(tab: HTMLButtonElement): void {
    const targetId = tab.getAttribute("aria-controls");
    if (!targetId) return;

    // Deactivate all
    tabs.forEach((t) => {
      t.setAttribute("aria-selected", "false");
      const active = t.dataset.activeClass?.split(" ") ?? [];
      const inactive = t.dataset.inactiveClass?.split(" ") ?? [];
      t.classList.remove(...active);
      t.classList.add(...inactive);
    });

    panels.forEach((p) => {
      p.classList.add("opacity-0", "pointer-events-none");
      p.classList.remove("opacity-100");
    });

    // Activate target
    tab.setAttribute("aria-selected", "true");
    const active = tab.dataset.activeClass?.split(" ") ?? [];
    const inactive = tab.dataset.inactiveClass?.split(" ") ?? [];
    tab.classList.add(...active);
    tab.classList.remove(...inactive);

    const panel = document.getElementById(targetId);
    panel?.classList.remove("opacity-0", "pointer-events-none");
    panel?.classList.add("opacity-100");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab));
  });
}
