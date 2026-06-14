// ============ Animation ============

export const ease = [0.22, 1, 0.36, 1] as const;

// ============ Skills Data ============

export const skillGroups = [
  { title: "Frontend", n: "01", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { title: "Mobile", n: "02", items: ["React Native"] },
  { title: "Backend", n: "03", items: ["Laravel", "PHP", "Express"] },
  { title: "Data Layer", n: "04", items: ["PostgreSQL", "MongoDB", "SQL", "Prisma", "Supabase"] },
];

// ============ Projects Data ============

export const projects = [
  {
    n: "01",
    title: "MyRecipal",
    year: "2026",
    blurb: "A global recipe discovery mobile app. Browse cuisines from around the world with a smooth, intuitive interface.",
    stack: ["React Native", "Laravel", "MySQL"]
  },
  {
    n: "02",
    title: "The Unsent Letter",
    year: "2026",
    blurb: "An anonymous emotional outlet on the web. Users pour their hearts out — no names, no judgment, just pure expression.",
    stack: ["React", "Laravel", "MySQL"]
  },
  {
    n: "03",
    title: "TeamDesk Pro",
    year: "2026",
    blurb: "A team collaboration hub. Staff manage daily tasks while managers track progress and team growth in real time.",
    stack: ["React", "Laravel", "MySQL"]
  },
  {
    n: "04",
    title: "Rehman Mirza & Co.",
    year: "2026",
    blurb: "A sleek, professional portfolio website built for a design studio. Clean UI with a headless CMS backend.",
    stack: ["React", "Express", "MySQL"]
  },
];

// ============ Process Steps Data ============

export const steps = [
  { 
    n: "01", 
    t: "Listen", 
    d: "I figure out the real problem first  before touching the keyboard. The brief is just a starting point, not the whole story." 
  },
  { 
    n: "02", 
    t: "Architect", 
    d: "Data model comes first, UI follows. When the structure is right, everything else falls into place naturally." 
  },
  { 
    n: "03", 
    t: "Ship", 
    d: "Small releases, fast feedback. I'd rather see real users react than stare at a five-year roadmap." 
  },
  { 
    n: "04", 
    t: "Refine", 
    d: "That last 10% performance, polish, edge cases. This is the part users actually feel, so I don't skip it." 
  },
];

// ============ Testimonials Data ============
export const testimonials = [
  {
    name: "Ahmed",
    role: "Restaurant Owner & Food Blogger",
    text: "Shafiq built my entire recipe app faster than I expected. Clean code, great communication, and he actually cares about the end result. Will definitely hire again.",
  },
  {
    name: "Sara",
    role: "Mental Health Blogger",
    text: "Working with Shafiq felt like having a co-founder who codes. He didn't just build what I asked for — he figured out what I actually needed and made it better.",
  },
  {
    name: "Omar",
    role: "Team Lead at a Logistics Company",
    text: "Our team works in remote areas with weak internet. Shafiq built an app that works perfectly offline and syncs when connected. Three months in, zero crashes. Rock solid.",
  },
  {
    name: "Ayesha",
    role: "Creative Director & Photographer",
    text: "I'm really picky about design details. Shafiq is that rare dev who actually gets it. My Figma designs and the live site look identical — even the animations are spot on.",
  },
];

// ============ FAQ Data ============

export const faqs = [
  {
    q: "Do you work with startups or only established companies?",
    a: "Both. I love the energy of early-stage startups quick decisions, big impact. But I also enjoy the structure and scale of established teams. If the problem is interesting, I am in.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Most projects take 4 to 8 weeks from kickoff to launch. It depends on scope, of course. I prefer small, testable releases over monolithic drops so you see progress weekly, not monthly.",
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes. I offer retainer packages for bug fixes, feature additions, and performance monitoring. Most clients keep me on a light retainer for the first 3 months post-launch.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Absolutely. I have slotted into teams ranging from 2 to 20 developers. I am comfortable with Git workflows, code reviews, standups, and async communication.",
  },
  {
    q: "What is your pricing model?",
    a: "I work on fixed-price for well-defined projects and weekly rates for open-ended engagements. I will always give you a clear estimate before we start no surprises.",
  },
  {
    q: "Are you available for full-time roles?",
    a: "Currently open to both freelance and full-time opportunities. If the role is right, I am flexible on structure.",
  },
];

// ============ Tech Stack Icons Data ============

export const techStackIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Express", color: "#000000" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Node.js", color: "#339933" },
  { name: "Git", color: "#F05032" },
];
// ============ Recent Projects Data ============
export const recentProjects = [
  {
    title: "Rehman Mirza Co",
    description: "A sleek, professional portfolio website built for a design studio. Clean UI with a headless CMS backend, smooth animations, and a contact system for client inquiries.",
    stack: ["React", "Express", "MySQL"],
    year: "2026",
    link: "#contact",
    image: "rehman-mirza-co",
  },
  {
    title: "Team Desk Pro",
    description: "A team collaboration hub where staff manage daily tasks and managers track progress and team growth in real time. Built for streamlined operations and productivity.",
    stack: ["React", "Laravel", "MySQL"],
    year: "2026",
    link: "#contact",
    image: "team-desk-pro",
  },
  {
    title: "Unsent Letter",
    description: "An anonymous emotional outlet on the web where users pour their hearts out with no names and no judgment. A safe space for pure, unfiltered expression.",
    stack: ["React", "Laravel", "MySQL"],
    year: "2026",
    link: "#contact",
    image: "unsent-letter",
  },
];