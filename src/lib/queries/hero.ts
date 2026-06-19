export interface NavLink {
  label: string;
  href: string;
}

export interface HeroNav {
  links: NavLink[];
  cta: string;
  href: string;
}

export interface HeroHeading {
  lines: string[];
  accent: string;
}

export interface HeroCta {
  text: string;
  href: string;
}

export interface HeroContent {
  nav: HeroNav;
  heading: HeroHeading;
  description: string;
  cta: HeroCta;
  watermark: string;
  particleCount: number;
}

export function getHeroContent(): HeroContent {
  return {
    nav: {
      links: [
        { label: "Inicio",      href: "#inicio" },
        { label: "Servicios",   href: "#servicios" },
        { label: "Metodología", href: "#metodologia" },
        { label: "Contacto",    href: "#contacto" },
      ],
      cta: "Hablemos",
      href: "https://api.whatsapp.com/send/?phone=573229603465&text=Hello%2C+I%E2%80%99m+interested+in+exploring+how+Nexon+can+help+our+company+enter+and+grow+in+the+Colombian+market.&type=phone_number&app_absent=0",
    },
    heading: {
      lines: ["Impulsamos empresas", "que quieren crecer"],
      accent: "más rápido.",
    },
    description:
      "Convertimos estrategia, desarrollo comercial y marketing en oportunidades reales de crecimiento.",
    cta: {
      text: "Contactanos",
      href: "#contacto",
    },
    watermark: "NEXON",
    particleCount: 24,
  };
}
