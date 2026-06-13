// src/components/UserModal.jsx
import { useState } from "react";
import { supabase } from "../supabaseClient";

function UserModal({ onClose, onSave }) {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.role) {
      setError("Please fill in all fields.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Save to Supabase — inserts a new row into the "users" table
    const { error: dbError } = await supabase
      .from("users")
      .insert([{ name: form.name.trim(), email: form.email.trim(), role: form.role }]);

    setLoading(false);

    if (dbError) {
      // If this email already exists, just let them in anyway
      if (dbError.code === "23505") {
        onSave({ name: form.name.trim(), email: form.email.trim(), role: form.role });
        onClose();
        return;
      }
      setError("Something went wrong. Please try again.");
      console.error(dbError);
      return;
    }

    // Save to localStorage so we remember them on next visit
    localStorage.setItem("en_user", JSON.stringify({
      name: form.name.trim(),
      email: form.email.trim(),
      role: form.role,
    }));

    onSave({ name: form.name.trim(), email: form.email.trim(), role: form.role });
    onClose();
  };

  return (
    <>
      {/* Dark backdrop */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Modal box */}
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <div className="modal-icon">👋</div>
          <h2>Welcome to EasyNotes</h2>
          <p>Tell us a bit about yourself so we can tailor your experience.</p>
        </div>

        <div className="modal-form">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Aryan Mehta"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. aryan@college.edu"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>I am a...</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="" disabled>Select your role</option>
              <option value="Student">🎓 Student</option>
              <option value="Teacher">🧑‍🏫 Teacher / Professor</option>
              <option value="Researcher">🔬 Researcher</option>
              <option value="Self-learner">📚 Self-learner</option>
              <option value="Other">👤 Other</option>
            </select>
          </div>

          {error && <p className="modal-error">{error}</p>}

          <button
            className="btn-primary modal-submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Saving..." : "Let's Go →"}
          </button>

          <p className="modal-note">
            No password needed. We just want to know who's using EasyNotes.
          </p>
        </div>
      </div>
    </>
  );
}

export default UserModal;