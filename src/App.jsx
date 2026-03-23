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
    <div className="page">
      <div className="container">
        
        <header className="hero">
          <h1>Almog</h1>
          <p className="role">Junior Full Stack Developer</p>

          <p className="intro">
            Full-stack projects with authentication, analytics, and real-world systems.
          </p>
        </header>

        <section className="projects">
          {projects.map((p) => (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="links">
                <a href={p.demo} target="_blank">Demo</a>
                <a href={p.github} target="_blank">GitHub</a>
              </div>
            </div>
          ))}
        </section>

        <footer className="footer">
          <p className="footerp"><a href="https://github.com/almog546" target="_blank">GitHub: github.com/almog546</a></p>
          <p className="footerp">Email: <a href="mailto:almogthegaun@gmail.com">almogthegaun@gmail.com</a></p>
        </footer>

      </div>
    </div>
  );
}