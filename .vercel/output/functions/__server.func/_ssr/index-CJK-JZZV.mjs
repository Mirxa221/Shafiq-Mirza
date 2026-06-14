import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as mirzaAsset } from "./router-CkJsAm7r.mjs";
import { S as SiGit, a as SiNodedotjs, b as SiPrisma, c as SiTailwindcss, d as SiExpress, T as TbBrandReactNative, e as SiMongodb, f as SiSupabase, g as SiPostgresql, h as SiTypescript, i as SiLaravel, j as SiReact } from "../_libs/react-icons.mjs";
import { u as useMotionValue, a as useSpring, m as motion, b as useScroll, c as useTransform, A as AnimatePresence, d as useInView } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });
  reactExports.useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { x: sx, y: sy },
      className: "pointer-events-none fixed left-0 top-0 z-[300] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon mix-blend-difference md:block"
    }
  );
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX, transformOrigin: "0% 50%" },
      className: "fixed inset-x-0 top-0 z-[150] h-[2px] bg-neon"
    }
  );
}
const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "work", href: "#work" },
  { label: "testimonials", href: "#testimonials" },
  { label: "faq", href: "#faq" },
  { label: "contact", href: "#contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  reactExports.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[200] flex flex-col bg-background/95 backdrop-blur-xl lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-5 md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "group flex items-center gap-2 font-display text-lg", onClick: () => setMobileOpen(false), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-md bg-neon font-mono text-sm font-bold text-primary-foreground transition-transform group-hover:rotate-12", children: "S" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "SHAFIQ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMobileOpen(false),
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-neon hover:text-neon",
            "aria-label": "Close menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: "✕" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-col items-center justify-center gap-6", children: navLinks.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: s.href,
          onClick: () => setMobileOpen(false),
          className: "font-display text-2xl tracking-tight transition-colors hover:text-neon sm:text-3xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2 font-mono text-xs text-neon sm:text-sm", children: [
              "0",
              i + 1,
              "/"
            ] }),
            s.label.charAt(0).toUpperCase() + s.label.slice(1)
          ]
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-8 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#contact",
          onClick: () => setMobileOpen(false),
          className: "flex w-full items-center justify-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-neon transition hover:bg-neon hover:text-primary-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-neon blink" }),
            "Available for work"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed inset-x-0 top-0 z-[140] transition-all duration-500 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "group flex items-center gap-2 font-display text-base md:text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-md bg-neon font-mono text-xs font-bold text-primary-foreground transition-transform group-hover:rotate-12 md:h-8 md:w-8 md:text-sm", children: "S" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "SHAFIQ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground lg:flex", children: navLinks.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: s.href, className: "marquee-link transition-colors hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neon", children: [
              "0",
              i + 1,
              "/"
            ] }),
            s.label
          ] }, s.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 md:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "hidden items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-neon transition hover:bg-neon hover:text-primary-foreground sm:inline-flex",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-neon blink" }),
                  "Available"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setMobileOpen(!mobileOpen),
                className: "flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-neon lg:hidden",
                "aria-label": "Toggle menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-[5px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}` })
                ] })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
