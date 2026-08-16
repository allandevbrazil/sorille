import { useState } from "react";
import { FAQS } from "../data/content";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-secondary px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-primary">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-surface-muted">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="py-2">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left font-display font-medium text-primary"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`shrink-0 text-accent-gold-deep transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm leading-relaxed text-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
