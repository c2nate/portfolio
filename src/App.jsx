import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, FileText, Moon, Sun, ExternalLink, MapPin, Code, Layers, Rocket } from "lucide-react";

// --- Replace this with your real data ---
const DATA = {
  name: "Nathaniel Dale",
  title: "Software Developer · Full‑Stack · Data Science · AI",
  blurb:
    "CS graduate building reliable, well‑tested, integrated software. I like clean architecture, thoughtful UX, and getting it done right.",
  location: "California, USA",
  email: "NDaleDev240@gmail.com",
  links: {
    github: "https://github.com/c2nate",
    linkedin: "www.linkedin.com/in/nathaniel-dale-bb488a24a",
    resume: "/Resume-NathanielDale.pdf", // put your file in the public folder
  },
  skills: [
    "Python", "Java", "C++", "React", "TypeScript", "Node.js", "Django", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Git/GitHub Actions", "CI/CD", "Testing (Jest/PyTest)"
  ],
  projects: [
    {
      name: "Weather Activity Recommender",
      tagline: "Suggests what to do today based on live weather + events",
      tech: ["React", "Tailwind", "Django", "DRF", "PostgreSQL", "OpenWeather", "AWS"],
      desc:
        "Full‑stack web app with typed REST endpoints, caching, and optimistic UI updates. Deployed with IaC and CI/CD.",
      highlights: [
        "Server‑side feature engineering for weather buckets",
        "JWT auth + role‑based routes",
        "95%+ unit/integration test coverage on API layer",
      ],
      repo: "https://github.com/your-username/weather-app",
      demo: "https://your-demo.example.com",
    },
    {
      name: "SearchGazer Analysis",
      tagline: "Eye‑tracking feature extraction for content recommendations",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
      desc:
        "Data pipeline to detect fixations/saccades and derive features that correlate with user interest.",
      highlights: [
        "Windowed gaze segmentation + smoothing",
        "Fixation heatmaps & dwell‑time features",
        "Experiment tracking with clear notebooks",
      ],
      repo: "https://github.com/your-username/searchgazer",
    },
    {
      name: "Secure Messaging (RSA + AES)",
      tagline: "Two‑party encrypted message exchange with MAC",
      tech: ["Python", "PyCryptodome"],
      desc:
        "Implements hybrid crypto (RSA key exchange, AES message layer, MAC authentication).",
      highlights: [
        "Key management + safe serialization",
        "CLI demo with deterministic tests",
      ],
      repo: "https://github.com/your-username/secure-messenger",
    },
  ],
  experience: [
    {
      company: "Research Assistant · University",
      period: "2024 – 2025",
      bullets: [
        "Implemented signal processing pipeline for EEG/ERP data (FA_avg_task, RewP_AP_Fz)",
        "Bootstrapped mediation/moderation analyses (n=5000) with reproducible R notebooks",
        "Collaborated across a 4‑person team; code‑reviewed PRs and wrote documentation",
      ],
    },
  ],
};

// --- UI helpers ---
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24 py-14" aria-labelledby={`${id}-title`}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-5 h-5" aria-hidden />
        <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="text-xs border rounded-full px-2.5 py-1 leading-5">{children}</span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition-shadow bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
    {children}
  </div>
);

