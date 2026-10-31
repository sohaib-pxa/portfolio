import { useEffect, type CSSProperties } from "react";
import gunsImg from "@/assets/guns.png";
import swordImg from "@/assets/sword.png";
import cloverImg from "@/assets/clover.png";

const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR-HANDLE" },
  { label: "GitHub", href: "https://github.com/YOUR-HANDLE" },
  { label: "Email", href: "mailto:you@example.com" },
];

type Project = {
  c: string; cat: string; title: string; role: string; desc: string;
  stack: string[]; href: string; wide?: boolean; ml?: [string, string][];
};
const PROJECTS: Project[] = [
  {
    c: "var(--red)", cat: "Team project", title: "Delivery-Linking Platform", role: "Backend developer",
    desc: "A platform that connects customers, businesses and couriers around delivery orders. I designed and built the server side of the system: APIs, data models and business logic.",
    stack: ["MongoDB", "Express", "React", "Node.js"], href: "#"
  },
  {
    c: "var(--gold)", cat: "Solo project", title: "Student AI Assistant", role: "Designed and built alone",
    desc: "An AI assistant made for students, helping them get answers and organize their study. Built end to end by me, from the idea to the working product.",
    stack: ["AI", "Python"], href: "#"
  },
  {
    c: "var(--blue)", cat: "Solo project", title: "Library Platform", role: "Full-stack, built alone",
    desc: "A library management platform with a Next.js front end and a FastAPI service handling the catalog and user logic, backed by MongoDB.",
    stack: ["Next.js", "FastAPI", "Python", "MongoDB"], href: "#"
  },
  {
    c: "var(--green)", cat: "Solo project", title: "Store Application", role: "Full-stack, built alone",
    desc: "An online store application with a Next.js storefront and a structured NestJS backend for products, orders and accounts.",
    stack: ["Next.js", "NestJS", "TypeScript"], href: "#"
  },
  {
    c: "var(--red)", cat: "From scratch", title: "micrograd", role: "Neural network library, built from scratch",
    desc: "A small automatic-differentiation and neural network library written from scratch to expose every step of backpropagation. It's how I made sure I understand what frameworks hide.",
    stack: ["Python", "Backpropagation", "Neural networks"], href: "#"
  },
  {
    c: "var(--gold)", wide: true, cat: "Machine learning lab", title: "Applied ML Models", role: "Supervised and unsupervised learning, applied to real datasets",
    desc: "I learned how each algorithm works, then applied it end to end: data cleaning, feature work, training and evaluation.",
    ml: [["Movie Recommendation", "Recommender system"], ["Mall Customer Segmentation", "Unsupervised · clustering"], ["Bike Sharing Demand", "Supervised · regression"], ["Telco Customer Churn", "Supervised · classification"]],
    stack: ["Python", "pandas", "NumPy", "scikit-learn", "matplotlib"], href: "#"
  },
];

type Skill = { c: string; title: string; groups?: [string, [string, number?][]][]; meters?: [string, number][] };
const SKILLS: Skill[] = [
  {
    c: "var(--blue)", title: "Web Development", groups: [
      ["Front end", [["HTML"], ["CSS"], ["JavaScript"], ["TypeScript"], ["Tailwind"], ["React"], ["Next.js", 40]]],
      ["Back end", [["Node.js"], ["Express"], ["FastAPI"], ["NestJS", 30]]],
      ["Databases", [["PostgreSQL"], ["MongoDB"]]],
      ["Deployment", [["Docker", 50]]],
    ]
  },
  {
    c: "var(--red)", title: "Artificial Intelligence", groups: [
      ["Data stack", [["Python"], ["pandas"], ["NumPy"], ["matplotlib"]]],
      ["Machine learning", [["scikit-learn"], ["Supervised learning"], ["Unsupervised learning"]]],
      ["Deep learning", [["PyTorch", 50], ["TensorFlow", 20], ["Neural networks"]]],
      ["Language", [["NLP", 30]]],
    ]
  },
  { c: "var(--gold)", title: "Working Style", meters: [["Project management", 80], ["Work planning", 80], ["Communication & collaboration", 70]] },
];

const v = (o: Record<string, string>) => o as CSSProperties;

function OldClover({ size }: { size?: number }) {
  return <svg width={size} height={size}><use href="#oldclover" /></svg>;
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="B. Sohaib, home">
      <span className="cmask" aria-hidden="true" />
      <b>B. Sohaib</b>
    </a>
  );
}

