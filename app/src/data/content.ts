export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5515991152320&text=Ol%C3%A1%2C+vim+do+website%2C+desejo+informa%C3%A7%C3%B5es+sobre+atendimento.";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#especialistas", label: "Especialistas" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export interface Service {
  title: string;
  description: string;
  image: string;
  highlight?: boolean;
}

export const SERVICES: Service[] = [
  {
    title: "Faceta Realista",
    description:
      "As facetas realistas são laminados finos aplicados sobre os dentes para corrigir cor, forma, pequenas imperfeições e espaçamentos, com aspecto natural e discreto. Utilizamos técnicas modernas e materiais de última geração para transformar o sorriso com leveza e sofisticação, respeitando a individualidade de cada paciente. Indicado para quem busca um sorriso mais harmônico sem exageros, o tratamento com facetas exige planejamento detalhado e acompanhamento profissional.",
    image: "images/imgPlaceholder-6.jpg",
    highlight: true,
  },
  {
    title: "Implantodontia",
    description:
      "Implantes dentários são a solução mais moderna, segura e duradoura para substituir dentes perdidos. Proporcionam suporte para próteses fixas ou removíveis, devolvendo função mastigatória e estética ao sorriso.",
    image: "images/imgPlaceholder.jpg",
    highlight: true,
  },
  {
    title: "Odontopediatria",
    description:
      "Cuidamos com carinho dos sorrisos que estão começando a nascer. A odontopediatria é voltada à saúde bucal de bebês, crianças e gestantes, com foco em prevenção, conforto e acolhimento em cada atendimento.",
    image: "images/imgPlaceholder-7.jpg",
  },
  {
    title: "Endodontia (Tratamento de Canal)",
    description:
      "O tratamento de canal é essencial para salvar dentes comprometidos por cáries profundas ou traumas. Com técnicas modernas e sem dor, removemos a inflamação do canal radicular, aliviando a dor e preservando o dente natural.",
    image: "images/imgPlaceholder-1.jpg",
  },
  {
    title: "Cirurgia Ortognática",
    description:
      "Indicada para corrigir alterações ósseas da face, a cirurgia ortognática melhora a função mastigatória, respiração, fala e estética facial. É feita em conjunto com a ortodontia para resultados completos e duradouros.",
    image: "images/imgPlaceholder-4.jpg",
  },
  {
    title: "Periodontia",
    description:
      "A periodontia cuida da saúde da gengiva e do osso que sustenta os dentes. Tratamos gengivite, periodontite e outros problemas periodontais com atenção à estética e à prevenção da perda dentária.",
    image: "images/imgPlaceholder-8.jpg",
  },
  {
    title: "Ortodontia e Ortopedia Funcional",
    description:
      "Alinhamos dentes e corrigimos alterações ósseas com tratamentos personalizados, desde aparelhos fixos e estéticos até ortopedia funcional para crianças. Garantimos função e harmonia facial em todas as idades.",
    image: "https://sorille.com.br/storage/2025/08/cardImage.jpg",
  },
  {
    title: "DTM",
    description:
      "(Disfunção Temporomandibular). Tratamos dores na articulação da mandíbula, estalos, bruxismo e desconfortos musculares com abordagem multidisciplinar. Promovemos alívio, equilíbrio funcional e qualidade de vida.",
    image: "https://sorille.com.br/storage/2025/08/imgPlaceholder-5.jpg",
  },
  {
    title: "Dentística Estética",
    description:
      "Sorrisos harmônicos e naturais com restaurações estéticas, fechamento de diastemas, correção de desgastes e clareamento dental. Trabalhamos com materiais de alta tecnologia para resultados duradouros.",
    image: "https://sorille.com.br/storage/2025/08/imgPlaceholder-9.jpg",
  },
  {
    title: "Cirurgias Odontológicas",
    description:
      "Realizamos extrações de terceiros molares (dentes do siso), remoção de lesões, frenectomias e cirurgias pré-protéticas com segurança e planejamento, sempre priorizando seu conforto.",
    image: "https://sorille.com.br/storage/2025/08/imgPlaceholder-2.jpg",
  },
  {
    title: "Harmonização Orofacial",
    description:
      "Valorizamos sua beleza natural, preenchimentos, bioestimuladores e skinbooster. Realce sua autoestima com resultados sutis, seguros e personalizados.",
    image: "https://sorille.com.br/storage/2025/08/cardImage-2.jpg",
    highlight: true,
  },
  {
    title: "Clínico Geral",
    description:
      "Oferecemos cuidados odontológicos essenciais como limpeza, restaurações, extrações simples e diagnóstico preventivo. É a porta de entrada para manter a saúde bucal em dia com confiança e proximidade.",
    image: "https://sorille.com.br/storage/2025/08/cardImage-3.jpg",
  },
  {
    title: "Prótese Dentária",
    description:
      "Indicada para repor dentes ausentes, a prótese dentária devolve função mastigatória, estética e autoestima. Trabalhamos com próteses fixas, removíveis, totais e parciais, sempre respeitando as necessidades e expectativas de cada paciente. Com planejamento cuidadoso e materiais de alta qualidade, proporcionamos conforto, naturalidade e segurança no seu dia a dia. Nosso objetivo é reabilitar o sorriso com harmonia, preservando ao máximo a saúde bucal e a qualidade de vida.",
    image: "https://sorille.com.br/storage/2025/08/cardImage-1.jpg",
  },
  {
    title: "Aparelho Invisível",
    description:
      "O aparelho invisível alinha dentes com alinhadores sob medida, corrigindo espaçamentos e mordidas em até 6 meses. Discreto, removível e confortável, permite resultados visíveis já no primeiro mês de uso.",
    image: "https://sorille.com.br/storage/2025/08/imgPlaceholder-3.jpg",
  },
];

