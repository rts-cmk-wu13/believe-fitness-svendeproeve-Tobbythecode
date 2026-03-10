"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

export default function ClientLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasStarted = window.sessionStorage.getItem("hasStartedTraining") === "true";
    if (hasStarted) {
      setShowSplash(false);
    }
  }, []);

  const handleStart = () => {
    window.sessionStorage.setItem("hasStartedTraining", "true");
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onStart={handleStart} />;
  }

  return (
<>
      <div className="pb-20">{children}</div>
   
</>
  );
}