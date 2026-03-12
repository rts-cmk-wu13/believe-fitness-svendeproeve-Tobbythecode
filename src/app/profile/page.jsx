
import { getUserById } from "@/lib/user";
import { cookies } from "next/headers";
import Link from "next/link";
import InstructorClasses from "../components/instructorClasses";



export default async function Profilepage() {
    const cookieStore = await cookies()
const userId = cookieStore.get("userId")
const user = await getUserById(userId.value)
const isInstructor = ["admin", "instructor", "instruktør"].includes(
  String(user.role).toLowerCase()
)


  console.log(user)
 



    return (


      <>
      <div className="bg-white w-full flex flex-col items-center py-5">
         
               <h2 className="mt-2 text-xl font-bold text-[#003645]">
                     {user.userFirstName} {user.userLastName}
                 </h2>
                 <p className="text-[#003645] text-sm">{isInstructor ? "Instruktør" : "Medlem"}</p>
                 <p className="mt-1 text-sm text-[#003645]">Mine hold</p>
        </div>

<section className="p-5   content-center ">
  <div className="gap-6    ">
    {isInstructor ? (
      <InstructorClasses userId={userId.value} />
    ) : (
      (Array.isArray(user.classes) ? user.classes : []).map(classData => ( 
      <article key={classData.id} className="text-black p-5" > 
 <div className="rounded-xl p-5  border-black border text-black">
  <div className="mb-6">
    <h3 className="font-bold text-2xl">{classData.className}</h3>
    <div className="text-lg mt-2">
      {classData.classDay} kl. {classData.classTime}
    </div>
  </div>
<div className="flex justify-between ">
  <Link
    href={`/classes/${classData.id}`}
    className="rounded-lg shadow-md font-medium text-lg px-6 py-3 bg-[rgb(241,196,14)]"
  >
    
    Show class
  </Link>
  
  <Link
    href={`/classes/${classData.id}`}
    className="rounded-lg shadow-md font-medium text-lg px-6 py-3 bg-[rgb(241,196,14)]"
  >
    
    leave
  </Link></div>
</div>
      </article>
    ))
    )}
  </div>
</section>
  
      </>
    )
}



