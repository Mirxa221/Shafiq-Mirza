export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="overflow-hidden">
        <div className="flex w-max marquee   items-center gap-10 whitespace-nowrap py-10 font-display text-stroke text-7xl md:text-9xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              SHAFIQ MIRZA <span className="text-neon">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 border-t border-border px-6 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center md:px-10">
        <span>© {new Date().getFullYear()} Shafiq Mirza — All rights reserved</span>
        <span>Designed & coded, late at night.</span>
        <a href="#top" className="marquee-link">Back to top ↑</a>
      </div>
    </footer>
  );
}