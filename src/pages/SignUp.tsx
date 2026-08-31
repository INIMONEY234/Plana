import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import "../assets/styles/SignUp.css";

interface SignUpProps {
  onGoogle?: () => void;
  onApple?: () => void;
  onEmail?: () => void;
  avatarUrl?: string;
}

const SignUp: React.FC<SignUpProps> = ({ onGoogle, onApple, onEmail, avatarUrl }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSocialSignUp = (callback?: () => void) => {
    callback?.();
    setShowPopup(true);
  };

  const handleEmailSignUp = () => {
    if (onEmail) {
      onEmail();
    } else {
      navigate("/prepare");
    }
  };

  const handleContinue = () => {
    setShowPopup(false);
    navigate("/login");
  };

  return (
    <div className="signup-sheet">
      <div className="signup-handle" />

      <div className="signup-top">
        <button
          type="button"
          className="signup-close"
          aria-label="Close"
          onClick={() => navigate("/")}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {avatarUrl && (
          <div className="signup-avatar">
            <img src={avatarUrl} alt="" />
          </div>
        )}
      </div>

      <div className="signup-body">
        <h1 className="signup-title">Sign Up</h1>
        <p className="signup-subtitle">
          Pick a LinkUp. I'll drop a quick suggestion into the chat based on
          what the group's into.
        </p>

        <div className="signup-actions">
          <button
            type="button"
            className="signup-btn"
            onClick={() => handleSocialSignUp(onGoogle)}
          >
            <span className="signup-icon">
              <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.6 35.5 26.9 36 24 36c-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.6 39.6 16.2 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.6 5.4C39.9 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"
                />
              </svg>
            </span>
            <span className="signup-btn-label">Continue with Google</span>
          </button>

          <button
            type="button"
            className="signup-btn"
            onClick={() => handleSocialSignUp(onApple)}
          >
            <span className="signup-icon">
              <svg viewBox="0 0 384 512" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 8 184.5 8 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37.7 59 130.2 107.2 128.6 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-85 102.6-122.8-65.2-30.7-65.7-90-65.7-91.8zM256.4 84.6c26.9-32 24.4-61.1 23.6-71.6-23.7 1.4-51.1 16.4-66.8 34.9-17.3 19.6-27.5 43.9-25.3 71.3 25.9 2 49.5-11 68.5-34.6z"
                />
              </svg>
            </span>
            <span className="signup-btn-label">Continue with Apple</span>
          </button>
        </div>

        <button type="button" className="signup-email" onClick={handleEmailSignUp}>
          Sign up with Email
        </button>
      </div>

      {showPopup && (
        <Popup
          emoji="🎉"
          title="Congratulations!"
          message="You're officially a new user. Let's get you logged in."
          buttonLabel="Continue"
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default SignUp;