import { useEffect, useState } from "react";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "work", href: "#work" },
  { label: "testimonials", href: "#testimonials" },
  { label: "faq", href: "#faq" },
  { label: "contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile Menu Overlay — outside header so z-index works clean */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-background/95 backdrop-blur-xl lg:hidden">
          {/* Top bar with logo and close */}
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <a href="#top" className="group flex items-center gap-2 font-display text-lg" onClick={() => setMobileOpen(false)}>
              <span className="grid h-8 w-8 place-items-center rounded-md bg-neon font-mono text-sm font-bold text-primary-foreground transition-transform group-hover:rotate-12">
                S
              </span>
              <span>SHAFIQ<span className="text-neon">.</span></span>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-neon hover:text-neon"
              aria-label="Close menu"
            >
              <span className="font-display text-lg">✕</span>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {navLinks.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-tight transition-colors hover:text-neon sm:text-3xl"
              >
                <span className="mr-2 font-mono text-xs text-neon sm:text-sm">0{i + 1}/</span>
                {s.label.charAt(0).toUpperCase() + s.label.slice(1)}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 md:px-10">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-neon transition hover:bg-neon hover:text-primary-foreground"
            >
              <span className="size-1.5 rounded-full bg-neon blink" />
              Available for work
            </a>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-[140] transition-all duration-500 ${
          scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <a href="#top" className="group flex items-center gap-2 font-display text-base md:text-lg">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-neon font-mono text-xs font-bold text-primary-foreground transition-transform group-hover:rotate-12 md:h-8 md:w-8 md:text-sm">
              S
            </span>
            <span>SHAFIQ<span className="text-neon">.</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground lg:flex">
            {navLinks.map((s, i) => (
              <a key={s.label} href={s.href} className="marquee-link transition-colors hover:text-foreground">
                <span className="text-neon">0{i + 1}/</span>{s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            {/* Available badge — hidden on small mobile */}
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-neon transition hover:bg-neon hover:text-primary-foreground sm:inline-flex"
            >
              <span className="size-1.5 rounded-full bg-neon blink" />
              Available
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-neon lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <span className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}