"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./components/SplashScreen";
import Header  from "./components/Header/header.jsx"
export default function ClientLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const pathname = usePathname();

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
{pathname !== "/login" && <Header />} 
      <div className="pb-20">{children}</div>
   
</>
  );
}