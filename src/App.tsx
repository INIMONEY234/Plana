import { useEffect, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import StartScreen from "./pages/StartScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showStartScreen, setShowStartScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowStartScreen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Show splash screen for 3 seconds
  if (showSplash) {
    return <SplashScreen />;
  }

  // Show start screen after splash
  if (showStartScreen) {
    return <StartScreen />;
  }

  // Main application
  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Welcome to Plana</h1>
    </div>
  );
}

export default App;