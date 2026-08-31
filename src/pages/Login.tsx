import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";

interface LoginProps {
  onGoogle?: () => void;
  onForgotPassword?: () => void;
  onLogin?: (email: string, password: string) => void;
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const Login: React.FC<LoginProps> = ({ onGoogle, onForgotPassword, onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    onLogin?.(email, password);
    navigate("/start-link");
  };

  const handleGoogle = () => {
    onGoogle?.();
    navigate("/prepare");
  };

  return (
    <div className="login-sheet">

      <button
        type="button"
        className="login-close"
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

      <div className="login-body">
        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">
          Log in to keep planning with your friends.
        </p>

        <div className="login-eyebrow">NEEDS A VENUE</div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            className="login-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <button
          type="button"
          className="login-forgot"
          onClick={onForgotPassword}
        >
          Forgot Password ?
        </button>

        <button type="button" className="login-google" onClick={handleGoogle}>
          <span className="login-google-icon">
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
          <span className="login-google-label">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;