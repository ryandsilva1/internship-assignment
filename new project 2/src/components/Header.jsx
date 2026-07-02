// src/components/Header.jsx

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import AuthModal from "./AuthModal";

function Header() {
  const { user, profile, logOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const [showModal,     setShowModal]     = useState(false);
  const [forcedModal,   setForcedModal]   = useState(false); // true = no close button
  const [showDropdown,  setShowDropdown]  = useState(false);
  const [autoFired,     setAutoFired]     = useState(false); // only fire once

  // ── Auto-popup after 5 seconds if not logged in ──────────
  useEffect(() => {
    if (user || autoFired) return; // already logged in or already shown

    const timer = setTimeout(() => {
      setForcedModal(true);
      setShowModal(true);
      setAutoFired(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [user, autoFired]);

  // ── Close modal (only allowed when not forced) ────────────
  const handleClose = () => {
    if (forcedModal) return;  // can't close forced modal
    setShowModal(false);
    setForcedModal(false);
  };

  // ── After successful auth, close everything ───────────────
  const handleAuthSuccess = () => {
    setShowModal(false);
    setForcedModal(false);
  };

  // ── Shop tab click guard ──────────────────────────────────
  const handleShopClick = (e) => {
    if (!user) {
      e.preventDefault();
      setForcedModal(true);
      setShowModal(true);
    }
  };

  const handleLogout = async () => {
    await logOut();
    setShowDropdown(false);
    navigate("/");
  };

  const roleBadgeClass = {
    "Student":      "badge-student",
    "Teacher":      "badge-teacher",
    "Researcher":   "badge-researcher",
    "Self-learner": "badge-learner",
    "Other":        "badge-other",
  }[profile?.role] || "badge-other";

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
          {/* Shop — guarded */}
          <Link to="/Shop" onClick={handleShopClick} className="shop-nav-link">
            🛒 Shop
          </Link>
        </div>

        {/* Right side */}
        <div className="nav-right">

          {/* Cart icon — only visible when logged in */}
          {user && (
            <Link to="/Cart" className="cart-icon-btn">
              🛒
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          )}

          {user ? (
            /* ── Logged in: user pill ── */
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
                  <div className="dropdown-email">{user.email}</div>
                  <button className="dropdown-logout" onClick={handleLogout}>
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ── Logged out: hint + sign in ── */
            <div className="signin-hint-wrap">
              <div className="signin-hint">
                <span className="hint-text">Click here to register</span>
                <span className="hint-arrow">👉</span>
              </div>
              <button
                className="nav-cta"
                onClick={() => { setForcedModal(false); setShowModal(true); }}
              >
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
        <Link to="/Shop" onClick={handleShopClick}>🛒 Shop</Link>
      </div>

      {/* Auth Modal */}
      {showModal && (
        <AuthModal
          onClose={handleAuthSuccess}
          forced={forcedModal}
        />
      )}
    </header>
  );
}

export default Header;