import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  FileText,
  ExternalLink,
  MapPin,
  Code,
  Layers,
  Rocket,
  Sun,
  Moon,
} from "lucide-react";
import { getInitialTheme, applyTheme } from "./theme.js";
// import ThemeToggle from "./components/ThemeToggle"; // only if you plan to use it





const DATA = {
  name: "Nathaniel Dale",
  title: "Software Developer · Full‑Stack · Data Science · AI",
  blurb:
    "CS graduate building reliable, well‑tested, integrated software. I like clean architecture, thoughtful UX, and getting it done right.",
  location: "California, USA",
  email: "NDaleDev240@gmail.com",
  links: {
    github: "https://github.com/c2nate",
    linkedin: "https://www.linkedin.com/in/nathaniel-dale-bb488a24a",
    resume: "/NathanielDale-Resume.pdf", 
  },
  skills: [
    "Python", "Java", "C++", "React", "TypeScript", "Node.js", "Django", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Git/GitHub Actions", "CI/CD", "Testing (Jest/PyTest)",
    "CUDA", "TensorFlow", "PyTorch", "Slurm Job Scheduling", "JWT Auth", "REST API Design",
    "R", "SPSS", "pandas", "NumPy"
  ],
  projects: [
    {
      name: "Weather Activity Recommender",
      tagline: "Don't worry about the weather, Find activities and events on the go!",
      tech: ["Django", "React", "Tailwind", "Django Rest Framework", "PostgreSQL", "JWT", "AWS EC2"],
      desc:
        "Full‑stack web app with typed REST endpoints, caching, and optimistic UI updates. Deployed with IaC and CI/CD.",
      highlights: [
        "Fully rules-based activity recommendation for travelers and trip planners",
        "Server‑side feature engineering for weather types and locations",
        "JWT auth + role‑specific API routes for secure multi-user access",
        "95%+ unit/integration test coverage on Django REST API layer",
      ],
      repo: "https://github.com/TheClimateChangers/WeatherSync",
      demo: "Temporarily Down",
    },
    {
      name: "Parallel Image Processing with CUDA",
      tagline: "GPU acceleration algorithms for images",
      tech: ["CUDA", "Google Colab"],
      desc:
        "Applying multithreading, tiling, and parallel algorithms for GPU acceleration",
      highlights: [
        "Convolution to transform images",
        "Blurring algorithms",
        "Demonstrating output speedup from GPU parallel processing compared to CPU methods",
        "Easily testable with time-comparative outputs"
      ],
      repo: "https://github.com/c2nate/cudaImgProcessing",
    },
    {
      name: "SearchGazer Recommendation Analysis - A Research Project",
      tagline: "Eye‑tracking feature extraction for content recommendations",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
      desc:
        "Data pipeline to detect fixations/saccades and derive features that correlate with user interest.",
      highlights: [
        "Windowed gaze segmentation + smoothing",
        "Fixation heatmaps & dwell‑time features",
        "Experiment tracking with clear notebooks",
      ],
      repo: "https://github.com/c2nate/fixation-py",
    },
    {
      name: "Secure Messaging (RSA + AES)",
      tagline: "Two‑party encrypted message exchange with MAC",
      tech: ["Python", "RSA", "AES", "Cryptographic Padding"],
      desc:
        "Implements hybrid crypto (RSA key exchange, AES message layer, MAC authentication).",
      highlights: [
        "Key management + safe serialization",
        "CLI demo with deterministic tests",
        "Easy to learn about key pairs and encryption methods!",
        "Good intro to various encryption schema"
      ],
      repo: "https://github.com/c2nate/cs4600-Final-RSAEnc",
    }
  ],
  experience: [
    {
      company: "Eye-Tracking Recommendation System · Undergraduate Research Assistant",
      period: "Aug 2024 – May 2025",
      summary: "Worked under faculty supervision to apply data science and machine learning techniques to human-computer interaction research. Focused on transforming raw gaze-tracking data into interpretable features supporting personalized recommendation models.",
      bullets: [
        "Bridged cognitive-science experimentation with ML engineering through custom gaze-event segmentation algorithms built in Python (NumPy, SciPy, pandas).",
        "Designed relational data schemas and timestamp-aligned tensors to encode temporal gaze-fixation and saccadic-velocity sequences for model training and replay visualization.",
        "Applied supervised (Random Forest, SVM) and unsupervised (K-Means, DBSCAN) clustering to derive user attention clusters from raw gaze-coordinate logs.",
        "Developed signal-processing filters (Savitzky–Golay, Butterworth) and moving-window aggregation for noise suppression and fixation detection.",
        "Led reproducibility initiative by authoring a config-driven pipeline supporting hyperparameter sweeps, logging, and unit-tested modular components for cross-session benchmarking.",
        "Generated data visualizations (Matplotlib, Seaborn) and heat-map overlays correlating gaze dwell-time with on-screen elements, informing personalized recommendation modeling."
      ],
    },
    {
      company: "Truly Cancellable Authentication System · Undergraduate Research Assistant",
      period: "Aug 2024 – May 2025",
      summary: "Contributed to a cross-disciplinary project exploring EEG-based biometric authentication, emphasizing cancelability, adversarial robustmness, and neural prcoessing for secure IoT systems.",
      bullets: [
        "Investigated EEG-signal-based biometric authentication, emphasizing cancelability and privacy-preserving revocation within IoT security contexts.",
        "Implemented FFT-based feature extraction, band-power computation, and ICA noise removal using Python, NumPy, and MNE-Python.",
        "Engineered and evaluated adversarially robust ML defense models (Autoencoder reconstruction, Adversarial Training) against data-poisoning and evasion attacks.",
        "Refined the Message Mapping Algorithm v2, enabling token regeneration and enhanced resistance to credential inversion.",
        "Authored technical notebooks and comparative reports evaluating token-based, dynamic-fingerprinting, and neural-biometric systems under adversarial constraints.",
        "Integrated deliverables into a cross-disciplinary publication draft, unifying perspectives from machine learning, signal processing, and cybersecurity."
      ],
    },
  ],
  
};

// --- UI helpers ---
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24 py-8" aria-labelledby={`${id}-title`}>
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
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === "dark" ? "light" : "dark"));
  const isDark = theme === "dark";

  return (
    <div className="min-h-dvh bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors">
      <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-zinc-950/60 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg md:text-xl tracking-tight">{DATA.name}</a>
          <div className="flex items-center gap-4">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#experience" className="text-sm hover:underline">Experience</a>
            <a href="#skills" className="text-sm hover:underline">Skills</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
            <button
              aria-label="Toggle dark mode"
              className="rounded-full border p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              onClick={toggle}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
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
                <a
                  href="/NathanielDale-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border rounded-xl px-3 py-2"
                >
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
                <li>🖳 Loves modeling simulations</li>
                <li>🛩️ Loves talking aviation </li>
                <li>🛠️ Loves 3D modeling and printing & woodworking</li>
                <li>🥇 Avid Runner! Halfway to a marathon!</li>
                <li>🎧 Always got something playing </li>
                <li>🎮 Always playing something </li>
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
                {e.summary && (
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {e.summary}
                  </p>
                )}
                <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
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
              Feel free to reach out for queries, collaborations, or opportunities! <br />
              Connect with me on{" "}
              <a
                href={DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                LinkedIn
              </a>
              {" "}or shoot me an email at{" "}
              <a
                href={`mailto:${DATA.email}`}
                className="underline font-medium hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {DATA.email}
              </a>.
            </p>
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
  );
}

