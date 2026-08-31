import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import StartScreen from "./pages/StartScreen";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import EmailSignUp from "./pages/EmailSignUp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/startscreen" element={<Navigate to="/" replace />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signup/email" element={<EmailSignUpPage />} />  */}
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;