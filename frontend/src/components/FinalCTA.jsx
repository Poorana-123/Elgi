import React from "react";
import "../style/FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta">

      <div className="final-cta-inner">

        <div className="final-cta-label">
          READY WHEN YOU ARE
        </div>

        <h2>
          Find your people.
          <br />
          <span>Build your way.</span>
        </h2>

        <p>
          Learn from someone. Share what you know.
          <br />
          Grow together.
        </p>

        <a
          href="/register"
          className="final-cta-button"
        >
          Start Learning
          <span>↗</span>
        </a>

        <small>
          Free to get started
        </small>

      </div>

    </section>
  );
};

export default FinalCTA;