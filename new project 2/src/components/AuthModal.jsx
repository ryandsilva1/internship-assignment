// src/components/AuthModal.jsx
// Replaces the old UserModal.
// Toggling between Sign Up and Log In in one clean modal.

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthModal({ onClose }) {
  const { signUp, logIn } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode]       = useState("login");   // "login" | "signup"
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [form, setForm]       = useState({
    name: "", email: "", password: "", role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const switchMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setError("");
    setForm({ name: "", email: "", password: "", role: "" });
  };

  const handleSubmit = async () => {
    // ── Validation ──
    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (mode === "signup" && (!form.name.trim() || !form.role)) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      if (mode === "signup") {
        await signUp({
          email:    form.email.trim(),
          password: form.password,
          name:     form.name.trim(),
          role:     form.role,
        });
      } else {
        await logIn({ email: form.email.trim(), password: form.password });
      }
      onClose();
      navigate("/");           // redirect to home after auth
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon">{mode === "login" ? "🔑" : "👋"}</div>
          <h2>{mode === "login" ? "Welcome back" : "Join EasyNotes"}</h2>
          <p>
            {mode === "login"
              ? "Log in to access your notes and departments."
              : "Create an account to start organizing your notes."}
          </p>
        </div>

        {/* Form */}
        <div className="modal-form">

          {/* Sign Up only fields */}
          {mode === "signup" && (
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
          )}

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
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* Sign Up only fields */}
          {mode === "signup" && (
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
          )}

          {/* Error */}
          {error && <p className="modal-error">{error}</p>}

          {/* Submit */}
          <button
            className="btn-primary modal-submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : mode === "login" ? "Log In →" : "Create Account →"}
          </button>

          {/* Toggle mode */}
          <p className="modal-switch">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <span onClick={switchMode}>
              {mode === "login" ? "Sign Up" : "Log In"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default AuthModal;