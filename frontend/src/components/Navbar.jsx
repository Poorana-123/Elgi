import React, { useState } from "react";
import "../style/Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-inner">


        {/* =================================================
            BRAND
        ================================================= */}

        <a
          href="/"
          className="brand"
          onClick={closeMenu}
        >

          <span className="brand-mark">
            LP
          </span>

          <span className="brand-name">
            Learning<span>Partner</span>
          </span>

        </a>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="nav-links">

          <a
            href="#how-it-works"
            onClick={closeMenu}
          >
            How it works
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skill Exchange
          </a>

          <a
            href="#ai"
            onClick={closeMenu}
          >
            AI Learning
          </a>

        </nav>


        {/* =================================================
            DESKTOP ACTIONS
        ================================================= */}

        <div className="nav-actions">

          <a
            href="/login"
            className="login-link"
          >
            Sign in
          </a>

          <a
            href="/register"
            className="start-btn"
          >
            Find your partner

            <span>
              ↗
            </span>

          </a>


          {/* MOBILE MENU BUTTON */}

          <button
            className={`menu-toggle ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >

            <span></span>
            <span></span>

          </button>

        </div>

      </div>


      {/* =================================================
          MOBILE / TABLET DROPDOWN
      ================================================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <div className="mobile-menu-inner">


          {/* MENU HEADER */}

          <div className="mobile-menu-label">
            <span></span>
            NAVIGATION
          </div>


          {/* LINKS */}

          <nav className="mobile-nav-links">

            <a
              href="#how-it-works"
              onClick={closeMenu}
            >
              <span className="mobile-link-number">
                01
              </span>

              <span>
                How it works
              </span>

              <b>
                ↗
              </b>
            </a>


            <a
              href="#skills"
              onClick={closeMenu}
            >
              <span className="mobile-link-number">
                02
              </span>

              <span>
                Skill Exchange
              </span>

              <b>
                ↗
              </b>
            </a>


            <a
              href="#ai"
              onClick={closeMenu}
            >
              <span className="mobile-link-number">
                03
              </span>

              <span>
                AI Learning
              </span>

              <b>
                ↗
              </b>
            </a>

          </nav>


          {/* MOBILE ACCOUNT */}

          <div className="mobile-menu-actions">

            <a
              href="/login"
              onClick={closeMenu}
            >
              Sign in
            </a>

            <a
              href="/register"
              className="mobile-start-btn"
              onClick={closeMenu}
            >
              Find your partner

              <span>
                ↗
              </span>

            </a>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;