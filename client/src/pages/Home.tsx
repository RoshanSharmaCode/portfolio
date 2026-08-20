// Design system: Editorial Systems — technical labels, offset compositions, charcoal surfaces, parchment text, acid-lime signals.
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Menu,
  Network,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const markImage = "/assets/roshan-mark.webp";
const resumeFile = "/assets/Roshan-Sharma-Resume.pdf";

const projects = [
  {
    index: "01",
    name: "QuickDine",
    type: "Multi-restaurant table booking platform",
    description: "QuickDine is a full-stack MERN platform that lets customers discover restaurants and reserve tables in real time, with dedicated dashboards for restaurant owners and administrators.",
    image: "/assets/projects/quickdine.webp",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary"],
    features: ["Customer search + reservations", "Restaurant owner dashboards", "Admin listing controls", "JWT role-based access", "Table management", "Cloudinary image uploads"],
    github: "https://github.com/RoshanSharmaCode/QuickDine.git",
    demo: "https://quick-dine-phi.vercel.app",
  },
  {
    index: "02",
    name: "MERN Auth",
    type: "Secure authentication system",
    description: "A full-stack MERN authentication system featuring secure registration, email verification with six-digit OTP, HTTP-only cookie sessions, and password reset functionality.",
    image: "/assets/projects/mern-auth.webp",
    stack: ["React.js", "Vite", "Tailwind CSS", "Express.js", "MongoDB", "JWT", "Bcrypt.js", "Nodemailer"],
    features: ["User registration + login", "Six-digit email OTP", "HTTP-only cookie auth", "Secure password reset", "HTML email templates", "Protected routes"],
    github: "https://github.com/RoshanSharmaCode/MERN-auth",
    demo: "https://mern-auth-vovw.vercel.app",
  },
  {
    index: "03",
    name: "Crypto Price Tracker",
    type: "Real-time market data application",
    description: "A responsive cryptocurrency tracking application powered by the CoinGecko API, with live market data, detailed coin information, search, filtering, sorting, and interactive seven-day charts.",
    image: "/assets/projects/crypto-tracker.webp",
    stack: ["React.js", "Vite", "React Router", "CoinGecko API", "JavaScript", "CSS3"],
    features: ["Real-time market data", "Search by name or symbol", "Coin detail pages", "Interactive seven-day charts", "Grid + list layouts", "Search, filtering + sorting"],
    github: "https://github.com/RoshanSharmaCode/crypto-price-tracker.git",
    demo: "https://crypto-price-tracker-navy.vercel.app",
  },
  {
    index: "04",
    name: "Gemini Clone — AI Chatbot",
    type: "Generative AI interface",
    description: "A functional clone of Google Gemini built with React.js and the Google Gemini API, demonstrating real-time conversational experiences with history, context, and responsive UI states.",
    image: "/assets/projects/gemini-clone.png",
    stack: ["React.js", "JavaScript", "Vite", "CSS3", "Context API", "Google Gemini API"],
    features: ["AI-powered responses", "Real-time conversations", "Recent chat history", "Typing animation", "New chat flow", "Collapsible sidebar"],
    github: "https://github.com/RoshanSharmaCode/gemini-chat-app.git",
    demo: "https://gemini-chat-app-olive.vercel.app",
  },
];

