import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function About() {
  const BASE_URL = import.meta.env.BASE_URL || "/";
  return (
    <section
      id="sobre"
      className="relative px-4 py-20 md:px-8 overflow-hidden"
      style={{
        backgroundImage: `url("${BASE_URL}paper-black-texture.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center text-paper">
        <Reveal>
          <h5 className="text-champagne">Sorille - Sobre nós</h5>
          <h2 className="mt-4 text-paper font-display">
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
