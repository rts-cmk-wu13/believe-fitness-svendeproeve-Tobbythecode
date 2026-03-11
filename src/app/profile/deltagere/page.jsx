import { getAllClassesById } from "@/lib/dal"
import Link from "next/link"
export default async function RosterPage( params ){


const { id } = await params


const classData = await  getAllClassesById(id)

return(

    <>
    <Link href={"/profile"}>tilbage til profile</Link>
<ul>

    {classData.users.map(user => (

<li key={user.id}> {user.userFirstName} {user.userLastName}</li>


    ))}
</ul>

</>
)
}