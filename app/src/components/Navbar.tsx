import { useState } from "react";
import { NAV_LINKS } from "../data/content";
import { WhatsAppButton } from "./WhatsAppButton";
import { MorphicNavbar } from "./kokonutui/morphic-navbar";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-ink/90 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="https://sorille.com.br" className="shrink-0">
          <img
            src="/images/logos-cos-alta-1.png"
            alt="Sorille - Centro Odontológico"
            width={119}
            height={62}
            className="h-12 w-auto md:h-14"
          />
        </a>

        <div className="hidden md:block">
          <MorphicNavbar items={NAV_LINKS} />
        </div>

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
            className={`h-0.5 w-6 bg-paper transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-paper transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-paper transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3 text-paper/85">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 transition-colors hover:text-accent-gold"
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