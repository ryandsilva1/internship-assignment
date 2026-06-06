import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />

      <main>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-text">
            <div className="hero-badge">✦ Your Digital Notebook</div>
            <h1>Study Smarter.<br /><span className="hero-highlight">Notes Organized.</span></h1>
            <p className="hero-desc">
              Create, organize, and collaborate on notes with your classmates —
              structured, searchable, and always within reach.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn-primary">Start Taking Notes</a>
              <a href="#" className="btn-ghost">Browse Departments</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-n">4</span>
                <span className="stat-l">Departments</span>
              </div>
              <div className="stat">
                <span className="stat-n">100%</span>
                <span className="stat-l">Free to Use</span>
              </div>
              <div className="stat">
                <span className="stat-n">Any Device</span>
                <span className="stat-l">Works Everywhere</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="dept-grid">
              <a className="dept-card" href="#">
                <div className="dept-icon icon-an">AN</div>
                <div className="dept-name">Artificial Intelligence &amp; Machine Learning</div>
                <div className="dept-sub">AI · Coding · Machine Learning</div>
                <div className="dept-arrow">→</div>
              </a>
              <a className="dept-card" href="#">
                <div className="dept-icon icon-bd">BD</div>
                <div className="dept-name">Big Data &amp; Cloud Computing</div>
                <div className="dept-sub">Cloud · Management · Data</div>
                <div className="dept-arrow">→</div>
              </a>
              <a className="dept-card" href="#">
                <div className="dept-icon icon-co">CO</div>
                <div className="dept-name">Computer Engineering</div>
                <div className="dept-sub">CS · Programming · IT</div>
                <div className="dept-arrow">→</div>
              </a>
              <a className="dept-card" href="#">
                <div className="dept-icon icon-me">ME</div>
                <div className="dept-name">Mechanical</div>
                <div className="dept-sub">Tools · Robotics · Build</div>
                <div className="dept-arrow">→</div>
              </a>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="features-section">
          <div className="section-label">Why EasyNotes?</div>
          <h2 className="section-title">Everything a student needs</h2>
          <p className="section-sub">
            Built for learners who want to focus on understanding — not on hunting for lost notes.
          </p>
          <div className="features-grid">
            <div className="feat-card">
              <div className="feat-icon" style={{ background: '#EEF3FE' }}>✏️</div>
              <h3>Create notes with ease</h3>
              <p>A clean editor that gets out of your way — just you and your ideas.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon" style={{ background: '#E6FBF5' }}>📂</div>
              <h3>Organize by subject</h3>
              <p>Sort notes into subjects, topics, or custom tags — your system, your rules.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon" style={{ background: '#FFF8EC' }}>🤝</div>
              <h3>Collaborate live</h3>
              <p>Share notes with classmates or study groups instantly, no email required.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon" style={{ background: '#FEF0EE' }}>🔍</div>
              <h3>Search anything</h3>
              <p>Full-text search across all your notes in milliseconds — find it before you forget it.</p>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="about-section">
          <div className="about-left">
            <div className="section-label light">About Us</div>
            <h2 className="section-title light">Built for learners,<br />by learners</h2>
            <p className="section-sub light">
              We started EasyNotes because traditional notebooks get messy, lost, or left at home.
            </p>
            <p className="about-body">
              Our platform keeps everything secure, structured, and accessible across every device
              you own. Whether you're cramming for exams, managing research projects, or jotting
              down a flash of insight — this is the digital notebook that grows with you.
            </p>
            <div className="mission-vision">
              <div className="mv-card">
                <h4>Our Mission</h4>
                <p>Help learners focus more on understanding and less on organizing.</p>
              </div>
              <div className="mv-card">
                <h4>Our Vision</h4>
                <p>A world where knowledge is always within reach, shared seamlessly, and never lost.</p>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="pill"><div className="pill-dot" style={{ background: '#4F8EF7' }}></div> Personal notes with ease</div>
            <div className="pill"><div className="pill-dot" style={{ background: '#19C9A3' }}></div> Subjects, topics &amp; tags</div>
            <div className="pill"><div className="pill-dot" style={{ background: '#FBB340' }}></div> Collaborate with classmates</div>
            <div className="pill"><div className="pill-dot" style={{ background: '#F87171' }}></div> Search &amp; access anywhere</div>
            <div className="pill"><div className="pill-dot" style={{ background: '#A78BFA' }}></div> Secure across all devices</div>
            <div className="pill"><div className="pill-dot" style={{ background: '#34D399' }}></div> Never lose a note again</div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;