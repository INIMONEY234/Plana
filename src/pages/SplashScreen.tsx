import React from "react";

import logo from "../assets/images/logo01.png";

import "../assets/styles/SplashScreen.css";

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <img src={logo} alt="Plana logo" />
      </div>
    </div>
  );
};

export default SplashScreen;