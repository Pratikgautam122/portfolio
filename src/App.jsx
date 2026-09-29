import { useEffect, useState } from "react";
import { profile, projects, skills, education } from "./data";

const NAV = [
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="brand">
        <span className="brand-mark">PG</span>
        <span className="brand-name">pratik.dev</span>
      </a>
      <nav className="nav-links" aria-label="Primary">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow mono">Hello, I'm</p>
      <h1>
        {profile.name}
        <span className="dot">.</span>
      </h1>
      <p className="tagline">
        <span className="grad">{profile.role}</span> · {profile.location}
      </p>
      <p className="lead">{profile.intro}</p>
      <div className="cta">
        <a className="btn primary" href="#projects">View projects</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    ["6+", "Projects built"],
    ["4", "Languages: Python, JS, C, C++"],
    ["2028", "BSc Computer Science"],
  ];
  return (
    <section id="about" className="section reveal">
      <h2 className="section-title"><span className="mono idx">01</span> About</h2>
      <div className="about">
        <p>
          I'm a Computer Science student who enjoys working across the stack.
          I build interfaces in React, write systems code in C and Assembly, and
          automate cloud infrastructure with Terraform. I completed the AWS
          Academy Cloud Foundations course and I'm looking for internships and
          entry-level roles in software development.
        </p>
        <ul className="stats">
          {stats.map(([n, l]) => (
            <li key={l}><strong>{n}</strong><span>{l}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title reveal"><span className="mono idx">02</span> Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <a key={p.title} className={`card reveal ${p.featured ? "featured" : ""}`} href={p.link} target="_blank" rel="noreferrer">
            <div className="card-top">
              <span className="kind mono">{p.kind}</span>
              <span className="go"><ArrowIcon /></span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t} className="mono">{t}</li>)}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <h2 className="section-title"><span className="mono idx">03</span> Skills</h2>
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-group">
            <h3>{s.group}</h3>
            <ul>
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section reveal">
      <h2 className="section-title"><span className="mono idx">04</span> Education</h2>
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school}>
            <div className="tl-head">
              <h3>{e.school}</h3>
              <span className="mono period">{e.period}</span>
            </div>
            <p>{e.detail}{e.note ? <span className="badge">{e.note}</span> : null}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact reveal">
      <h2 className="section-title"><span className="mono idx">05</span> Contact</h2>
      <p className="lead">
        Open to internships and entry-level opportunities. The fastest way to
        reach me is by email.
      </p>
      <a className="btn primary big" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="cta center">
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">Built with React + Vite</span>
      </footer>
    </>
  );
}
