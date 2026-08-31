import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/StartLink.css";

import globeImage from "../assets/images/globe.png";

interface StartLinkProps {
  redirectTo?: string;
  durationMs?: number;
}

const StartLink: React.FC<StartLinkProps> = ({
  redirectTo = "/interests",
  durationMs = 3000,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [navigate, redirectTo, durationMs]);

  return (
    <div className="startlink-screen">
      <div className="startlink-content">
        <h1 className="startlink-title">Setting things up</h1>
        <p className="startlink-subtitle">Personalizing your Plana</p>
      </div>

      <div className="startlink-spinner">
        <div className="startlink-globe">
          <img src={globeImage} alt="" />
        </div>
        <div className="startlink-needle">
          <span className="startlink-star">★</span>
        </div>
      </div>

      <div className="startlink-footer">
        <p className="startlink-status">Putting your profile together...</p>
      </div>
    </div>
  );
};

export default StartLink;