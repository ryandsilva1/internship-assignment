function Notes() {
  const notes = [
    {
      id: 1,
      title: "Data Structures – Linked Lists",
      dept: "CO",
      deptColor: "icon-co",
      subject: "Computer Engineering",
      preview: "A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a pointer to the next node...",
      date: "2 Jun 2026",
      tag: "Notes",
    },
    {
      id: 2,
      title: "Thermodynamics – Laws & Cycles",
      dept: "ME",
      deptColor: "icon-me",
      subject: "Mechanical",
      preview: "The first law of thermodynamics states that energy cannot be created or destroyed. The Carnot cycle describes the most efficient heat engine...",
      date: "1 Jun 2026",
      tag: "Notes",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      dept: "AN",
      deptColor: "icon-an",
      subject: "AI & Machine Learning",
      preview: "Machine learning is a branch of AI that enables systems to learn from data. Supervised, unsupervised, and reinforcement learning are the three main paradigms...",
      date: "30 May 2026",
      tag: "Summary",
    },
    {
      id: 4,
      title: "Cloud Computing – AWS Basics",
      dept: "BD",
      deptColor: "icon-bd",
      subject: "Big Data & Cloud",
      preview: "AWS provides on-demand cloud computing platforms. Key services include EC2 for compute, S3 for storage, and RDS for managed databases...",
      date: "28 May 2026",
      tag: "Notes",
    },
    {
      id: 5,
      title: "Operating Systems – Process Scheduling",
      dept: "CO",
      deptColor: "icon-co",
      subject: "Computer Engineering",
      preview: "Process scheduling determines which process runs at a given time. Algorithms include FCFS, Round Robin, SJF, and Priority Scheduling...",
      date: "26 May 2026",
      tag: "Exam Prep",
    },
    {
      id: 6,
      title: "Fluid Mechanics – Bernoulli's Principle",
      dept: "ME",
      deptColor: "icon-me",
      subject: "Mechanical",
      preview: "Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in pressure or potential energy...",
      date: "25 May 2026",
      tag: "Summary",
    },
  ];

  const tagColors = {
    "Notes": { bg: "rgba(79,142,247,0.15)", color: "#7CAAFF" },
    "Summary": { bg: "rgba(25,201,163,0.15)", color: "#19C9A3" },
    "Exam Prep": { bg: "rgba(251,179,64,0.15)", color: "#FBB340" },
  };

  return (
    <main className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-text">
          <div className="hero-badge">📝 All Notes</div>
          <h1 className="page-hero-title">Browse & Study Notes</h1>
          <p className="page-hero-desc">
            Explore notes shared by students across all departments.
            Search, filter, and save what you need.
          </p>
        </div>
        <div className="notes-search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search notes, subjects, topics..." />
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="notes-body">
        <div className="filter-tabs">
          <button className="tab active">All</button>
          <button className="tab">Computing</button>
          <button className="tab">Mechanical</button>
          <button className="tab">AI & ML</button>
          <button className="tab">Big Data</button>
        </div>

        {/* ── NOTES GRID ── */}
        <div className="notes-grid">
          {notes.map((note) => (
            <div className="note-card" key={note.id}>
              <div className="note-card-top">
                <div className={`dept-icon ${note.deptColor}`}>{note.dept}</div>
                <span
                  className="note-tag"
                  style={{ background: tagColors[note.tag].bg, color: tagColors[note.tag].color }}
                >
                  {note.tag}
                </span>
              </div>
              <h3 className="note-title">{note.title}</h3>
              <p className="note-subject">{note.subject}</p>
              <p className="note-preview">{note.preview}</p>
              <div className="note-footer">
                <span className="note-date">{note.date}</span>
                <a href="#" className="note-read">Read →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Notes;