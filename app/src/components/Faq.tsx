import { useState } from "react";
import { FAQS } from "../data/content";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-paper px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal variant="fade-up">
          <h2 className="text-center text-ink">Perguntas Frequentes</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-surface-muted">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} variant="fade-up" delay={i * 80}>
                <div className="py-2">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    onMouseDown={() => {}}
                    onMouseUp={() => {}}
                    className="group flex w-full items-center justify-between gap-4 py-4 text-left text-ink font-accent transition-colors duration-200 hover:text-accent-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:active:scale-100"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span
                      className={`shrink-0 text-accent-gold-deep transition-transform duration-300 ease-out group-hover:scale-110 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden pt-2">
                      <p className="pb-4 text-sm leading-relaxed text-text animate-fade-in">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
