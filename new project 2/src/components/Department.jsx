function Departments() {
  const departments = [
    {
      code: "AN",
      iconClass: "icon-an",
      name: "Artificial Intelligence & Machine Learning",
      short: "AI & ML",
      desc: "Dive into neural networks, deep learning, NLP, computer vision, and the mathematics behind modern AI systems.",
      topics: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
      noteCount: 38,
      color: "#4F8EF7",
    },
    {
      code: "BD",
      iconClass: "icon-bd",
      name: "Big Data & Cloud Computing",
      short: "Big Data",
      desc: "Explore distributed systems, cloud platforms, data pipelines, and tools like Hadoop, Spark, and AWS.",
      topics: ["Cloud Architecture", "Hadoop & Spark", "Data Pipelines", "AWS / GCP", "NoSQL Databases"],
      noteCount: 24,
      color: "#19C9A3",
    },
    {
      code: "CO",
      iconClass: "icon-co",
      name: "Computer Engineering",
      short: "Computing",
      desc: "From data structures and algorithms to operating systems, networks, and computer architecture.",
      topics: ["Data Structures", "Algorithms", "OS Concepts", "Computer Networks", "DBMS"],
      noteCount: 51,
      color: "#FBB340",
    },
    {
      code: "ME",
      iconClass: "icon-me",
      name: "Mechanical Engineering",
      short: "Mechanical",
      desc: "Core mechanical concepts including thermodynamics, fluid mechanics, manufacturing, and machine design.",
      topics: ["Thermodynamics", "Fluid Mechanics", "Machine Design", "Manufacturing", "Robotics"],
      noteCount: 29,
      color: "#F87171",
    },
  ];

  return (
    <main className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-text">
          <div className="hero-badge">🎓 Departments</div>
          <h1 className="page-hero-title">Select Your Department</h1>
          <p className="page-hero-desc">
            Choose your field of study and access curated notes, summaries,
            and exam prep material shared by students like you.
          </p>
        </div>
      </section>

      {/* ── DEPARTMENTS LIST ── */}
      <section className="dept-body">
        <div className="dept-cards-large">
          {departments.map((d) => (
            <a href="#" className="dept-card-large" key={d.code}>
              <div className="dcl-left">
                <div className={`dept-icon dept-icon-lg ${d.iconClass}`}>{d.code}</div>
                <div className="dcl-info">
                  <div className="dcl-short">{d.short}</div>
                  <h3 className="dcl-name">{d.name}</h3>
                  <p className="dcl-desc">{d.desc}</p>
                  <div className="dcl-topics">
                    {d.topics.map((t) => (
                      <span className="topic-pill" key={t}
                        style={{ borderColor: `${d.color}40`, color: d.color, background: `${d.color}12` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="dcl-right">
                <div className="dcl-count" style={{ color: d.color }}>{d.noteCount}</div>
                <div className="dcl-count-label">Notes</div>
                <div className="dcl-arrow">→</div>
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Departments;