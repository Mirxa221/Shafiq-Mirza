import { motion, useInView } from "motion/react";
import { useRef } from "react";
import rehmanMirzaCoImg from "@/assets/rehman-co.jpg";
import teamDeskProImg from "@/assets/team-desk-pro.jpg";
import unsentLetterImg from "@/assets/unsent-letter.jpg";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";
import { recentProjects, ease } from "@/lib/constants";

const imageMap: Record<string, string> = {
  "rehman-mirza-co": rehmanMirzaCoImg,
  "team-desk-pro": teamDeskProImg,
  "unsent-letter": unsentLetterImg,
};

function ProjectCard({ title, description, stack, year, link, image, index }: {
  title: string;
  description: string;
  stack: string[];
  year: string;
  link: string;
  image: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const imgSrc = imageMap[image];

  return (
    <motion.a
      ref={ref}
      href={link}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-neon/40 hover:bg-surface"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,oklch(0.88_0.22_130_/_0.15)_98%)] bg-[size:100%_3px] mix-blend-overlay opacity-50" />
        <span className="absolute left-4 top-4 rounded-full border border-neon/30 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-neon backdrop-blur-sm">
          {year}
        </span>
        <motion.span
          className="absolute right-4 top-4 font-display text-2xl text-foreground/70 transition-colors group-hover:text-neon"
          whileHover={{ rotate: 45 }}
        >
          ↗
        </motion.span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="mb-3 font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
          {title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-neon/30 group-hover:text-neon"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neon transition-transform duration-500 group-hover:scale-x-100" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-neon/0 blur-3xl transition-all duration-700 group-hover:bg-neon/10" />
    </motion.a>
  );
}

export function RecentProjects() {
  return (
    <section id="projects" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <SectionHead n="05" label="Recent Projects" />
      <h2 className="mb-16 max-w-4xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter">
        <SplitWords text="Latest" />{" "}
        <span className="italic text-neon"><SplitWords text="builds," delay={0.15} /></span>
        <br />
        <SplitWords text="fresh from the IDE." delay={0.3} />
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentProjects.map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            stack={p.stack}
            year={p.year}
            link={p.link}
            image={p.image}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}