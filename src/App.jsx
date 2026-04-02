import "./App.css";

const projects = [
  {
    title: "OpenAtlas",
    description:
      "A full-stack content platform inspired by modern publishing systems. Includes session-based authentication, rich text editing, drafts, bookmarks, follows, notifications, reports, and admin analytics dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "ReactQuill",
      "REST API",
      "Express Session",
    ],
    image: "/images/Admin-Panel.png",
    demo: "https://open-atlas-bn4w.vercel.app/",
    github: "https://github.com/almog546/OpenAtlas",
  },
  {
    title: "Bot Intelligence Platform",
    description:
      "A trading analytics platform for uploading strategy data, analyzing performance, visualizing equity curves and drawdowns, and comparing results through simulation-based metrics.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Chart.js",
      "REST API",
      "CSV Parsing",
    ],
    image: "/images/strategy.png",
    demo: "https://bot-intelligence-platform.vercel.app",
    github: "https://github.com/almog546/Bot-Intelligence-Platform",
  },
  {
    title: "Life OS",
    description:
      "A productivity and time-tracking application focused on behavioral insights, area-based time distribution, energy tracking, and weekly/monthly analytics to improve focus and planning.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Chart.js",
      "Day.js",
      "FullCalendar",
    ],
    image: "/images/Dashboard.png",
    demo: "https://life-os-phi-steel.vercel.app",
    github: "https://github.com/almog546/Life-OS",
  },
];

const skills = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma ORM",
  "REST APIs",
  "Chart.js",
  "Git & GitHub",
];

export default function App() {
  return (
    <div className="portfolio-page">
      <div className="main-container">
        <header className="profile-header">
          <h1 className="name_title">Almog Thegaun</h1>
          <p className="job-title">Junior Full Stack Developer</p>
          <p className="profile-summary">
            Junior Full Stack Developer focused on building practical full-stack
            web applications with strong backend fundamentals, clean API
            structure, and data-driven user interfaces. Experienced in building
            end-to-end projects with React, Node.js, Express, PostgreSQL, and
            Prisma.
          </p>

          <div className="header-actions">
            <a
              href="/almog-thegaun-cv.pdf"
              target="_blank"
              download
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV
            </a>
          </div>
        </header>

        <section className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-tags">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <main className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <ul className="projects-list">
            {projects.map((p) => (
              <li className="project-card" key={p.title}>
                <h3 className="project-name">{p.title}</h3>

                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="project-image"
                />

                <p className="project-description">{p.description}</p>

                <div className="project-tech-stack">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link secondary"
                  >
                    GitHub
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </main>

        <section className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="info-card">
            <h3 className="info-title">Self-Directed Full Stack Development</h3>
            <p className="info-period">2025 – Present</p>
            <p className="info-text">
              Focused on practical full-stack development through hands-on
              projects covering frontend architecture, backend APIs, database
              design, authentication, analytics dashboards, and deployment.
            </p>
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="info-card">
            <h3 className="info-title">Independent Full Stack Developer</h3>
            <p className="info-period">2025 – Present</p>
            <p className="info-text">
              Building production-style web applications independently, from
              planning and UI implementation to backend development, database
              modeling, and deployment.
            </p>
          </div>
        </section>

        <footer className="contact-footer">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-info">
            <a
              href="https://github.com/almog546"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="separator">|</span>

            <a
              href="https://linkedin.com/in/almog546"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="separator">|</span>

            <a href="mailto:almogthegaun@gmail.com">Email</a>
            <span className="separator">|</span>

            <a href="tel:+972XXXXXXXXX">Phone</a>
          </div>
        </footer>
      </div>
    </div>
  );
}