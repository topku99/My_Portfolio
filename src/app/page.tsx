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
            <h1 style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Songphol Juntongtip</h1>
            <h3 style={{ marginBottom: '16px', color: '#60a5fa' }}>Senior Full Stack Engineer</h3>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📍 Samut Prakan, Thailand</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📱 092-4078383</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>💬 Line: topku15</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✉️ songpholtopku@gmail.com</span>
            </div>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', marginBottom: '32px', lineHeight: '1.7' }}>
              Expert in Backend Architecture and System Integration using .NET. 
              Successfully leveraging Generative AI to bridge technical gaps in frontend development. 
              Proven track record in system stability and scalability. Seeking to transition into an AI Developer role.
            </p>
            <div className="flex gap-4">
              <a href="mailto:songpholtopku@gmail.com" className="btn btn-primary">Contact Me</a>
              <a href="https://github.com/topku99" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a>
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
              <span className="tag">C# & .NET Ecosystem</span>
              <span className="tag">ASP.NET Web API</span>
              <span className="tag">Microservices</span>
              <span className="tag">WCF / SOAP</span>
              <span className="tag">RabbitMQ</span>
            </p>
          </div>
          <div className="glass-card">
            <h3>Modern Web & AI</h3>
            <p className="mt-4">
              <span className="tag">Angular</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Next.js & React</span>
              <span className="tag accent">Generative AI</span>
              <span className="tag accent">Prompt Engineering</span>
            </p>
          </div>
          <div className="glass-card">
            <h3>Database Management</h3>
            <p className="mt-4">
              <span className="tag">SQL Server</span>
              <span className="tag">MySQL & MariaDB</span>
              <span className="tag">Oracle</span>
              <span className="tag">Performance Tuning</span>
              <span className="tag">Advanced Stored Procs</span>
            </p>
          </div>
          <div className="glass-card">
            <h3>DevOps & Testing</h3>
            <p className="mt-4">
              <span className="tag">Docker</span>
              <span className="tag">CI/CD (Jenkins)</span>
              <span className="tag">SonarQube / CheckMarx</span>
              <span className="tag">SSRS & Crystal Reports</span>
              <span className="tag">JMeter / Postman</span>
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

          <div className="timeline-item">
            <div className="timeline-date">June 2016 – April 2019</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3>Thai Insurers Datanet</h3>
                <span className="tag">Application Developer</span>
              </div>
              <p>
                Delivered actionable data analytics tools and optimized central databases. Developed the RVP Dashboard to visualize critical KPIs and implemented rigorous data mapping for industry-wide compliance.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">March 2015 – May 2016</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3>Freewill Solutions</h3>
                <span className="tag">Consultant / App Developer</span>
              </div>
              <p>
                Developed management claim platform for shipping insurance (CPIO). Engineered reporting subsystem for operational insights utilizing SQL Server and Crystal Reports.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2013 – 2015</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3>Greenline Synergy (BDMS)</h3>
                <span className="tag">Application Developer</span>
              </div>
              <p>
                Provided Tier-2 support for HIS system. Developed interfaces connecting HIS with BJC PACS to automate automatic retrieve result for X-Ray.
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
              <div className="image-carousel">
                <div className="carousel-item">
                  <Image src="/My_Portfolio/wise_exchange/1.png" alt="Wise Exchange UI 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                  <Image src="/My_Portfolio/wise_exchange/2.png" alt="Wise Exchange UI 2" fill style={{ objectFit: 'cover' }} />
                </div>
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
              <div className="image-carousel">
                <div className="carousel-item">
                  <Image src="/My_Portfolio/gold_shop/1.png" alt="Gold Shop UI 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                  <Image src="/My_Portfolio/gold_shop/3.png" alt="Gold Shop UI 2" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                  <Image src="/My_Portfolio/gold_shop/4.png" alt="Gold Shop UI 3" fill style={{ objectFit: 'cover' }} />
                </div>
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
              <div className="image-carousel">
                <div className="carousel-item carousel-item-large">
                  <Image src="/My_Portfolio/happy_rich/1.png" alt="Happy Rich UI 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item carousel-item-large">
                  <Image src="/My_Portfolio/happy_rich/2.png" alt="Happy Rich UI 2" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item carousel-item-large">
                  <Image src="/My_Portfolio/happy_rich/3.png" alt="Happy Rich UI 3" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item carousel-item-large">
                  <Image src="/My_Portfolio/happy_rich/4.png" alt="Happy Rich UI 4" fill style={{ objectFit: 'cover' }} />
                </div>
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

          <div className="glass-card flex flex-col justify-between" style={{ gridColumn: '1 / -1' }}>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>IBS Insurance Reporting <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>(OIC Compliance)</span></h3>
                <span className="tag accent">Crisis Management</span>
              </div>
              <p>
                Assumed technical leadership for a failing team amidst severe performance issues. Restored client trust and personally verified intricate Oracle queries for all 50 complex regulatory reports to guarantee 100% data accuracy.
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
