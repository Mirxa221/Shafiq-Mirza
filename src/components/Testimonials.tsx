import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";
import { testimonials, ease } from "@/lib/constants";

function TestimonialCard({ name, role, text, index }: { name: string; role: string; text: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-neon/40 hover:bg-surface"
    >
      <div className="mb-6 font-display text-5xl text-neon leading-none">"</div>
      <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">{text}</p>
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon/40 bg-neon/10 font-display text-sm text-neon">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{name}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{role}</div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-neon/0 blur-3xl transition-all duration-700 group-hover:bg-neon/15" />
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-surface py-24 md:py-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead n="07" label="Testimonials" />
        <h2 className="mb-16 max-w-4xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter">
          <SplitWords text="Words from" />{" "}
          <span className="italic text-neon"><SplitWords text="those who" delay={0.15} /></span>
          <br />
          <SplitWords text="worked with me." delay={0.3} />
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} name={t.name} role={t.role} text={t.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}