import React, { useEffect, useState } from "react";
import "../style/Hero.css";

const matchSets = [
  {
    left: {
      alias: "yal",
      type: "girl",
      knows: "Python",
      wants: "Django",
      level: "Intermediate",
    },
    right: {
      alias: "sam_32",
      type: "boy",
      knows: "Django",
      wants: "Python",
      level: "Intermediate",
    },
    score: 96,
  },
  {
    left: {
      alias: "yuki_07",
      type: "girl",
      knows: "React",
      wants: "Node.js",
      level: "Intermediate",
    },
    right: {
      alias: "ray_18",
      type: "boy",
      knows: "Node.js",
      wants: "React",
      level: "Advanced",
    },
    score: 94,
  },
  {
    left: {
      alias: "yara_11",
      type: "girl",
      knows: "Python",
      wants: "Spring Boot",
      level: "Beginner",
    },
    right: {
      alias: "ava_24",
      type: "girl",
      knows: "Spring Boot",
      wants: "Python",
      level: "Intermediate",
    },
    score: 91,
  },
];

function GirlAvatar() {
  return (
    <svg
      className="hero-avatar-svg"
      viewBox="0 0 220 230"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hair silhouette */}
      <path
        d="M48 105C38 63 61 25 108 24C153 23 181 56 170 108L158 150H61L48 105Z"
        fill="#3D2931"
      />

      {/* Hair side locks */}
      <path
        d="M52 86C39 108 43 144 66 158L75 132L68 91Z"
        fill="#3D2931"
      />

      <path
        d="M164 86C178 110 174 143 151 158L143 132L150 91Z"
        fill="#3D2931"
      />

      {/* Neck */}
      <path
        d="M92 142H126V174C117 182 101 182 92 174Z"
        fill="#F2B895"
      />

      {/* Body */}
      <path
        d="M51 229C54 190 71 168 109 168C147 168 165 190 168 229Z"
        fill="#8B78E6"
      />

      {/* Shirt */}
      <path
        d="M82 169L109 197L136 169"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* Face */}
      <path
        d="M67 88C67 57 85 42 110 42C137 42 154 61 154 91V111C154 139 135 157 110 157C84 157 67 138 67 111V88Z"
        fill="#F2B895"
      />

      {/* Front hair */}
      <path
        d="M67 82C65 53 85 33 111 33C139 33 158 52 156 80C143 65 130 60 116 62C99 64 87 73 67 82Z"
        fill="#3D2931"
      />

      {/* Hair strand */}
      <path
        d="M72 72C83 59 92 55 102 57C92 69 83 78 72 87Z"
        fill="#4D333D"
      />

      {/* Eyebrows */}
      <path
        d="M80 94Q91 87 101 94"
        fill="none"
        stroke="#563B35"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M119 94Q130 87 140 94"
        fill="none"
        stroke="#563B35"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Eyes */}
      <ellipse cx="91" cy="103" rx="7" ry="8" fill="#30252A" />
      <ellipse cx="129" cy="103" rx="7" ry="8" fill="#30252A" />

      <circle cx="93" cy="100" r="2.3" fill="white" />
      <circle cx="131" cy="100" r="2.3" fill="white" />

      {/* Nose */}
      <path
        d="M109 105Q103 119 110 121"
        fill="none"
        stroke="#D18F73"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M99 129Q110 138 121 129"
        fill="none"
        stroke="#9A5061"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Blush */}
      <ellipse
        cx="78"
        cy="122"
        rx="12"
        ry="6"
        fill="#F28F9B"
        opacity="0.3"
      />

      <ellipse
        cx="142"
        cy="122"
        rx="12"
        ry="6"
        fill="#F28F9B"
        opacity="0.3"
      />

      {/* Cute hair clip */}
      <path
        d="M148 52C158 42 168 51 160 61C154 68 145 61 148 52Z"
        fill="#C8FF4D"
      />

      <circle
        cx="154"
        cy="55"
        r="3"
        fill="white"
      />

      {/* Tiny earrings */}
      <circle cx="65" cy="113" r="4" fill="#C8FF4D" />
      <circle cx="155" cy="113" r="4" fill="#C8FF4D" />
    </svg>
  );
}

