import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  TrendingUp,
  Globe2,
  Briefcase,
  DollarSign,
  Sparkles,
  Search,
  Target,
  Lightbulb,
  Rocket,
  LineChart,
  Building2,
  Compass,
  Zap,
  BarChart3,
  Handshake,
  Mail,
  User,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexon — Impulsamos empresas que quieren crecer más rápido" },
      {
        name: "description",
        content:
          "Consultoría estratégica, desarrollo comercial y marketing en oportunidades reales de crecimiento para empresas en expansión.",
      },
      { property: "og:title", content: "Nexon — Crecimiento estratégico" },
      {
        property: "og:description",
        content:
          "Impulsamos cada etapa de tu crecimiento con estrategia, inteligencia de mercado y growth marketing.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Nav />
      <Hero />
      <Logos />
      <Propuesta />
      <Metodologia />
      <Quienes />
      <Resultados />
      <Contacto />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#inicio" className="font-display font-semibold tracking-[0.3em] text-white text-sm">
          NEXON
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          size="sm"
          className="bg-brand hover:bg-brand-bright text-white rounded-full px-5 shadow-glow"
        >
          Iniciar Sesión
        </Button>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-stars text-white pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--navy-deep)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05]">
            Impulsamos empresas
            <br />
            que quieren crecer
            <br />
            <span className="text-gradient-brand">más rápido.</span>
          </h1>
        </div>
        <div className="space-y-6">
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
            Consultoría estratégica, desarrollo comercial y marketing en oportunidades reales
            de crecimiento.
          </p>
          <a href="#contacto">
            <Button className="bg-brand hover:bg-brand-bright rounded-full px-6 h-11 shadow-glow">
              Contáctanos <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOGOS ---------------- */
