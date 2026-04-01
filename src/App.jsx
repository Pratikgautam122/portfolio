import { portfolio } from "./content";

const sectionIds = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function ContactLink({ href, label }) {
  if (!href || href === "#") {
    return <span className="link-placeholder">{label} to be added</span>;
  }

  return <a href={href}>{label}</a>;
}

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="site-header">
        <a className="brand" href="#top">
          {portfolio.name}
        </a>

        <nav className="nav">
          {sectionIds.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">HTML · CSS · JavaScript · React</p>
            <h1>{portfolio.name}</h1>
            <p className="hero-role">{portfolio.role}</p>
            <p className="hero-intro">{portfolio.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let's build something
              </a>
              <a className="button button-secondary" href="#journey">
                See my journey
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-label">Current Direction</div>
            <p>{portfolio.status}</p>

            <div className="mini-grid">
              <div>
                <span className="metric">Focus</span>
                <strong>Frontend UI</strong>
              </div>
              <div>
                <span className="metric">Based in</span>
                <strong>{portfolio.location}</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Design sense meets growing frontend skill.</h2>
          </div>

          <div className="about-grid">
            <p className="about-copy">{portfolio.about}</p>

            <div className="callout-card">
              <span className="callout-kicker">What I care about</span>
              <ul>
                {portfolio.focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Tools and strengths I am actively building with.</h2>
          </div>

          <div className="chip-row">
            {portfolio.stack.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="strength-grid">
            {portfolio.strengths.map((item) => (
              <article className="strength-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Practice builds that show how I approach frontend work.</h2>
          </div>

          <div className="project-grid">
            {portfolio.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <a className="project-link" href={project.link}>
                    View project
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <div className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2>Where I am coming from and where I am headed.</h2>
          </div>

          <div className="timeline">
            {portfolio.journey.map((item) => (
              <article className="timeline-item" key={item.title}>
                <p className="timeline-meta">{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Open to learning, collaboration, and frontend opportunities.</h2>
              <p>
                The fastest way to reach me is by email. You can also plug in
                your GitHub, LinkedIn, and resume links from the content file.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${portfolio.email}`}>
                {portfolio.email}
              </a>
              <div className="link-list">
                <ContactLink href={portfolio.links.github} label="GitHub" />
                <ContactLink href={portfolio.links.linkedin} label="LinkedIn" />
                <ContactLink href={portfolio.links.resume} label="Resume" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-notes">
          <p className="eyebrow">Next Personalization</p>
          <div className="notes-list">
            {portfolio.notes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