function BoyAvatar() {
  return (
    <svg
      className="hero-avatar-svg"
      viewBox="0 0 220 230"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* =========================
          BACK HAIR
      ========================== */}
      <path
        d="M51 91
           C45 56 63 27 105 24
           C143 21 171 45 171 82
           C171 103 164 120 153 133
           L65 133
           C55 121 49 106 51 91Z"
        fill="#202B38"
      />

      {/* =========================
          NECK
      ========================== */}
      <path
        d="M91 142
           H127
           V174
           C117 183 101 183 91 174Z"
        fill="#D69B78"
      />

      {/* =========================
          HOODIE / BODY
      ========================== */}
      <path
        d="M43 230
           C47 190 67 168 109 168
           C151 168 171 190 177 230Z"
        fill="#4F7591"
      />

      {/* Hoodie hood */}
      <path
        d="M70 173
           C76 162 91 157 109 157
           C127 157 142 162 149 173
           L135 194
           C128 184 119 180 109 180
           C99 180 90 184 83 194Z"
        fill="#3C5C73"
      />

      {/* Hoodie strings */}
      <path
        d="M92 175L88 205"
        stroke="#EAF2F5"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M126 175L130 205"
        stroke="#EAF2F5"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* =========================
          FACE
      ========================== */}
      <path
        d="M69 84
           C69 56 85 40 110 40
           C138 40 154 58 154 88
           V111
           C154 138 136 157 110 157
           C84 157 67 138 67 111
           V91Z"
        fill="#D69B78"
      />

      {/* =========================
          SHORT HAIR
      ========================== */}
      <path
        d="M65 76
           C63 48 83 29 109 29
           C138 29 158 49 157 76
           C148 68 143 60 135 58
           C128 67 119 69 109 61
           C99 70 89 70 80 62
           C76 69 71 73 65 76Z"
        fill="#202B38"
      />

      {/* Hair highlights */}
      <path
        d="M75 57Q86 38 101 38"
        fill="none"
        stroke="#354555"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M108 36Q126 34 140 49"
        fill="none"
        stroke="#354555"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* =========================
          EYEBROWS
      ========================== */}
      <path
        d="M78 94Q89 87 101 93"
        fill="none"
        stroke="#3B2926"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M119 93Q131 87 142 94"
        fill="none"
        stroke="#3B2926"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* =========================
          EYES
      ========================== */}
      <ellipse
        cx="91"
        cy="104"
        rx="7"
        ry="8"
        fill="#202A30"
      />

      <ellipse
        cx="129"
        cy="104"
        rx="7"
        ry="8"
        fill="#202A30"
      />

      <circle
        cx="93"
        cy="101"
        r="2.3"
        fill="white"
      />

      <circle
        cx="131"
        cy="101"
        r="2.3"
        fill="white"
      />

      {/* =========================
          NOSE
      ========================== */}
      <path
        d="M109 105
           Q103 118 110 121"
        fill="none"
        stroke="#B87558"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* =========================
          SMILE
      ========================== */}
      <path
        d="M98 130
           Q110 136 122 129"
        fill="none"
        stroke="#75473E"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* =========================
          SUBTLE BLUSH
      ========================== */}
      <ellipse
        cx="78"
        cy="122"
        rx="10"
        ry="5"
        fill="#E98787"
        opacity="0.18"
      />

      <ellipse
        cx="142"
        cy="122"
        rx="10"
        ry="5"
        fill="#E98787"
        opacity="0.18"
      />

      {/* =========================
          HEADPHONES
      ========================== */}

      {/* Headphone band */}
      <path
        d="M62 93
           C59 60 79 38 109 37
           C139 37 160 60 157 93"
        fill="none"
        stroke="#E63946"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Left ear cup */}
      <rect
        x="55"
        y="88"
        width="16"
        height="28"
        rx="8"
        fill="#E63946"
      />

      {/* Right ear cup */}
      <rect
        x="149"
        y="88"
        width="16"
        height="28"
        rx="8"
        fill="#E63946"
      />

      {/* Headphone inner */}
      <rect
        x="59"
        y="94"
        width="8"
        height="15"
        rx="4"
        fill="#E63946"
      />

      <rect
        x="153"
        y="94"
        width="8"
        height="15"
        rx="4"
        fill="#E63946"
      />


    </svg>
  );
}

function Avatar({ type }) {
  return type === "girl" ? <GirlAvatar /> : <BoyAvatar />;
}

