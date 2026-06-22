// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserModal from "./UserModal";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // On mount — check if user already introduced themselves
  useEffect(() => {
    const saved = localStorage.getItem("en_user");
    if (saved) {
      try { setUser(JSON.parse(saved)); }
      catch { localStorage.removeItem("en_user"); }
    }
  }, []);

  const handleSave = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("en_user");
    setUser(null);
    setShowDropdown(false);
  };

  // Role badge colour
  const roleBadgeClass = {
    Student: "badge-student",
    "Teacher": "badge-teacher",
    Researcher: "badge-researcher",
    "Self-learner": "badge-learner",
    Other: "badge-other",
  }[user?.role] || "badge-other";

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          <div className="logo-dot"></div>
          EasyNotes.com
        </Link>

        {/* Nav links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Notes">Notes</Link>
          <Link to="/Department">Departments</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        {/* Right side — sign in or user greeting */}
        <div className="nav-right">
          {user ? (
            <div className="user-pill" onClick={() => setShowDropdown(!showDropdown)}>
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <span className="user-name">Hi, {user.name.split(" ")[0]}</span>
                <span className={`role-badge ${roleBadgeClass}`}>{user.role}</span>
              </div>
              <span className="pill-caret">▾</span>

              {showDropdown && (
                <div className="user-dropdown">
                  <div className="dropdown-email">{user.email}</div>
                  <button className="dropdown-logout" onClick={handleLogout}>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="signin-hint-wrap">
              <div className="signin-hint">
                <span className="hint-text">Click here to register</span>
                <span className="hint-arrow">👉</span>
              </div>
              <button className="nav-cta" onClick={() => setShowModal(true)}>
                Sign In
              </button>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="side-menu" id="sideMenu">
        <span className="close-btn" id="closeBtn">✕</span>
        <Link to="/">Home</Link>
        <Link to="/Notes">Notes</Link>
        <Link to="/Department">Departments</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      {/* Modal */}
      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </header>
  );
}

export default Header;
