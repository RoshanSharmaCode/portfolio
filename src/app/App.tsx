import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Download,
  ChevronDown,
  GraduationCap,
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/RoshanSharmaCode",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/roshansharma9379",
  },
  { icon: Mail, label: "Email", href: "mailto:roshansharma9379@gmail.com" },
];

const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    icon: Layers,
    items: [
      "React.js",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Vite", "Postman", "VS Code", "Vercel"],
  },
];

const PROJECTS = [
  {
    title: "QuickDine",
    subtitle: "Multi-Restaurant Table Booking Platform",
    description:
      "A production-ready MERN application supporting three user roles, secure JWT authentication, 18 RESTful APIs, restaurant management, and real-time table booking.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    features: [
      "Multi-role authentication",
      "Restaurant owner dashboard",
      "Customer booking system",
      "Admin dashboard",
      "Search & filtering",
      "Responsive design",
    ],
    github: "https://github.com/RoshanSharmaCode/QuickDine.git",
    demo: "https://quick-dine-phi.vercel.app",
    accent: "#3b82f6",
  },
  {
    title: "Gemini AI Clone",
    subtitle: "AI Chat Interface",
    description:
      "A Google Gemini-powered AI chatbot with persistent chat history, prompt suggestions, and a responsive conversational UI.",
    tech: ["React", "Google Gemini API", "Context API", "Vite"],
    features: [
      "AI chatbot integration",
      "Chat history persistence",
      "Prompt suggestions",
      "Responsive UI",
    ],
    github: "https://github.com/RoshanSharmaCode/gemini-chat-app.git",
    demo: "https://gemini-chat-app-olive.vercel.app",
    accent: "#8b5cf6",
  },
  {
    title: "Crypto Price Tracker",
    subtitle: "Live Cryptocurrency Dashboard",
    description:
      "Real-time cryptocurrency tracker with live prices, sortable tables, detailed coin pages, and interactive charts powered by the CoinGecko API.",
    tech: ["React", "CoinGecko API", "React Router"],
    features: [
      "Tracks 100+ cryptocurrencies",
      "Live crypto prices",
      "Search functionality",
      "Sorting controls",
      "Coin detail pages",
      "Charts",
    ],
    github: "https://github.com/RoshanSharmaCode/crypto-price-tracker.git",
    demo: "https://crypto-price-tracker-navy.vercel.app",
    accent: "#10b981",
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Shopping App",
    description:
      "A complete e-commerce solution with shopping cart, product catalog, secure REST APIs, and user authentication.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Shopping cart",
      "Product catalog",
      "REST APIs",
      "Authentication",
    ],
    github: "https://github.com/RoshanSharmaCode/Ecommerce-Project.git",
    demo: null,
    accent: "#f59e0b",
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Animation Wrappers ───────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090e]/90 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="cursor-pointer text-foreground font-bold text-lg tracking-tight hover:text-[#3b82f6] transition-colors"
        >
          RS<span className="text-[#3b82f6]">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/Roshan_Sharma_Resume.pdf"
          download="Roshan_Sharma_Resume.pdf"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3b82f6] text-white text-sm font-semibold hover:bg-[#2563eb] transition-colors"
        >
          <Download size={14} />
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground hover:text-[#3b82f6] transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-[#09090e]/95 backdrop-blur-md border-b border-white/[0.06] px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => {
                    scrollTo(l.href);
                    setOpen(false);
                  }}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors font-medium text-base w-full text-left"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/Roshan_Sharma_Resume.pdf"
                download="Roshan_Sharma_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3b82f6] text-white text-sm font-semibold hover:bg-[#2563eb] transition-colors"
              >
                <Download size={14} />
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#93c5fd] text-xs font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Roshan Sharma
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-[#3b82f6] font-semibold mb-6 tracking-wide"
        >
          Full Stack Developer · MERN Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Full Stack Developer specializing in the MERN stack. I build scalable
          web applications with React, Node.js, Express.js, MongoDB, and
          TypeScript, focusing on clean architecture, secure APIs, and
          responsive user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3 rounded-xl bg-[#3b82f6] text-white font-semibold text-sm hover:bg-[#2563eb] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#3b82f6]/25"
          >
            View Projects
          </button>
          <a
            href="/Roshan_Sharma_Resume.pdf"
            download="Roshan_Sharma_Resume.pdf"
            className="px-6 py-3 rounded-xl border border-white/10 text-foreground font-semibold text-sm hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/5 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <Download size={15} />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 rounded-xl border border-white/10 text-foreground font-semibold text-sm hover:border-white/20 hover:bg-white/[0.04] transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {SOCIAL.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#3b82f6] hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/10 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-60">
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce opacity-60" />
      </motion.div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-12">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Building the web,
            <br className="hidden sm:block" /> one commit at a time
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-foreground font-medium">
                  B.Tech graduate in Information Science & Engineering
                </span>
                , with a passion for building modern web applications from the
                ground up.
              </p>
              <p>
                My primary focus is the{" "}
                <span className="text-foreground font-medium">MERN stack</span>{" "}
                — MongoDB, Express.js, React, and Node.js — and I work fluently
                in both
                <span className="text-foreground font-medium">
                  {" "}
                  JavaScript and TypeScript
                </span>
                . I care deeply about code quality, type safety, and writing
                software that scales.
              </p>
              <p>
                I thrive on solving real-world problems: designing secure REST
                APIs, implementing multi-role authentication systems, and
                crafting responsive interfaces that genuinely delight users.
                Every project is an opportunity to learn something new.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies,
                sharpening my problem-solving skills, and pushing toward clean,
                maintainable, production-ready code.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "B.Tech ISE", sub: "2022 – 2026" },
                { label: "CGPA 8.0/10", sub: "KNS Institute of Technology" },
                { label: "MERN Stack", sub: "Core Specialization" },
                { label: "TypeScript", sub: "Type-safe Development" },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl bg-card border border-white/[0.06] hover:border-[#3b82f6]/30 transition-colors"
                >
                  <p className="text-foreground font-semibold text-lg">
                    {label}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-12">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Technologies I work with
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map(({ category, icon: Icon, items }, i) => (
            <FadeIn key={category} delay={i * 0.06}>
              <div className="p-6 rounded-2xl bg-card border border-white/[0.06] hover:border-[#3b82f6]/25 transition-all hover:-translate-y-0.5 group h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/15 transition-colors">
                    <Icon size={17} />
                  </div>
                  <span className="text-foreground font-semibold text-sm">
                    {category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground text-xs font-medium border border-white/[0.05] hover:border-[#3b82f6]/30 hover:text-[#93c5fd] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-12">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Featured work
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            A selection of projects I&apos;ve built — each solving a real
            problem with a thoughtful stack.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  features,
  github,
  demo,
  accent,
}: (typeof PROJECTS)[0]) {
  return (
    <article className="group flex flex-col rounded-2xl bg-card border border-white/[0.06] hover:border-white/[0.12] transition-all hover:-translate-y-1 overflow-hidden h-full">
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-foreground font-bold text-xl group-hover:text-white transition-colors">
              {title}
            </h3>
            <p
              className="text-[0.8rem] font-medium mt-0.5"
              style={{ color: accent }}
            >
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub`}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
              >
                <Github size={15} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Features */}
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5 flex-1">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: accent }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[0.7rem] font-semibold border"
              style={{
                background: `${accent}14`,
                borderColor: `${accent}28`,
                color: accent,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-12">
          <SectionLabel>Education</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Academic background
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl rounded-2xl bg-card border border-white/[0.06] hover:border-[#3b82f6]/25 transition-all p-7 flex gap-6 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/15 transition-colors">
              <GraduationCap size={22} />
            </div>
            <div>
              <div className="flex items-start gap-3 flex-wrap">
                <div>
                  <h3 className="text-foreground font-bold text-lg">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-[#3b82f6] font-semibold text-sm mt-0.5">
                    Information Science & Engineering
                  </p>
                </div>
                <span className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full bg-[#3b82f6]/10 text-[#93c5fd] border border-[#3b82f6]/20 flex-shrink-0">
                  2022 – 2026
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-3">
                KNS Institute of Technology, Bengaluru
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs font-medium text-muted-foreground">
                  CGPA
                </span>
                <div className="flex-1 max-w-[120px] h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#3b82f6]"
                    style={{ width: "80%" }}
                  />
                </div>
                <span className="text-sm font-bold text-foreground">
                  8.0 / 10
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-12">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Let&apos;s work together
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            I&apos;m currently open to Full Stack Developer, MERN Developer, and
            Software Engineer opportunities. If you'd like to collaborate or
            discuss an opportunity, feel free to reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "roshansharma9379@gmail.com",
                href: "mailto:roshansharma9379@gmail.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "RoshanSharmaCode",
                href: "https://github.com/RoshanSharmaCode",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "roshansharma9379",
                href: "https://linkedin.com/in/roshansharma9379",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-card border border-white/[0.06] hover:border-[#3b82f6]/35 hover:bg-[#3b82f6]/5 transition-all hover:-translate-y-0.5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/20 transition-colors">
                    <Icon size={17} />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground group-hover:text-[#3b82f6] transition-colors"
                  />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    {label}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5 truncate">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          Designed & Built by Roshan Sharma © 2026
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-[#3b82f6] transition-colors"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#3b82f6]">
      <span className="w-4 h-px bg-[#3b82f6]" />
      {children}
    </span>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 999px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(59,130,246,0.5); }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