function Logos() {
  const logos = [
    "CAESGROUP",
    "fiancol",
    "MARÍTIMA",
    "Greet",
    "KOVIA",
    "WOW",
    "VICTORY",
    "OUTLIERS",
    "VITTORINO",
    "NetWifi",
  ];
  return (
    <section className="bg-ink py-12 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs tracking-[0.25em] text-white/50 mb-8">
          EMPRESAS QUE <span className="text-white">CONFÍAN</span> EN NOSOTROS
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-6 place-items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="font-display text-white/40 hover:text-white/80 transition-colors text-sm md:text-base tracking-wide"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROPUESTA (services bento) ---------------- */
function Propuesta() {
  return (
    <section id="servicios" className="bg-ink text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 mb-14">
          <div>
            <p className="text-xs tracking-[0.25em] text-brand-bright mb-4">NUESTRA PROPUESTA</p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Impulsamos cada etapa <span className="text-gradient-brand">de tu crecimiento</span>
            </h2>
          </div>
          <p className="text-white/60 self-end max-w-sm">
            Diseñamos estrategias integrales con la ejecución que tu negocio necesita para
            transformar oportunidades en resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <ServiceCard
            className="md:row-span-2"
            icon={<TrendingUp className="h-5 w-5" />}
            title="Estrategia de Crecimiento"
            desc="Diseñamos planes accionables basados en datos y objetivos claros para acelerar la expansión, generar valor y consolidar tu negocio."
            visual={<ChartGrowth />}
          />
          <ServiceCard
            icon={<Globe2 className="h-5 w-5" />}
            title="Inteligencia de Mercado"
            desc="Analizamos tendencias, competencia y oportunidades para identificar el siguiente paso de tu compañía."
            visual={<GlobeVisual />}
          />
          <ServiceCard
            icon={<Briefcase className="h-5 w-5" />}
            title="Desarrollo de Negocios"
            desc="Abrimos puertas y aceleramos oportunidades comerciales con un enfoque consultivo y orientado a resultados."
            visual={<BizVisual />}
          />
          <ServiceCard
            icon={<DollarSign className="h-5 w-5" />}
            title="Aceleración de Ingresos"
            desc="Optimizamos canales, conversión y pricing para acelerar el crecimiento de ingresos."
            visual={<FunnelVisual />}
          />
          <ServiceCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Growth marketing"
            desc="Combinamos performance, contenido y data para escalar adquisición de forma sostenible."
            visual={<GrowthVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  visual,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  visual?: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy to-ink p-6 shadow-card transition-all hover:border-brand-bright/40 ${className}`}
    >
      <div className="flex items-center gap-2 text-brand-bright mb-3">
        <span className="grid place-items-center h-8 w-8 rounded-lg bg-brand/15">{icon}</span>
        <h3 className="font-display font-semibold text-base">{title}</h3>
      </div>
      <p className="text-sm text-white/60 leading-relaxed mb-6">{desc}</p>
      {visual && <div className="mt-auto">{visual}</div>}
    </article>
  );
}

/* ---------------- Service visuals (pure SVG / divs) ---------------- */
function ChartGrowth() {
  return (
    <div className="space-y-4">
      <svg viewBox="0 0 300 110" className="w-full h-28">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.18 245)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.72 0.18 245)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,90 L40,80 L80,70 L120,55 L160,45 L200,30 L240,22 L300,10 L300,110 L0,110 Z"
          fill="url(#g1)"
        />
        <path
          d="M0,90 L40,80 L80,70 L120,55 L160,45 L200,30 L240,22 L300,10"
          fill="none"
          stroke="oklch(0.72 0.18 245)"
          strokeWidth="2"
        />
      </svg>
      <div className="text-3xl font-display font-bold text-brand-bright">+35%</div>
      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          ["128", "Leads"],
          ["64", "Cierres"],
          ["2.4M", "Pipeline"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-lg bg-white/5 py-2">
            <div className="text-sm font-semibold">{v}</div>
            <div className="text-[10px] text-white/50">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
function GlobeVisual() {
  return (
    <div className="relative h-32 grid place-items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.55_0.22_260/0.35),transparent_60%)]" />
      <svg viewBox="0 0 120 120" className="h-28 w-28 text-brand-bright/70">
        <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="60" cy="60" rx="50" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="60" cy="60" rx="50" ry="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="60" x2="110" y2="60" stroke="currentColor" strokeWidth="0.5" />
        <line x1="60" y1="10" x2="60" y2="110" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
function BizVisual() {
  return (
    <div className="grid grid-cols-5 gap-1 h-24 items-end">
      {[40, 60, 50, 80, 95].map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className="rounded-t bg-gradient-to-t from-brand to-brand-bright/80"
        />
      ))}
    </div>
  );
}
function FunnelVisual() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-3 w-32 bg-brand-bright/80 rounded-sm" />
      <div className="h-3 w-24 bg-brand-bright/60 rounded-sm" />
      <div className="h-3 w-16 bg-brand/80 rounded-sm" />
      <div className="h-3 w-10 bg-brand rounded-sm" />
    </div>
  );
}
function GrowthVisual() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-20">
      <path
        d="M0,70 C40,40 80,75 120,30 S180,10 200,15"
        fill="none"
        stroke="oklch(0.72 0.18 245)"
        strokeWidth="2"
      />
      <circle cx="200" cy="15" r="3" fill="oklch(0.72 0.18 245)" />
    </svg>
  );
}

/* ---------------- METODOLOGÍA ---------------- */
function Metodologia() {
  const steps = [
    {
      n: "01",
      title: "Entender tu negocio",
      desc: "Analizamos tus objetivos, equipo y operación para construir un punto de partida claro y compartido.",
      icon: <Search className="h-5 w-5" />,
      visual: "from-[oklch(0.45_0.12_260)] to-[oklch(0.25_0.08_265)]",
    },
    {
      n: "02",
      title: "Identificar oportunidades",
      desc: "Definimos las palancas de crecimiento con mayor potencial y los caminos para ejecutarlas.",
      icon: <Target className="h-5 w-5" />,
      visual: "from-[oklch(0.40_0.12_245)] to-[oklch(0.20_0.07_265)]",
    },
    {
      n: "03",
      title: "Diseñar estrategia",
      desc: "Construimos el plan, métricas y roadmap accionable alineado con tus prioridades.",
      icon: <Lightbulb className="h-5 w-5" />,
      visual: "from-[oklch(0.50_0.10_245)] to-[oklch(0.25_0.06_265)]",
    },
    {
      n: "04",
      title: "Escalar y ejecutar",
      desc: "Acompañamos la implementación con foco en ejecución, velocidad y resultados reales.",
      icon: <Rocket className="h-5 w-5" />,
      visual: "from-[oklch(0.55_0.12_240)] to-[oklch(0.30_0.07_265)]",
    },
    {
      n: "05",
      title: "Medir y optimizar",
      desc: "Iteramos sobre datos en tiempo real para mantener el crecimiento y mejorar cada ciclo.",
      icon: <LineChart className="h-5 w-5" />,
      visual: "from-[oklch(0.50_0.13_250)] to-[oklch(0.25_0.07_265)]",
    },
  ];

  return (
    <section id="nosotros" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs tracking-[0.25em] text-brand mb-4">NUESTRA METODOLOGÍA</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-ink">
            Un proceso claro para <span className="text-gradient-brand">alcanzar resultados</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Visión, enfoque e ideas accionables a la medida de cada uno de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <article
              key={s.n}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-card transition-shadow"
            >
              <div className="relative">
                <div className={`h-40 bg-gradient-to-br ${s.visual} grid place-items-center`}>
                  <div className="text-white/80">{s.icon}</div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 grid place-items-center h-9 w-9 rounded-full bg-card border border-brand/40 text-brand text-xs font-semibold">
                  {s.n}
                </div>
              </div>
              <div className="p-6 pt-8 text-center">
                <h3 className="font-display font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {[
            ["No solo diseñamos estrategias.", "Generamos crecimiento sostenible."],
            ["+200 procesos de transformación"],
            ["Equipos expertos en cada vertical"],
            ["Indicadores claros de éxito en cada proyecto"],
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <span className="grid place-items-center h-7 w-7 rounded-full bg-brand/10 text-brand mt-0.5">
                <Zap className="h-3.5 w-3.5" />
              </span>
              <div>
                {t.map((line, j) => (
                  <p
                    key={j}
                    className={j === 0 ? "font-semibold text-ink" : "text-muted-foreground"}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUIÉNES SOMOS ---------------- */
function Quienes() {
  return (
    <section className="relative bg-stars text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)] via-transparent to-[var(--navy-deep)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs tracking-[0.25em] text-brand-bright mb-4">¿QUIÉNES SOMOS?</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Impulsamos
            <br /> crecimiento y <br />
            <span className="text-gradient-brand">nuevas
            <br /> oportunidades</span>
          </h2>
          <p className="mt-6 text-white/70 max-w-md">
            En Nexon trabajamos con founders, ejecutivos y equipos comerciales que buscan
            transformar visión en ejecución.
          </p>
          <p className="mt-4 text-white/70 max-w-md">
            Nos posicionamos como un partner de confianza, no como proveedores: somos el aliado
            estratégico que acompaña cada etapa de tu viaje empresarial.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 self-center">
          {[
            ["+50", "Empresas transformadas"],
            ["+120", "Proyectos ejecutados"],
            ["3", "Países de operación"],
            ["92%", "Tasa de retención"],
            ["+8", "Años de experiencia"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="text-3xl md:text-4xl font-display font-semibold text-gradient-brand">
                {v}
              </div>
              <div className="mt-2 text-sm text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTADOS ---------------- */
function Resultados() {
  const items = [
    {
      icon: <Building2 className="h-4 w-4" />,
      tag: "Casos de éxito",
      title: "Expansión Comercial",
      desc: "Diseñamos modelos comerciales escalables y abrimos canales de venta clave para entrar a mercados nuevos con tracción real.",
      visual: <DotsBars />,
    },
    {
      icon: <Compass className="h-4 w-4" />,
      tag: "Crecimiento",
      title: "Nuevos Mercados",
      desc: "Acompañamos la entrada a mercados internacionales con estrategia de aterrizaje, partners y validación de demanda.",
      visual: <DotsConstellation />,
    },
    {
      icon: <Rocket className="h-4 w-4" />,
      tag: "Startups",
      title: "Escalamiento Startup",
      desc: "Trabajamos con founders para escalar adquisición, retención y operación sin perder enfoque ni capital.",
      visual: <RisingLine />,
    },
    {
      icon: <Sparkles className="h-4 w-4" />,
      tag: "Performance",
      title: "Growth marketing",
      desc: "Diseñamos motores de adquisición con experimentos continuos, atribución clara y unit economics saludables.",
      visual: <FunnelBig />,
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      tag: "Inteligencia",
      title: "Inteligencia Comercial",
      desc: "Datos accionables para decisiones de pricing, segmentación y forecast con impacto en revenue.",
      visual: <MetricKpi />,
    },
    {
      icon: <Handshake className="h-4 w-4" />,
      tag: "Partnerships",
      title: "Alianzas Estratégicas",
      desc: "Conectamos a tu compañía con partners que aceleran distribución, producto y posicionamiento.",
      visual: <NodeNetwork />,
    },
  ];
  return (
    <section className="bg-ink text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 mb-12">
          <div>
            <p className="text-xs tracking-[0.25em] text-brand-bright mb-4">NUESTROS RESULTADOS</p>
            <h2 className="text-3xl md:text-5xl font-semibold">
              Resultados que <span className="text-gradient-brand">generamos</span>
            </h2>
          </div>
          <p className="text-white/60 self-end max-w-sm">
            Casos reales de acompañamiento y ejecución que se convierten en nuevas oportunidades de
            crecimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy/60 to-ink p-6 hover:border-brand-bright/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-brand-bright text-[11px] tracking-widest uppercase mb-3">
                    <span className="grid place-items-center h-7 w-7 rounded-md bg-brand/15">
                      {it.icon}
                    </span>
                    {it.tag}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{it.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{it.desc}</p>
                </div>
                <div className="w-32 shrink-0">{it.visual}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DotsBars() {
  return (
    <div className="grid grid-cols-6 gap-1">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="h-2 w-2 rounded-sm"
          style={{
            background: i % 5 === 0 ? "oklch(0.72 0.18 245)" : "oklch(1 0 0 / 0.15)",
          }}
        />
      ))}
    </div>
  );
}
function DotsConstellation() {
  return (
    <svg viewBox="0 0 120 80" className="w-full">
      {[
        [20, 20],
        [50, 35],
        [80, 15],
        [30, 60],
        [70, 55],
        [100, 65],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.72 0.18 245)" />
      ))}
    </svg>
  );
}
function RisingLine() {
  return (
    <svg viewBox="0 0 120 70" className="w-full">
      <path
        d="M5,60 Q40,55 60,35 T115,10"
        fill="none"
        stroke="oklch(0.72 0.18 245)"
        strokeWidth="2"
      />
      <circle cx="115" cy="10" r="3" fill="oklch(0.72 0.18 245)" />
    </svg>
  );
}
function FunnelBig() {
  return (
    <div className="flex flex-col items-end gap-1">
      <div className="h-2 w-28 bg-brand-bright/80 rounded-sm" />
      <div className="h-2 w-20 bg-brand-bright/60 rounded-sm" />
      <div className="h-2 w-14 bg-brand/80 rounded-sm" />
      <div className="h-2 w-8 bg-brand rounded-sm" />
    </div>
  );
}
function MetricKpi() {
  return (
    <div className="rounded-lg bg-white/5 p-3 text-center">
      <div className="text-xs text-white/50">Conversión</div>
      <div className="text-2xl font-display font-semibold text-brand-bright">3.2x</div>
      <div className="text-[10px] text-emerald-300">+68%</div>
    </div>
  );
}
function NodeNetwork() {
  return (
    <svg viewBox="0 0 120 80" className="w-full">
      <line x1="20" y1="20" x2="60" y2="40" stroke="oklch(1 0 0 / 0.2)" />
      <line x1="60" y1="40" x2="100" y2="20" stroke="oklch(1 0 0 / 0.2)" />
      <line x1="60" y1="40" x2="90" y2="65" stroke="oklch(1 0 0 / 0.2)" />
      <circle cx="20" cy="20" r="4" fill="oklch(0.72 0.18 245)" />
      <circle cx="100" cy="20" r="4" fill="oklch(0.72 0.18 245)" />
      <circle cx="90" cy="65" r="4" fill="oklch(0.72 0.18 245)" />
      <circle cx="60" cy="40" r="6" fill="oklch(0.55 0.22 260)" />
    </svg>
  );
}

/* ---------------- CONTACTO ---------------- */
function Contacto() {
  return (
    <section id="contacto" className="bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.25em] text-brand mb-4">CONTACTO</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-ink">Conversemos</h2>
          <p className="mt-3 text-muted-foreground">
            Cuéntanos sobre tu próximo nivel, y agendemos una sesión inicial.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-card border border-border p-6 md:p-10 shadow-card grid gap-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field icon={<User className="h-4 w-4" />} label="Nombre completo" placeholder="Tu nombre" />
            <Field icon={<Building2 className="h-4 w-4" />} label="Empresa" placeholder="Nombre de la empresa" />
            <Field icon={<Mail className="h-4 w-4" />} label="Correo electrónico" type="email" placeholder="tucorreo@empresa.com" />
            <Field icon={<Phone className="h-4 w-4" />} label="Teléfono" placeholder="+57 300 000 0000" />
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">
              Mensaje
            </Label>
            <Textarea
              placeholder="Cuéntanos qué buscas y cómo podemos acompañarte."
              className="mt-2 min-h-32 resize-none"
            />
          </div>
          <Button
            type="submit"
            className="h-12 w-full bg-brand hover:bg-brand-bright text-white rounded-lg shadow-glow text-base"
          >
            Enviar mensaje <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode; label: string }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      <div className="mt-2 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
        <Input {...props} className="pl-9 h-11" />
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-ink text-white/60 py-14">
      <div className="mx-auto max-w-6xl px-6 text-center space-y-6">
        <div className="font-display font-semibold tracking-[0.4em] text-white">NEXON</div>
        <p className="max-w-2xl mx-auto text-sm">
          Impulsamos empresas que quieren crecer y consolidar nuevos mercados con estrategia,
          ejecución y un enfoque obsesionado por los resultados.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#inicio" className="hover:text-white">Inicio</a>
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#nosotros" className="hover:text-white">Nosotros</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </div>
        <div className="pt-6 border-t border-white/5 text-xs">
          © {new Date().getFullYear()} Nexon. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
