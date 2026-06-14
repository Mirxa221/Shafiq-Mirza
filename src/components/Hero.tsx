import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import mirzaAsset from "@/assets/mirza.jpeg";
import { SplitWords } from "@/components/SplitWords";
import { ease } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden pt-28">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        style={{ opacity }}
        className="animate-orb pointer-events-none absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-neon/20 blur-[120px]"
      />
      <motion.div
        style={{ opacity }}
        className="animate-orb pointer-events-none absolute right-[5%] top-[60%] h-[380px] w-[380px] rounded-full bg-neon/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 pb-24 md:px-10 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div style={{ y: yText }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="h-px w-12 bg-neon" />
            <span>Full-Stack Engineer</span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85] tracking-tighter">
            <SplitWords text="Shafiq" />
            <br />
            <span className="inline-block text-stroke-neon italic">
              <SplitWords text="Mirza." delay={0.2} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="mt-10 grid max-w-xl grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="text-neon">→ role</span><span>Full-Stack Developer</span>
            <span className="text-neon">→ open</span><span className="text-foreground">Let's build something</span>
            <span className="text-neon">→ status</span><span className="text-foreground">Available for projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-neon px-8 py-4 text-sm font-semibold text-primary-foreground"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">View selected work</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 -translate-x-full bg-foreground transition-transform duration-500 group-hover:translate-x-0" />
          </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm transition hover:border-neon hover:text-neon"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yImg }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease }}
            className="glow-ring relative overflow-hidden rounded-3xl border border-neon/30 bg-card"
          >
            <motion.img
              style={{ scale: scaleImg }}
              src={mirzaAsset}
              alt="Shafiq Mirza"
              className="aspect-[4/5] w-full object-cover contrast-110 saturate-[0.8]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,oklch(0.88_0.22_130_/_0.25)_98%)] bg-[size:100%_3px] mix-blend-overlay" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em]">
              <div>
                <div className="text-neon">// subject</div>
                <div className="text-foreground">Shafiq Mirza</div>
              </div>
              <div className="text-right">
                <div className="text-neon">// loc</div>
                <div className="text-foreground">Lahore, PK</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 12 }}
            transition={{ duration: 1, delay: 0.8, ease }}
            className="absolute -right-4 -top-4 rounded-full border border-neon/50 bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-neon"
          >
            ● rec — live
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
            className="absolute bottom-4 -left-4 max-w-[200px] rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-md"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Years shipping</div>
            <div className="mt-1 font-display text-4xl">1<span className="text-neon">+</span></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
          ↓ scroll
        </motion.div>
      </motion.div>
    </section>
  );
}