"use client"

import { useEffect } from "react"
import { animate, spring } from 'animejs';
import Link from "next/link";


export default function SplashScreen() {

useEffect(() => {
    
    animate('#absolutely', {
 scale: 1.25,
 
  ease: spring({
    bounce: 0.4,
    duration: 367
  })
});

  }, [])

  return (
        <section className="h-screen w-full bg-[url('/Hero.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center ">
    <div className="flex h-screen items-center justify-center ">
      <div id="absolutely">
<button className="border-8 rounded-3xl border-[rgb(241,196,14)] bg-[rgb(241,196,14)] text-black">

  <Link href="/">
                Start training
            </Link>
</button>
      </div>
    </div>
    </section>
  )
}