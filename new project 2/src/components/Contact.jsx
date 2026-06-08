import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const faqs = [
    { q: "Is EasyNotes free to use?", a: "Yes — completely free, forever. No hidden fees, no premium tiers." },
    { q: "Can I contribute my own notes?", a: "Absolutely. After signing up you can upload and share notes with your department." },
    { q: "How do I report incorrect notes?", a: "Every note has a 'Report' button. Our moderators review all reports within 48 hours." },
    { q: "Which departments are supported?", a: "Currently AI & ML, Big Data, Computer Engineering, and Mechanical. More coming soon." },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-text">
          <div className="hero-badge">📬 Get in Touch</div>
          <h1 className="page-hero-title">We'd love to hear from you</h1>
          <p className="page-hero-desc">
            Have a question, suggestion, or just want to say hi?
            Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="contact-body">

        {/* LEFT: FORM */}
        <div className="contact-form-wrap">
          <h2 className="form-heading">Send a Message</h2>

          {sent ? (
            <div className="success-msg">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll reply to <strong>{form.email}</strong> within 24 hours.</p>
            </div>
          ) : (
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Aryan Mehta"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="aryan@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Bug report, Suggestion, Question..."
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button className="btn-primary submit-btn" onClick={handleSubmit}>
                Send Message →
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: INFO + FAQ */}
        <div className="contact-info-wrap">
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div>
                <div className="info-label">Email Us</div>
                <div className="info-value">hello@easynotes.com</div>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏱️</div>
              <div>
                <div className="info-label">Response Time</div>
                <div className="info-value">Within 24 hours</div>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <div className="info-label">Based In</div>
                <div className="info-value">Mumbai, India</div>
              </div>
            </div>
          </div>

          <div className="faq-block">
            <h3 className="faq-heading">Frequently Asked</h3>
            {faqs.map((f, i) => (
              <div
                className={`faq-item ${openFaq === i ? "open" : ""}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="faq-caret">{openFaq === i ? "▲" : "▼"}</span>
                </div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;