import React from "react";
import "../assets/styles/Popup.css";

interface PopupProps {
  title: string;
  message: string;
  buttonLabel?: string;
  emoji?: string;
  onContinue: () => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  message,
  buttonLabel = "Continue",
  emoji,
  onContinue,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        {emoji && <div className="popup-emoji">{emoji}</div>}
        <h2 className="popup-title">{title}</h2>
        <p className="popup-message">{message}</p>
        <button type="button" className="popup-button" onClick={onContinue}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Popup;