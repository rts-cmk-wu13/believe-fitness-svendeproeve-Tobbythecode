import { cookies } from "next/headers";
 import Link from "next/link";
import CreateClassForm from "../components/CreateClassForm";
import { getUserById } from "@/lib/user";

export default async function CreateTeam(){


    const cookieStore = await cookies()
    const role = cookieStore.get("role").value
    const userId = cookieStore.get("userId").value
    const user = await getUserById()

    const authToken = cookieStore.get("authToken").value 


    return role !== "admin" ? (
<>
        <p className="text-red-500">du har ikke adgang til at oprette hold</p>
        <Link href={"/classes"}>tilbage til Aktiviteter</Link>
   </>
    ) : (
<>
        <p>du er admin</p>
        <CreateClassForm userId={userId} userFirstName={user.userFirstName} userLastName={user.userLastName}  />
    </>
    )     
  
}