export interface Testimonial {
  name: string;
  time: string;
  text: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dayane P.",
    time: "19 May 24",
    text: "Atendimento maravilhoso, com todo o cuidado e atenção, após a cirurgia recebi mensagens para saber como estava sendo minha recuperação. Indico a todos, eu não troco.",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_347c3fd724940489ad67f3977460828b.jpg",
  },
  {
    name: "Rafael Caliman F.",
    time: "17 May 24",
    text: "Com certeza o C.O.S é um lugar onde tem profissionais de confiança….",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_f3dd4f547b22d35dac4fa934c5d50aa5.jpg",
  },
  {
    name: "Lidiane G.",
    time: "14 May 24",
    text: "Melhor centro de odontologia com a melhor recepcionista e as melhores dentistas 🙌🏻❤️.",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_1932db703ada5b6018d0000279575a3b.jpg",
  },
  {
    name: "Gisa D.",
    time: "06 Mar 24",
    text: "Nem sei como encontrei a Dra Bárbara, mas eu arrisco dizer: Eu acho que foi a sorte! Ela é odontopediatra da minha filha tem mais de 1 ano. É muito atenciosa, sempre explica muito bem sobre os movimentos que o aparelho móvel tem feito nos dentes da minha filha e sempre reforça a importância do uso diariamente. O local é muito limpo e agradável e a secretária sempre atenciosa. Quando alguém pede indicação de odontopediatra ou ortodontista, seja no grupo do condomínio onde moro ou no grupo de pais da escola eu sempre a indico. Pq ela realmente é uma excelente profissional!",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_e657a60bdee4c0adb61a49fa61d2c693.jpg",
  },
  {
    name: "Fernando Q.",
    time: "21 Feb 24",
    text: "Desde o primeiro contato, fui muito bem acolhido pela Dra. Bárbara e pela Vânia. Sou um caso complexo mas o resultado tem sido exitoso, graças à expertise da doutora e de toda a equipe. Além disso, a doutora me permite participar ativamente das decisões do tratamento. Recomendo fortemente",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_90986a9d7f54b969d0d96c5ca386efff.jpg",
  },
  {
    name: "Franciély M.",
    time: "09 Feb 24",
    text: "Sou paciente a 5 anos e não largo! Só tenho a agradecer, equipe sempre atenciosa e simpática, perfeito desde o primeiro contato. Ambiente organizado e com ótima localização. Agradecimento especial as Dras, atendimento com muito respeito e carinho, estou amando meu sorriso! 🤩🤍",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_fe76c29694aae17a5d49e345eb38ae09.jpg",
  },
  {
    name: "Alessandra L.",
    time: "09 Feb 24",
    text: "Já passo há meses com a Dra. Barbara excelente profissional de muita confiança e profissionalismo.",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_b8fcd8d8fb5cc84c35e333ae4ed4b238.jpg",
  },
  {
    name: "Aya Y.",
    time: "09 Feb 24",
    text: "Sempre receptivas e muito simpáticas!",
    avatar:
      "https://sorille.com.br/storage/2025/09/ChIJ8WV2IpqKxZQRtp8U9n29T1Q_d37fa85f6269162a913ec566770155bc.jpg",
  },
];

