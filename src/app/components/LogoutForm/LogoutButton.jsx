"use server"

import Link from "next/link"
import LogoutAction from "./action"
import {cookies} from "next/headers"

export default async function LogOutButton(){


    const cookieStore = await cookies()
    const isUserLoggedIn = cookieStore.has("authToken")


    return (


        <form action={LogoutAction}>
        {

isUserLoggedIn
? <button type="submit"> logud</button>
: <Link href="/login"> login</Link>



        }
        
        
        </form>
    )
}