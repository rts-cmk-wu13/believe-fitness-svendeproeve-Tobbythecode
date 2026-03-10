"use client"

import { useState } from "react"

import { useActionState } from "react"
import {loginUser } from "@/lib/user"

const initialState = {
    values : { username: "", password: "" },
errors: undefined
}


export default function LoginForm() {

const [state,formAction, isPending] = useActionState(loginUser, initialState)
console.log(state)  
  return (
    <>
    <div className="p-10">
<h1 className="text-left  text-8xl font-extrabold text-[rgb(241,196,14)] pb-10 ">Believe Fitness  </h1>
<p className="text-black text-2xl font-bold">-Train like a pro</p>
</div>
      <form action={formAction} noValidate className="flex flex-col items-center gap-4">
        <h1 className="text-left font-bold text-black">Log in with your credentials</h1>
        <div className="bg-white text-black p-4  rounded-3xl border-2 border-gray-500 w-full max-w-sm">

          <input className="text-gray-500"
            id="username"
            type="text"
            name="username"
      
          defaultValue={state.values.username}
          
          />
          {state.errors?.username && <p>{state.errors.username}</p>}
        </div>

        <div className="bg-white text-black p-4 rounded-3xl border-2 border-gray-500 w-full max-w-sm">

          <input className="text-gray-500 "
            id="password"
            type="password"
            name="password"
    
       defaultValue={state.values.password}
          />
              {state.errors?.password && <p>{state.errors.password}</p>}
        </div>

        {state.errors?.form && <p>{state.errors.form}</p>}

        <button
          type="submit"
          disabled={isPending}
          className="bg-[rgb(241,196,14)] disabled:bg-gray-400 px-4 py-2 rounded-3xl  w-[65%] text-black "
        >
          {isPending ? "Logger ind..." : "Log ind"}
        </button>
      </form>
    </>
  )
}