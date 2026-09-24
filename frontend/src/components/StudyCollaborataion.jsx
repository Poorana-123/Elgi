import React, { useEffect, useState } from "react";
import "../style/StudyCollaboration.css";

const StudyCollaboration = () => {
  const [slide, setSlide] = useState(0);
  const [joined, setJoined] = useState(false);
  const [muted, setMuted] = useState(false);
  const [notification, setNotification] = useState(true);

  const slides = [
    "group",
    "notification",
    "meeting",
    "test",
    "notes",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setSlide(
      (current) =>
        (current - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="study-video-section">

      {/* INTRO */}

      <div className="study-video-header">

        <div className="study-label">
          <span></span>
          STUDY TOGETHER
        </div>

        <h2>
          Learning is better
          <br />
          <em>when people do it together.</em>
        </h2>

        <p>
          Create a group. Meet. Learn. Test.
          Keep everything together.
        </p>

      </div>


      {/* VIDEO WINDOW */}

      <div className="study-video-window">

        {/* TOP BAR */}

        <div className="video-topbar">

          <div className="video-brand">
            <div className="video-brand-icon">
              LP
            </div>

            <strong>Learning Partner</strong>
          </div>

          <div className="video-counter">
            {String(slide + 1).padStart(2, "0")}
            <span>/ 05</span>
          </div>

        </div>


        {/* SLIDE 1 */}

        {slide === 0 && (
          <div className="video-slide slide-group">

            <div className="slide-copy">

              <span className="slide-number">
                01 — CREATE
              </span>

              <h3>
                Build your
                <strong> study group.</strong>
              </h3>

              <p>
                Pick a skill, invite people and
                create a private space to learn
                together.
              </p>

              <button className="primary-action">
                Create study group
                <span>→</span>
              </button>

            </div>


            <div className="group-scene">

              <div className="group-title">
                <span>PRIVATE STUDY GROUP</span>
                <strong>Backend Builders</strong>
              </div>

              <div className="group-members">

                <Person
                  className="person-one"
                  name="@nova_27"
                  skill="Python"
                  color="purple"
                />

                <Person
                  className="person-two"
                  name="@ray_18"
                  skill="React"
                  color="green"
                />

                <Person
                  className="person-three"
                  name="@mika_04"
                  skill="Java"
                  color="coral"
                />

                <Person
                  className="person-four"
                  name="@alex_31"
                  skill="SQL"
                  color="blue"
                />

                <div className="group-orbit">
                  <span>+</span>
                </div>

              </div>

              <div className="group-footer">
                <span>4 members</span>
                <span>Weekly learning</span>
                <span>Private room</span>
              </div>

            </div>

          </div>
        )}


        {/* SLIDE 2 */}

        {slide === 1 && (
          <div className="video-slide slide-notification">

            <div className="slide-copy">

              <span className="slide-number">
                02 — NOTIFY
              </span>

              <h3>
                Everyone knows
                <strong> when to meet.</strong>
              </h3>

              <p>
                When the session is scheduled,
                every member receives a notification
                with the topic and meeting time.
              </p>

            </div>


            <div className="notification-scene">

              <div className="phone">

                <div className="phone-top">
                  <span>9:41</span>
                  <span>•••</span>
                </div>

                <div className="phone-title">
                  Notifications
                </div>

                {notification ? (
                  <div className="big-notification">

                    <div className="notification-symbol">
                      ◉
                    </div>

                    <div>
                      <strong>
                        New study session
                      </strong>

                      <p>
                        Backend Builders
                      </p>

                      <span>
                        Today · 7:30 PM
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        setNotification(false)
                      }
                    >
                      ×
                    </button>

                  </div>
                ) : (
                  <div className="notification-empty">
                    Notification dismissed ✓
                  </div>
                )}

                <div className="phone-event">

                  <span>TODAY'S TOPIC</span>

                  <strong>
                    REST API Authentication
                  </strong>

                  <p>
                    7:30 PM · 45 min
                  </p>

                </div>

              </div>

            </div>

          </div>
        )}


        {/* SLIDE 3 */}

        {slide === 2 && (
          <div className="video-slide slide-meeting">

            <div className="slide-copy">

              <span className="slide-number">
                03 — MEET
              </span>

              <h3>
                Join the room.
                <strong> Learn together.</strong>
              </h3>

              <p>
                Everyone enters the same meeting
                with today's topic already visible.
              </p>

              <button
                className={`primary-action ${
                  joined ? "joined" : ""
                }`}
                onClick={() => setJoined(!joined)}
              >
                {joined
                  ? "You're in the meeting ✓"
                  : "Join meeting"}

                <span>
                  {joined ? "✓" : "→"}
                </span>
              </button>

            </div>


            <div className="meeting-scene">

              <div className="meeting-window">

                <div className="meeting-head">

                  <div>
                    <span>LIVE STUDY ROOM</span>
                    <strong>
                      Backend Builders
                    </strong>
                  </div>

                  <div className="live-indicator">
                    <i></i>
                    LIVE
                  </div>

                </div>


                <div className="meeting-topic">

                  <span>TODAY'S TOPIC</span>

                  <h4>
                    REST API Authentication
                  </h4>

                  <p>
                    JWT · Protected routes ·
                    Token flow
                  </p>

                </div>


                <div className="meeting-people">

                  <MeetingPerson
                    name="@nova_27"
                    color="purple"
                    large
                  />

                  <MeetingPerson
                    name="@ray_18"
                    color="green"
                  />

                  <MeetingPerson
                    name="@mika_04"
                    color="coral"
                  />

                </div>


                <div className="meeting-bottom">

                  <div className="controls">

                    <button
                      className={muted ? "control-active" : ""}
                      onClick={() =>
                        setMuted(!muted)
                      }
                    >
                      {muted ? "🔇" : "🎙"}
                    </button>

                    <button>▣</button>

                    <button>⌁</button>

                  </div>

                  <span>
                    3 people learning
                  </span>

                </div>

              </div>

            </div>

          </div>
        )}


        {/* SLIDE 4 */}

        {slide === 3 && (
          <div className="video-slide slide-test">

            <div className="slide-copy">

              <span className="slide-number">
                04 — EVALUATE
              </span>

              <h3>
                Finish with a
                <strong> quick test.</strong>
              </h3>

              <p>
                After the discussion, everyone
                answers a few questions and sees
                how well they understood the topic.
              </p>

            </div>


            <div className="test-scene">

              <div className="test-card">

                <div className="test-top">

                  <span>
                    SESSION TEST
                  </span>

                  <strong>
                    04 / 05
                  </strong>

                </div>

                <h4>
                  What does a JWT
                  contain?
                </h4>

                <div className="answer">
                  <span>A</span>
                  Database records
                </div>

                <div className="answer selected">
                  <span>B</span>
                  Signed user claims
                  <b>✓</b>
                </div>

                <div className="answer">
                  <span>C</span>
                  API endpoints
                </div>

                <div className="test-progress">
                  <span></span>
                </div>

              </div>


              <div className="score-bubble">

                <span>GROUP SCORE</span>

                <strong>
                  8.6
                </strong>

                <small>
                  / 10
                </small>

                <i>
                  Great session!
                </i>

              </div>

            </div>

          </div>
        )}


        {/* SLIDE 5 */}

        {slide === 4 && (
          <div className="video-slide slide-notes">

            <div className="slide-copy">

              <span className="slide-number">
                05 — KEEP IT
              </span>

              <h3>
                Save the learning.
                <strong> Keep growing.</strong>
              </h3>

              <p>
                Notes, results and progress stay
                with your group for the next session.
              </p>

              <button
                className="primary-action"
                onClick={nextSlide}
              >
                Start another session
                <span>↗</span>
              </button>

            </div>


            <div className="notes-scene">

              <div className="notes-card">

                <div className="notes-heading">

                  <div>
                    <span>SHARED NOTES</span>
                    <strong>
                      REST API Authentication
                    </strong>
                  </div>

                  <button>✎</button>

                </div>


                <div className="note-row">
                  <span>01</span>
                  JWT has three parts.
                </div>

                <div className="note-row">
                  <span>02</span>
                  Protect private routes.
                </div>

                <div className="note-row">
                  <span>03</span>
                  Store tokens securely.
                </div>


                <div className="notes-bottom">

                  <div className="mini-avatars">

                    <MiniAvatar color="purple" />
                    <MiniAvatar color="green" />
                    <MiniAvatar color="coral" />
                    <MiniAvatar color="blue" />

                  </div>

                  <span>
                    Updated just now
                  </span>

                </div>

              </div>


              <div className="growth-card">

                <span>THIS WEEK</span>

                <strong>82%</strong>

                <div>
                  <span></span>
                </div>

                <p>
                  Group progress
                </p>

              </div>

            </div>

          </div>
        )}


        {/* CONTROLS */}

        <button
          className="video-arrow previous"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          className="video-arrow next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>


        {/* PROGRESS */}

        <div className="video-progress">

          {slides.map((_, index) => (
            <button
              key={index}
              className={
                slide === index ? "active" : ""
              }
              onClick={() => setSlide(index)}
              aria-label={`Slide ${index + 1}`}
            >
              <span></span>
            </button>
          ))}

        </div>

      </div>


      {/* SIMPLE FLOW */}

      <div className="study-flow-line">

        <span>CREATE</span>
        <i>→</i>
        <span>NOTIFY</span>
        <i>→</i>
        <span>MEET</span>
        <i>→</i>
        <span>TEST</span>
        <i>→</i>
        <span>GROW</span>

      </div>

    </section>
  );
};


/* =========================================================
   PERSON
========================================================= */

const Person = ({
  name,
  skill,
  color,
  className = "",
}) => {
  return (
    <div className={`group-person ${className}`}>

      <div className={`large-avatar ${color}`}>

        <div className="avatar-hair"></div>

        <div className="avatar-face">

          <span></span>
          <span></span>

          <i></i>

        </div>

        <div className="avatar-shirt"></div>

      </div>

      <div className="person-name">
        <strong>{name}</strong>
        <span>{skill}</span>
      </div>

    </div>
  );
};


/* =========================================================
   MEETING PERSON
========================================================= */

const MeetingPerson = ({
  name,
  color,
  large = false,
}) => {
  return (
    <div
      className={`meeting-person ${
        large ? "large" : ""
      }`}
    >

      <div className={`meeting-avatar ${color}`}>

        <div className="avatar-hair"></div>

        <div className="avatar-face">
          <span></span>
          <span></span>
          <i></i>
        </div>

        <div className="avatar-shirt"></div>

      </div>

      <span>{name}</span>

    </div>
  );
};


/* =========================================================
   MINI AVATAR
========================================================= */

const MiniAvatar = ({ color }) => (
  <div className={`mini-avatar ${color}`}>
    <span></span>
  </div>
);

export default StudyCollaboration;