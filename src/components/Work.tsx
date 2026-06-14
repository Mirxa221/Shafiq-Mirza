import { motion } from "motion/react";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";
import { projects, ease } from "@/lib/constants";

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <SectionHead n="04" label="Selected Work" />
      <h2 className="mb-20 max-w-5xl font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.92] tracking-tighter">
        <SplitWords text="Built quietly." />
        <br />
        <span className="italic text-neon"><SplitWords text="Used loudly." delay={0.2} /></span>
      </h2>

      <div className="divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <motion.a
            key={p.n}
            href="#contact"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.06, ease }}
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 md:py-10"
          >
            <span className="font-mono text-xs text-neon md:text-sm">{p.n}</span>
            <div className="min-w-0">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-3xl leading-[0.95] tracking-tighter transition-transform duration-500 group-hover:translate-x-3 md:text-6xl lg:text-7xl">
                  {p.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.year}</span>
                  <span className="h-3 w-px bg-border" />
                  <span className="text-sm text-muted-foreground">{p.blurb}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-neon/40 group-hover:text-neon"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <motion.span
              className="shrink-0 font-display text-4xl text-muted-foreground transition-colors group-hover:text-neon md:text-6xl"
              whileHover={{ rotate: 45 }}
            >
              ↗
            </motion.span>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neon transition-transform duration-500 group-hover:scale-x-100" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}