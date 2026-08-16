import { WhatsAppButton } from "./WhatsAppButton"; 
import { Reveal } from "./Reveal"; 
import { GOOGLE_RATING } from "../data/content"; 

export function Hero() { 
  const BASE_URL = import.meta.env.BASE_URL || "/";
  return ( 
    <section 
      id="home" 
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-ink pt-24 pb-16 md:pt-28" 
    > 
      {/* Video Background */} 
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover" 
        src={`${BASE_URL}hero.mp4`} 
      />
      {/* Black Overlay - 70% opacity */} 
      <div 
        className="absolute inset-0 bg-black/70" 
      /> 
      {/* Content Container - Centered */} 
      <div className="relative mx-auto w-full max-w-4xl px-4 text-center"> 
        <Reveal> 
          <h1 className="text-paper"> 
            Transforme seu sorriso 
            <br /> com a excelência Sorille. 
          </h1> 
          <p className="mt-6 text-lg text-champagne font-body font-normal leading-relaxed max-w-2xl mx-auto"> 
            Tratamentos inovadores, atenção personalizada e resultados que vão além da 
          </p> 
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4"> 
            <WhatsAppButton 
              label="Agende sua consulta, viva essa transformação." 
            /> 
          </div> 
          <a 
            href={GOOGLE_RATING.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-paper/90 backdrop-blur-sm shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10" 
          > 
            <span className="font-display font-semibold text-accent-gold"> 
              {GOOGLE_RATING.value.toFixed(1)} ★ 
            </span> 
            <span className="font-body">Avaliação no Google — {GOOGLE_RATING.name}</span> 
          </a> 
        </Reveal> 
      </div> 
    </section> 
  ); 
}
