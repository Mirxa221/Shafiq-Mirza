import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";
import { steps } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-surface py-24 md:py-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead n="06" label="Process" />
        <h2 className="mb-20 max-w-3xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tighter">
          <SplitWords text="Four moves." />{" "}
          <span className="italic text-neon"><SplitWords text="On repeat." delay={0.15} /></span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} dir={i % 2 === 0 ? "up" : "down"} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:border-neon/50">
                <div className="mb-8 flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon">[{s.n}]</span>
                  <span className="font-display text-5xl text-stroke">{s.n}</span>
                </div>
                <h3 className="mb-3 font-display text-3xl tracking-tighter">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}