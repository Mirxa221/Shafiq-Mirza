import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { SectionHead } from "@/components/SectionHead";

const socialLinks = [
  {
    label: "Github",
    value: "Mirxa221",
    href: "https://github.com/Mirxa221",
  },
  {
    label: "LinkedIn",
    value: "shafiq-mirza",
    href: "https://www.linkedin.com/in/shafiq-mirza-8a4799311",
  },
  {
    label: "WhatsApp",
    value: "+92 336 4505984",
    href: "https://wa.me/923364505984?text=Hi%2C%20let%27s%20talk%20about%20a%20project"
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://www.google.com/maps?q=Lahore,Pakistan",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <SectionHead n="09" label="Contact" />
      <h2 className="font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-tighter">
        <SplitWords text="Let's build" />
        <br />
        <span className="italic text-stroke-neon"><SplitWords text="something rare." delay={0.25} /></span>
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <Reveal dir="left">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
            A product in mind? A stuck codebase? A quiet idea that deserves to exist?
            I read every message. Usually back within a day.
          </p>
          <a
            href="mailto:shafiqmirza662@gmail.com"
            className="marquee-link mt-8 inline-block break-all font-display text-xl text-neon sm:text-2xl md:mt-10 md:text-4xl lg:text-5xl"
          >
            shafiqmirza662@gmail.com
          </a>
        </Reveal>
        <Reveal dir="right" delay={0.15}>
          <div className="space-y-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {socialLinks.map((link) => (
              <div key={link.label} className="group flex items-center justify-between border-b border-border py-4 transition-colors hover:border-neon/50">
                <span>{link.label}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="marquee-link normal-case tracking-normal text-foreground transition-colors group-hover:text-neon"
                >
                  {link.value}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}