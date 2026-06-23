import { a as __toESM } from "../_runtime.mjs";
import { a as LazyMotion, i as MotionConfig, n as domAnimation, r as m, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { C as ChartColumn, S as ChartNoAxesColumn, _ as Globe, a as TrendingUp, b as PenLine, c as Send, d as Phone, f as MessageSquare, g as Handshake, h as Mail, i as User, l as Search, m as Megaphone, n as X, o as Target, p as Menu, r as Users, s as Store, t as Zap, u as Rocket, v as Crosshair, x as Earth, y as Building2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B1wi7p-_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card",
		className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
			destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function getHeroContent() {
	return {
		nav: {
			links: [
				{
					label: "Inicio",
					href: "#inicio"
				},
				{
					label: "Servicios",
					href: "#servicios"
				},
				{
					label: "Metodología",
					href: "#metodologia"
				},
				{
					label: "Contacto",
					href: "#contacto"
				}
			],
			cta: "Hablemos",
			href: "https://api.whatsapp.com/send/?phone=573229603465&text=Hello%2C+I%E2%80%99m+interested+in+exploring+how+Nexon+can+help+our+company+enter+and+grow+in+the+Colombian+market.&type=phone_number&app_absent=0"
		},
		heading: {
			lines: ["Impulsamos empresas", "que quieren crecer"],
			accent: "más rápido."
		},
		description: "Convertimos estrategia, desarrollo comercial y marketing en oportunidades reales de crecimiento.",
		cta: {
			text: "Contactanos",
			href: "#contacto"
		},
		watermark: "NEXON",
		particleCount: 24
	};
}
var PARTICLE_COLORS = [
	"#50CEFF",
	"#133ED8",
	"#020367"
];
function seededRandom(seed) {
	const x = Math.sin(seed) * 1e4;
	return x - Math.floor(x);
}
function HeroEffects({ particleCount }) {
	const particles = (0, import_react.useMemo)(() => Array.from({ length: particleCount }, (_, i) => ({
		id: i,
		x: seededRandom(i * 7 + 1) * 100,
		y: seededRandom(i * 7 + 2) * 100,
		size: seededRandom(i * 7 + 3) * 3 + 1.5,
		duration: seededRandom(i * 7 + 4) * 12 + 14,
		delay: seededRandom(i * 7 + 5) * 6,
		floatX: (seededRandom(i * 7 + 6) - .5) * 70,
		floatY: (seededRandom(i * 7 + 7) - .5) * 70,
		colorIndex: i % 3
	})), [particleCount]);
	const glowRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const card = glowRef.current?.closest("[data-hero-card]");
		if (!card) return;
		const handleMouseMove = (e) => {
			const rect = card.getBoundingClientRect();
			card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
			card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: glowRef,
		"aria-hidden": true,
		className: "absolute inset-0 z-10 pointer-events-none",
		style: { background: "radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(80,206,255,0.08) 0%, transparent 60%)" }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "absolute rounded-full pointer-events-none z-10",
		style: {
			left: `${p.x}%`,
			top: `${p.y}%`,
			width: `${p.size}px`,
			height: `${p.size}px`,
			background: PARTICLE_COLORS[p.colorIndex],
			opacity: .35,
			filter: "blur(1px)",
			animation: `bgHeroFloat ${p.duration}s ease-in-out infinite`,
			animationDelay: `${p.delay}s`,
			"--float-x": `${p.floatX}px`,
			"--float-y": `${p.floatY}px`
		}
	}, p.id)) })] });
}
var data = getHeroContent();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inicio",
		className: "flex w-full overflow-x-hidden flex-col items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full p-2 md:h-screen",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-hero-card": true,
				className: "relative w-full min-h-[60vh] md:h-full border-[#133ED8]/30 rounded-[32px] overflow-hidden shadow-2xl p-0 gap-0",
				style: {
					background: "#111111",
					"--mouse-x": "50%",
					"--mouse-y": "50%",
					boxShadow: "0 25px 60px rgba(2,3,103,0.5), 0 0 0 1px rgba(19,62,216,0.2)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 z-10 pointer-events-none",
						style: {
							backgroundSize: "40px 40px",
							backgroundImage: "linear-gradient(to right, rgba(80,206,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(80,206,255,0.04) 1px, transparent 1px)",
							maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
							WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 z-10 pointer-events-none",
						style: { background: "linear-gradient(135deg, rgba(2,3,103,0.55) 0%, rgba(19,62,216,0.18) 50%, rgba(80,206,255,0.10) 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 z-10 pointer-events-none",
						style: { background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(80,206,255,0.18) 0%, rgba(19,62,216,0.08) 45%, transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute bottom-[-220px] left-1/2 -translate-x-1/2 z-10 pointer-events-none",
						style: {
							width: "900px",
							height: "450px",
							background: "radial-gradient(ellipse at center top, rgba(80,206,255,0.25) 0%, rgba(19,62,216,0.18) 30%, rgba(2,3,103,0.08) 55%, transparent 70%)",
							filter: "blur(8px)",
							animation: "bgHeroPulse 800ms ease-in-out infinite"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none font-black leading-none whitespace-nowrap tracking-widest text-[100px] md:text-[160px] lg:text-[300px]",
						style: {
							color: "transparent",
							WebkitTextStroke: "1px rgba(80,206,255,0.06)"
						},
						children: data.watermark
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroEffects, { particleCount: data.particleCount }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-30 flex flex-col h-full pt-20 justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col lg:flex-row lg:items-center px-6 md:px-10 pb-12 pt-8 gap-8 lg:gap-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-6 lg:w-[65%]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight",
									children: [data.heading.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [line, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})] }, line)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											background: "linear-gradient(90deg, #133ED8 0%, #50CEFF 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text"
										},
										children: data.heading.accent
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-6 lg:w-[35%] lg:justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base md:text-lg leading-relaxed",
									style: { color: "rgba(255, 255, 255, 0.81)" },
									children: data.description
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: data.cta.href,
									rel: "noopener noreferrer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "lg",
										className: "font-semibold px-6 h-11 gap-2 rounded-lg border-0 w-fit",
										style: {
											background: "linear-gradient(135deg, #020367 0%, #133ED8 55%, #50CEFF 100%)",
											color: "#ffffff",
											boxShadow: "0 6px 28px rgba(80,206,255,0.28)"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-4 h-4" }), data.cta.text]
									})
								})]
							})]
						})
					})
				]
			})
		})
	});
}
function useScroll(threshold = 10) {
	return (0, import_react.useSyncExternalStore)((onStoreChange) => {
		window.addEventListener("scroll", onStoreChange, { passive: true });
		return () => window.removeEventListener("scroll", onStoreChange);
	}, () => window.scrollY > threshold, () => false);
}
function WhatsAppIcon$1({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		x: "0px",
		y: "0px",
		width: "100",
		height: "100",
		viewBox: "0 0 48 48",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#cfd8dc",
				d: "M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#40c351",
				d: "M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				fillRule: "evenodd",
				d: "M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z",
				clipRule: "evenodd"
			})
		]
	});
}
function Header({ links, cta, href }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const scrolled = useScroll(200);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: `fixed inset-x-0 top-4 z-50 mx-auto w-full lg:max-w-[calc(100%-4rem)] transition-all duration-300 ${scrolled ? "backdrop-blur-lg bg-white/80 border-b border-gray-200 rounded-lg shadow-lg" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#inicio",
						className: "flex-shrink-0 hover:opacity-80 transition-opacity",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: scrolled ? "/logotipo_black.svg" : "/logotipo_white.svg",
							alt: "Nexoon logo",
							width: 120,
							height: 120,
							className: "rounded-lg transition-opacity duration-300"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2",
						children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: `cursor-pointer text-sm font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/5 block ${scrolled ? "text-gray-700 hover:bg-gray-100 hover:bg-blue/5 block" : ""}`,
							style: { color: scrolled ? void 0 : "rgba(252, 253, 253, 0.75)" },
							children: item.label
						}) }, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden md:flex flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "font-semibold text-sm h-9 px-4 gap-2 rounded-lg border-0",
							style: {
								background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)",
								color: "#ffffff",
								boxShadow: "0 4px 20px rgba(80,206,255,0.30)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon$1, { className: "w-8 h-8" }), cta]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `md:hidden p-2 rounded-md transition-colors ${scrolled ? "hover:bg-gray-100 text-gray-700" : "hover:bg-white/5"}`,
						style: { color: scrolled ? void 0 : "rgba(253, 253, 253, 0.75)" },
						onClick: () => setOpen((v) => !v),
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `overflow-hidden rounded-xl transition-all duration-300 ease-in-out md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
				style: {
					background: "rgba(17,17,17,0.97)",
					backdropFilter: "blur(8px)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1 px-4 py-4",
					children: [links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "text-sm font-medium py-2.5 border-b border-white/5 last:border-0",
						style: { color: "rgba(255, 255, 255, 0.75)" },
						children: item.label
					}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setOpen(false),
						className: "w-fit mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "font-semibold text-sm h-9 px-4 gap-2 rounded-lg border-0 w-fit",
							style: {
								background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)",
								color: "#ffffff"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon$1, { className: "w-4 h-4" }), cta]
						})
					})]
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-white/10",
		style: { background: "#0A0D1A" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logotipo_white.svg",
							alt: "Nexoon Group",
							width: 120,
							height: 40,
							className: "h-10 w-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-sm text-slate-400",
						children: "Impulsamos crecimiento, expansión y nuevas oportunidades mediante estrategia, tecnología y desarrollo de negocios."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-wrap justify-center gap-6 text-sm text-slate-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#inicio",
								className: "transition hover:text-white",
								children: "Inicio"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#servicios",
								className: "transition hover:text-white",
								children: "Servicios"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#metodologia",
								className: "transition hover:text-white",
								children: "Metodología"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contacto",
								className: "transition hover:text-white",
								children: "Contacto"
							}) })
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-24 bg-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-500",
						children: "© 2026 Nexoon Group. Todos los derechos reservados."
					})
				]
			})
		})
	});
}
function Costumers({ logos, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-6 text-center font-medium text-lg text-muted-foreground  md:text-2xl text-sm leading-4 uppercase",
			children: [
				"Empresas que",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-primary",
					children: "confían"
				}),
				" en nosotros."
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("rounded-2xl overflow-hidden", className),
			style: {
				background: "#0d0f1a",
				border: "1px solid rgba(19,62,216,0.25)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center",
				children: logos.map((logo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoCard, {
					logo,
					index,
					total: logos.length
				}, logo.alt))
			})
		})]
	});
}
function LogoCard({ logo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex items-center justify-center px-10 py-10 md:px-16 md:py-12 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5",
		style: {
			borderRight: "1px solid rgba(19,62,216,0.15)",
			borderBottom: "1px solid rgba(19,62,216,0.15)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			alt: logo.alt,
			src: logo.src,
			className: "absolute inset-0 w-full h-full object-contain pointer-events-none select-none brightness-0 invert opacity-70 transition-opacity duration-300 hover:opacity-100 scale-75"
		})
	});
}
var iconMap$3 = {
	TrendingUp,
	Target,
	Handshake,
	Zap,
	Megaphone
};
var spans = [
	"col-span-1 row-span-2",
	"col-span-1 row-span-1",
	"col-span-1 row-span-1",
	"col-span-1 row-span-1",
	"col-span-1 row-span-1"
];
var glows = [
	"radial-gradient(ellipse 80% 60% at 20% 0%, rgba(19,62,216,0.35) 0%, transparent 70%)",
	"radial-gradient(ellipse 80% 60% at 80% 0%,  rgba(80,206,255,0.18) 0%, transparent 70%)",
	"radial-gradient(ellipse 80% 60% at 20% 0%, rgba(19,62,216,0.25) 0%, transparent 70%)",
	"radial-gradient(ellipse 80% 60% at 80% 0%,  rgba(80,206,255,0.15) 0%, transparent 70%)",
	"radial-gradient(ellipse 80% 60% at 20% 0%, rgba(19,62,216,0.28) 0%, transparent 70%)"
];
function BentoServices({ data }) {
	const ref = (0, import_react.useRef)(null);
	const visible = useInView(ref, {
		once: true,
		amount: .15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		ref,
		className: "w-full py-24",
		style: { background: "#111111" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-[0.3em] uppercase",
						style: { color: "#50CEFF" },
						children: data.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl font-black tracking-tight text-white md:text-5xl",
						children: [
							data.heading,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									background: "linear-gradient(90deg, #133ED8 0%, #50CEFF 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text"
								},
								children: data.headingAccent
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-base leading-relaxed md:text-right",
					style: { color: "rgba(255,255,255,0.55)" },
					children: data.description
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[minmax(220px,auto)]",
				children: data.services.map((service, i) => {
					const Icon = iconMap$3[service.icon] ?? TrendingUp;
					const isLarge = i === 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: [
							"group relative flex flex-col overflow-hidden rounded-2xl",
							"transition-all duration-300 hover:-translate-y-1",
							spans[i],
							visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
						].join(" "),
						style: {
							background: "#0d0f1a",
							border: "1px solid rgba(19,62,216,0.22)",
							boxShadow: "0 4px 32px rgba(2,3,103,0.25)",
							transitionDelay: `${i * 80}ms`,
							transitionProperty: "opacity, transform, box-shadow"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100",
								style: { background: glows[i] }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
								style: { boxShadow: "inset 0 0 0 1px rgba(80,206,255,0.25)" }
							}),
							isLarge ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-20 flex flex-col gap-3 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 items-center justify-center rounded-xl",
										style: {
											background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)",
											boxShadow: "0 4px 16px rgba(80,206,255,0.3)"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-5 w-5 text-white",
											strokeWidth: 2
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-white",
										children: service.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed",
										style: { color: "rgba(255,255,255,0.55)" },
										children: service.description
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-20 flex flex-col gap-2 p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
										style: {
											background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)",
											boxShadow: "0 4px 16px rgba(80,206,255,0.3)"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-4 w-4 text-white",
											strokeWidth: 2
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold leading-snug text-white",
										children: service.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-relaxed",
										style: { color: "rgba(255,255,255,0.55)" },
										children: service.description
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: ["relative w-full flex-1 overflow-hidden", isLarge ? "min-h-[220px]" : "min-h-[140px]"].join(" "),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-10",
									style: { background: "linear-gradient(to bottom, #0d0f1a, transparent)" }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: service.image,
									alt: service.title,
									className: "absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
								})]
							})
						]
					}, service.title);
				})
			})]
		})
	});
}
var iconMap$2 = {
	Search,
	BarChart2: ChartNoAxesColumn,
	Crosshair,
	Rocket,
	Target,
	TrendingUp,
	Users,
	Zap
};
function Methodology({ data }) {
	const ref = (0, import_react.useRef)(null);
	const visible = useInView(ref, {
		once: true,
		amount: .1
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "metodologia",
		ref,
		className: "w-full bg-white py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em]",
							style: { color: "#133ED8" },
							children: data.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mb-4 text-xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl",
							children: [
								data.heading,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										background: "linear-gradient(90deg, #133ED8 0%, #50CEFF 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text"
									},
									children: data.headingAccent
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto max-w-2xl text-base leading-relaxed text-gray-500",
							children: data.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: data.steps.map((step, i) => {
						const Icon = iconMap$2[step.icon] ?? Search;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center transition-all duration-500",
							style: {
								opacity: visible ? 1 : 0,
								transform: visible ? "translateY(0)" : "translateY(24px)",
								transitionDelay: `${i * 100}ms`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-sm font-bold",
								style: {
									border: "2px solid #133ED8",
									color: "#133ED8"
								},
								children: step.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex w-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1",
								style: {
									border: "1px solid rgba(19,62,216,0.12)",
									boxShadow: "0 2px 16px rgba(19,62,216,0.07)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-44 w-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: step.image,
											alt: step.title,
											className: "absolute inset-0 w-full h-full object-cover"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-center",
										style: { marginTop: "-20px" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md",
											style: { border: "1px solid rgba(19,62,216,0.15)" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "h-5 w-5",
												style: { color: "#133ED8" },
												strokeWidth: 2
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-5 pt-3 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-2 text-base font-bold text-gray-900",
											children: step.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-gray-500",
											children: step.description
										})]
									})
								]
							})]
						}, step.number);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: [
						"mt-12 flex flex-col items-start gap-6 rounded-2xl px-8 py-6 md:flex-row md:items-center md:justify-between",
						"transition-all duration-700",
						visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
					].join(" "),
					style: {
						border: "1px solid rgba(19,62,216,0.1)",
						transitionDelay: "500ms"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
								style: { background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
									className: "h-5 w-5 text-white",
									strokeWidth: 2
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base font-semibold text-gray-800",
								children: [
									data.bannerStatement,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											background: "linear-gradient(90deg, #133ED8 0%, #50CEFF 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text"
										},
										children: data.bannerAccent
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden h-10 w-px md:block",
							style: { background: "rgba(19,62,216,0.15)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3 sm:flex-row sm:gap-6",
							children: data.pillars.map(({ icon, text }) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(iconMap$2[icon] ?? TrendingUp, {
										className: "h-4 w-4 shrink-0",
										style: { color: "#133ED8" },
										strokeWidth: 2
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-gray-700",
										children: text
									})]
								}, text);
							})
						})
					]
				})
			]
		})
	});
}
var iconMap$1 = {
	Store,
	Globe,
	Rocket,
	Megaphone,
	BarChart2: ChartNoAxesColumn,
	Handshake
};
var EXPANSION_BARS = [
	30,
	48,
	42,
	65,
	82,
	100
];
var MARKET_DOTS = [
	1,
	0,
	1,
	1,
	0,
	1,
	0,
	1,
	1,
	0,
	1,
	0,
	1,
	1,
	0,
	1,
	0,
	1,
	1,
	1,
	0,
	0,
	1,
	1,
	0,
	1,
	0,
	0,
	0,
	1,
	1,
	0,
	0,
	1,
	1,
	1,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	1,
	0,
	1,
	1,
	0,
	0,
	1,
	1,
	0,
	0,
	1,
	0,
	1,
	1,
	0,
	0
];
var MARKETING_LAYERS = [
	{
		d: "M15,10 L145,10 L115,44 L45,44 Z",
		fill: "rgba(19,62,216,0.55)",
		lx: 64,
		ly: 8
	},
	{
		d: "M45,50 L115,50 L98,84 L62,84 Z",
		fill: "rgba(19,62,216,0.45)",
		lx: 67,
		ly: 70
	},
	{
		d: "M62,90 L98,90 L88,122 L72,122 Z",
		fill: "#50CEFF",
		lx: 68,
		ly: 114
	}
];
var INTELLIGENCE_BARS = [
	.3,
	.55,
	.75,
	.9,
	.65,
	1,
	.82
];
var ALLIANCE_NODES = [
	{
		x: 80,
		y: 65,
		main: true
	},
	{
		x: 28,
		y: 22
	},
	{
		x: 132,
		y: 22
	},
	{
		x: 18,
		y: 85
	},
	{
		x: 142,
		y: 85
	},
	{
		x: 50,
		y: 120
	},
	{
		x: 112,
		y: 120
	}
];
function useAnimRef() {
	const ref = (0, import_react.useRef)(null);
	return {
		ref,
		inView: useInView(ref, {
			once: false,
			margin: "-40px"
		})
	};
}
function VisualExpansion() {
	const { ref, inView } = useAnimRef();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 160 130",
		fill: "none",
		className: "w-full h-full",
		children: [EXPANSION_BARS.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.rect, {
			x: 8 + i * 24,
			width: 17,
			rx: 3,
			fill: i === 5 ? "#50CEFF" : `rgba(19,62,216,${.35 + i * .1})`,
			initial: {
				height: 0,
				y: 130
			},
			animate: inView ? {
				height: h,
				y: 130 - h
			} : {
				height: 0,
				y: 130
			},
			transition: {
				duration: .55,
				delay: i * .07,
				ease: "easeOut",
				repeat: Infinity,
				repeatDelay: 1.8
			}
		}, h)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.text, {
			x: "108",
			y: "17",
			fill: "#50CEFF",
			fontSize: "10",
			fontWeight: "700",
			initial: {
				opacity: 0,
				y: 4
			},
			animate: inView ? {
				opacity: 1,
				y: 0
			} : {},
			transition: {
				delay: .6,
				duration: .3,
				repeat: Infinity,
				repeatDelay: 1.8
			},
			children: "+147%"
		})]
	});
}
function VisualMarkets() {
	const { ref, inView } = useAnimRef();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		ref,
		viewBox: "0 0 160 130",
		fill: "none",
		className: "w-full h-full",
		children: MARKET_DOTS.map((active, i) => {
			const col = i % 9;
			const row = Math.floor(i / 9);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.circle, {
				cx: 10 + col * 15,
				cy: 12 + row * 17,
				r: 3,
				fill: active ? i % 4 === 0 ? "#50CEFF" : "rgba(19,62,216,0.8)" : "rgba(255,255,255,0.07)",
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: inView ? {
					scale: 1,
					opacity: 1
				} : {},
				transition: {
					duration: .25,
					delay: i * .012,
					ease: "backOut",
					repeat: Infinity,
					repeatDelay: 2
				}
			}, `dot-${row}-${col}`);
		})
	});
}
function VisualStartup() {
	const { ref, inView } = useAnimRef();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 160 130",
		fill: "none",
		className: "w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "vs-line",
				x1: "10",
				y1: "0",
				x2: "152",
				y2: "0",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#133ED8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#50CEFF"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.path, {
				d: "M10,118 C40,108 70,88 100,58 C120,38 140,18 152,8 L152,125 L10,125 Z",
				fill: "rgba(19,62,216,0.12)",
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: .5,
					duration: .5,
					repeat: Infinity,
					repeatDelay: 2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.path, {
				d: "M10,118 C40,108 70,88 100,58 C120,38 140,18 152,8",
				stroke: "url(#vs-line)",
				strokeWidth: "2.5",
				fill: "none",
				strokeLinecap: "round",
				initial: { pathLength: 0 },
				animate: inView ? { pathLength: 1 } : {},
				transition: {
					duration: 1.1,
					ease: "easeInOut",
					repeat: Infinity,
					repeatDelay: 2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.circle, {
				cx: "152",
				cy: "8",
				r: "5",
				fill: "#50CEFF",
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: inView ? {
					scale: 1,
					opacity: 1
				} : {},
				transition: {
					delay: 1,
					type: "spring",
					stiffness: 350,
					damping: 12,
					repeat: Infinity,
					repeatDelay: 2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.circle, {
				cx: "152",
				cy: "8",
				r: "5",
				fill: "none",
				stroke: "#50CEFF",
				strokeWidth: "1.5",
				initial: {
					scale: 1,
					opacity: .6
				},
				animate: inView ? {
					scale: 3,
					opacity: 0
				} : {},
				transition: {
					delay: 1.1,
					duration: .8,
					ease: "easeOut",
					repeat: Infinity,
					repeatDelay: 2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.text, {
				x: "96",
				y: "46",
				fill: "#50CEFF",
				fontSize: "9",
				fontWeight: "700",
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: .9,
					duration: .3,
					repeat: Infinity,
					repeatDelay: 2
				},
				children: "8x ARR"
			})
		]
	});
}
function VisualMarketing() {
	const { ref, inView } = useAnimRef();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 160 130",
		fill: "none",
		className: "w-full h-full",
		children: [
			MARKETING_LAYERS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.path, {
				d: l.d,
				fill: l.fill,
				initial: {
					opacity: 0,
					scaleY: 0
				},
				animate: inView ? {
					opacity: 1,
					scaleY: 1
				} : {},
				transition: {
					delay: i * .18,
					duration: .4,
					ease: "easeOut",
					repeat: Infinity,
					repeatDelay: 2.5
				},
				style: { transformOrigin: `80px ${i === 0 ? "10px" : i === 1 ? "50px" : "90px"}` }
			}, l.d)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.text, {
				x: "112",
				y: "108",
				fill: "#50CEFF",
				fontSize: "13",
				fontWeight: "700",
				initial: {
					opacity: 0,
					x: 6
				},
				animate: inView ? {
					opacity: 1,
					x: 0
				} : {},
				transition: {
					delay: .7,
					duration: .35
				},
				children: "×2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "104",
				y: "120",
				fill: "rgba(255,255,255,0.35)",
				fontSize: "7",
				children: "conversiones"
			})
		]
	});
}
function VisualIntelligence() {
	const { ref, inView } = useAnimRef();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 160 130",
		fill: "none",
		className: "w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.rect, {
				x: "6",
				y: "6",
				width: "68",
				height: "46",
				rx: "5",
				fill: "rgba(19,62,216,0.25)",
				stroke: "rgba(80,206,255,0.25)",
				strokeWidth: "1",
				initial: {
					opacity: 0,
					x: -12
				},
				animate: inView ? {
					opacity: 1,
					x: 0
				} : {},
				transition: {
					duration: .45,
					repeat: Infinity,
					repeatDelay: 2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.text, {
				x: "16",
				y: "27",
				fill: "#50CEFF",
				fontSize: "15",
				fontWeight: "800",
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: .3,
					repeat: Infinity,
					repeatDelay: 2
				},
				children: "3.2x"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.text, {
				x: "12",
				y: "43",
				fill: "rgba(255,255,255,0.4)",
				fontSize: "7",
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: .35,
					repeat: Infinity,
					repeatDelay: 2
				},
				children: "ROI Promedio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.rect, {
				x: "82",
				y: "6",
				width: "72",
				height: "46",
				rx: "5",
				fill: "rgba(19,62,216,0.25)",
				stroke: "rgba(80,206,255,0.25)",
				strokeWidth: "1",
				initial: {
					opacity: 0,
					x: 12
				},
				animate: inView ? {
					opacity: 1,
					x: 0
				} : {},
				transition: {
					duration: .45,
					delay: .1,
					repeat: Infinity,
					repeatDelay: 2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.text, {
				x: "94",
				y: "27",
				fill: "#50CEFF",
				fontSize: "15",
				fontWeight: "800",
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: .35,
					repeat: Infinity,
					repeatDelay: 2
				},
				children: "+68%"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.text, {
				x: "88",
				y: "43",
				fill: "rgba(255,255,255,0.4)",
				fontSize: "7",
				initial: { opacity: 0 },
				animate: inView ? { opacity: 1 } : {},
				transition: {
					delay: .4,
					repeat: Infinity,
					repeatDelay: 2
				},
				children: "Eficiencia op."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6",
				y: "62",
				width: "148",
				height: "60",
				rx: "5",
				fill: "rgba(19,62,216,0.12)",
				stroke: "rgba(80,206,255,0.15)",
				strokeWidth: "1"
			}),
			INTELLIGENCE_BARS.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.rect, {
				x: 14 + i * 19,
				width: 13,
				rx: 2,
				fill: i === 5 ? "#50CEFF" : "rgba(19,62,216,0.65)",
				initial: {
					height: 0,
					y: 122
				},
				animate: inView ? {
					height: v * 48,
					y: 122 - v * 48
				} : {},
				transition: {
					duration: .5,
					delay: .4 + i * .07,
					ease: "easeOut",
					repeat: Infinity,
					repeatDelay: 2
				}
			}, v))
		]
	});
}
function VisualAlliances() {
	const { ref, inView } = useAnimRef();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 160 140",
		fill: "none",
		className: "w-full h-full",
		children: [
			ALLIANCE_NODES.slice(1).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.line, {
				x1: 80,
				y1: 65,
				x2: n.x,
				y2: n.y,
				stroke: "rgba(80,206,255,0.35)",
				strokeWidth: "1.5",
				strokeDasharray: "4 3",
				initial: {
					pathLength: 0,
					opacity: 0
				},
				animate: inView ? {
					pathLength: 1,
					opacity: 1
				} : {},
				transition: {
					duration: .45,
					delay: .3 + i * .09,
					repeat: Infinity,
					repeatDelay: 2
				}
			}, `spoke-${n.x}-${n.y}`)),
			ALLIANCE_NODES.slice(1).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.circle, {
				cx: n.x,
				cy: n.y,
				r: 7,
				fill: "rgba(19,62,216,0.5)",
				stroke: "rgba(80,206,255,0.45)",
				strokeWidth: "1.5",
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: inView ? {
					scale: 1,
					opacity: 1
				} : {},
				transition: {
					type: "spring",
					stiffness: 320,
					damping: 14,
					delay: .45 + i * .09,
					repeat: Infinity,
					repeatDelay: 2
				}
			}, `node-${n.x}-${n.y}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.circle, {
				cx: 80,
				cy: 65,
				r: 13,
				fill: "#133ED8",
				stroke: "#50CEFF",
				strokeWidth: "1.5",
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: inView ? {
					scale: 1,
					opacity: 1
				} : {},
				transition: {
					type: "spring",
					stiffness: 280,
					damping: 12,
					delay: .15,
					repeat: Infinity,
					repeatDelay: 2
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.circle, {
				cx: 80,
				cy: 65,
				r: 13,
				fill: "none",
				stroke: "#50CEFF",
				strokeWidth: "1.5",
				initial: {
					scale: 1,
					opacity: .5
				},
				animate: inView ? {
					scale: 2.2,
					opacity: 0
				} : {},
				transition: {
					delay: .8,
					duration: .7,
					ease: "easeOut",
					repeat: Infinity,
					repeatDelay: 2
				}
			})
		]
	});
}
var visualMap = {
	expansion: VisualExpansion,
	markets: VisualMarkets,
	startup: VisualStartup,
	marketing: VisualMarketing,
	intelligence: VisualIntelligence,
	alliances: VisualAlliances
};
function GrowthStories({ data }) {
	const sectionRef = (0, import_react.useRef)(null);
	const sectionInView = useInView(sectionRef, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyMotion, {
		features: domAnimation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: sectionRef,
			className: "w-full py-24",
			style: { background: "#111111" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m.div, {
					className: "mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					initial: {
						opacity: 0,
						y: 20
					},
					animate: sectionInView ? {
						opacity: 1,
						y: 0
					} : {},
					transition: { duration: .5 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-[0.3em] uppercase",
							style: { color: "#50CEFF" },
							children: data.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-black tracking-tight text-white md:text-5xl",
							children: [
								data.heading,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										background: "linear-gradient(90deg, #133ED8 0%, #50CEFF 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text"
									},
									children: data.headingAccent
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-base leading-relaxed md:text-right",
						style: { color: "rgba(255,255,255,0.55)" },
						children: data.description
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-2",
					children: data.stories.map((story, i) => {
						const Icon = iconMap$1[story.icon] ?? Store;
						const Visual = visualMap[story.visual];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m.article, {
							className: "group relative flex overflow-hidden rounded-2xl",
							style: {
								background: "#0d0f1a",
								border: "1px solid rgba(19,62,216,0.22)",
								boxShadow: "0 4px 32px rgba(2,3,103,0.25)",
								minHeight: "200px"
							},
							initial: {
								opacity: 0,
								y: 24
							},
							animate: sectionInView ? {
								opacity: 1,
								y: 0
							} : {},
							transition: {
								duration: .5,
								delay: i * .08
							},
							whileHover: {
								y: -4,
								boxShadow: "0 8px 40px rgba(2,3,103,0.4)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
									style: { boxShadow: "inset 0 0 0 1px rgba(80,206,255,0.3)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex flex-1 min-w-0 flex-col justify-between gap-4 p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
										style: {
											background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)",
											boxShadow: "0 4px 16px rgba(80,206,255,0.3)"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-5 w-5 text-white",
											strokeWidth: 2
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex w-fit items-baseline gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
												style: {
													background: "rgba(19,62,216,0.2)",
													border: "1px solid rgba(80,206,255,0.2)",
													color: "rgba(80,206,255,0.9)"
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-black",
													children: story.metric
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: story.metricLabel })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-bold text-white leading-tight",
												children: story.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed",
												style: { color: "rgba(255,255,255,0.55)" },
												children: story.description
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative hidden sm:flex w-[42%] shrink-0 items-center justify-center overflow-hidden p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-10",
										style: { background: "linear-gradient(to right, #0d0f1a, transparent)" }
									}), Visual && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, {})]
								})
							]
						}, story.title);
					})
				})]
			})
		})
	});
}
var iconMap = {
	Building2,
	BarChart3: ChartColumn,
	Target,
	Globe2: Earth,
	TrendingUp
};
function parseValue(raw) {
	const match = raw.match(/^([+\-]?)(\d+)(%?)$/);
	if (!match) return {
		prefix: "",
		number: 0,
		suffix: raw
	};
	return {
		prefix: match[1],
		number: parseInt(match[2], 10),
		suffix: match[3]
	};
}
function StatCounter({ raw, visible }) {
	const { prefix, number, suffix } = parseValue(raw);
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!visible || number === 0) return;
		const duration = 1200;
		const startTime = Date.now();
		let animationId;
		const animate = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			setCount(Math.round(number * progress));
			if (progress < 1) animationId = requestAnimationFrame(animate);
		};
		animationId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationId);
	}, [visible, number]);
	if (number === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: raw });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
		prefix,
		count,
		suffix
	] });
}
function About({ data }) {
	const ref = (0, import_react.useRef)(null);
	const visible = useInView(ref, {
		once: true,
		amount: .1
	});
	const leftRef = (0, import_react.useRef)(null);
	const rightRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!visible) return;
		const left = leftRef.current;
		const right = rightRef.current;
		if (left) left.style.willChange = "opacity, transform";
		if (right) right.style.willChange = "opacity, transform";
		const clear = (el) => (e) => {
			if (e.propertyName === "opacity") el.style.willChange = "auto";
		};
		const clearLeft = clear(left);
		const clearRight = clear(right);
		left?.addEventListener("transitionend", clearLeft);
		right?.addEventListener("transitionend", clearRight);
		return () => {
			left?.removeEventListener("transitionend", clearLeft);
			right?.removeEventListener("transitionend", clearRight);
		};
	}, [visible]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative w-full overflow-hidden py-24",
		style: { contain: "layout style paint" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/backgrounds/backgrounds.png",
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "rgba(10,13,26,0.82)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: leftRef,
						className: `flex flex-col gap-8 transition-opacity transition-transform duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold tracking-[0.3em] uppercase",
									style: { color: "#50CEFF" },
									children: data.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-0.5 w-10 rounded-full",
									style: { background: "linear-gradient(90deg, #133ED8, #50CEFF)" }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl leading-tight",
								children: [
									data.heading.split("\n").map((line, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [line, i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})] }, line)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											background: "linear-gradient(90deg, #133ED8 0%, #50CEFF 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text"
										},
										children: data.headingAccent
									})
								]
							}),
							data.paragraphs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base leading-relaxed",
								style: { color: "rgba(255,255,255,0.65)" },
								children: [
									item.text,
									item.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										style: { color: "#50CEFF" },
										children: item.highlight
									}),
									item.rest
								]
							}, item.text))
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: rightRef,
						className: `grid grid-cols-2 gap-3 transition-opacity transition-transform duration-700 delay-150 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`,
						children: data.stats.map((stat) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 rounded-xl p-4 transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 md:active:scale-100",
								style: {
									background: "rgba(19,62,216,0.08)",
									border: "1px solid rgba(80,206,255,0.12)",
									contain: "layout style paint"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-lg",
									style: { background: "rgba(19,62,216,0.2)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(iconMap[stat.icon] ?? Building2, {
										className: "h-4 w-4",
										style: { color: "#50CEFF" },
										strokeWidth: 1.8
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-black leading-none tabular-nums",
									style: { color: "#50CEFF" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
										raw: stat.value,
										visible
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-snug",
									style: { color: "rgba(255,255,255,0.45)" },
									children: stat.label
								})] })]
							}, stat.label);
						})
					})]
				})
			})
		]
	});
}
function Contact({ data }) {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		company: "",
		email: "",
		phone: "",
		message: ""
	});
	const [sending, setSending] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	function handleChange(e) {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}
	async function handleSubmit(e) {
		e.preventDefault();
		setSending(true);
		await new Promise((r) => setTimeout(r, 1e3));
		setSending(false);
		setSent(true);
	}
	const inputBase = "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#133ED8] focus:ring-2 focus:ring-[#133ED8]/10";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "w-full bg-[#F4F6FB] py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em]",
						style: { color: "#133ED8" },
						children: data.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl",
						children: data.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-gray-500",
						children: data.description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-white p-8 shadow-sm",
				style: { border: "1px solid rgba(19,62,216,0.08)" },
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-4 py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-16 w-16 items-center justify-center rounded-full",
							style: { background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-7 w-7 text-white" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-gray-900",
							children: "¡Mensaje enviado!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-gray-500",
							children: "Nos pondremos en contacto contigo pronto."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setSent(false);
								setForm({
									name: "",
									company: "",
									email: "",
									phone: "",
									message: ""
								});
							},
							className: "mt-2 text-sm font-medium",
							style: { color: "#133ED8" },
							children: "Enviar otro mensaje"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-name",
								className: "mb-1.5 block text-sm font-semibold text-gray-700",
								children: data.fields.name.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-name",
									name: "name",
									type: "text",
									required: true,
									placeholder: data.fields.name.placeholder,
									value: form.name,
									onChange: handleChange,
									className: inputBase
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-company",
								className: "mb-1.5 block text-sm font-semibold text-gray-700",
								children: data.fields.company.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-company",
									name: "company",
									type: "text",
									required: true,
									placeholder: data.fields.company.placeholder,
									value: form.company,
									onChange: handleChange,
									className: inputBase
								})]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-email",
								className: "mb-1.5 block text-sm font-semibold text-gray-700",
								children: data.fields.email.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-email",
									name: "email",
									type: "email",
									required: true,
									placeholder: data.fields.email.placeholder,
									value: form.email,
									onChange: handleChange,
									className: inputBase
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-phone",
								className: "mb-1.5 block text-sm font-semibold text-gray-700",
								children: data.fields.phone.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-phone",
									name: "phone",
									type: "tel",
									placeholder: data.fields.phone.placeholder,
									value: form.phone,
									onChange: handleChange,
									className: inputBase
								})]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "contact-message",
							className: "mb-1.5 block text-sm font-semibold text-gray-700",
							children: data.fields.message.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "absolute left-3 top-3.5 h-4 w-4 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "contact-message",
								name: "message",
								required: true,
								rows: 5,
								placeholder: data.fields.message.placeholder,
								value: form.message,
								onChange: handleChange,
								className: "w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#133ED8] focus:ring-2 focus:ring-[#133ED8]/10"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: sending,
							className: "flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:opacity-60",
							style: { background: "linear-gradient(90deg, #133ED8 0%, #1a4ff0 100%)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), sending ? "Enviando..." : data.submitLabel]
						})
					]
				})
			})]
		})
	});
}
var { nav: { href: whatsappUrl } } = getHeroContent();
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		x: "0px",
		y: "0px",
		width: "100",
		height: "100",
		viewBox: "0 0 48 48",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#cfd8dc",
				d: "M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#40c351",
				d: "M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				fillRule: "evenodd",
				d: "M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z",
				clipRule: "evenodd"
			})
		]
	});
}
function FloatingWhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappUrl,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-[#133ED8] to-[#50CEFF] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform",
		"aria-label": "Contactar por WhatsApp",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-8 h-8" })
	});
}
function getCustomersContent() {
	return { customers: [
		{
			src: "/clients/logotipo-cae.png",
			alt: "CAE",
			height: 28
		},
		{
			src: "/clients/logotipo-fiancol.png",
			alt: "Fiancol",
			height: 28
		},
		{
			src: "/clients/logotipo-lavanderia-maritima.png",
			alt: "Lavandería Marítima",
			height: 28
		},
		{
			src: "/clients/logotipo-greet-energy.png",
			alt: "Greet Energy",
			height: 28
		},
		{
			src: "/clients/logotipo-kovia.png",
			alt: "Kovia",
			height: 28
		},
		{
			src: "/clients/logotipo-wow.png",
			alt: "WOW",
			height: 28
		},
		{
			src: "/clients/logotipo-vertice.png",
			alt: "Vértice",
			height: 28
		},
		{
			src: "/clients/logotipo-outliners.png",
			alt: "Outliners",
			height: 28
		},
		{
			src: "/clients/logotipo-vittorino.png",
			alt: "Vittorino",
			height: 28
		},
		{
			src: "/clients/logotipo-netwifi.png",
			alt: "Netwifi",
			height: 28
		}
	] };
}
function getServicesContent() {
	return {
		label: "NUESTRA PROPUESTA",
		heading: "Impulsamos cada etapa",
		headingAccent: "de tu crecimiento",
		description: "Combinamos estrategia, desarrollo comercial y marketing para transformar oportunidades en resultados.",
		services: [
			{
				icon: "TrendingUp",
				image: "/services/estrategia.png",
				title: "Estrategia de Crecimiento",
				description: "Diseñamos planes estratégicos alineados con tus objetivos para acelerar ingresos y fortalecer tu posición competitiva.",
				tag: "Estrategia"
			},
			{
				icon: "Target",
				image: "/services/analisis.png",
				title: "Inteligencia de Mercados",
				description: "Analizamos mercados, tendencias y competencia para identificar las mejores oportunidades de expansión.",
				tag: "Análisis"
			},
			{
				icon: "Handshake",
				image: "/services/negocios.png",
				title: "Desarrollo de negocios",
				description: "Abrimos puertas a nuevos mercados, generamos alianzas estratégicas y creamos oportunidades comerciales.",
				tag: "Negocios"
			},
			{
				icon: "Zap",
				image: "/services/ventas.png",
				title: "Aceleración de Ingresos",
				description: "Optimizamos procesos comerciales y de ventas para convertir más oportunidades en resultados.",
				tag: "Ventas"
			},
			{
				icon: "Megaphone",
				image: "/services/marketing.png",
				title: "Growth marketing",
				description: "Convertimos visibilidad en demanda a través de estrategias de marketing orientadas a resultados.",
				tag: "Marketing"
			}
		]
	};
}
function getGrowthStoriesContent() {
	return {
		label: "HISTORIAS DE CRECIMIENTO",
		heading: "Resultados que",
		headingAccent: "generamos",
		description: "Casos donde la estrategia y ejecución convirtieron desafíos en oportunidades de crecimiento.",
		stories: [
			{
				icon: "Store",
				visual: "expansion",
				title: "Expansión Comercial",
				description: "Triplicamos la presencia comercial de una distribuidora en 8 meses, abriendo 3 nuevas regiones con ventas desde el primer trimestre.",
				metric: "+147%",
				metricLabel: "en ingresos",
				link: "#"
			},
			{
				icon: "Globe",
				visual: "markets",
				title: "Nuevos Mercados",
				description: "Identificamos y entramos en 5 mercados internacionales para una firma de servicios en menos de un año.",
				metric: "5",
				metricLabel: "mercados nuevos",
				link: "#"
			},
			{
				icon: "Rocket",
				visual: "startup",
				title: "Escalamiento Startup",
				description: "Llevamos una startup tecnológica de seed a Serie A, multiplicando su ARR por 8 en 24 meses.",
				metric: "8x",
				metricLabel: "en ARR",
				link: "#"
			},
			{
				icon: "Megaphone",
				visual: "marketing",
				title: "Growth marketing",
				description: "Rediseñamos el embudo de adquisición de una empresa B2B, reduciendo el CAC un 40% y duplicando las conversiones.",
				metric: "2x",
				metricLabel: "conversiones",
				link: "#"
			},
			{
				icon: "BarChart2",
				visual: "intelligence",
				title: "Inteligencia Comercial",
				description: "Implementamos un sistema de inteligencia comercial para decisiones basadas en datos en tiempo real, con ROI de 3.2x.",
				metric: "3.2x",
				metricLabel: "ROI promedio",
				link: "#"
			},
			{
				icon: "Handshake",
				visual: "alliances",
				title: "Alianzas Estratégicas",
				description: "Estructuramos alianzas que abrieron canales de distribución con alcance a más de 1M de clientes.",
				metric: "1M+",
				metricLabel: "clientes alcanzados",
				link: "#"
			}
		]
	};
}
function getAboutContent() {
	return {
		label: "¿QUIÉNES SOMOS?",
		heading: "Impulsamos crecimiento y",
		headingAccent: "nuevas oportunidades",
		paragraphs: [{
			text: "En ",
			highlight: "Nexon Group",
			rest: " trabajamos junto a empresas, startups e inversionistas para transformar visión en ejecución."
		}, {
			text: "No actuamos como proveedores externos. Nos integramos como ",
			highlight: "socios estratégicos",
			rest: " que acompañan cada etapa del crecimiento empresarial."
		}],
		stats: [
			{
				icon: "Building2",
				value: "+50",
				label: "Empresas acompañadas"
			},
			{
				icon: "BarChart3",
				value: "+120",
				label: "Proyectos ejecutados"
			},
			{
				icon: "Globe2",
				value: "3",
				label: "Países de operación"
			},
			{
				icon: "Target",
				value: "92%",
				label: "Tasa de retención"
			},
			{
				icon: "TrendingUp",
				value: "+8",
				label: "Años de experiencia"
			}
		],
		card: {
			title: "Crecemos junto a nuestros clientes.",
			description: "Aportamos experiencia, conexiones y herramientas para convertir oportunidades en resultados medibles."
		}
	};
}
function getMethodologyContent() {
	return {
		label: "Nuestra Metodología",
		heading: "Un proceso claro para",
		headingAccent: "alcanzar resultados",
		description: "Nuestro enfoque está basado en soluciones a la medida y resultados medibles.",
		bannerStatement: "No solo diseñamos estrategias.",
		bannerAccent: "Generamos crecimiento sostenible.",
		steps: [
			{
				number: "01",
				icon: "Search",
				image: "/methodology/entender.png",
				title: "Entender el negocio",
				description: "Analizamos tu modelo de negocio, mercado, operación y objetivos para comprender a fondo tu punto de partida y tus desafíos."
			},
			{
				number: "02",
				icon: "BarChart2",
				image: "/methodology/identificar.png",
				title: "Identificar oportunidades",
				description: "Detectamos oportunidades reales de crecimiento basadas en datos, tendencias de mercado y ventajas competitivas."
			},
			{
				number: "03",
				icon: "Crosshair",
				image: "/methodology/diseñar.png",
				title: "Diseñar la estrategia",
				description: "Creamos un plan estratégico personalizado con acciones claras, prioridades definidas y métricas de éxito."
			},
			{
				number: "04",
				icon: "Rocket",
				image: "/methodology/ejecuta.png",
				title: "Ejecutar y acompañar",
				description: "Implementamos la estrategia con tu equipo, asegurando una ejecución ágil y resultados measurables."
			},
			{
				number: "05",
				icon: "Target",
				image: "/methodology/resultados.png",
				title: "Medir resultados",
				description: "Evaluamos el impacto, medimos resultados y optimizamos continuamente para escalar el crecimiento de forma sostenible."
			}
		],
		pillars: [
			{
				icon: "Users",
				text: "Socios estratégicos, no proveedores."
			},
			{
				icon: "Zap",
				text: "Enfoque en resultados, no en tareas."
			},
			{
				icon: "TrendingUp",
				text: "Decisiones basadas en datos e inteligencia."
			}
		]
	};
}
function getContactContent() {
	return {
		label: "Contacto",
		heading: "Conversemos",
		description: "Conversemos sobre cómo llevar tu negocio al siguiente nivel.",
		fields: {
			name: {
				label: "Nombre completo",
				placeholder: "Tu nombre"
			},
			company: {
				label: "Empresa",
				placeholder: "Nombre de tu empresa"
			},
			email: {
				label: "Correo electrónico",
				placeholder: "tu@email.com"
			},
			phone: {
				label: "Teléfono",
				placeholder: "+57 300 000 0000"
			},
			message: {
				label: "Mensaje",
				placeholder: "Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
			}
		},
		submitLabel: "Enviar mensaje"
	};
}
var heroData = getHeroContent();
var customersData = getCustomersContent();
var servicesData = getServicesContent();
var growthStoriesData = getGrowthStoriesContent();
var aboutData = getAboutContent();
var methodologyData = getMethodologyContent();
var contactData = getContactContent();
function NexoonLanding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionConfig, {
		reducedMotion: "user",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				links: heroData.nav.links,
				cta: heroData.nav.cta,
				href: heroData.nav.href
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Costumers, { logos: customersData.customers }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoServices, { data: servicesData }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Methodology, { data: methodologyData }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, { data: aboutData }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthStories, { data: growthStoriesData }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { data: contactData }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsAppButton, {})
		]
	});
}
//#endregion
export { NexoonLanding as component };
