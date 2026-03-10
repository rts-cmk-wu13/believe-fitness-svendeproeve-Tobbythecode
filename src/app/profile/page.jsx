import { cookies } from "next/headers";
import Link from "next/link"
import Image from "next/image";



export default async function Profilepage() {
    const cookieStore = await cookies()
const userId = cookieStore.get("userId")?.value
const token = cookieStore.get("authToken")?.value

console.log("her er min userId", userId)
console.log("her er min token", token)
const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
     cache: "no-store"
  })
console.log (res)
  const user = await res.json()
    console.log(user)




    return (


      <>
      <div className="bg-white w-full flex flex-col items-center py-6 shadow">
         
               <h2 className="mt-2 text-xl font-bold text-[#003645]">
                     {user.userFirstName} {user.userLastName}
                 </h2>



        </div>
  
      </>
    )
}



//     const activities = Array.isArray(user.activities) ? user.activities : [];
//     const sectionTitle =
//         user.role === "instruktør" || user.role === "instructor
//             </div>
//             <div className="bg-white w-full flex flex-col items-center py-6 shadow">
//                 <Image src="/user.svg" alt="User profile" width={80} height={80} priority />
//                 <h2 className="mt-2 text-xl font-bold text-[#003645]">
//                     {user.firstname} {user.lastname}
//                 </h2>
//                 <p className="text-[#003645] text-sm">{user.role}</p>
//             </div>
//             <div className="w-full bg-[#003645] text-white px-4 py-2 flex items-center justify-between mt-4">
//                 <span className="font-semibold">{sectionTitle}</span>
//             </div>
//           {user.role !== "instruktør" && user.role !== "instructor" && (
//   <ul className="flex flex-wrap gap-4">
//     {activities.map(activity => (
//       <li key={activity.id}>
//         <div className="bg-[#cfd8dc] rounded-xl p-6 max-w-xs shadow-md border-4 border-[#003645]">
//           <div className="mb-4">
//             <div className="text-2xl font-bold text-[#003645]">{activity.name}</div>
//             <div className="text-[#003645] text-lg mt-2">
//               {activity.weekday} kl. {activity.time}
//             </div>
//           </div>
//           <button
//             className="bg-[#003645] text-white rounded-lg px-8 py-2 shadow-md font-medium text-lg transition "
//           >
//             Vis hold
//           </button>
//         </div>
//       </li>
//     ))}
//   </ul>
// )}
//         </>
//     );
// }