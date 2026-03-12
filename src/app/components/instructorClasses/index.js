import { getAllClasses } from "@/lib/dal";
import Link from "next/link";
export default async function InstructorClasses({ userId }) {


    const classes = await getAllClasses();
        const instructorClasses = Array.isArray(classes)
            ? classes.filter((classData) =>
                    Number(classData.trainerId ?? classData.instructorId) === Number(userId)
                )
            : [];




return (

    <>

    <h1>Mine hold</h1>
    <Link href={"/opret/hold"}>+</Link>
    <ul className="p-5 mt-4 text-black">
{instructorClasses.map((classData) => (
    <li key={classData.id} className="p-5 mb-5 bg-secondary/70 rounded-lg text-primary">
      <h2>{classData.className}</h2>
      <p>{classData.classDay} kl. {classData.classTime}</p>
      <p>max. deltagere: {classData.maxParticipants} tilmeldte: {classData.users.length}</p>
<Link href={`/profile/deltagere/${classData.id}`}>vis deltagere</Link>

    </li>
))}
    </ul>
    
    </>
)


}