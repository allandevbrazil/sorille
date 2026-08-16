import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-paper px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h5 className="text-accent-gold-deep">Sorille - Sobre nós</h5>
          <h2 className="mt-4 text-ink">
            Seja bem-vindo à Sorille, clínica especializada em tratamentos odontológicos
            e estéticos em Sorocaba.
          </h2>
          <div className="mt-10">
            <WhatsAppButton label="Agende sua consulta." />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
