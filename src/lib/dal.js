"use server"
import { cookies } from "next/headers"

export async function getNews(){


    const response = await fetch(`http://localhost:4000/api/v1/news`)
        if (!response.ok) {
throw new Error({ message: "noget gik galt"})
        }
        return await response.json();
    }

    export async function getAssets(){


    const response = await fetch(`http://localhost:4000/api/v1/assets`)
        if (!response.ok) {
throw new Error({ message: "noget gik galt"})
        }
        return await response.json();
    }


    export async function getAllClasses() {
    try {
            const response = await fetch(`http://localhost:4000/api/v1/classes/`, {
                cache: "no-store"
            });
        if (!response.ok) {
throw new Error({ message: "noget gik galt"})
        }
        return await response.json();
    } catch (error) {
        console.error("getAllClasses fetch failed:", error);
        return { success: false, message: error.message };
    }
}

export async function getAllClassesById(id) {
  
        const response = await fetch(`http://localhost:4000/api/v1/classes/${id}`, {
            cache: "no-store"
        });
        if (!response.ok) {
            console.error("getAllClassesById error:", response.status, response.statusText);
            return null;
        }
        return await response.json();
    } 



    export async function createClass(prevState, formData) {

        const cookieStore = await cookies()
        const authToken = cookieStore.get("authToken").value

        
console.log(Object.fromEntries(formData))

const res = await fetch("http://localhost:4000/api/v1/classes/", {  
    method: "POST",
    headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data"
    },
    body: formData
})


    }