export const GOOGLE_RATING = {
  value: 4.9,
  name: "Sorille - Odontologia Especializada",
  url: "https://search.google.com/local/reviews?placeid=ChIJ8WV2IpqKxZQRtp8U9n29T1Q",
};

export interface SpecialistHighlight {
  name: string;
  bio: string;
  cro: string;
}

export const SPECIALIST_HIGHLIGHTS: SpecialistHighlight[] = [
  {
    name: "Dra. Bárbara Tózi Andrade",
    bio: "Especialista em ortodontia e ortopedia funcional dos maxilares. Atua com facetas realistas em resina, devolvendo estética e naturalidade ao sorriso.",
    cro: "CRO 113439/SP",
  },
  {
    name: "Dra. Lia Biruel",
    bio: "Implantodontista e Clínico Geral com foco em reabilitação oral e estética. Atua também como clínico geral.",
    cro: "CRO 162527/SP",
  },
];

export interface TeamMember {
  name: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  { name: "Dra. Lia Biruel", image: "https://sorille.com.br/storage/2025/08/Mask-group.png" },
  { name: "Dra. Bárbara Tózi Andrade", image: "https://sorille.com.br/storage/2025/08/barbara.png" },
  { name: "Vânia Pureza", image: "https://sorille.com.br/storage/2025/08/vania.png" },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "Preciso marcar consulta para fazer limpeza?",
    answer: "Sim. É necessário agendar para garantir o horário e o atendimento sem espera.",
  },
  {
    question: "Vocês atendem convênios?",
    answer:
      "Sim. Trabalhamos com diversos convênios odontológicos. Consulte nossa equipe para confirmar se o seu plano é aceito.",
  },
  {
    question: "Qual é a idade ideal para colocar aparelho ortodôntico?",
    answer: "Não existe uma idade exata, mas a partir dos 6 anos já é possível avaliar a necessidade do tratamento.",
  },
  {
    question: "Fazem clareamento dental?",
    answer: "Sim. Oferecemos clareamento em consultório e orientações para clareamento caseiro supervisionado.",
  },
  {
    question: "A limpeza dói?",
    answer: "Não costuma doer. Pode causar apenas uma leve sensibilidade, que passa rapidamente",
  },
  {
    question: "Quanto tempo demora para fazer uma restauração?",
    answer: "Na maioria dos casos, entre 30 e 60 minutos, dependendo do tamanho da área a ser tratada.",
  },
  {
    question: "Vocês fazem implantes dentários?",
    answer: "Sim. Realizamos implantes para reposição de dentes perdidos, devolvendo estética e função mastigatória.",
  },
  {
    question: "Qual é o horário de atendimento?",
    answer: "Segunda a sexta, das 9h às 19h. Consulte a equipe para horários especiais.",
  },
  {
    question: "Para que servem as facetas dentárias?",
    answer: "Melhoram a estética do sorriso, corrigindo cor, forma e pequenos desalinhamentos.",
  },
];

export const CONTACT = {
  address: "Avenida: Gisele Constantino 1850- Campolim. Iguatemi Business Sala 1301",
  phones: "(15) 99115-2320 / (15) 3318-6153",
  email: "contato@sorille.com.br",
  instagram: "@sorilleodontologia",
  instagramUrl: "https://www.instagram.com/sorilleodontologia/",
  about:
    "A Sorille é a principal solução para os seus problemas odontológicos. Atendemos em Sorocaba-SP, Votorantim-SP.",
  responsible: "Responsável técnica: Bárbara Éllen Tózi Andrade CRO113439SP",
};
