"use client";

/**
 * Adaptado de @kokonutui/morphic-navbar para navegacao por ancoras (single page)
 * e paleta da marca Sorille (DESIGN.md), preservando o efeito de capsula deslizante.
 */
import clsx from "clsx";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface MorphicNavbarProps {
  items: NavItem[];
  className?: string;
}

export function MorphicNavbar({ items, className }: MorphicNavbarProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

  const isActiveLink = (href: string) => activeHref === href;

  return (
    <nav className={clsx("flex items-center justify-center", className)}>
      <div className="glass flex items-center overflow-hidden rounded-full">
        {items.map(({ href, label }, index, array) => {
          const isActive = isActiveLink(href);
          const isFirst = index === 0;
          const isLast = index === array.length - 1;
          const prevHref = index > 0 ? array[index - 1].href : null;
          const nextHref = index < array.length - 1 ? array[index + 1].href : null;

          return (
            <a
              key={href}
              href={href}
              onClick={() => setActiveHref(href)}
              className={clsx(
                "flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium text-paper/80 transition-all duration-300",
                isActive
                  ? "mx-1 rounded-full bg-accent-gold font-semibold text-ink"
                  : clsx(
                      "hover:text-accent-gold",
                      (isActiveLink(prevHref || "") || isFirst) && "rounded-l-full",
                      (isActiveLink(nextHref || "") || isLast) && "rounded-r-full",
                    ),
              )}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default MorphicNavbar;
