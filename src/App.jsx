import { useEffect, useState } from 'react'
import './App.css'

const experience = [
  {
    period: 'Jan 2025 — Aug 2026',
    role: 'BTEC IT Assessor',
    company: 'King David Academy',
    place: 'Kigali, Rwanda',
    bullets: [
      'Assessing BTEC IT coursework and practical projects against Pearson standards',
      'Mentoring students in networking, cybersecurity, and project management',
      'Ensuring assessment quality and compliance with academic standards',
      'Collaborating with staff to enhance curriculum relevance',
    ],
  },
  {
    period: 'Aug 2024 — Jan 2025',
    role: 'Head of ICT Department & IT Teacher',
    company: 'Mother Mary International School Complex',
    place: 'Kigali, Rwanda',
    bullets: [
      'Taught Cambridge IT curriculum to candidate classes preparing for external examinations',
      'Supervised ICT staff and delivered practical training in systems and security',
      'Introduced digital tools that improved teaching and administration efficiency',
      'Organized ICT workshops for staff and students',
    ],
  },
  {
    period: 'Jun 2023 — Nov 2024',
    role: 'Cybersecurity Intern',
    company: 'ITEC LTD',
    place: 'Kigali, Rwanda',
    bullets: [
      'Conducted vulnerability assessments and cybersecurity risk analyses for client organizations',
      'Implemented security controls and recommended mitigation strategies',
      'Assisted in developing cybersecurity awareness and client training programs',
    ],
  },
]

const projects = [
  {
    number: '01',
    title: 'Post-Quantum Cryptography Readiness Assessment',
    label: 'Research · 2026 — Present',
    description: "Preparing Rwanda's digital infrastructure for the post-quantum era through practical policy and technical analysis.",
    points: [
      'Conducting TLS deployment scans of .gov.rw domains and financial institutions',
      "Analyzing policy documents to assess Rwanda's PQC migration preparedness",
      "Developing first empirical assessment of Rwanda's quantum vulnerability",
    ],
  },
  {
    number: '02',
    title: 'Tekmax Cyber Range',
    label: 'Founder · 2026 — Present',
    description: 'A browser-based cybersecurity training platform built for Rwandan secondary schools.',
    points: [
      'Building localized scenarios covering mobile money fraud, SIM swap, and government domain spoofing',
      'Creating hands-on labs for packet analysis, web security, and incident response',
      'Designing student progress tracking and verifiable skill certifications',
    ],
  },
]

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={() => scrollTo('home')}>
          <span className="wordmark-mark">DI</span>
          <span>Didier Izere</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map((item) => (
            <button
              key={item}
              className={activeSection === item.toLowerCase() ? 'nav-item active' : 'nav-item'}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
          <a className="nav-cta" href="mailto:dizere@andrew.cmu.edu">Start a conversation <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Cybersecurity researcher & educator</p>
            <h1>Building safer<br /><em>digital futures.</em></h1>
            <p className="hero-lead">I&apos;m Didier Izere — a cybersecurity researcher at Carnegie Mellon University Africa focused on post-quantum cryptography readiness, digital resilience, and practical security education for the continent.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => scrollTo('projects')}>Explore my work <span>↓</span></button>
              <a className="text-link" href="mailto:dizere@andrew.cmu.edu">Get in touch <span>↗</span></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="portrait-card">
              <img src="/100_0469.jpg" alt="Didier Izere" className="portrait-img" />
              <div className="portrait-grid" />
              <p>Researching the<br /><strong>next layer of trust.</strong></p>
            </div>
            <div className="hero-facts">
              <div><span>Based in</span><strong>Kigali, Rwanda</strong></div>
              <div><span>Currently</span><strong>CMU-Africa · MSIT</strong></div>
            </div>
          </div>
        </section>

        <section id="about" className="about section-wrap">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <h2>Curiosity with<br /><em>consequence.</em></h2>
            <div className="about-body">
              <p className="large-copy">My work sits at the intersection of cybersecurity, research, and education. I study how emerging threats affect African digital infrastructure, then turn that understanding into practical systems and learning experiences.</p>
              <p>As a Certified Ethical Hacker and software developer, I bring both technical depth and a teacher&apos;s instinct for clarity. I&apos;m currently pursuing a Master of Science in Information Technology at Carnegie Mellon University Africa, with a concentration in cybersecurity.</p>
              <div className="stat-row"><div><strong>3+</strong><span>Years in<br />cybersecurity</span></div><div><strong>500+</strong><span>Learners<br />reached</span></div><div><strong>01</strong><span>Research<br />focus</span></div></div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-wrap dark-section">
          <div className="section-label light">02 / Experience</div>
          <div className="section-heading-row"><h2>Where I&apos;ve<br /><em>made impact.</em></h2><p>From the classroom to client organizations, every role has been about making technology more secure, understandable, and useful.</p></div>
          <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><div className="timeline-period">{item.period}</div><div className="timeline-content"><h3>{item.role}</h3><p className="company">{item.company} <span>·</span> {item.place}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
        </section>

        <section id="projects" className="projects section-wrap">
          <div className="section-label">03 / Selected work</div>
          <div className="section-heading-row"><h2>Ideas turned<br /><em>into action.</em></h2><p>Research and products designed around the security realities of African organizations and learners.</p></div>
          <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-info"><p className="project-label">{project.label}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul></div><span className="project-arrow">↗</span></article>)}</div>
        </section>

        <section id="skills" className="skills section-wrap dark-section">
          <div className="section-label light">04 / Capabilities</div>
          <div className="skills-grid"><div><h2>Tools for a<br /><em>complex world.</em></h2><p className="skills-intro">A practical toolkit shaped by research, real systems, and years of helping people learn by doing.</p></div><div className="skill-columns"><div><span>Security</span><p>Vulnerability assessment<br />Threat analysis<br />Network security<br />Incident response</p></div><div><span>Technology</span><p>Python · Linux<br />HTML · CSS · JavaScript<br />Wireshark · Burp Suite<br />Metasploit · Nmap · Nessus</p></div><div><span>Community</span><p>Technical education<br />Curriculum design<br />Research communication<br />Mentorship</p></div></div></div>
          <div className="recognition"><span>Recognition</span><p><strong>PicoCTF 2026</strong> — 1st Runner-up, Carnegie Mellon University Africa &nbsp; / &nbsp; <strong>Quantum Summer Academy 2026</strong> — Selected participant</p></div>
        </section>

        <section id="contact" className="contact section-wrap">
          <div className="contact-inner"><p className="eyebrow"><span className="eyebrow-line" /> Let&apos;s connect</p><h2>Have a challenge<br /><em>worth solving?</em></h2><p className="contact-copy">Whether you&apos;re exploring a research collaboration, building a security program, or looking for a thoughtful speaker, I&apos;d like to hear from you.</p><a className="contact-email" href="mailto:dizere@andrew.cmu.edu">dizere@andrew.cmu.edu <span>↗</span></a><div className="contact-meta"><span>Kigali, Rwanda</span><span>LinkedIn <b>↗</b></span><span>Available for select collaborations</span></div></div>
        </section>
      </main>
      <footer><span>© 2026 Didier Izere</span><a href="mailto:dizere@andrew.cmu.edu">dizere@andrew.cmu.edu</a><span>Cybersecurity · Research · Education</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

export default App
