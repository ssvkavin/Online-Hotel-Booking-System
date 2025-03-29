import React from "react";
import "./LandingPage.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import bgImage from "../src/images/bg5.jpg"
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container" style={{backgroundImage:`url(${bgImage})`}}>
      <h1 className="company-name">RESSORT'S FOR YOU</h1>
      <button className="view-button" onClick={() => navigate("/home")}>
        View
      </button>
    </div>
  );
};

export default LandingPage;
