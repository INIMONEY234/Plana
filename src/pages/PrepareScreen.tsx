import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/PrepareScreen.css";

interface Account {
  id: string;
  name: string;
  email: string;
  initial: string;
  color: string;
}

interface PrepareScreenProps {
  appName?: string;
  continueTo?: string;
  accounts?: Account[];
  onSelectAccount?: (account: Account) => void;
  onAddAccount?: () => void;
}

const defaultAccounts: Account[] = [
  {
    id: "1",
    name: "Tonia Anyaralu",
    email: "tonia.anyaralu@stu.cu.edu.ng",
    initial: "T",
    color: "#3fae54",
  },
  {
    id: "2",
    name: "Michael Anyaralu",
    email: "michael.anyaralu@stu.cu.edu.ng",
    initial: "M",
    color: "#8a3fd8",
  },
];

const PrepareScreen: React.FC<PrepareScreenProps> = ({
  continueTo = "recall",
  accounts = defaultAccounts,
  onSelectAccount,
  onAddAccount,
}) => {
  const navigate = useNavigate();

  return (
    <div className="prepare-sheet">
      <div className="prepare-logo">
        <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true">
          <path
            fill="#ffffff"
            d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
          />
        </svg>
        <span className="prepare-logo-letter">P</span>
      </div>

      <h1 className="prepare-title">Preparing</h1>
      <p className="prepare-subtitle">to continue to {continueTo}</p>

      <div className="prepare-accounts">
        {accounts.map((account) => (
          <button
            key={account.id}
            type="button"
            className="prepare-account"
            onClick={() => onSelectAccount?.(account)}
          >
            <span
              className="prepare-avatar"
              style={{ background: account.color }}
            >
              {account.initial}
            </span>
            <span className="prepare-account-info">
              <span className="prepare-account-name">{account.name}</span>
              <span className="prepare-account-email">{account.email}</span>
            </span>
          </button>
        ))}

        <button
          type="button"
          className="prepare-add"
          onClick={onAddAccount ?? (() => navigate("/login"))}
        >
          <span className="prepare-add-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M9 12a4 4 0 100-8 4 4 0 000 8zM2 21c0-3.5 3.5-6 7-6s7 2.5 7 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M18 8v6M15 11h6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="prepare-add-label">Add another account</span>
        </button>
      </div>
    </div>
  );
};

export default PrepareScreen;