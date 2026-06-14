import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { ease } from "@/lib/constants";

export function SectionHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em]">
      <Reveal dir="left">
        <span className="text-neon">[ {n} ]</span>
      </Reveal>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ margin: "-80px" }}
        transition={{ duration: 1, ease }}
        className="h-px flex-1 origin-left bg-border"
      />
      <Reveal dir="right">
        <span className="text-muted-foreground">{label}</span>
      </Reveal>
    </div>
  );
}