function Hero() {
  const [activeSet, setActiveSet] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const current = matchSets[activeSet];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % matchSets.length);
      setSelectedPerson(null);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const selectPerson = (person) => {
    setSelectedPerson(person);
  };

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span>
            HUMAN-TO-HUMAN LEARNING
          </div>

          <h1>
            Learn from someone.
            <br />
            <span>Teach someone back.</span>
          </h1>

          <p className="hero-description">
            Find a learning partner who knows what you want to learn —
            while you know something they need.
          </p>

          <div className="hero-actions">

            <button className="hero-primary-btn">
              Find my learning partner
              <span>↗</span>
            </button>

            <a href="#how-it-works" className="hero-secondary-btn">
              See how it works
              <span>↓</span>
            </a>

          </div>

          <div className="hero-note">
            <span>✦</span>
            You teach. You learn. You grow together.
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-match-area">

          {/* Label directly above cards */}
          <div className="hero-match-label">
            <span className="hero-live-dot"></span>
            FINDING YOUR MATCH
          </div>

          <div className="hero-match-subtitle">
            2 people · 1 skill exchange
          </div>

          <div className="hero-people">

            {/* LEFT CARD */}
            <div
              className={`hero-person-card hero-person-card-left ${
                selectedPerson?.alias === current.left.alias
                  ? "hero-person-selected"
                  : ""
              }`}
              onClick={() => selectPerson(current.left)}
            >

              <div className="hero-card-top">
                <span className="hero-online">
                  <i></i> online
                </span>

                <span className="hero-card-number">
                  01
                </span>
              </div>

              <div className="hero-avatar-wrap">
                <div className="hero-avatar-blob hero-avatar-green">
                  <Avatar type={current.left.type} />
                </div>
              </div>

              <div className="hero-person-info">

                <div className="hero-alias">
                  @{current.left.alias}
                </div>

                <div className="hero-role">
                  WANTS TO LEARN
                </div>

                <div className="hero-skill">
                  {current.left.wants}
                </div>

                <div className="hero-knows">
                  Knows <strong>{current.left.knows}</strong>
                </div>

              </div>

              {selectedPerson?.alias === current.left.alias && (
                <div className="hero-profile-pop">
                  <strong>@{current.left.alias}</strong>
                  <span>Learning {current.left.wants}</span>
                  <span>Knows {current.left.knows}</span>
                  <small>{current.left.level}</small>
                </div>
              )}

            </div>

            {/* CENTER MATCH */}
            <div className="hero-match-center">

              <div className="hero-match-line"></div>

              <div className="hero-match-badge">
                <span>↔</span>
                <strong>{current.score}%</strong>
                <small>MATCH</small>
              </div>

              <div className="hero-match-line"></div>

            </div>

            {/* RIGHT CARD */}
            <div
              className={`hero-person-card hero-person-card-right ${
                selectedPerson?.alias === current.right.alias
                  ? "hero-person-selected"
                  : ""
              }`}
              onClick={() => selectPerson(current.right)}
            >

              <div className="hero-card-top">
                <span className="hero-online">
                  <i></i> online
                </span>

                <span className="hero-card-number">
                  02
                </span>
              </div>

              <div className="hero-avatar-wrap">
                <div className="hero-avatar-blob hero-avatar-purple">
                  <Avatar type={current.right.type} />
                </div>
              </div>

              <div className="hero-person-info">

                <div className="hero-alias">
                  @{current.right.alias}
                </div>

                <div className="hero-role">
                  CAN TEACH
                </div>

                <div className="hero-skill">
                  {current.right.knows}
                </div>

                <div className="hero-knows">
                  Wants <strong>{current.right.wants}</strong>
                </div>

              </div>

              {selectedPerson?.alias === current.right.alias && (
                <div className="hero-profile-pop">
                  <strong>@{current.right.alias}</strong>
                  <span>Teaching {current.right.knows}</span>
                  <span>Wants {current.right.wants}</span>
                  <small>{current.right.level}</small>
                </div>
              )}

            </div>

          </div>

          {/* Exchange information */}
          <div className="hero-exchange">

            <div className="hero-exchange-item">
              <span className="hero-exchange-icon green">
                ↓
              </span>

              <div>
                <small>@{current.left.alias}</small>
                <strong>{current.left.knows}</strong>
              </div>
            </div>

            <div className="hero-exchange-arrow">
              ⇄
            </div>

            <div className="hero-exchange-item right">
              <div>
                <small>@{current.right.alias}</small>
                <strong>{current.right.knows}</strong>
              </div>

              <span className="hero-exchange-icon purple">
                ↓
              </span>
            </div>

          </div>

          {/* Set indicators */}
          <div className="hero-set-controls">

            {matchSets.map((_, index) => (
              <button
                key={index}
                className={
                  activeSet === index
                    ? "hero-set-active"
                    : ""
                }
                onClick={() => {
                  setActiveSet(index);
                  setSelectedPerson(null);
                }}
                aria-label={`Show match ${index + 1}`}
              >
                <span></span>
              </button>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;