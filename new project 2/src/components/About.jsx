function About() {
  const team = [
    { name: "Aryan Mehta", role: "Founder & Lead Dev", dept: "CO", iconClass: "icon-co" },
    { name: "Priya Shah", role: "UI / UX Designer", dept: "AN", iconClass: "icon-an" },
    { name: "Rohan Das", role: "Content Lead", dept: "ME", iconClass: "icon-me" },
    { name: "Sneha Patil", role: "Backend Developer", dept: "BD", iconClass: "icon-bd" },
  ];

  const values = [
    { icon: "🎯", title: "Clarity", desc: "We design every feature to reduce friction and let you focus on learning." },
    { icon: "🤝", title: "Collaboration", desc: "Knowledge grows when it's shared. We build tools that bring students together." },
    { icon: "🔒", title: "Reliability", desc: "Your notes are safe, backed up, and accessible from any device, always." },
    { icon: "🚀", title: "Growth", desc: "We improve constantly — driven by feedback from students like you." },
  ];

  return (
    <main className="page-wrapper">

      {/* ── PAGE HERO (dark) ── */}
      <section className="page-hero">
        <div className="page-hero-text">
          <div className="hero-badge">🙌 Our Story</div>
          <h1 className="page-hero-title">Built for learners,<br />by learners</h1>
          <p className="page-hero-desc">
            EasyNotes started as a personal project to fix a frustrating problem — notes that get
            lost, disorganized, and impossible to share. Today it helps students across departments
            study smarter every day.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="about-mv-section">
        <div className="mv-large-card">
          <div className="mvl-label">Our Mission</div>
          <h2>Help learners focus more on understanding, and less on organizing.</h2>
          <p>
            Traditional study methods waste hours on formatting, finding, and reorganizing notes.
            EasyNotes handles the structure so you can focus entirely on the content.
          </p>
        </div>
        <div className="mv-large-card accent-card">
          <div className="mvl-label light">Our Vision</div>
          <h2>A world where knowledge is always within reach, shared seamlessly, and never lost.</h2>
          <p>
            We believe every student deserves access to great study material — regardless of
            which college, city, or background they come from.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="section-label">What We Stand For</div>
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-sub">Everything we build is shaped by these four principles.</p>
        <div className="features-grid">
          {values.map((v) => (
            <div className="feat-card" key={v.title}>
              <div className="feat-icon" style={{ background: '#EEF3FE', fontSize: '22px' }}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER ── */}
<section className="team-section">
  <div className="section-label light">Founder</div>

  <p className="section-sub light">
    The student behind EasyNotes.
  </p>

  <div className="team-grid">
    <div className="team-card">
      <div className="team-avatar dept-icon dept-icon-lg">
        RD
      </div>

      <div className="team-name">
        Ryan D'Silva
      </div>

      <div className="team-role">
        Founder & Developer
      </div>
    </div>
  </div>
</section>

      {/* ── STATS STRIP ── */}
      <section className="stats-strip">
        <div className="stat-block">
          <div className="stat-big">4</div>
          <div className="stat-desc">Departments</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-block">
          <div className="stat-big">140+</div>
          <div className="stat-desc">Notes Published</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-block">
          <div className="stat-big">500+</div>
          <div className="stat-desc">Students Using It</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-block">
          <div className="stat-big">100%</div>
          <div className="stat-desc">Free Forever</div>
        </div>
      </section>

    </main>
  );
}

export default About;