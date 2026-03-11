"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { IoMdList,  IoMdClose } from "react-icons/io";
import LogoutAction from "../LogoutForm/action";


export default function Header() {
  const dialogRef = useRef(null);
  const router = useRouter();
  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
   <div className="text-right">
      <button
        type="button"
        onClick={openDialog}
        className="rounded-md  px-4 py-2 text-4xl text-[rgb(158,158,158)] font-semibold text-right
"
      >
        <IoMdList />
      </button>
</div>


      <dialog ref={dialogRef} className="m-auto text-3xl font-medium  w-full h-auto rounded-xl  p-6 shadow-2xl backdrop:bg-black/50 ">
      <div className="flex flex-col justify-center">
      <div className="text-right ">
      <button
          type="button"
          onClick={closeDialog}
          className="rounded-md bg-white px-3 py-2 text-[rgb(158,158,158)] text-right "
        >
         <IoMdClose />
        </button>
        </div>
   <div className="mt-4 flex w-full flex-col items-center gap-6">
     
        <button
 onClick={() => router.push("/")}
title="Home"
 >

home
 </button>
  <button
 onClick={() => router.push("/classes")}
title="classes"
 >

  popular classes
 </button>
  <button
 onClick={() => router.push("/search")}
title="Home"
 >

  Search
 </button>
  <button
 onClick={() => router.push("/profile")}
title="Home"
 >

  profile
 </button>
  <form action={LogoutAction}>
    <button type="submit">
      logout
    </button>
  </form>

      </div>
    </div>
      </dialog>
    </>
  );
}