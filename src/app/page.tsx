"use client";
import Image from "next/image";
import { useState } from "react";
import { SiDotnet, SiAngular, SiTypescript, SiNextdotjs, SiReact, SiMysql, SiMariadb, SiDocker, SiJenkins, SiSonarqubeserver, SiPostman } from 'react-icons/si';
import { FaServer, FaRobot, FaTachometerAlt, FaDatabase, FaChartBar, FaKeyboard } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { GrOracle } from 'react-icons/gr';

export default function Home() {
  const [galleryState, setGalleryState] = useState<{ images: string[], currentIndex: number } | null>(null);

  const openGallery = (images: string[], startIndex: number) => {
    setGalleryState({ images, currentIndex: startIndex });
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryState) {
      setGalleryState({ ...galleryState, currentIndex: (galleryState.currentIndex + 1) % galleryState.images.length });
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryState) {
      setGalleryState({ ...galleryState, currentIndex: (galleryState.currentIndex - 1 + galleryState.images.length) % galleryState.images.length });
    }
  };

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
            {/* <div className="tag accent mb-4">Available for AI & Full Stack Roles</div> */}
            <h1 style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Songphol Juntongtip (Top)</h1>
            <h3 style={{ marginBottom: '16px', color: '#60a5fa' }}>Full Stack Engineer</h3>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📍 Samut Prakan, Thailand</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📱 092-4078383</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>💬 Line: topku15</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✉️ songpholtopku@gmail.com</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>💼 <a href="https://www.linkedin.com/in/songphol-juntongtip-29057910b/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a></span>
              {/* <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📘 <a href="https://www.facebook.com/Topku15" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Facebook</a></span> */}
            </div>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.7' }}>
              Senior Full Stack Engineer with a strong background in the Financial and Insurance sectors. Expert in Backend Architecture, System Integration using .NET, and delivering complex full-stack applications. Proven track record in ensuring System Stability, Governance, and Scalability for enterprise systems. Passionate about continuous learning and eager to apply my robust engineering foundation toward innovative AI solutions.
            </p>
            <ul style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '32px', listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><strong style={{ color: '#fff' }}>Communication:</strong> Translating user requirements to business logic.</li>
              <li><strong style={{ color: '#fff' }}>Problem Solving:</strong> Incident troubleshooting & Feasibility analysis.</li>
              <li><strong style={{ color: '#fff' }}>Team Support:</strong> Technical mentoring & Code guidance.</li>
            </ul>
            <div className="flex gap-4">
              <a href="mailto:songpholtopku@gmail.com" className="btn btn-primary">Contact Me</a>
              <a href="/My_Portfolio/Resume_Songphol.pdf" target="_blank" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Resume
              </a>
              {/* <a href="https://github.com/topku99" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a> */}
            </div>
          </div>
          <div className="hero-visual">
            <div style={{ position: 'relative', width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden', border: '4px solid rgba(255, 255, 255, 0.1)', zIndex: 1, backgroundColor: 'var(--secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <Image src="/My_Portfolio/profile.jpg" alt="Songphol Juntongtip" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          
        {/* Education Section */}
        <section className="mb-8 mt-8" style={{ paddingTop: '40px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            Education
          </h2>
          <div className="glass-card flex justify-between items-center">
            <div>
              <h3 style={{ marginBottom: '8px' }}>Bachelor of Science in Computer Science</h3>
              <p style={{ margin: 0 }}>Kasetsart University, Thailand</p>
            </div>
            <div className="tag">Graduated May 2013</div>
          </div>
        </section>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-8 mt-8">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          Technical Skills
        </h2>
        <div className="grid grid-cols-2">
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              Backend & Architecture
            </h3>
            <p className="mt-4">
              <span className="tag"><TbBrandCSharp color="#9B4F96" /> C# & .NET Ecosystem</span>
              <span className="tag"><SiDotnet color="#512BD4" /> ASP.NET Web API</span>
              <span className="tag"><FaServer /> Backend Architecture & Integration</span>
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Modern Web & AI
            </h3>
            <p className="mt-4">
              <span className="tag"><SiAngular color="#DD0031" /> Angular</span>
              <span className="tag"><SiTypescript color="#3178C6" /> TypeScript</span>
              <span className="tag"><SiNextdotjs color="#FFFFFF" /> Next.js & React</span>
              <span className="tag"><FaRobot /> Generative AI</span>
              <span className="tag"><FaKeyboard /> Prompt Engineering</span>
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              Database & Reporting
            </h3>
            <p className="mt-4">
              <span className="tag"><DiMsqlServer color="#CC292B" /> SQL Server</span>
              <span className="tag"><SiMysql color="#4479A1" /> MySQL & MariaDB</span>
              <span className="tag"><GrOracle color="#F80000" /> Oracle</span>
              <span className="tag"><FaTachometerAlt /> Performance Tuning</span>
              <span className="tag"><FaDatabase /> Advanced Stored Procs</span>
              <span className="tag"><FaChartBar /> SSRS & Crystal Reports</span>
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              DevOps & Testing
            </h3>
            <p className="mt-4">
              <span className="tag"><SiDocker color="#2496ED" /> Docker</span>
              <span className="tag"><SiJenkins color="#D33833" /> CI/CD (Jenkins)</span>
              <span className="tag"><SiSonarqubeserver color="#4E9BCD" /> SonarQube / CheckMarx</span>
              <span className="tag"><SiPostman color="#FF6C37" /> JMeter / Postman</span>
            </p>
          </div>
        </div>
      </section>

        {/* Experience Section */}
        <section id="experience" className="mb-8 mt-8" style={{ paddingTop: '40px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path></svg>
          Professional Journey
        </h2>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-date">July 2026 – Present</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>R Systems Consulting Services <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>(On Site: Krungthai AXA)</span></h3>
                <span className="tag">Full Stack Engineer</span>
              </div>
              <p style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#cbd5e1' }}>Impact:</strong> Architected and developed a high-volume claim image migration platform using a queued document processing design, ensuring scalability, reliability, and automated production recovery.
              </p>
              <p><strong style={{ color: '#fff' }}>Key Achievement:</strong></p>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: '#94a3b8', marginTop: '8px', lineHeight: '1.6' }}>
                <li>Designed a distributed orchestration system separating PDF compression, CMX API delivery, and orchestration into independent processes.</li>
                <li>Implemented job/queue status workflows for scan, size audit, compression, and resumable sending, allowing interrupted jobs to continue without reprocessing.</li>
                <li>Built background Worker API delivery with configurable throughput control (BatchSize/MaxConcurrentSender).</li>
                <li>Created real-time monitoring dashboard and optimized SQL stored procedures for atomic queue handling and summaries.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">April 2024 – March 2026</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Chubb Samaggi Insurance</h3>
                <span className="tag">Full Stack Engineer</span>
              </div>
              <p style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#cbd5e1' }}>Impact:</strong> Provided critical production support and led modernization efforts, reducing manual verification time and improving system robustness.
              </p>
              <p><strong style={{ color: '#fff' }}>Key Achievement:</strong></p>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: '#94a3b8', marginTop: '8px', lineHeight: '1.6' }}>
                <li><strong style={{ color: '#fff' }}>Incident Commander:</strong> Acted as primary lead for resolving critical production incidents, serving as strategic liaison between Business Users, Infrastructure, and multiple departments for root cause analysis.</li>
                <li><strong style={{ color: '#fff' }}>Modernization:</strong> Enhanced the I-Prompt system to support KBANK 2C2P complex installment payment logic for new/renewal policies and advanced "Driver Level" specifications.</li>
                <li><strong style={{ color: '#fff' }}>Automation:</strong> Engineered an automated Due Diligence System for online agent onboarding, streamlining document management and questionnaires.</li>
                <li><strong style={{ color: '#fff' }}>Partner Integration:</strong> Developed scalable Print Service APIs for seamless integration with external business partners.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">April 2019 – April 2024</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Cigna Insurance</h3>
                <span className="tag">Full Stack Developer</span>
              </div>
              <p style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#cbd5e1' }}>Impact:</strong> Enhanced claims automation and customer retention by designing and implementing critical system automations and integration layers.
              </p>
              <p><strong style={{ color: '#fff' }}>Key Achievement:</strong></p>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: '#94a3b8', marginTop: '8px', lineHeight: '1.6' }}>
                <li><strong style={{ color: '#fff' }}>Microservices:</strong> Designed and implemented a scalable SMS Service API with manage-queued delivery for high-volume reliable messaging.</li>
                <li><strong style={{ color: '#fff' }}>Claims Automation:</strong> Developed C# Batch Jobs automating "No Claim Bonus" (NCB) logic, improving retention by accurately identifying eligible rewards.</li>
                <li><strong style={{ color: '#fff' }}>System Integration:</strong> Took direct ownership of the critical daily claim interface (DHIP) with Dhipaya Insurance, proactively resolving batch failures and ensuring high data integrity.</li>
                <li><strong style={{ color: '#fff' }}>Policy Issuance Optimization:</strong> Revamped the "ECorr" policy printing process, integrating core system data with complex logic via PlanetPress for an automated document generation lifecycle.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">June 2016 – April 2019</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Thai Insurers Datanet</h3>
                <span className="tag">Application Developer</span>
              </div>
              <p style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#cbd5e1' }}>Impact:</strong> Delivered actionable data analytics tools and optimized central databases for industry-wide data consistency.
              </p>
              <p><strong style={{ color: '#fff' }}>Key Achievement:</strong></p>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: '#94a3b8', marginTop: '8px', lineHeight: '1.6' }}>
                <li>Developed the RVP Dashboard to visualize critical KPIs (accident statistics, sales performance, claims ratios) for executive decision-making.</li>
                <li>Managed the IFA central database, optimizing queries for high-volume policies and claims history.</li>
                <li>Implemented rigorous data mapping and validation (System & Business Validation) for industry-wide compliance.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">March 2015 – May 2016</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Freewill Solutions</h3>
                <span className="tag">Consultant / App Developer</span>
              </div>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: '#94a3b8', marginTop: '8px', lineHeight: '1.6' }}>
                <li>Developed management claim platform for international/domestic shipping insurance (CPIO).</li>
                <li>Engineered reporting subsystem for operational insights (Bisimo equipment maintenance) utilizing SQL Server and Crystal Reports.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2013 – 2015</div>
            <div className="glass-card">
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Greenline Synergy (BDMS)</h3>
                <span className="tag">Application Developer</span>
              </div>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: '#94a3b8', marginTop: '8px', lineHeight: '1.6' }}>
                <li>Provided Tier-2 support and system upgrades for the "B-Connect" Hospital Information System (HIS).</li>
                <li>Developed interfaces connecting HIS with BJC PACS to automate automatic retrieve result for X-Ray result.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

        {/* Projects Section */}
        <section id="projects" className="mb-8 mt-8" style={{ paddingTop: '40px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', textTransform: 'uppercase' }}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          Selected Specialized Projects <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#94a3b8', textTransform: 'none' }}>(Freelance)</span>
        </h2>
        <div className="grid grid-cols-2">
          
          <div className="glass-card flex flex-col justify-between">
            <div>
              <div className="image-carousel">
                <div className="carousel-item" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/wise_exchange/1.png', '/My_Portfolio/wise_exchange/2.png'], 0)}>
                  <Image src="/My_Portfolio/wise_exchange/1.png" alt="Wise Exchange UI 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/wise_exchange/1.png', '/My_Portfolio/wise_exchange/2.png'], 1)}>
                  <Image src="/My_Portfolio/wise_exchange/2.png" alt="Wise Exchange UI 2" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Wise Exchange <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>(Currency Exchange Platform)</span></h3>
                <span className="tag accent">Lead Developer</span>
              </div>
              <p style={{ lineHeight: '1.6' }}>
                <strong style={{ color: '#cbd5e1' }}>AI-Driven Development:</strong> Concepted and engineered a decoupled architecture (Web API + Angular). Successfully utilized Generative AI and Prompt Engineering to assist in UI/UX design and significantly accelerate frontend development, reducing technical barriers. Managed full client relations, sales, scope, and price negotiation.
              </p>
            </div>
          </div>


          <div className="glass-card flex flex-col justify-between">
            <div>
              <div className="image-carousel">
                <div className="carousel-item carousel-item-large" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/happy_rich/4.png', '/My_Portfolio/happy_rich/1.png', '/My_Portfolio/happy_rich/2.png', '/My_Portfolio/happy_rich/3.png'], 0)}>
                  <Image src="/My_Portfolio/happy_rich/4.png" alt="Happy Rich UI 4" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item carousel-item-large" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/happy_rich/4.png', '/My_Portfolio/happy_rich/1.png', '/My_Portfolio/happy_rich/2.png', '/My_Portfolio/happy_rich/3.png'], 1)}>
                  <Image src="/My_Portfolio/happy_rich/1.png" alt="Happy Rich UI 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item carousel-item-large" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/happy_rich/4.png', '/My_Portfolio/happy_rich/1.png', '/My_Portfolio/happy_rich/2.png', '/My_Portfolio/happy_rich/3.png'], 2)}>
                  <Image src="/My_Portfolio/happy_rich/2.png" alt="Happy Rich UI 2" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item carousel-item-large" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/happy_rich/4.png', '/My_Portfolio/happy_rich/1.png', '/My_Portfolio/happy_rich/2.png', '/My_Portfolio/happy_rich/3.png'], 3)}>
                  <Image src="/My_Portfolio/happy_rich/3.png" alt="Happy Rich UI 3" fill style={{ objectFit: 'cover' }} />
                </div>
         
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Happy Rich System <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>(.NET FX Ecosystem)</span></h3>
                <span className="tag">Lead Developer</span>
              </div>
              <p style={{ lineHeight: '1.6' }}>
                <strong style={{ color: '#cbd5e1' }}>Comprehensive Financial Ecosystem:</strong> Engineered a multi-platform solution comprising a high-performance WPF application for tellers and a robust web application for centralized administration. Orchestrated complex real-time transactional workflows, live rate display, automated End-of-Day closing, and administrative control panels.
              </p>
            </div>
          </div>

          
          <div className="glass-card flex flex-col justify-between">
            <div>
              <div className="image-carousel">
                <div className="carousel-item" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/gold_shop/1.png', '/My_Portfolio/gold_shop/3.png', '/My_Portfolio/gold_shop/4.png'], 0)}>
                  <Image src="/My_Portfolio/gold_shop/1.png" alt="Gold Shop UI 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/gold_shop/1.png', '/My_Portfolio/gold_shop/3.png', '/My_Portfolio/gold_shop/4.png'], 1)}>
                  <Image src="/My_Portfolio/gold_shop/3.png" alt="Gold Shop UI 2" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="carousel-item" style={{ cursor: 'zoom-in' }} onClick={() => openGallery(['/My_Portfolio/gold_shop/1.png', '/My_Portfolio/gold_shop/3.png', '/My_Portfolio/gold_shop/4.png'], 2)}>
                  <Image src="/My_Portfolio/gold_shop/4.png" alt="Gold Shop UI 3" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>GOLD SHOP MANAGEMENT <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>(Web Application)</span></h3>
                <span className="tag">Full-SDLC & Product Lead</span>
              </div>
              <p style={{ lineHeight: '1.6' }}>
                <strong style={{ color: '#cbd5e1' }}>End-to-End Solutions:</strong> Architected and engineered a full-enterprise Gold Retail Management system, migrating legacy WinForms to a modern, multi-branch Dockerized .NET Core ecosystem with core accounting.<br/><br/>
                <strong style={{ color: '#cbd5e1' }}>Complex Business Logic:</strong> Engineered complex financial logic (Gold Consignment/Pawnbroking with interest, Gold Savings with price locking, KYC/Smart Card/Passport scanner integration).
              </p>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between" style={{ gridColumn: '1 / -1' }}>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>IBS Insurance Reporting <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>(OIC Compliance)</span></h3>
                <span className="tag accent">Team Lead & Crisis Manager</span>
              </div>
              <p style={{ lineHeight: '1.6' }}>
                <strong style={{ color: '#cbd5e1' }}>Crisis Intervention:</strong> Assumed technical leadership for a failing 4-person team amidst severe performance issues and strained relations. Restored client trust through proactive communication and personally verified intricate Oracle queries/data output for all 50 complex regulatory reports to guarantee 100% data accuracy.
              </p>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between" style={{ gridColumn: '1 / -1' }}>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>XMS <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>(Exchange Management System)</span></h3>
              </div>
              <p style={{ lineHeight: '1.6' }}>
                <strong style={{ color: '#cbd5e1' }}>Inventory Management:</strong> Developed a specialized inventory management system for foreign currency exchange businesses, ensuring accurate real-time stock tracking and transaction balancing.
              </p>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between" style={{ gridColumn: '1 / -1' }}>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Doctor Schedule System</h3>
              </div>
              <p style={{ lineHeight: '1.6' }}>
                <strong style={{ color: '#cbd5e1' }}>Workforce Management:</strong> Designed and developed bug fixes for a workforce management solution to optimize physician shift scheduling and automate leave management.
              </p>
            </div>
          </div>

          </div>
        </section>


        <footer style={{ borderTop: '1px solid var(--card-border)', paddingTop: '24px', textAlign: 'center', marginTop: '64px', color: '#64748b' }}>
          <p>© 2026 Songphol Juntongtip. </p>
          <p style={{ fontSize: '0.875rem' }}>Portfolio </p>
        </footer>

        {galleryState && (
          <div 
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(5px)' }}
            onClick={() => setGalleryState(null)}
          >
            <div style={{ position: 'relative', width: '90%', height: '90%', maxWidth: '1200px', maxHeight: '800px', cursor: 'zoom-out' }} onClick={(e) => { e.stopPropagation(); setGalleryState(null); }}>
              <Image src={galleryState.images[galleryState.currentIndex]} alt="Enlarged view" fill style={{ objectFit: 'contain' }} />
              
              {galleryState.images.length > 1 && (
                <>
                  <button 
                    style={{ position: 'absolute', top: '50%', left: '-60px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000 }}
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    &#10094;
                  </button>
                  <button 
                    style={{ position: 'absolute', top: '50%', right: '-60px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000 }}
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    &#10095;
                  </button>
                  <div style={{ position: 'absolute', bottom: '-30px', left: '0', width: '100%', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                    {galleryState.currentIndex + 1} / {galleryState.images.length}
                  </div>
                </>
              )}
            </div>
            <button 
              style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer' }}
              onClick={(e) => { e.stopPropagation(); setGalleryState(null); }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
      </main>
    </>
  );
}
