"use client"
import Image from "next/image";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";

export default function ClassDetailsCard({ class: classData, isEnrolled, userId, token }) {
    const router = useRouter()

const handleLeave = async () => {
await fetch(`http://localhost:4000/api/v1/users/${userId}/classes/${classData.id}`,{
method: "DELETE",
headers: {
  Authorization: `Bearer ${token}`
}

})
router.refresh()
}

const handleJoin = async () => {
await fetch(`http://localhost:4000/api/v1/users/2/classes/${classData.id}`,{
method: "POST",
headers: {
  Authorization: `Bearer ${token}`
}

})
router.refresh()
}



  if (!classData) {
    return <p className="text-black">Class not found.</p>;
  }




   
    return  (   
        <> 

<div className="relative w-full h-full rounded-t-lg overflow-hidden  text-black">
      {classData.asset?.url ? (
        <img
          src={classData.asset.url}
          alt={classData.className}
          className="w-full h-full object-cover"
        />
      ) : null}

      { isEnrolled
?    <button onClick={handleLeave} className="absolute bottom-5 right-5 py-3 px-10 bg-primary- rounded-xl">forlad</button>
:         <button onClick={handleJoin} className="absolute bottom-5 right-5 py-3 px-10 bg-primary- rounded-xl">Tilmed</button>
}

      <p >{classData.classDay} - {classData.classTime}</p>

      <p  >{classData.classDescription}</p>
        </div>

        
  
        </>

  )}

