import { createFileRoute } from "@tanstack/react-router";
import mirzaAsset from "@/assets/mirza.jpeg";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TickerBand } from "@/components/TickerBand";
import { About } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { TechStack } from "@/components/TechStack";
import { Work } from "@/components/Work";
import { RecentProjects } from "@/components/RecentProjects";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shafiq Mirza — Full-Stack Engineer" },
      { name: "description", content: "Portfolio of Shafiq Mirza — full-stack engineer building fast, modern web & mobile products with React, Laravel, Supabase and more." },
      { property: "og:title", content: "Shafiq Mirza — Full-Stack Engineer" },
      { property: "og:description", content: "Full-stack engineer building fast, modern web & mobile products." },
      { property: "og:image", content: mirzaAsset },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: mirzaAsset },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="noise relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <TickerBand />
      <About />
      <SkillsSection />
      <TechStack />
      <Work />
      <RecentProjects />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}