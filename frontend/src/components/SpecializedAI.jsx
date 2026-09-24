import React from "react";
import "../style/SpecializedAI.css";

const SpecializedAI = () => {
  return (
    <section className="specialized-ai" id="ai">

      <div className="specialized-ai-inner">

        {/* LEFT CONTENT */}

        <div className="specialized-ai-copy">

          <span className="ai-label">
            YOUR AI LEARNING PARTNER
          </span>

          <h2>
             <span> Meet Lumi.</span>
          </h2>

          <p>
            Your personal AI that helps you learn,
            practice and improve — one conversation
            at a time.
          </p>

          <div className="ai-mini-features">
            <span>Practice</span>
            <span>Mock questions</span>
            <span>Personal guidance</span>
          </div>

        </div>


        {/* RIGHT INTERACTION */}

        <div className="ai-demo">

          {/* AI CHARACTER */}

          <div className="lumi">

            <div className="lumi-glow"></div>

            <div className="lumi-hair"></div>

            <div className="lumi-face">

              <span className="lumi-eye left"></span>
              <span className="lumi-eye right"></span>

              <span className="lumi-mouth"></span>

              <span className="lumi-cheek left"></span>
              <span className="lumi-cheek right"></span>

            </div>

            <div className="lumi-body">
              ✦
            </div>

          </div>


          {/* CHAT */}

          <div className="chat user-chat">

            <span>@nova_27</span>

            <p>
              I'm struggling with
              Spring Security.
            </p>

          </div>


          <div className="chat lumi-chat">

            <div className="chat-icon">
              ✦
            </div>

            <div>

              <span>Lumi</span>

              <p>
                I noticed that.
                Let's practice it together.
              </p>

              <button>
                Start practice
                <b>→</b>
              </button>

            </div>

          </div>


          {/* FLOATING TAGS */}

          <div className="ai-tag tag-one">
            PRACTICE
          </div>

          <div className="ai-tag tag-two">
            MOCK
          </div>

          <div className="ai-tag tag-three">
            ✦
          </div>

        </div>

      </div>

    </section>
  );
};

export default SpecializedAI;