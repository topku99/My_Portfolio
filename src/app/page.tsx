import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">SJ.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section id="about" className="hero-layout mb-8">
          <div>
            <div className="tag accent mb-4">Available for AI & Full Stack Roles</div>
            <h1>Songphol Juntongtip</h1>
            <h3 style={{ marginBottom: '24px', color: '#60a5fa' }}>Senior Full Stack Engineer</h3>
            <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '32px' }}>
              Transitioning to AI Developer. 
              Expert in Backend Architecture, System Integration, and creating robust enterprise solutions using modern technologies.
            </p>
            <div className="flex gap-4">
              <a href="mailto:songpholtopku@gmail.com" className="btn btn-primary">Contact Me</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a>
            </div>
          </div>
          <div className="hero-visual">
            <div style={{ position: 'relative', width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden', border: '4px solid rgba(255, 255, 255, 0.1)', zIndex: 1, backgroundColor: 'var(--secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <Image src="/My_Portfolio/profile.jpg" alt="Songphol Juntongtip" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-8 mt-8">
        <h2>Technical Arsenal</h2>
        <div className="grid grid-cols-2">
          <div className="glass-card">
            <h3>Backend & Architecture</h3>
            <p className="mt-4">
              <span className="tag">C#</span>
              <span className="tag">.NET Core</span>
              <span className="tag">ASP.NET Web API</span>
              <span className="tag">Microservices</span>
              <span className="tag">SQL Server</span>
              <span className="tag">RabbitMQ</span>
            </p>
          </div>
          <div className="glass-card">
            <h3>Modern Web & AI</h3>
            <p className="mt-4">
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">Angular</span>
              <span className="tag">TypeScript</span>
              <span className="tag accent">Generative AI</span>
              <span className="tag accent">Prompt Engineering</span>
            </p>
          </div>
          <div className="glass-card" style={{ gridColumn: '1 / -1' }}>
            <h3>DevOps & Infrastructure</h3>
            <p className="mt-4">
              <span className="tag">Docker</span>
              <span className="tag">CI/CD (Jenkins)</span>
              <span className="tag">Azure</span>
              <span className="tag">SonarQube</span>
            </p>
          </div>
        </div>
      </section>

        {/* Experience Section */}
        <section id="experience" className="mb-8 mt-8" style={{ paddingTop: '40px' }}>
        <h2>Professional Journey</h2>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-date">July 2026 – Present</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3>R Systems Consulting Services</h3>
                <span className="tag">Full Stack Engineer</span>
              </div>
              <p>
                Architected and developed a high-volume claim image migration platform using a queued document processing design, ensuring scalability, reliability, and automated production recovery for Krungthai AXA Life.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">April 2024 – March 2026</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3>Chubb Samaggi Insurance</h3>
                <span className="tag">Full Stack Engineer</span>
              </div>
              <p>
                Provided critical production support and led modernization efforts. Engineered an automated Due Diligence System for online agent onboarding and enhanced the I-Prompt payment system for complex installment logic.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">April 2019 – April 2024</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3>Cigna Insurance</h3>
                <span className="tag">Full Stack Developer</span>
              </div>
              <p>
                Designed and implemented a scalable SMS Service API with manage-queued delivery for high-volume reliable messaging. Developed C# Batch Jobs automating "No Claim Bonus" logic.
              </p>
            </div>
          </div>

        </div>
      </section>

        {/* Projects Section */}
        <section id="projects" className="mb-8 mt-8" style={{ paddingTop: '40px' }}>
        <h2>Selected Projects</h2>
        <div className="grid grid-cols-2">
          
          <div className="glass-card flex flex-col justify-between">
            <div>
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/My_Portfolio/wise_exchange.png" alt="Wise Exchange UI" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3>Wise Exchange</h3>
                <span className="tag accent">AI-Driven</span>
              </div>
              <p>
                Currency Exchange Platform. Concepted and engineered a decoupled architecture (Web API + Angular). Successfully utilized Generative AI and Prompt Engineering to accelerate frontend development.
              </p>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between">
            <div>
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/My_Portfolio/gold_shop.png" alt="Gold Shop Management UI" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3>GOLD SHOP MANAGEMENT</h3>
                <span className="tag">Enterprise</span>
              </div>
              <p>
                Architected and engineered a full-enterprise Gold Retail Management system, migrating legacy WinForms to a modern, multi-branch Dockerized .NET Core ecosystem with core accounting.
              </p>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between" style={{ gridColumn: '1 / -1' }}>
            <div>
              <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/My_Portfolio/happy_rich.png" alt="Happy Rich System UI" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3>Happy Rich System</h3>
                <span className="tag">.NET Ecosystem</span>
              </div>
              <p>
                Engineered a multi-platform solution comprising a high-performance WPF application for tellers and a robust web application for centralized administration. Orchestrated complex real-time transactional workflows.
              </p>
            </div>
          </div>

          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 mt-8" style={{ paddingTop: '40px' }}>
          <h2>Education</h2>
          <div className="glass-card flex justify-between items-center">
            <div>
              <h3 style={{ marginBottom: '8px' }}>Bachelor of Science in Computer Science</h3>
              <p style={{ margin: 0 }}>Kasetsart University, Thailand</p>
            </div>
            <div className="tag">Graduated May 2013</div>
          </div>
        </section>

        <footer style={{ borderTop: '1px solid var(--card-border)', paddingTop: '24px', textAlign: 'center', marginTop: '64px', color: '#64748b' }}>
          <p>© 2026 Songphol Juntongtip. Designed with Next.js and Vanilla CSS.</p>
          <p style={{ fontSize: '0.875rem' }}>Portfolio Showcase Edition</p>
        </footer>
      </main>
    </>
  );
}
