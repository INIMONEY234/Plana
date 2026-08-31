import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/PrepareScreen.css";

interface Account {
  id: string;
  name: string;
  email: string;
  password?: string;
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

const avatarColors = ["#3fae54", "#8a3fd8", "#e0623a", "#2b7de0", "#d63f6f", "#c98f13"];

const PrepareScreen: React.FC<PrepareScreenProps> = ({
  continueTo = "recall",
  accounts: accountsProp = defaultAccounts,
  onSelectAccount,
  onAddAccount,
}) => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>(accountsProp);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSelectAccount = (account: Account) => {
    if (onSelectAccount) {
      onSelectAccount(account);
      return;
    }
    navigate("/login", {
      state: {
        email: account.email,
        password: account.password ?? "",
      },
    });
  };

  const handleAddAccountClick = () => {
    if (onAddAccount) {
      onAddAccount();
      return;
    }
    setShowAddForm(true);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setNewName("");
    setNewEmail("");
    setNewPassword("");
  };

  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) return;

    const initial = newName.trim().charAt(0).toUpperCase();
    const color = avatarColors[accounts.length % avatarColors.length];

    const newAccount: Account = {
      id: Date.now().toString(),
      name: newName.trim(),
      email: newEmail.trim(),
      password: newPassword,
      initial,
      color,
    };

    setAccounts((prev) => [...prev, newAccount]);
    handleCancelAdd();
  };

  return (
    <div className="prepare-sheet">
      <div className="prepare-logo">
        <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true">
          <path fill="#ffffff" d="M24 4L42 14V34L24 44L6 34V14L24 4Z" />
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
            onClick={() => handleSelectAccount(account)}
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

        {!showAddForm && (
          <button
            type="button"
            className="prepare-add"
            onClick={handleAddAccountClick}
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
        )}

        {showAddForm && (
          <form className="prepare-add-form" onSubmit={handleSaveAccount}>
            <input
              type="text"
              className="prepare-add-input"
              placeholder="Full name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              autoFocus
              required
            />
            <input
              type="email"
              className="prepare-add-input"
              placeholder="Email address"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="prepare-add-input"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <div className="prepare-add-form-actions">
              <button
                type="button"
                className="prepare-add-cancel"
                onClick={handleCancelAdd}
              >
                Cancel
              </button>
              <button type="submit" className="prepare-add-save">
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PrepareScreen;