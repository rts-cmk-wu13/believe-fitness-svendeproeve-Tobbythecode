"use server"

export async function getNews(){


    const response = await fetch(`http://localhost:4000/api/v1/news`)
        if (!response.ok) {
throw new Error({ message: "noget gik galt"})
        }
        return await response.json();
    }