// --- Main App ---
export default function PortfolioApp() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {/* Top Nav */}
        <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-zinc-950/60 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold">{DATA.name}</a>
            <div className="flex items-center gap-4">
              <a href="#projects" className="text-sm hover:underline">Projects</a>
              <a href="#experience" className="text-sm hover:underline">Experience</a>
              <a href="#skills" className="text-sm hover:underline">Skills</a>
              <a href="#contact" className="text-sm hover:underline">Contact</a>
              <button
                aria-label="Toggle dark mode"
                className="rounded-full border p-2"
                onClick={() => setDark((d) => !d)}
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <main id="home" className="max-w-6xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4" /> {DATA.location}
              </div>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
                {DATA.title}
              </h1>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-prose">
                {DATA.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border rounded-xl px-3 py-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border rounded-xl px-3 py-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href={DATA.links.resume} className="inline-flex items-center gap-2 border rounded-xl px-3 py-2">
                  <FileText className="w-4 h-4" /> Resume
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border rounded-xl px-3 py-2">
                  <Mail className="w-4 h-4" /> Contact
                </a>
              </div>
            </div>

            <Card>
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-5 h-5" />
                <h3 className="font-medium">Quick Facts</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>🎓 CS Graduate, magna cum laude</li>
                <li>🧪 Loves testing + CI/CD</li>
                <li>🛠️ Maker: 3D printing & woodworking</li>
              </ul>
            </Card>
          </motion.div>
        </main>

        {/* Projects */}
        <Section id="projects" icon={Layers} title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.projects.map((p) => (
              <Card key={p.name}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {p.name}
                      {p.demo && (
                        <a href={p.demo} className="inline-flex items-center gap-1 text-sm font-normal underline" target="_blank" rel="noreferrer">
                          Live <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.tagline}</p>
                  </div>
                  <div className="flex gap-2">
                    {p.repo && (
                      <a title="Repository" href={p.repo} target="_blank" rel="noreferrer" className="rounded-full border p-2"><Github className="w-4 h-4"/></a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (<Badge key={t}>{t}</Badge>))}
                </div>
                {p.highlights && (
                  <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                    {p.highlights.map((h) => (<li key={h}>{h}</li>))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" icon={Code} title="Experience & Research">
          <div className="space-y-4">
            {DATA.experience.map((e) => (
              <Card key={e.company}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{e.company}</h3>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{e.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                  {e.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" icon={Rocket} title="Skills">
          <Card>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((s) => (<Badge key={s}>{s}</Badge>))}
            </div>
          </Card>
        </Section>

        {/* Contact */}
        <Section id="contact" icon={Mail} title="Contact">
          <Card>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Want to collaborate or chat about an opportunity? Email me at
              {" "}
              <a className="underline" href={`mailto:${DATA.email}`}>{DATA.email}</a>.
            </p>
            <form
              className="mt-4 grid gap-3 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("from")}\nMessage: ${data.get("message")}`
                );
                window.location.href = `mailto:${DATA.email}?subject=Portfolio Contact&body=${body}`;
              }}
            >
              <input name="name" placeholder="Your name" className="border rounded-xl px-3 py-2 bg-transparent" required />
              <input name="from" type="email" placeholder="Your email" className="border rounded-xl px-3 py-2 bg-transparent" required />
              <textarea name="message" placeholder="Your message" className="md:col-span-2 border rounded-xl px-3 py-2 bg-transparent min-h-28" required />
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" className="border rounded-xl px-3 py-2">Send</button>
                <a href={DATA.links.resume} className="inline-flex items-center gap-2 border rounded-xl px-3 py-2">
                  <FileText className="w-4 h-4"/> View Resume
                </a>
              </div>
            </form>
          </Card>
        </Section>

        {/* Footer */}
        <footer className="border-t py-8 mt-8">
          <div className="max-w-6xl mx-auto px-4 text-sm flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a className="underline" href={DATA.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="underline" href={DATA.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/*
INSTALL & RUN
1) Create a project (Vite):
   npm create vite@latest nate-portfolio -- --template react
   cd nate-portfolio
   npm i
   npm i -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
2) In tailwind.config.js set content to: ["./index.html", "./src/**.{js,ts,jsx,tsx}"]
3) In src/index.css add:
   @tailwind base; @tailwind components; @tailwind utilities;
4) Install libraries used here:
   npm i framer-motion lucide-react
5) Replace src/App.jsx with this file. Put your resume PDF at /public/Nate_Resume.pdf
6) npm run dev

DEPLOY (fast):
- Vercel: Push to GitHub, import the repo in Vercel, hit Deploy.
- GitHub Pages: npm i -D gh-pages; set "homepage" in package.json, add deploy scripts.
*/
