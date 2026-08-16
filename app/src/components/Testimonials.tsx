import { GOOGLE_RATING, TESTIMONIALS } from "../data/content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-primary">Depoimentos</h2>
          <a
            href={GOOGLE_RATING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm text-slate-muted hover:text-accent-gold-deep"
          >
            <span className="font-display font-semibold text-accent-gold-deep">
              {GOOGLE_RATING.value.toFixed(1)} ★
            </span>
            {GOOGLE_RATING.name} — avaliações reais no Google
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 100}>
              <blockquote className="flex h-full flex-col gap-3 rounded-xl bg-surface-muted/40 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-slate-muted">{t.time}</p>
                  </div>
                </div>
                <p className="line-clamp-6 text-sm leading-relaxed text-text">“{t.text}”</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
