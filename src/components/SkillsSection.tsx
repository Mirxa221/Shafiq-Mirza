import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";
import { skillGroups, ease } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <SectionHead n="02" label="Toolkit" />
      <h2 className="mb-20 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] tracking-tighter">
        <SplitWords text="The stack," />{" "}
        <span className="italic text-neon"><SplitWords text="sharpened" delay={0.15} /></span>
        <br />
        <SplitWords text="in production." delay={0.3} />
      </h2>

      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} dir={gi % 2 === 0 ? "up" : "down"} delay={gi * 0.08}>
            <div className="group relative h-full bg-background p-8 transition-colors hover:bg-surface">
              <div className="mb-8 flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon">[ {g.n} ]</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{g.items.length} tools</span>
              </div>
              <h3 className="mb-8 font-display text-3xl tracking-tight md:text-4xl">{g.title}</h3>
              <ul className="space-y-3">
                {g.items.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease }}
                    className="flex items-center justify-between border-b border-border/60 pb-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{s}</span>
                    <span className="text-neon opacity-0 transition-opacity group-hover:opacity-100">●</span>
                  </motion.li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-neon/0 blur-3xl transition-all duration-700 group-hover:bg-neon/20" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}