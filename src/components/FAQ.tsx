import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";
import { faqs, ease } from "@/lib/constants";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-neon md:py-8"
      >
        <div className="flex items-start gap-4">
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-neon">[{String(index + 1).padStart(2, "0")}]</span>
          <span className="font-display text-base tracking-tight md:text-lg">{q}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 font-display text-2xl text-neon"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-12 text-sm leading-relaxed text-muted-foreground md:pb-8 md:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <SectionHead n="08" label="FAQ" />
      <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.2rem,6vw,7rem)] leading-[0.95] tracking-tighter">
        <SplitWords text="Questions," />{" "}
        <span className="italic text-neon"><SplitWords text="answered" delay={0.15} /></span>
        <br />
        <SplitWords text="before you ask." delay={0.3} />
      </h2>

      <div className="border-t border-border">
        {faqs.map((faq, i) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </section>
  );
}