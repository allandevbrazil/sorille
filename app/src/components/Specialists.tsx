import { SPECIALIST_HIGHLIGHTS } from "../data/content";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Specialists() {
  return (
    <section id="especialistas" className="bg-ink-charcoal px-4 py-20 text-paper md:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center">Conheça nossas especialistas</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {SPECIALIST_HIGHLIGHTS.map((s, i) => (
            <Reveal key={s.name} delay={i * 120}>
              <div className="rounded-xl border border-white/10 p-6">
                <h3 className="text-champagne">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/85">{s.bio}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-paper/60">{s.cro}</p>
                <div className="mt-5">
                  <WhatsAppButton label="Agende sua consulta." variant="outline" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
