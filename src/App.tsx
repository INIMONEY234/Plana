import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import PrepareScreen from "./pages/PrepareScreen";
import StartLink from "./pages/StartLink";
import InterestsScreen from "./pages/InterestsScreen";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import EmailSignUp from "./pages/EmailSignUp";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Start */}
        <Route path="/" element={<StartScreen />} />
        {/* Prepare Screen */}
        <Route path="/prepare" element={<PrepareScreen />} />
        {/* Start Link */}
        <Route path="/start-link" element={<StartLink />} />
        {/* Interests */}
        <Route path="/interests" element={<InterestsScreen />} />
        {/* Redirect old StartScreen URL */}
        <Route path="/StartScreen" element={<Navigate to="/" replace />} />
        {/* Authentication */}
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/signup/email" element={<EmailSignUp />} /> */}
        <Route path="/Login" element={<Login />} />
        {/* Catch unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;