import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";
import { GOOGLE_RATING } from "../data/content";
import FlowField from "./kokonutui/flow-field";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink pt-24 pb-16 md:pt-28"
    >
      {/* Overdrive (KokonutUI Flow Field) — somente background do Hero, atrás do conteúdo. */}
      <div className="absolute inset-0 -z-10">
        <FlowField theme="gold" density="medium" className="h-full">
          <span />
        </FlowField>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:px-8">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold leading-tight text-paper md:text-5xl lg:text-6xl">
            Transforme seu sorriso
            <br /> com a excelência Sorille.
          </h1>
          <h3 className="mt-4 font-display text-lg font-normal text-champagne md:text-xl">
            Tratamentos inovadores, atenção personalizada e resultados que vão além da
            estética.
          </h3>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Agende sua consullta, viva esssa transformação." />
          </div>

          <a
            href={GOOGLE_RATING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-paper/90 backdrop-blur-sm shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <span className="font-display font-semibold text-accent-gold">
              {GOOGLE_RATING.value.toFixed(1)} ★
            </span>
            <span>Avaliação no Google — {GOOGLE_RATING.name}</span>
          </a>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto aspect-square w-full max-w-md">
          <img
            src="/images/imgPlaceholder-6.jpg"
            alt="Sorille - Centro Odontológico"
            className="h-full w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
          />
        </Reveal>
      </div>
    </section>
  );
}

