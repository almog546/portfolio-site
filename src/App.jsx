import "./App.css";

const projects = [
  {
    title: "OpenAtlas",
    description: "Content platform with auth, editor, comments and admin analytics.",
    demo: "https://open-atlas-bn4w.vercel.app/",
    github: "https://github.com/almog546/OpenAtlas",
  },
  {
    title: "TrackTrade",
    description: "Trading analytics platform with charts and performance metrics.",
    demo: "https://bot-intelligence-platform.vercel.app",
    github: "https://github.com/almog546/TrackTrade",
  },
  {
    title: "Life OS",
    description: "Productivity system for time tracking and insights.",
    demo: "https://life-os-phi-steel.vercel.app",
    github: "https://github.com/almog546/Life-OS",
  },
];

export default function App() {
  return (
    <div className="portfolio-page">
      <div className="main-container">
        
        <header className="profile-header">
          <h1 className="name_title">Almog</h1>
          <p className="job-title">Junior Full Stack Developer</p>
          <p className="profile-summary">
            Full-stack projects with authentication, analytics, and real-world systems.
          </p>
        </header>

        <main className="projects-section">
          <h2 className="section-title">Projects</h2>
          <ul className="projects-list">
            {projects.map((p) => (
              <li className="project-card" key={p.title}>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-description">{p.description}</p>
                <div className="project-actions">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-link secondary">
                    GitHub
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </main>

        <footer className="contact-footer">
          <h2 className="section-title">Contact</h2>
          <div className="contact-info">
            <a href="https://github.com/almog546" target="_blank" rel="noopener noreferrer">
              github.com/almog546
            </a>
            <span className="separator">|</span>
            <a href="mailto:almogthegaun@gmail.com">
              almogthegaun@gmail.com
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}