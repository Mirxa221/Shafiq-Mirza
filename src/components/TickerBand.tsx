export function TickerBand() {
  const items = ["React", "Laravel", "Supabase", "PostgreSQL", "React Native", "Prisma", "MongoDB", "Express", "Tailwind", "TypeScript"];
  const row = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-6">
      <div className="flex w-max marquee items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl md:text-5xl">
            <span className={i % 3 === 0 ? "text-stroke" : i % 3 === 1 ? "text-foreground" : "text-neon"}>{t}</span>
            <span className="text-neon">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}