// Floating mini-clovers — uses actual clover.png, avoids sword edges
const CLOVER_COUNT = 12;
function HeroClovers() {
  const clovers = Array.from({ length: CLOVER_COUNT }, (_, i) => {
    const size = 30 + Math.random() * 40; // 30–70px
    const left = 15 + Math.random() * 70; // 15–85% — avoids sword edges
    const top = 5 + Math.random() * 85;
    const dur = 16 + Math.random() * 14; // 16–30s per loop
    const delay = -(Math.random() * 20);
    const dx = 30 + Math.random() * 60; // movement distance
    const dy = 20 + Math.random() * 50;
    const opacity = 0.07 + Math.random() * 0.07;
    return (
      <img
        key={i}
        className="mini-clover"
        src={cloverImg}
        alt=""
        width={size}
        height={size}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          opacity,
          animationDuration: `${dur}s`,
          animationDelay: `${delay}s`,
          "--dx": `${dx}px`,
          "--dy": `${dy}px`,
        } as CSSProperties}
      />
    );
  });
  return <div className="hero-clovers" aria-hidden="true">{clovers}</div>;
}

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div id="top">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="oldclover" viewBox="-100 -100 200 200" fill="currentColor">
          <g id="leaf"><path d="M0 -8 C-30 -35 -22 -88 0 -92 C22 -88 30 -35 0 -8Z" /></g>
          <use href="#leaf" transform="rotate(72)" /><use href="#leaf" transform="rotate(144)" />
          <use href="#leaf" transform="rotate(216)" /><use href="#leaf" transform="rotate(288)" />
        </symbol>
      </svg>

      <nav><div className="wrap">
        <Brand />
        <ul>
          <li><a href="#work">THE LEDGER</a></li>
          <li><a href="#skills">THE ARSENAL</a></li>
          <li><a href="#path">THE ROAD</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div></nav>

      <header className="hero">
        <img className="sword l" src={swordImg} alt="" aria-hidden="true" />
        <img className="sword r" src={swordImg} alt="" aria-hidden="true" />
        <HeroClovers />
        <div className="wrap">
          <p className="kicker">Algeria · Open to internships &amp; junior roles</p>
          <h1>Sohaib<br />Bouanani</h1>
          <p className="role">Full-stack developer, learning to make systems intelligent and secure.</p>
          <p className="pitch">I build backends that hold up and web apps that ship. Now I'm going deeper into machine learning, from scratch implementations to real datasets. I improve by building, breaking, and rebuilding.</p>
          <div className="cta">
            <a className="btn main" href="#work">See the work</a>
            <a className="btn" href="#">Download CV</a>
          </div>
          <div className="stats">
            <div><b>3rd year</b><span>Computer science, ESI Algiers</span></div>
            <div><b>6</b><span>Projects built</span></div>
            <div><b>4</b><span>ML models trained</span></div>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section id="work">
          <div className="head"><span className="cmask" aria-hidden="true" /><h2>The Ledger</h2></div>
          <p className="sub">Case files from the projects I've built, solo and with a team.</p>
          <div className="rule" />
          <div className="grid">
            {PROJECTS.map((p, i) => (
              <article key={p.title} className={`card rv ${p.wide ? "wide" : ""}`} style={v({ "--c": p.c })}>
                <div className="no"><span>Case file {String(i + 1).padStart(2, "0")}</span><em>{p.cat}</em></div>
                <h3>{p.title}</h3>
                <div style={{ font: "400 12.5px var(--mono)", color: "var(--muted)" }}>{p.role}</div>
                <p>{p.desc}</p>
                {p.ml && (
                  <div className="ml">
                    {p.ml.map((m) => (<div key={m[0]}><b>{m[0]}</b><span>{m[1]}</span><br /><a href="#">GitHub</a></div>))}
                  </div>
                )}
                <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <a className="lnk" href={p.href} target="_blank" rel="noopener">View on GitHub</a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="head"><img className="guns" src={gunsImg} alt="" aria-hidden="true" /><h2>The Arsenal</h2></div>
          <p className="sub">Tools I've trained with. Items with a bar are still leveling up, and I'll tell you how far along they are.</p>
          <div className="rule" />
          <div className="pages">
            {SKILLS.map((s) => (
              <div key={s.title} className="page rv" style={v({ "--c": s.c })}>
                <h3>{s.title}</h3>
                {s.groups?.map((g) => (
                  <div key={g[0]}>
                    <h4>{g[0]}</h4>
                    <div className="chips">
                      {g[1].map(([name, p]) => (
                        <span key={name} className="chip" style={v({ "--p": `${p ?? 0}%` })}>
                          {name}{p ? <><small>{p}%</small><i /></> : null}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {s.meters?.map((m) => (
                  <div key={m[0]} className="meter">
                    <div><span>{m[0]}</span><span>{m[1]}%</span></div>
                    <u><b style={v({ "--p": `${m[1]}%` })} /></u>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="note"><i />Bar = in progress (percentage of my current learning goal)</p>
        </section>

        <section id="path">
          <div className="head"><OldClover /><h2>The Road So Far</h2></div>
          <p className="sub">Still early on the path, and moving fast.</p>
          <div className="rule" />
          <div className="two">
            <div>
              <div className="entry"><b>Engineering student, ESI Algiers</b><span>Third year · Algiers, Algeria</span>
                <p>Studying computer science, 2 years left till graduation</p></div>
            </div>
            <div>
              <h3 style={{ font: "700 24px var(--serif)", marginBottom: 6 }}>Languages</h3>
              <div className="lang">Arabic <span>Native</span></div>
              <div className="lang">English <span>Professional working</span></div>
              <div className="lang">French <span>Developing</span></div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <span className="contact-clover cmask" aria-hidden="true" />
          <h2>Let's build something.</h2>
          <p>Looking for an internship or junior role where I can ship real features and keep growing in AI and security.</p>
          <div className="cta">
            {LINKS.map((l, i) => <a key={l.label} className={`btn ${i ? "" : "main"}`} href={l.href} target="_blank" rel="noopener">{l.label}</a>)}
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Sohaib Bouanani</footer>
    </div>
  );
}
