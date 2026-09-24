import React, { useEffect, useRef, useState } from "react";
import "../style/SkillExchange.css";

const processSteps = [
  {
    number: "01",
    label: "STUDY TOGETHER",
    tag: "PRIVATE COLLABORATION",
    title: "Build a learning space together.",
    description:
      "Create a private study group with your learning partner. Set a shared goal, organize topics, divide tasks and work through the syllabus together.",
  },
  {
    number: "02",
    label: "STAY CONNECTED",
    tag: "REGULAR MEETINGS",
    title: "Make learning a regular habit.",
    description:
      "Schedule study sessions, plan meetings and keep your learning journey active with a shared calendar and upcoming session reminders.",
  },
  {
    number: "03",
    label: "CAPTURE & REVISIT",
    tag: "MEETING NOTES",
    title: "Never lose what you learned.",
    description:
      "Record meeting notes, important explanations, decisions, questions and resources so your learning conversations become useful knowledge you can revisit.",
  },
  {
    number: "04",
    label: "PERSONAL ASSISTANCE",
    tag: "AI LEARNING GUIDE",
    title: "Get guidance when you need it.",
    description:
      "Your personal learning assistant observes your progress, completed tasks and weak areas to suggest what to focus on next.",
  },
];

const SkillExchange = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      section.style.setProperty("--mouse-x", `${x}px`);
      section.style.setProperty("--mouse-y", `${y}px`);
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const currentStep = processSteps[activeStep];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % processSteps.length);
  };

  return (
    <section
      className="skill-exchange"
      id="how-it-works"
      ref={sectionRef}
    >
      <div className="exchange-grid"></div>

      <div className="exchange-glow"></div>

      {/* ================= HEADER ================= */}

      <div className="exchange-heading">

        <div className="section-label">
          AFTER THE MATCH
        </div>

        <h2>
          Learning gets
          <br />
          <span>better together.</span>
        </h2>

        

      </div>


      {/* ================= NAVIGATION ================= */}

      <div className="process-navigation">

        {processSteps.map((step, index) => (

          <button
            key={step.number}
            className={
              activeStep === index
                ? "process-step active"
                : "process-step"
            }
            onClick={() => setActiveStep(index)}
          >

            <span className="process-number">
              {step.number}
            </span>

            <span className="process-label">
              {step.label}
            </span>

          </button>

        ))}

      </div>


      {/* ================= MAIN EXPERIENCE ================= */}

      <div className="process-experience">

        {/* LEFT */}

        <div className="process-copy">

          <span className="process-tag">
            {currentStep.tag}
          </span>

          <div className="process-big-number">
            {currentStep.number}
          </div>

          <h3>
            {currentStep.title}
          </h3>

          <p>
            {currentStep.description}
          </p>


          {/* FEATURE LIST */}

          <div className="feature-points">

            {activeStep === 0 && (
              <>
                <div>
                  <span>01</span>
                  <strong>Private study groups</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Shared learning goals</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Tasks & syllabus</strong>
                </div>
              </>
            )}

            {activeStep === 1 && (
              <>
                <div>
                  <span>01</span>
                  <strong>Schedule sessions</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Meeting reminders</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Shared availability</strong>
                </div>
              </>
            )}

            {activeStep === 2 && (
              <>
                <div>
                  <span>01</span>
                  <strong>Meeting notes</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Questions & decisions</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Learning history</strong>
                </div>
              </>
            )}

            {activeStep === 3 && (
              <>
                <div>
                  <span>01</span>
                  <strong>Progress analysis</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Weak-topic detection</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Personalized guidance</strong>
                </div>
              </>
            )}

          </div>


          {/* COUNTER */}

          <div className="process-counter">

            <span>
              {currentStep.number}
            </span>

            <div className="counter-line">

              <div
                className="counter-progress"
                style={{
                  width: `${((activeStep + 1) / 4) * 100}%`,
                }}
              />

            </div>

            <span>04</span>

          </div>

        </div>


        {/* RIGHT VISUAL */}

        <div className="process-visual">


          {/* ================= STUDY GROUP ================= */}

          {activeStep === 0 && (

            <div className="visual-screen study-screen">

              <div className="screen-top">

                <span>
                  PRIVATE STUDY GROUP
                </span>

                <span className="screen-status">
                  ● ACTIVE
                </span>

              </div>


              <div className="study-header">

                <div>

                  <small>
                    GROUP GOAL
                  </small>

                  <h4>
                    Become a Spring Boot Developer
                  </h4>

                </div>

                <div className="member-count">
                  4 MEMBERS
                </div>

              </div>


              <div className="study-layout">


                <div className="study-members">

                  <div className="member-title">
                    STUDY MEMBERS
                  </div>


                  <div className="member">

                    <span className="member-avatar green">
                      Y
                    </span>

                    <div>
                      <strong>
                        @yal
                      </strong>

                      <small>
                        Backend learner
                      </small>
                    </div>

                    <span className="online">
                      ●
                    </span>

                  </div>


                  <div className="member">

                    <span className="member-avatar purple">
                      S
                    </span>

                    <div>
                      <strong>
                        @sam_32
                      </strong>

                      <small>
                        Java learner
                      </small>
                    </div>

                    <span className="online">
                      ●
                    </span>

                  </div>


                  <div className="member">

                    <span className="member-avatar orange">
                      R
                    </span>

                    <div>
                      <strong>
                        @ray_18
                      </strong>

                      <small>
                        API learner
                      </small>
                    </div>

                    <span className="online">
                      ●
                    </span>

                  </div>

                </div>


                <div className="group-workspace">

                  <div className="workspace-top">

                    <span>
                      THIS WEEK
                    </span>

                    <span>
                      4 / 7 TASKS
                    </span>

                  </div>


                  <div className="group-task completed">

                    <span>✓</span>

                    <div>
                      <strong>
                        Java fundamentals
                      </strong>

                      <small>
                        Completed
                      </small>
                    </div>

                  </div>


                  <div className="group-task current">

                    <span>
                      02
                    </span>

                    <div>
                      <strong>
                        Spring dependency injection
                      </strong>

                      <small>
                        In progress
                      </small>
                    </div>

                  </div>


                  <div className="group-task">

                    <span>
                      03
                    </span>

                    <div>
                      <strong>
                        Build REST API
                      </strong>

                      <small>
                        Upcoming
                      </small>
                    </div>

                  </div>


                  <div className="workspace-progress">

                    <div>
                      <span>
                        GROUP PROGRESS
                      </span>

                      <strong>
                        56%
                      </strong>
                    </div>

                    <div className="progress-bar">

                      <div></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          )}


          {/* ================= MEETINGS ================= */}

          {activeStep === 1 && (

            <div className="visual-screen meeting-screen">

              <div className="screen-top">

                <span>
                  LEARNING SCHEDULE
                </span>

                <span className="screen-status">
                  ● SYNCED
                </span>

              </div>


              <div className="meeting-heading">

                <div>

                  <small>
                    UPCOMING SESSION
                  </small>

                  <h4>
                    Spring Boot Study Session
                  </h4>

                </div>

                <div className="meeting-date">
                  24
                  <span>
                    SEP
                  </span>
                </div>

              </div>


              <div className="meeting-details">

                <div className="meeting-detail">

                  <span className="detail-icon">
                    ◷
                  </span>

                  <div>

                    <small>
                      TIME
                    </small>

                    <strong>
                      7:00 PM — 8:00 PM
                    </strong>

                  </div>

                </div>


                <div className="meeting-detail">

                  <span className="detail-icon">
                    ◉
                  </span>

                  <div>

                    <small>
                      SESSION
                    </small>

                    <strong>
                      REST API Practice
                    </strong>

                  </div>

                </div>


                <div className="meeting-detail">

                  <span className="detail-icon">
                    +
                  </span>

                  <div>

                    <small>
                      MEMBERS
                    </small>

                    <strong>
                      4 learners
                    </strong>

                  </div>

                </div>

              </div>


              <div className="meeting-timeline">

                <div className="timeline-label">
                  WEEKLY LEARNING RHYTHM
                </div>

                <div className="days">

                  <div>
                    <span>MON</span>
                    <i></i>
                  </div>

                  <div>
                    <span>TUE</span>
                    <i></i>
                  </div>

                  <div className="meeting-day">
                    <span>WED</span>
                    <i></i>
                  </div>

                  <div>
                    <span>THU</span>
                    <i></i>
                  </div>

                  <div className="meeting-day">
                    <span>FRI</span>
                    <i></i>
                  </div>

                  <div>
                    <span>SAT</span>
                    <i></i>
                  </div>

                  <div>
                    <span>SUN</span>
                    <i></i>
                  </div>

                </div>

              </div>


              <div className="meeting-footer">

                <span>
                  Next session in 2 days
                </span>

                <button>
                  View schedule →
                </button>

              </div>

            </div>

          )}


          {/* ================= NOTES ================= */}

          {activeStep === 2 && (

            <div className="visual-screen notes-screen">

              <div className="screen-top">

                <span>
                  LEARNING NOTES
                </span>

                <span className="screen-status">
                  ● SAVED
                </span>

              </div>


              <div className="notes-layout">

                <div className="notes-sidebar">

                  <small>
                    RECENT SESSIONS
                  </small>

                  <div className="note-session active">
                    <strong>
                      REST APIs
                    </strong>

                    <span>
                      Today
                    </span>
                  </div>

                  <div className="note-session">
                    <strong>
                      Spring Core
                    </strong>

                    <span>
                      22 Sep
                    </span>
                  </div>

                  <div className="note-session">
                    <strong>
                      Java Basics
                    </strong>

                    <span>
                      20 Sep
                    </span>
                  </div>

                </div>


                <div className="note-editor">

                  <div className="note-meta">

                    <span>
                      STUDY SESSION · TODAY
                    </span>

                    <span>
                      @yal + @sam_32
                    </span>

                  </div>


                  <h4>
                    REST API Practice
                  </h4>


                  <div className="note-content">

                    <div className="note-line heading">
                      What we covered
                    </div>

                    <div className="note-line">
                      ✓ GET, POST, PUT and DELETE
                    </div>

                    <div className="note-line">
                      ✓ Request & response structure
                    </div>

                    <div className="note-line">
                      ✓ HTTP status codes
                    </div>

                    <div className="note-line heading">
                      Next discussion
                    </div>

                    <div className="note-line">
                      → Authentication with JWT
                    </div>

                  </div>


                  <div className="note-footer">

                    <span>
                      5 key points captured
                    </span>

                    <button>
                      Review notes →
                    </button>

                  </div>

                </div>

              </div>

            </div>

          )}


          {/* ================= AI ASSISTANCE ================= */}

          {activeStep === 3 && (

            <div className="visual-screen assistant-screen">

              <div className="screen-top">

                <span>
                  PERSONAL LEARNING ASSISTANT
                </span>

                <span className="screen-status">
                  ● ANALYZING
                </span>

              </div>


              <div className="assistant-header">

                <div className="assistant-orb">
                  ✦
                </div>

                <div>

                  <small>
                    TODAY'S LEARNING INSIGHT
                  </small>

                  <h4>
                    Here's where you can improve.
                  </h4>

                </div>

              </div>


              <div className="assistant-grid">

                <div className="assistant-card focus">

                  <span>
                    FOCUS AREA
                  </span>

                  <strong>
                    Spring Security
                  </strong>

                  <p>
                    Your recent activity shows
                    fewer completed tasks here.
                  </p>

                  <div className="weak-bar">

                    <div></div>

                  </div>

                  <small>
                    Needs more practice
                  </small>

                </div>


                <div className="assistant-card">

                  <span>
                    PROGRESS
                  </span>

                  <strong>
                    68%
                  </strong>

                  <p>
                    Your roadmap is moving
                    steadily forward.
                  </p>

                  <div className="mini-progress">

                    <div></div>

                  </div>

                </div>

              </div>


              <div className="assistant-message">

                <div className="message-icon">
                  ✦
                </div>

                <div>

                  <small>
                    PERSONALIZED SUGGESTION
                  </small>

                  <strong>
                    Review dependency injection
                    before starting Spring Security.
                  </strong>

                </div>

                <span>
                  →
                </span>

              </div>


              <div className="assistant-actions">

                <button>
                  Practice this topic
                </button>

                <button>
                  Ask assistant
                </button>

              </div>

            </div>

          )}

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="exchange-bottom">

        <div className="bottom-number">
          {currentStep.number}
        </div>

        <p>

          A partner is only the beginning.

          <strong>
            {" "}The platform helps you keep learning,
            collaborating and improving.
          </strong>

        </p>

        <button onClick={nextStep}>

          Next feature

          <span>
            →
          </span>

        </button>

      </div>

    </section>
  );
};

export default SkillExchange;