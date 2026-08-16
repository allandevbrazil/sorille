import { SERVICES } from "../data/content";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicos" className="bg-surface-muted/40 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-ink">
            Nossos Serviços
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article
                className={`group h-full overflow-hidden rounded-xl bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  service.highlight ? "ring-1 ring-accent-gold/60" : ""
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-5 text-sm leading-relaxed text-text">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