const skillGroups = [
  { label: "Frontend", icon: Code2, items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Router", "Context API"] },
  { label: "Backend", icon: Network, items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MVC Architecture"] },
  { label: "Data", icon: Terminal, items: ["MongoDB", "Mongoose", "MySQL"] },
  { label: "Tools + AI", icon: Sparkles, items: ["Git", "GitHub", "Postman", "Vite", "npm", "Vitest", "VS Code", "Vercel", "Google Gemini API"] },
];

const navItems = ["about", "skills", "experience", "projects", "contact"];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}
    >{children}</motion.div>
  );
}

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-trace" aria-hidden="true"><i /></span>
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [formState, setFormState] = useState<"idle" | "ready">("idle");

  useEffect(() => {
    const sections = navItems.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0.15, 0.4, 0.7] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Roshan Sharma home">
          <img src={markImage} alt="" />
          <span><strong>ROSHAN</strong><em>SHARMA</em></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} className={active === item ? "active" : ""} onClick={() => scrollTo(item)}>{item}</button>)}
        </nav>
        <a className="topbar-link" href="https://github.com/RoshanSharmaCode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker"><span className="signal-dot" /> Open to full-time opportunities</p>
            <h1>Interfaces with<br /><span>a working</span> backend.</h1>
            <p className="hero-description">Hi, I&apos;m Roshan Sharma — a Full Stack Developer building reliable, responsive web applications with React, Node.js, Express.js, and MongoDB.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo("projects")}>View projects <ChevronRight size={17} /></button>
              <button className="button button-quiet" onClick={() => scrollTo("contact")}>Contact me <ArrowUpRight size={17} /></button>
              <a className="button button-quiet" href={resumeFile} download="Roshan-Sharma-Resume.pdf">Download resume <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta"><span>Bengaluru, India</span><span className="meta-line" /><span>ISE / 2026</span></div>
          </div>
          <div className="hero-visual" aria-label="Full-stack application system status panel">
            <div className="system-panel">
              <div className="system-panel-head"><span><i className="signal-dot" /> runtime / portfolio</span><span>v1.0.26</span></div>
              <div className="system-map">
                <div className="map-route route-one" /><div className="map-route route-two" /><div className="map-route route-three" />
                <div className="system-node node-api"><span>API</span><strong>REST</strong></div>
                <div className="system-node node-ui"><span>UI</span><strong>REACT</strong></div>
                <div className="system-node node-data"><span>DATA</span><strong>MONGO</strong></div>
                <div className="system-node node-auth"><span>AUTH</span><strong>JWT</strong></div>
                <div className="system-core"><span>FULL STACK</span><strong>BUILD<br />SYSTEMS</strong><i className="core-pulse" /></div>
              </div>
              <div className="system-panel-foot"><span><i className="signal-dot" /> all systems operational</span><span>ship / learn / repeat</span></div>
            </div>
          </div>
          <div className="hero-rail"><span>SCROLL TO EXPLORE</span><span className="rail-line" /></div>
        </section>

        <section id="about" className="content-section about-section">
          <SectionHeading number="01" eyebrow="Context / about" title="A builder who likes the details." />
          <div className="about-grid">
            <Reveal className="about-lede"><p>I&apos;m a recent B.Tech graduate in Information Science &amp; Engineering with hands-on experience building full-stack applications from data model to responsive interface.</p></Reveal>
            <Reveal delay={0.08} className="about-body"><p>My work sits across the MERN stack: REST APIs, authentication, database integration, and thoughtful UI systems. I care about the small decisions that make software feel reliable — clear states, durable components, and flows that make sense the first time.</p><p>Recently, I&apos;ve also been exploring AI-powered applications, especially the interface patterns that make emerging capabilities useful rather than noisy.</p></Reveal>
          </div>
        </section>

        <section id="skills" className="content-section skills-section">
          <SectionHeading number="02" eyebrow="Capabilities / stack" title="Tools I use to make things work." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => { const Icon = group.icon; return <Reveal key={group.label} delay={index * 0.06} className="skill-card"><div className="skill-card-top"><Icon size={19} /><span>0{index + 1}</span></div><h3>{group.label}</h3><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>; })}
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <SectionHeading number="03" eyebrow="Experience / selected" title="Learning in a real product loop." />
          <Reveal className="experience-card"><div className="experience-marker"><span className="signal-dot" /><span>02.26 — 05.26</span></div><div className="experience-main"><div className="experience-title"><div><p className="eyebrow">Software Developer Intern</p><h3>MindMatrix <span>· Bengaluru</span></h3></div><BriefcaseBusiness size={24} /></div><p className="experience-summary">Worked on a web-based asset management application, moving between reusable React components, CRUD flows, routing, state management, and the debugging work that keeps data persistent and in sync.</p><div className="experience-points"><span>Reusable React components</span><span>Client-side routing</span><span>CRUD functionality</span><span>Testing + deployment</span></div></div></Reveal>
        </section>

        <section id="projects" className="content-section projects-section">
          <div className="projects-heading"><SectionHeading number="04" eyebrow="Selected work / case studies" title="A few systems I&apos;ve shipped and studied closely." /><a className="text-link" href="https://github.com/RoshanSharmaCode" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={16} /></a></div>
          <div className="project-list">
            {projects.map((project, index) => <Reveal key={project.name} delay={index * 0.06} className="project-card"><div className="project-image-wrap"><div className="preview-grid" aria-hidden="true" /><img src={project.image} alt={`${project.name} interface preview`} loading="lazy" /><div className="project-index">{project.index}</div><div className="project-image-label">preview / live system</div></div><div className="project-info"><div><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div><div className="project-features">{project.features.map((feature) => <span key={feature}><Check size={13} />{feature}</span>)}</div><div className="project-bottom"><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-actions"><a className="project-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a><a className="project-link project-link-muted" href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a></div></div></div></Reveal>)}
          </div>
        </section>

        <section className="content-section education-section">
          <div className="education-aside"><p className="eyebrow">05 / Foundation</p><GraduationCap size={28} /></div><div className="education-main"><h2>B.Tech — Information Science<br /><span>&amp; Engineering</span></h2><div className="education-meta"><span>KNS Institute of Technology, Bengaluru</span><span>2022 — 2026</span><span>CGPA 8.0 / 10</span></div></div>
        </section>

        <section className="content-section github-section"><div className="github-mark"><Github size={34} /></div><div><p className="eyebrow">Open source / GitHub</p><h2>The activity is public.<br /><span>The numbers stay honest.</span></h2><p className="github-copy">I keep my repositories and work-in-progress visible on GitHub. Visit the profile for the current project list and contribution activity — no invented counters here.</p><div className="hero-actions"><a className="button button-primary" href="https://github.com/RoshanSharmaCode" target="_blank" rel="noreferrer">Open GitHub profile <ArrowUpRight size={17} /></a><a className="button button-quiet" href={resumeFile} download="Roshan-Sharma-Resume.pdf">Download resume <ArrowUpRight size={17} /></a></div></div></section>

        <section id="contact" className="content-section contact-section"><div className="contact-copy"><p className="eyebrow">06 / Start a conversation</p><h2>Let&apos;s build<br /><span>something together.</span></h2><p>Have a product problem, a full-stack role, or a good technical question? I&apos;d like to hear about it.</p><div className="contact-links"><a href="mailto:roshansharma9379@gmail.com">roshansharma9379@gmail.com <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/roshansharma9379/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/RoshanSharmaCode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); const name = String(data.get("name") ?? ""); const email = String(data.get("email") ?? ""); const message = String(data.get("message") ?? ""); const subject = encodeURIComponent(`Portfolio enquiry from ${name}`); const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`); window.location.href = `mailto:roshansharma9379@gmail.com?subject=${subject}&body=${body}`; setFormState("ready"); }}><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="e.g. Priya from Acme" /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="you@company.com" /><label htmlFor="message">What are you working on?</label><textarea id="message" name="message" required rows={4} placeholder="A few lines about the role, product, or idea..." /><button className="button button-primary" type="submit">{formState === "ready" ? "Draft ready — email me" : "Prepare message"} <Send size={15} /></button>{formState === "ready" && <p className="form-note">Your email app should open with a pre-filled draft. If it does not, email roshansharma9379@gmail.com directly.</p>}</form></section>
      </main>

      <footer className="footer"><span>© 2026 Roshan Sharma</span><span>Built with React, TypeScript &amp; curiosity.</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
