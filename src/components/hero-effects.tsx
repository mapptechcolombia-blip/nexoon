import { useMemo, useRef, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  floatX: number;
  floatY: number;
  colorIndex: number;
}

const PARTICLE_COLORS = ["#50CEFF", "#133ED8", "#020367"];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function HeroEffects({ particleCount }: { particleCount: number }) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: seededRandom(i * 7 + 1) * 100,
        y: seededRandom(i * 7 + 2) * 100,
        size: seededRandom(i * 7 + 3) * 3 + 1.5,
        duration: seededRandom(i * 7 + 4) * 12 + 14,
        delay: seededRandom(i * 7 + 5) * 6,
        floatX: (seededRandom(i * 7 + 6) - 0.5) * 70,
        floatY: (seededRandom(i * 7 + 7) - 0.5) * 70,
        colorIndex: i % 3,
      })),
    [particleCount],
  );

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = glowRef.current?.closest("[data-hero-card]") as HTMLElement | null;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Mouse-follow glow sentinel — used to locate the card via closest() */}
      <div ref={glowRef} aria-hidden className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(80,206,255,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Floating particles */}
      <div>
        {particles.map((p) => (
          <div
            key={p.id}
            aria-hidden
            className="absolute rounded-full pointer-events-none z-10"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: PARTICLE_COLORS[p.colorIndex],
              opacity: 0.35,
              filter: "blur(1px)",
              animation: `bgHeroFloat ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
              "--float-x": `${p.floatX}px`,
              "--float-y": `${p.floatY}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
