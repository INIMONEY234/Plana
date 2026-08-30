import { useEffect, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import StartScreen from "./pages/StartScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return <StartScreen />;
}

export default App;