import { CONTACT, WHATSAPP_URL } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-ink-charcoal px-4 py-14 text-secondary md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm leading-relaxed text-secondary/85">{CONTACT.address}</p>
        </div>

        <div>
          <h5 className="font-display text-sm font-semibold uppercase tracking-wide text-champagne">
            Contatos
          </h5>
          <ul className="mt-3 space-y-2 text-sm text-secondary/85">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold">
                {CONTACT.phones}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent-gold">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold">
                {CONTACT.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-display text-sm font-semibold uppercase tracking-wide text-champagne">Sobre:</h5>
          <p className="mt-3 text-sm leading-relaxed text-secondary/85">
            {CONTACT.about}
            <br />
            {CONTACT.responsible}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-secondary/60">
        <p>
          Desenvolvido e otimizado por{" "}
          <a href="https://www.selega.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold">
            Selega
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
