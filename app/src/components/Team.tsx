import { TEAM } from "../data/content";
import { Reveal } from "./Reveal";

export function Team() {
  const BASE_URL = import.meta.env.BASE_URL || "/";
  return (
    <section
      id="equipe"
      className="relative px-4 py-20 md:px-8 overflow-hidden"
      style={{
        backgroundImage: `url("${BASE_URL}sorille-sala-atendimento.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-black/70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl text-paper">
        <Reveal>
          <h2 className="text-center text-paper">Equipe</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 100} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="mx-auto h-40 w-40 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105 border-2 border-champagne/50"
              />
              <h3 className="mt-4 text-paper">{member.name}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