const ease = [0.22, 1, 0.36, 1];
const skillGroups = [
  { title: "Frontend", n: "01", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { title: "Mobile", n: "02", items: ["React Native"] },
  { title: "Backend", n: "03", items: ["Laravel", "PHP", "Express"] },
  { title: "Data Layer", n: "04", items: ["PostgreSQL", "MongoDB", "SQL", "Prisma", "Supabase"] }
];
const projects = [
  {
    n: "01",
    title: "MyRecipal",
    year: "2026",
    blurb: "A global recipe discovery mobile app. Browse cuisines from around the world with a smooth, intuitive interface.",
    stack: ["React Native", "Laravel", "MySQL"]
  },
  {
    n: "02",
    title: "The Unsent Letter",
    year: "2026",
    blurb: "An anonymous emotional outlet on the web. Users pour their hearts out — no names, no judgment, just pure expression.",
    stack: ["React", "Laravel", "MySQL"]
  },
  {
    n: "03",
    title: "TeamDesk Pro",
    year: "2026",
    blurb: "A team collaboration hub. Staff manage daily tasks while managers track progress and team growth in real time.",
    stack: ["React", "Laravel", "MySQL"]
  },
  {
    n: "04",
    title: "Rehman Mirza & Co.",
    year: "2026",
    blurb: "A sleek, professional portfolio website built for a design studio. Clean UI with a headless CMS backend.",
    stack: ["React", "Express", "MySQL"]
  }
];
const steps = [
  {
    n: "01",
    t: "Listen",
    d: "I figure out the real problem first  before touching the keyboard. The brief is just a starting point, not the whole story."
  },
  {
    n: "02",
    t: "Architect",
    d: "Data model comes first, UI follows. When the structure is right, everything else falls into place naturally."
  },
  {
    n: "03",
    t: "Ship",
    d: "Small releases, fast feedback. I'd rather see real users react than stare at a five-year roadmap."
  },
  {
    n: "04",
    t: "Refine",
    d: "That last 10% performance, polish, edge cases. This is the part users actually feel, so I don't skip it."
  }
];
const testimonials = [
  {
    name: "Ahmed",
    role: "Restaurant Owner & Food Blogger",
    text: "Shafiq built my entire recipe app faster than I expected. Clean code, great communication, and he actually cares about the end result. Will definitely hire again."
  },
  {
    name: "Sara",
    role: "Mental Health Blogger",
    text: "Working with Shafiq felt like having a co-founder who codes. He didn't just build what I asked for — he figured out what I actually needed and made it better."
  },
  {
    name: "Omar",
    role: "Team Lead at a Logistics Company",
    text: "Our team works in remote areas with weak internet. Shafiq built an app that works perfectly offline and syncs when connected. Three months in, zero crashes. Rock solid."
  },
  {
    name: "Ayesha",
    role: "Creative Director & Photographer",
    text: "I'm really picky about design details. Shafiq is that rare dev who actually gets it. My Figma designs and the live site look identical — even the animations are spot on."
  }
];
const faqs = [
  {
    q: "Do you work with startups or only established companies?",
    a: "Both. I love the energy of early-stage startups quick decisions, big impact. But I also enjoy the structure and scale of established teams. If the problem is interesting, I am in."
  },
  {
    q: "What is your typical project timeline?",
    a: "Most projects take 4 to 8 weeks from kickoff to launch. It depends on scope, of course. I prefer small, testable releases over monolithic drops so you see progress weekly, not monthly."
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes. I offer retainer packages for bug fixes, feature additions, and performance monitoring. Most clients keep me on a light retainer for the first 3 months post-launch."
  },
  {
    q: "Can you work with my existing team?",
    a: "Absolutely. I have slotted into teams ranging from 2 to 20 developers. I am comfortable with Git workflows, code reviews, standups, and async communication."
  },
  {
    q: "What is your pricing model?",
    a: "I work on fixed-price for well-defined projects and weekly rates for open-ended engagements. I will always give you a clear estimate before we start no surprises."
  },
  {
    q: "Are you available for full-time roles?",
    a: "Currently open to both freelance and full-time opportunities. If the role is right, I am flexible on structure."
  }
];
const techStackIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Express", color: "#000000" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Node.js", color: "#339933" },
  { name: "Git", color: "#F05032" }
];
const recentProjects = [
  {
    title: "Rehman Mirza Co",
    description: "A sleek, professional portfolio website built for a design studio. Clean UI with a headless CMS backend, smooth animations, and a contact system for client inquiries.",
    stack: ["React", "Express", "MySQL"],
    year: "2026",
    link: "#contact",
    image: "rehman-mirza-co"
  },
  {
    title: "Team Desk Pro",
    description: "A team collaboration hub where staff manage daily tasks and managers track progress and team growth in real time. Built for streamlined operations and productivity.",
    stack: ["React", "Laravel", "MySQL"],
    year: "2026",
    link: "#contact",
    image: "team-desk-pro"
  },
  {
    title: "Unsent Letter",
    description: "An anonymous emotional outlet on the web where users pour their hearts out with no names and no judgment. A safe space for pure, unfiltered expression.",
    stack: ["React", "Laravel", "MySQL"],
    year: "2026",
    link: "#contact",
    image: "unsent-letter"
  }
];
function SplitWords({ text, className = "", delay = 0 }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const words = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className, children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden align-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.span,
    {
      className: "inline-block",
      initial: { y: "110%" },
      animate: isInView ? { y: "0%" } : { y: "110%" },
      transition: { duration: 0.9, ease, delay: delay + i * 0.06 },
      children: [
        w,
        " "
      ]
    }
  ) }, i)) });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", ref, className: "relative min-h-[100svh] w-full overflow-hidden pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { opacity },
        className: "animate-orb pointer-events-none absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-neon/20 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { opacity },
        className: "animate-orb pointer-events-none absolute right-[5%] top-[60%] h-[380px] w-[380px] rounded-full bg-neon/10 blur-[100px]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 pb-24 md:px-10 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y: yText }, className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -40 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, ease },
            className: "mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-neon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Full-Stack Engineer" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85] tracking-tighter", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Shafiq" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-stroke-neon italic", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Mirza.", delay: 0.2 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -40 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 1, delay: 0.6, ease },
            className: "mt-10 grid max-w-xl grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "→ role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Full-Stack Developer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "→ open" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Let's build something" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "→ status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Available for projects" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.9, ease },
            className: "mt-10 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#work",
                  className: "group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-neon px-8 py-4 text-sm font-semibold text-primary-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 transition-transform duration-300 group-hover:translate-x-1", children: "View selected work" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 transition-transform duration-300 group-hover:translate-x-1", children: "→" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-foreground transition-transform duration-500 group-hover:translate-x-0" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm transition hover:border-neon hover:text-neon",
                  children: "Get in touch"
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y: yImg }, className: "relative mx-auto w-full max-w-md lg:max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.85, rotate: -3 },
            animate: { opacity: 1, scale: 1, rotate: 0 },
            transition: { duration: 1.2, ease },
            className: "glow-ring relative overflow-hidden rounded-3xl border border-neon/30 bg-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.img,
                {
                  style: { scale: scaleImg },
                  src: mirzaAsset,
                  alt: "Shafiq Mirza",
                  className: "aspect-[4/5] w-full object-cover contrast-110 saturate-[0.8]",
                  loading: "eager"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,oklch(0.88_0.22_130_/_0.25)_98%)] bg-[size:100%_3px] mix-blend-overlay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neon", children: "// subject" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "Shafiq Mirza" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neon", children: "// loc" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "Lahore, PK" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -20, rotate: 0 },
            animate: { opacity: 1, y: 0, rotate: 12 },
            transition: { duration: 1, delay: 0.8, ease },
            className: "absolute -right-4 -top-4 rounded-full border border-neon/50 bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-neon",
            children: "● rec — live"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 1, delay: 1, ease },
            className: "absolute bottom-4 -left-4 max-w-[200px] rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Years shipping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-display text-4xl", children: [
                "1",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "+" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.4 },
        className: "absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { y: [0, 10, 0] }, transition: { duration: 2.4, repeat: Infinity }, children: "↓ scroll" })
      }
    )
  ] });
}
function TickerBand() {
  const items = ["React", "Laravel", "Supabase", "PostgreSQL", "React Native", "Prisma", "MongoDB", "Express", "Tailwind", "TypeScript"];
  const row = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden border-y border-border bg-surface py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max marquee items-center gap-10 whitespace-nowrap", children: row.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10 font-display text-3xl md:text-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: i % 3 === 0 ? "text-stroke" : i % 3 === 1 ? "text-foreground" : "text-neon", children: t }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "★" })
  ] }, i)) }) });
}
function Reveal({
  children,
  dir = "up",
  delay = 0,
  amount = 60,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const offset = dir === "up" ? { y: amount } : dir === "down" ? { y: -amount } : dir === "left" ? { x: amount } : { x: -amount };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, ...offset },
      animate: isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset },
      transition: { duration: 0.9, delay, ease },
      className,
      children
    }
  );
}
function SectionHead({ n, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { dir: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neon", children: [
      "[ ",
      n,
      " ]"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { scaleX: 0 },
        whileInView: { scaleX: 1 },
        viewport: { margin: "-80px" },
        transition: { duration: 1, ease },
        className: "h-px flex-1 origin-left bg-border"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { dir: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }) })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "01", label: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-tighter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "A developer who" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "treats craft like", delay: 0.2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "a daily habit.", delay: 0.4 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid grid-cols-1 gap-10 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { dir: "left", className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground md:text-xl", children: "For years I've been writing software end to end — from PostgreSQL schemas and Laravel APIs to React interfaces that get out of the user's way. I obsess over the parts no one sees: clean models, predictable state, components that age well." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { dir: "right", delay: 0.15, className: "md:col-span-5 md:col-start-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: [
        ["15+", "Technologies in active rotation"],
        ["∞", "Refactors until it feels right"],
        ["01", "Developer. Frontend to data layer."]
      ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-6 border-b border-border pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-neon md:text-6xl", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: v })
      ] }, v)) }) })
    ] })
  ] });
}
function SkillsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "02", label: "Toolkit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-20 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] tracking-tighter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "The stack," }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "sharpened", delay: 0.15 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "in production.", delay: 0.3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 overflow-hidden rounded-3xl border border-border divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4", children: skillGroups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { dir: gi % 2 === 0 ? "up" : "down", delay: gi * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full bg-background p-8 transition-colors hover:bg-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-neon", children: [
          "[ ",
          g.n,
          " ]"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
          g.items.length,
          " tools"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 font-display text-3xl tracking-tight md:text-4xl", children: g.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: g.items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.li,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.05, ease },
          className: "flex items-center justify-between border-b border-border/60 pb-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon opacity-0 transition-opacity group-hover:opacity-100", children: "●" })
          ]
        },
        s
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-neon/0 blur-3xl transition-all duration-700 group-hover:bg-neon/20" })
    ] }) }, g.title)) })
  ] });
}
const iconMap = {
  React: SiReact,
  Laravel: SiLaravel,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  "React Native": TbBrandReactNative,
  Express: SiExpress,
  Tailwind: SiTailwindcss,
  Prisma: SiPrisma,
  "Node.js": SiNodedotjs,
  Git: SiGit
};
function FloatingIcon({ name, color, index }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const IconComponent = iconMap[name];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, scale: 0.5, y: 30 },
      animate: isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 30 },
      transition: { duration: 0.6, delay: index * 0.07, ease },
      whileHover: { scale: 1.15, y: -8, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
      className: "group relative flex flex-col items-center gap-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 group-hover:border-neon/50 md:h-20 md:w-20", children: IconComponent && /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { size: 32, className: "transition-all duration-300 group-hover:scale-110 md:size-10", style: { color } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-neon md:text-[10px]", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60",
            style: { backgroundColor: color }
          }
        )
      ]
    }
  );
}
function TechStack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "techstack", className: "relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "03", label: "Tech Stack" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-16 max-w-3xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Tools I" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "live in", delay: 0.15 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "every day.", delay: 0.3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:gap-8", children: techStackIcons.map((tech, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingIcon, { name: tech.name, color: tech.color, index: i }, tech.name)) })
  ] });
}
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "04", label: "Selected Work" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-20 max-w-5xl font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.92] tracking-tighter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Built quietly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Used loudly.", delay: 0.2 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#contact",
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { margin: "-80px" },
        transition: { duration: 0.8, delay: i * 0.06, ease },
        className: "group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 md:py-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-neon md:text-sm", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl leading-[0.95] tracking-tighter transition-transform duration-500 group-hover:translate-x-3 md:text-6xl lg:text-7xl", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: p.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: p.blurb })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-neon/40 group-hover:text-neon",
                children: s
              },
              s
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "shrink-0 font-display text-4xl text-muted-foreground transition-colors group-hover:text-neon md:text-6xl",
              whileHover: { rotate: 45 },
              children: "↗"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neon transition-transform duration-500 group-hover:scale-x-100" })
        ]
      },
      p.n
    )) })
  ] });
}
const rehmanMirzaCoImg = "/assets/rehman-co-DAKVQkqv.jpg";
const teamDeskProImg = "/assets/team-desk-pro-XJvmLOqt.jpg";
const unsentLetterImg = "/assets/unsent-letter-B6gA2jPI.jpg";
const imageMap = {
  "rehman-mirza-co": rehmanMirzaCoImg,
  "team-desk-pro": teamDeskProImg,
  "unsent-letter": unsentLetterImg
};
function ProjectCard({ title, description, stack, year, link, image, index }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const imgSrc = imageMap[image];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      ref,
      href: link,
      initial: { opacity: 0, y: 50 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      transition: { duration: 0.8, delay: index * 0.1, ease },
      className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-neon/40 hover:bg-surface",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imgSrc,
              alt: title,
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,oklch(0.88_0.22_130_/_0.15)_98%)] bg-[size:100%_3px] mix-blend-overlay opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full border border-neon/30 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-neon backdrop-blur-sm", children: year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "absolute right-4 top-4 font-display text-2xl text-foreground/70 transition-colors group-hover:text-neon",
              whileHover: { rotate: 45 },
              children: "↗"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6 md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base", children: description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-neon/30 group-hover:text-neon",
              children: s
            },
            s
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neon transition-transform duration-500 group-hover:scale-x-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-neon/0 blur-3xl transition-all duration-700 group-hover:bg-neon/10" })
      ]
    }
  );
}
function RecentProjects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "05", label: "Recent Projects" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-16 max-w-4xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Latest" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "builds,", delay: 0.15 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "fresh from the IDE.", delay: 0.3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: recentProjects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProjectCard,
      {
        title: p.title,
        description: p.description,
        stack: p.stack,
        year: p.year,
        link: p.link,
        image: p.image,
        index: i
      },
      p.title
    )) })
  ] });
}
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "process", className: "relative overflow-hidden bg-surface py-24 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-bg pointer-events-none absolute inset-0 opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "06", label: "Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-20 max-w-3xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tighter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Four moves." }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "On repeat.", delay: 0.15 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { dir: i % 2 === 0 ? "up" : "down", delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:border-neon/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-neon", children: [
            "[",
            s.n,
            "]"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-stroke", children: s.n })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 font-display text-3xl tracking-tighter", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: s.d })
      ] }) }, s.n)) })
    ] })
  ] });
}
function TestimonialCard({ name, role, text, index }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 40 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
      transition: { duration: 0.8, delay: index * 0.1, ease },
      className: "group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-neon/40 hover:bg-surface",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 font-display text-5xl text-neon leading-none", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm leading-relaxed text-muted-foreground md:text-base", children: text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-neon/40 bg-neon/10 font-display text-sm text-neon", children: name.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-neon/0 blur-3xl transition-all duration-700 group-hover:bg-neon/15" })
      ]
    }
  );
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "relative overflow-hidden bg-surface py-24 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-bg pointer-events-none absolute inset-0 opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "07", label: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-16 max-w-4xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Words from" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "those who", delay: 0.15 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "worked with me.", delay: 0.3 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { name: t.name, role: t.role, text: t.text, index: i }, t.name)) })
    ] })
  ] });
}
function FAQItem({ q, a, index }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 30 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.6, delay: index * 0.06, ease },
      className: "border-b border-border",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(!open),
            className: "flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-neon md:py-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-neon", children: [
                  "[",
                  String(index + 1).padStart(2, "0"),
                  "]"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base tracking-tight md:text-lg", children: q })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { rotate: open ? 45 : 0 },
                  transition: { duration: 0.3 },
                  className: "shrink-0 font-display text-2xl text-neon",
                  children: "+"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.4, ease },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-6 pl-12 text-sm leading-relaxed text-muted-foreground md:pb-8 md:text-base", children: a })
          }
        ) })
      ]
    }
  );
}
function FAQ() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "08", label: "FAQ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-16 max-w-3xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Questions," }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "answered", delay: 0.15 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "before you ask.", delay: 0.3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: faq.q, a: faq.a, index: i }, faq.q)) })
  ] });
}
const socialLinks = [
  {
    label: "Github",
    value: "Mirxa221",
    href: "https://github.com/Mirxa221"
  },
  {
    label: "LinkedIn",
    value: "shafiq-mirza",
    href: "https://www.linkedin.com/in/shafiq-mirza-8a4799311"
  },
  {
    label: "WhatsApp",
    value: "+92 336 4505984",
    href: "https://wa.me/923364505984?text=Hi%2C%20let%27s%20talk%20about%20a%20project"
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://www.google.com/maps?q=Lahore,Pakistan"
  }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { n: "09", label: "Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-tighter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "Let's build" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-stroke-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWords, { text: "something rare.", delay: 0.25 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid grid-cols-1 gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { dir: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl", children: "A product in mind? A stuck codebase? A quiet idea that deserves to exist? I read every message. Usually back within a day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:shafiqmirza662@gmail.com",
            className: "marquee-link mt-8 inline-block break-all font-display text-xl text-neon sm:text-2xl md:mt-10 md:text-4xl lg:text-5xl",
            children: "shafiqmirza662@gmail.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { dir: "right", delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: socialLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-center justify-between border-b border-border py-4 transition-colors hover:border-neon/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: link.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "marquee-link normal-case tracking-normal text-foreground transition-colors group-hover:text-neon",
            children: link.value
          }
        )
      ] }, link.label)) }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max marquee   items-center gap-10 whitespace-nowrap py-10 font-display text-stroke text-7xl md:text-9xl", children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10", children: [
      "SHAFIQ MIRZA ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "✦" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 border-t border-border px-6 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Shafiq Mirza — All rights reserved"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Designed & coded, late at night." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "marquee-link", children: "Back to top ↑" })
    ] })
  ] });
}
function WhatsAppButton() {
  const [tooltip, setTooltip] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-[120] flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, x: 10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 },
        transition: { duration: 0.2 },
        className: "whitespace-nowrap rounded-lg border border-border bg-card px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground shadow-lg",
        children: "Let's talk"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://wa.me/923364505984?text=Hi%2C%20let%27s%20talk%20about%20a%20project",
        target: "_blank",
        rel: "noopener noreferrer",
        onMouseEnter: () => setTooltip(true),
        onMouseLeave: () => setTooltip(false),
        className: "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "28",
              height: "28",
              viewBox: "0 0 24 24",
              fill: "white",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" })
        ]
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "noise relative min-h-screen overflow-x-clip bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TickerBand, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TechStack, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecentProjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
export {
  Index as component
};
