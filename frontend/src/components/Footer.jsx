import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { ArrowUp } from "lucide-react";

import "../style/Footer.css";


const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer className="premium-footer">

      <div className="footer-container">


        {/* =================================================
            FOOTER INTRO
        ================================================= */}

        <div className="footer-intro">


          {/* BRAND */}

          <div className="footer-brand-block">

            <a
              href="/"
              className="footer-brand"
            >

              <span className="footer-logo">
                LP
              </span>

              <span className="footer-brand-name">
                Learning<span>Partner</span>
              </span>

            </a>


            <p className="footer-tagline">
              Learn from people.
              <br />
              Grow together.
            </p>

          </div>


          {/* STATEMENT */}

          <div className="footer-statement">

            <span>
              A better way to
            </span>

            <strong>
              learn together.
            </strong>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="footer-line"></div>


        {/* =================================================
            FOOTER MAIN
        ================================================= */}

        <div className="footer-main">


          {/* PLATFORM */}

          <div className="footer-column">

            <span className="footer-column-title">
              PLATFORM
            </span>

            <a href="#how-it-works">
              How it works
            </a>

            <a href="#skills">
              Skill Exchange
            </a>

            <a href="#ai">
              AI Learning
            </a>

            <a href="/groups">
              Study Groups
            </a>

          </div>


          {/* LEARNING */}

          <div className="footer-column">

            <span className="footer-column-title">
              LEARNING
            </span>

            <a href="/roadmap">
              Roadmaps
            </a>

            <a href="/questions">
              Questions
            </a>

            <a href="/meetings">
              Meetings
            </a>

            <a href="/analytics">
              Progress
            </a>

          </div>


          {/* ACCOUNT */}

          <div className="footer-column">

            <span className="footer-column-title">
              ACCOUNT
            </span>

            <a href="/login">
              Sign in
            </a>

            <a href="/register">
              Create account
            </a>

            <a href="/profile">
              Profile
            </a>

            <a href="/settings">
              Settings
            </a>

          </div>


          {/* SOCIAL */}

          <div className="footer-social-column">

            <span className="footer-column-title">
              FOLLOW US
            </span>


            <p>
              Stay connected with
              the Learning Partner community.
            </p>


            <div className="social-icons">


              {/* GITHUB */}

              <a
                href="#"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>


              {/* LINKEDIN */}

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>


              {/* INSTAGRAM */}

              <a
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>


              {/* TWITTER */}

              <a
                href="#"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>


            </div>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="footer-line bottom-line"></div>


        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">


          {/* COPYRIGHT */}

          <span className="copyright">
            © {new Date().getFullYear()} Learning Partner
          </span>


          {/* LEGAL LINKS */}

          <div className="footer-legal">

            <a href="/privacy">
              Privacy
            </a>

            <a href="/terms">
              Terms
            </a>

            <a href="/security">
              Security
            </a>

          </div>


          {/* BACK TO TOP */}

          <button
            className="footer-top-button"
            onClick={scrollTop}
            aria-label="Back to top"
          >

            <span>
              Back to top
            </span>

            <ArrowUp size={15} />

          </button>


        </div>

      </div>

    </footer>
  );
};


export default Footer;