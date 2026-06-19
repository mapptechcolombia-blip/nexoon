import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Costumers } from "@/components/ui/costumers";
import { BentoServices } from "@/components/ui/bento-services";
import { Methodology } from "@/components/ui/methodology";
import { GrowthStories } from "@/components/ui/growth-stories";
import { About } from "@/components/ui/about";
import { Contact } from "@/components/ui/contact";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { getHeroContent } from "@/lib/queries/hero";
import { getCustomersContent } from "@/lib/queries/customers";
import { getServicesContent } from "@/lib/queries/services";
import { getGrowthStoriesContent } from "@/lib/queries/growth-stories";
import { getAboutContent } from "@/lib/queries/about";
import { getMethodologyContent } from "@/lib/queries/methodology";
import { getContactContent } from "@/lib/queries/contact";

const heroData = getHeroContent();
const customersData = getCustomersContent();
const servicesData = getServicesContent();
const growthStoriesData = getGrowthStoriesContent();
const aboutData = getAboutContent();
const methodologyData = getMethodologyContent();
const contactData = getContactContent();

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexoon — Impulsamos el crecimiento estratégico de tu empresa" },
      {
        name: "description",
        content:
          "Nexoon Group impulsa el crecimiento estratégico de empresas y startups mediante gestión comercial, desarrollo de negocios y marketing orientado a resultados.",
      },
      { property: "og:title", content: "Nexoon Group" },
      {
        property: "og:description",
        content: "Impulsamos crecimiento, expansión y nuevas oportunidades mediante estrategia, tecnología y desarrollo de negocios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NexoonLanding,
});

function NexoonLanding() {
  return (
    <MotionConfig reducedMotion="user">
      <Header links={heroData.nav.links} cta={heroData.nav.cta} href={heroData.nav.href} />
      <Hero />
      <Costumers logos={customersData.customers} />
      <BentoServices data={servicesData} />
      <Methodology data={methodologyData} />
      <About data={aboutData} />
      <GrowthStories data={growthStoriesData} />
      <Contact data={contactData} />
      <Footer />
      <FloatingWhatsAppButton />
    </MotionConfig>
  );
}
