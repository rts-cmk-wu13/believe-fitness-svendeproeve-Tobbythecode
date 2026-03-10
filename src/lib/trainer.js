"use server"


export async function getTrainers(){

    const response = await fetch(`http://localhost:4000/api/v1/trainers`)

            if (!response.ok) {
throw new Error({ message: "noget gik galt"})
        }
        return await response.json();
    }

export async function getTrainerById(id) {

        const response = await fetch(`http://localhost:4000/api/v1/trainers/${id}`);
        if (!response.ok) {
            console.error("getTrainerById error:", response.status, response.statusText);
            return null;
        }

                return await response.json();
    }