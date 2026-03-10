"use client"

import { useEffect } from "react"
import { animate, spring } from 'animejs';
import { useRouter } from "next/navigation";


export default function SplashScreen({ onStart }) {
const router = useRouter();

useEffect(() => {
    
    animate('#absolutely', {
      scale: [2.2, 1],
      opacity: [0, 1],
      ease: spring({
        bounce: 0.4,
        duration: 700
      })
    });

  }, [])

  const handleStartClick = () => {
    if (typeof onStart === "function") {
      onStart();
      return;
    }

    window.sessionStorage.setItem("hasStartedTraining", "true");
    router.push("/");
  }

  return (
        <section className="h-screen w-full bg-[url('/Hero.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center ">
    <div className="flex h-screen items-center justify-center ">
      <div id="absolutely">
<button onClick={handleStartClick} className="border-8 rounded-3xl border-[rgb(241,196,14)] bg-[rgb(241,196,14)] text-black">
                Start training
</button>
      </div>
    </div>
    </section>
  )
}