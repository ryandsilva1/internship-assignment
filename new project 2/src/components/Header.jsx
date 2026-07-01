// src/components/Header.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import AuthModal from "./AuthModal";

function Header() {
  const { user, profile, logOut } = useAuth();
  const navigate = useNavigate();

  const [showModal,    setShowModal]    = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await logOut();
    setShowDropdown(false);
    navigate("/");
  };

  // Role badge colour
  const roleBadgeClass = {
    "Student":      "badge-student",
    "Teacher":      "badge-teacher",
    "Researcher":   "badge-researcher",
    "Self-learner": "badge-learner",
    "Other":        "badge-other",
  }[profile?.role] || "badge-other";

  // First letter of name for avatar
  const avatarLetter = profile?.name?.charAt(0).toUpperCase() || "?";

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

        {/* Right side */}
        <div className="nav-right">
          {user ? (
            /* ── Logged in: show user pill ── */
            <div className="user-pill" onClick={() => setShowDropdown(!showDropdown)}>
              <div className="user-avatar">{avatarLetter}</div>
              <div className="user-info">
                <span className="user-name">
                  Hi, {profile?.name?.split(" ")[0] || "there"}
                </span>
                {profile?.role && (
                  <span className={`role-badge ${roleBadgeClass}`}>
                    {profile.role}
                  </span>
                )}
              </div>
              <span className="pill-caret">▾</span>

              {showDropdown && (
                <div className="user-dropdown">
                  <div className="dropdown-email">
                    {user.email}
                  </div>
                  <button className="dropdown-logout" onClick={handleLogout}>
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ── Logged out: hint + sign in button ── */
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
        <span className="close-btn">✕</span>
        <Link to="/">Home</Link>
        <Link to="/Notes">Notes</Link>
        <Link to="/Department">Departments</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      {/* Auth Modal */}
      {showModal && (
        <AuthModal onClose={() => setShowModal(false)} />
      )}
    </header>
  );
}

export default Header;
