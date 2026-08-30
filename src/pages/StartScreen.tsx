import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo1 from "../assets/images/logo02.png";

import "../assets/styles/StartScreen.css";

import image1 from "../assets/images/image1.jpg"; 
import image2 from "../assets/images/image2.jpg"; 
import image3 from "../assets/images/image3.jpg"; 

import Aicon from "../assets/images/Aicon.png";

const StartScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="start-screen">
      {/* Background decorative circles */}
      <div className="circle circle-one" aria-hidden="true"></div>
      <div className="circle circle-two" aria-hidden="true"></div>
      <div className="circle circle-three" aria-hidden="true"></div>

      {/* Small logo */}
      <div className="app-logo">
        <img src={logo1} alt="App Logo" />
      </div>

      {/* Event Cards */}
      <div className="event-wrapper">
        {/* Left Card */}
        <div className="event-card event-card-left">
          <img
            src={image2}
            alt="Hangout"
          />
        </div>

        {/* Center Card */}
        <div className="event-card event-card-main">
          <img
            src={image3}
            alt="Hangout event"
          />

          <div className="event-overlay">
            <div className="event-location">Lekki, Lagos</div>
            <div className="event-day">Sat</div>

            <div className="event-title">Hangout</div>
            <div className="event-date">Aug. 15</div>
          </div>
        </div>

        {/* Right Card */}
        <div className="event-card event-card-right">
          <img
            src={image1}
            alt="People hanging out"
          />
        </div>
      </div>

      {/* Content */}
      <div className="splash-content">
        <div className="eyebrow">
          <span className="eyebrow-icon">
            <img src={Aicon} alt="A icon" />
          </span>
          PLANNER APP OF THE YEAR · 2026
        </div>

        <h1>
          Vote, plan, and
          <br />
          hangout — <span>together.</span>
        </h1>

        <p>
          See who’s free, vote on where, and lock it in,
          <br />
          all in one place.
        </p>

        <button className="signup-button" onClick={() => navigate("/signup")}>
          Sign Up
        </button>

        <div className="login-text">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;