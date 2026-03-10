import { getAllClasses } from "@/lib/dal";
import ClassCard from "../components/ClassCard/ClassCard.jsx";


export default async function ClassesPage({searchParams}) {

const {query} = await searchParams

    const classes = await getAllClasses()
    console.log(classes);

    const filteredClasses = query 
    ? classes.filter(classes => classes.className.toLowerCase().includes(query.toLowerCase()) || classes.classDay.toLowerCase().includes(query.toLowerCase()))
    : classes;
    console.log(filteredClasses);
    

    if(classes.success === false){
        return (
            <main>
                
                <h1>oh shit somethings not right</h1>
                <p>{classes.message}</p>
            </main>
        )
    }

    return (
        <>

        <main>
            
            <h1 className="mb-4 text-left text-2xl font-bold">Aktiviteter</h1>
            <section className="columns-1">
            {filteredClasses.map(classItem => (
                <ClassCard class={classItem} key={classItem.id} />
            ))}
            </section>
        </main>
</>
    )


}