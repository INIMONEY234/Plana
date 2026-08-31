import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/InterestsScreen.css";
import logo3 from "../assets/images/logo3.png";

interface InterestsScreenProps {
  onSkip?: () => void;
  onContinue?: (selected: string[]) => void;
}

const interestRows: string[][] = [
  ["Pizza nights", "Beach days", "Hiking"],
  ["Game night", "Coffee runs"],
  ["Hiking", "Movie nights", "Football"],
  ["Board games", "Photo walks"],
  ["Brunch", "Road trips"],
  ["Meeting new people"],
];

const InterestsScreen: React.FC<InterestsScreenProps> = ({
  onSkip,
  onContinue,
}) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleInterest = (interest: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(interest)) {
        next.delete(interest);
      } else {
        next.add(interest);
      }
      return next;
    });
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
      return;
    }
    navigate("/");
  };

  const handleContinue = () => {
    onContinue?.(Array.from(selected));
  };

  return (
    <div className="interests-sheet">
      <div className="interests-header">
        <span className="interests-logo">
          <img src={logo3} alt="" className="interests-logo-img" />
        </span>
        <button
          type="button"
          className="interests-skip"
          onClick={handleSkip}
        >
          Skip
        </button>
      </div>

      <div className="interests-body">
        <h1 className="interests-title">What are you into ?</h1>
        <p className="interests-subtitle">
          Pick a few; we&apos;ll use this to suggest LinkUps you&apos;ll
          actually want to go to.
        </p>

        <div className="interests-list">
          {interestRows.map((row, rowIndex) => (
            <div className="interests-row" key={rowIndex}>
              {row.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  className={
                    "interests-chip" +
                    (selected.has(interest) ? " interests-chip--active" : "")
                  }
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="interests-footer">
        <button
          type="button"
          className="interests-continue"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default InterestsScreen;