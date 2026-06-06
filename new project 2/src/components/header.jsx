function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-dot"></div>
          EasyNotes.com
        </div>

        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Notes</a>
          <a href="#">Departments</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <a href="#" className="nav-cta">Get Started</a>

        <div className="hamburger" id="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className="side-menu" id="sideMenu">
        <span className="close-btn" id="closeBtn">&times;</span>
        <a href="#">Home</a>
        <a href="#">Notes</a>
        <a href="#">Departments</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}

export default Header;