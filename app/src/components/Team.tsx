import { TEAM } from "../data/content";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equipe" className="bg-surface-muted/40 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-primary">
            Equipe
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 100} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="mx-auto h-40 w-40 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                {member.name}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
