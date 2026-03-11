

import { getAllClasses, getAllClassesById } from "@/lib/dal";
import ClassDetailsCard from "@/app/components/ClassDetailsCard";
import { cookies } from "next/headers";






export default async function ClassesDetailPage({ params }) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  const token = cookieStore.get("authToken")?.value;

  const { id } = await params;
  const classById = await getAllClassesById(id);
  const allClasses = await getAllClasses();

  const classFromList = Array.isArray(allClasses)
    ? allClasses.find((item) => String(item.id) === String(id))
    : null;

  const classthing = classById?.asset ? classById : classFromList;

  const isEnrolled = Array.isArray(classById?.users)
    ? classById.users.some((user) => user.id === Number(userId))
    : false;



console.log(classthing)







  return (
    <>
       <article className="flex flex-col-reverse">
  <ClassDetailsCard class={classthing} isEnrolled={isEnrolled} userId={userId} token={token} />
</article>
</>




    // <main className="min-h-screen flex flex-col items-center justify-center py-8">
    //   
    //     <JoinButton activityId={activity.id} />
    //   </div>
    //   <article className="bg-cyan-900 text-white w-full max-w-xs rounded-b-lg p-5 -mt-2 shadow-lg">
    //     <h1 className="text-lg font-bold mb-1">{activity.name}</h1>
    //     <p className="text-sm mb-2">{activity.minAge}+ år</p>
    //     <div
    //       className="text-sm leading-relaxed"
    //       dangerouslySetInnerHTML={{ __html: activity.description }}
    //     />
    //   </article>
    //   <Link href="/activities" className="mt-6 text-cyan-900 underline">
    //     Return to activities
    //   </Link>
    // </main>
  );
}