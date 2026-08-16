import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-secondary px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent-gold-deep">
            Sorille - Sobre nós
          </h2>
          <h2 className="mt-3 font-display text-2xl font-semibold text-primary md:text-3xl">
            Seja bem-vindo à Sorille, clínica especializada em tratamentos odontológicos
            e estéticos em Sorocaba.
          </h2>
          <div className="mt-8">
            <WhatsAppButton label="Agende sua consullta." />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
