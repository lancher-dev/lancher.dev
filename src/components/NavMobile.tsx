import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import { fmt } from "@/utils/helpers";

interface Props {
  stars?: number | null;
  navigation: CollectionEntry<"navigation">["data"][];
}

export default function NavMobile({ stars, navigation }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground-muted hover:text-foreground-bright flex flex-col gap-[5px] p-1 transition-colors md:hidden"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block h-px w-5 bg-current transition-all duration-200 ${isOpen ? "translate-y-[6px] rotate-45" : ""}`}
        />
        <span
          className={`block h-px w-5 bg-current transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-px bg-current transition-all duration-200 ${isOpen ? "w-5 -translate-y-[6px] -rotate-45" : "w-3"}`}
        />
      </button>

      <div
        className={`col-span-2 overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "mt-1 max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-border-dark border-t pt-4 pb-3"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-3">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground-secondary hover:text-foreground-bright block font-mono text-[0.85rem] no-underline transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/lancher-dev/lancher"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-foreground-muted border-border hover:border-primary-dark hover:text-primary-light inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-[0.82rem] no-underline transition-colors"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
                {stars !== null && stars !== undefined && (
                  <span className="text-foreground-secondary flex items-center gap-1">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="opacity-60"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {fmt(stars)}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
