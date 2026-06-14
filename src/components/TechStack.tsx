import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SiReact, SiLaravel, SiTypescript, SiPostgresql, SiSupabase, SiMongodb, SiExpress, SiTailwindcss, SiPrisma, SiNodedotjs, SiGit } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";
import { techStackIcons, ease } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
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
  Git: SiGit,
};

function FloatingIcon({ name, color, index }: { name: string; color: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const IconComponent = iconMap[name];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease }}
      whileHover={{ scale: 1.15, y: -8, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative flex flex-col items-center gap-3"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 group-hover:border-neon/50 md:h-20 md:w-20">
        {IconComponent && <IconComponent size={32} className="transition-all duration-300 group-hover:scale-110 md:size-10" style={{ color }} />}
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-neon md:text-[10px]">
        {name}
      </span>
      <div
        className="pointer-events-none absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="techstack" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <SectionHead n="03" label="Tech Stack" />
      <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter">
        <SplitWords text="Tools I" />{" "}
        <span className="italic text-neon"><SplitWords text="live in" delay={0.15} /></span>
        <br />
        <SplitWords text="every day." delay={0.3} />
      </h2>

      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:gap-8">
        {techStackIcons.map((tech, i) => (
          <FloatingIcon key={tech.name} name={tech.name} color={tech.color} index={i} />
        ))}
      </div>
    </section>
  );
}