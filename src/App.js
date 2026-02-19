import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Animated Background Elements */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-eccentric">EA</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="/Ehsan_Ali_Resume.pdf" download className="btn btn-glow">
          <i className="fas fa-download"></i>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero-eccentric">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="text-glitch" data-text="EHSAN ALI">
              EHSAN ALI
            </div>
            <h2 className="subtitle-rainbow">
              Full-Stack JavaScript Developer
            </h2>
            <p className="hero-desc">
              Crafting bold digital experiences with React, Next.js & MERN
              stack. Backend magic with Node.js & MongoDB. Always shipping.
            </p>
            <div className="hero-tags">
              <span className="tag">React 18+</span>
              <span className="tag">Next.js</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-eccentric">
              <div className="avatar-inner">EA</div>
              <div className="avatar-ring"></div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="floating-stats">
          <div className="stat-box pop-in">
            <span className="stat-value">5+</span>
            <span className="stat-label">years shipping</span>
          </div>
          <div className="stat-box pop-in delay-1">
            <span className="stat-value">MERN</span>
            <span className="stat-label">full-stack</span>
          </div>
          <div className="stat-box pop-in delay-2">
            <span className="stat-value">∞</span>
            <span className="stat-label">learning</span>
          </div>
        </div>
      </section>

      {/* Tech Skills */}
      <section className="skills-section" id="work">
        <h2 className="section-title">Tech Arsenal</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fab fa-react"></i>
            <span>React.js</span>
          </div>
          <div className="skill-card">
            <i className="fab fa-node"></i>
            <span>Node.js</span>
          </div>
          <div className="skill-card">
            <i className="fas fa-database"></i>
            <span>MongoDB</span>
          </div>
          <div className="skill-card">
            <i className="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill-card">
            <i className="fas fa-cube"></i>
            <span>Next.js</span>
          </div>
          <div className="skill-card">
            <i className="fas fa-code"></i>
            <span>Express</span>
          </div>
          <div className="skill-card">
            <i className="fab fa-git-alt"></i>
            <span>Git</span>
          </div>
          <div className="skill-card">
            <i className="fas fa-palette"></i>
            <span>Tailwind</span>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience-section">
        <h2 className="section-title">Experience Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content active">
              <span className="timeline-date">July 2022 - Present</span>
              <h3>Frontend Developer @ 46Labs Lo</h3>
              <p>
                Building scalable React & Next.js apps, Node.js backends,
                integrating APIs and automating workflows.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">May 2025 - Aug 2025</span>
              <h3>Frontend Developer @ Elastic Email</h3>
              <p>
                Shopify embedded apps with Remix & Polaris, responsive UI with
                Tailwind, secure API integration.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">Sep 2021 - June 2022</span>
              <h3>MERN Stack Developer @ Codingo</h3>
              <p>
                Real-time features with Socket.IO, CRUD systems, authentication
                flows, production debugging.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">Sep 2020 - Sep 2021</span>
              <h3>React Developer @ PickleTour LLC</h3>
              <p>
                Frontend development with Redux state management, Material-UI
                components, production web apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="projects-section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <i className="fas fa-user-shield"></i>
                <h3>SuperLoyal</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Multi-brand loyalty platform with real-time features,
                  Socket.IO messaging, secure APIs.
                </p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Socket.IO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <i className="fas fa-network-wired"></i>
                <h3>Peeredge</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Orchestration platform for voice & messaging. Scalable
                  frontend with Typescript and Ant-Design.
                </p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Typescript</span>
                  <span>Ant-Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <i className="fas fa-table-tennis"></i>
                <h3>PickleTour</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Cloud-based tournament registration with full MERN stack,
                  authentication, and real-time updates.
                </p>
                <div className="tech-tags">
                  <span>MERN</span>
                  <span>Auth</span>
                  <span>Real-time</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <i className="fas fa-brain"></i>
                <h3>MegaMind</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  All-in-one tutoring platform connecting tutors and students
                  with scheduling and Stripe payments.
                </p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Stripe</span>
                  <span>Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-grid">
          <a href="tel:+923106569568" className="contact-card hover-lift">
            <i className="fas fa-phone"></i>
            <span>(+92) 310-6569568</span>
          </a>
          <a
            href="mailto:mrehsan51@gmail.com"
            className="contact-card hover-lift"
          >
            <i className="fas fa-envelope"></i>
            <span>mrehsan51@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ehsan-dev/"
            target="_blank"
            rel="noreferrer"
            className="contact-card hover-lift"
          >
            <i className="fab fa-linkedin"></i>
            <span>/in/ehsan-dev</span>
          </a>
          <a
            href="https://github.com/m-ehsan-ali"
            target="_blank"
            rel="noreferrer"
            className="contact-card hover-lift"
          >
            <i className="fab fa-github"></i>
            <span>github/m-ehsan-ali</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Ehsan Ali. Crafted with ⚛️ and ☕</p>
      </footer>
    </div>
  )
}
