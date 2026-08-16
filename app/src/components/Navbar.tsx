import { useState } from "react";
import { NAV_LINKS } from "../data/content";
import { WhatsAppButton } from "./WhatsAppButton";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-paper/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="https://sorille.com.br" className="shrink-0">
          <img
            src="/images/logos-cos-alta-1.png"
            alt="Sorille - Centro Odontológico"
            width={119}
            height={62}
            className="h-12 w-auto md:h-14"
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 font-body text-sm font-medium text-text">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 transition-colors duration-200 hover:text-accent-gold-deep after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton label="Fale conosco" className="px-4 py-2 text-sm" />
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-surface-muted bg-paper md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3 font-body text-text">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 transition-colors hover:text-accent-gold-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <WhatsAppButton label="Fale conosco" className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
