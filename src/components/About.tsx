import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
      <SectionHead n="01" label="About" />
      <h2 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-tighter">
        <SplitWords text="A developer who" />
        <br />
        <span className="italic text-neon"><SplitWords text="treats craft like" delay={0.2} /></span>
        <br />
        <SplitWords text="a daily habit." delay={0.4} />
      </h2>

      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-12">
        <Reveal dir="left" className="md:col-span-5">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            For years I've been writing software end to end — from PostgreSQL schemas and Laravel APIs to
            React interfaces that get out of the user's way. I obsess over the parts no one sees:
            clean models, predictable state, components that age well.
          </p>
        </Reveal>
        <Reveal dir="right" delay={0.15} className="md:col-span-5 md:col-start-8">
          <div className="space-y-8">
            {[
              ["15+", "Technologies in active rotation"],
              ["∞", "Refactors until it feels right"],
              ["01", "Developer. Frontend to data layer."],
            ].map(([k, v]) => (
              <div key={v} className="flex items-baseline gap-6 border-b border-border pb-6">
                <span className="font-display text-5xl text-neon md:text-6xl">{k}</span>
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}