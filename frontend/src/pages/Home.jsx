import React from "react";
import "../pages/Home.css"
import Navbar from "../components/Navbar";
import SkillExchange from "../components/SkillExchange";
import Hero from "../components/Hero";
import SpecializedAI from "../components/SpecializedAI";
import StudyCollaboration from "../components/StudyCollaborataion";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <SkillExchange />
      <StudyCollaboration />
      <SpecializedAI />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;