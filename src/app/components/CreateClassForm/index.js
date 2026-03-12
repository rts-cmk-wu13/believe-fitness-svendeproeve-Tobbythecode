"use client"

import { useActionState } from "react";
import { createClass } from "@/lib/dal";


const initialState = {
    name: null,
    description: null,
    weekday: null,
    time: null,
    maxParticipants: null,
    asset: null,
}


export default function CreateClassForm({userId, userFirstName, userLastName}) {
const [state, formAction, isPending] = useActionState(createClass, initialState)

    return (

      <div className="p-5 text-black">
        <h1 className="text-3xl text-bold mb-4 "> </h1>


<form action={formAction}>
    <div className="formgroup flex flex-col">
<label htmlFor="name" className="sr-only">navn</label>
<input type="text" name="name" id="className"  placeholder="className" className="border border-gray-300 rounded px-3 py-2" />

    </div>
        <div className="formgroup flex flex-col">
<label htmlFor="description" className="sr-only">description</label>
<input type="description" name="description" id="classDescription"  placeholder="description" className="border border-gray-300 rounded px-3 py-2" />

    </div>
        <div className="formgroup flex flex-col">
<label htmlFor="weekday" className="sr-only">class day</label>
<select name="weekday"  id="weekday" className="border border-gray-300 rounded px-3 py-2">

<option value="mandag"> mandag</option>
<option value="tirsdag"> tirsdag</option>
<option value="onsdag"> onsdag</option>
<option value="torsdag"> torsdag</option>
<option value="fredag"> fredag</option>
<option value="lørdag"> lørdag</option>
<option value="søndag"> søndag</option>
</select>
    </div>

        <div className="formgroup flex flex-col">
<label htmlFor="time" className="sr-only">tid</label>
<input type="text" name="time" id="classTime"   placeholder="tid" className="border border-gray-300 rounded px-3 py-2" />

    </div>


    
            <div className="formgroup flex flex-col">
<label htmlFor="admin" className="sr-only">admin</label>
<input type="text" name="admin" id="admin "readOnly value={`${userFirstName}} ${userLastName}`} placeholder="navn" className="border border-gray-300 rounded px-3 py-2" />

    </div>
 
        <div className="formgroup flex flex-col">
<label htmlFor="maxParticipants" className="sr-only">max antal</label>
<input type="text"  name=" maxParticipants" id="maxParticipants"  placeholder="navn" className="border border-gray-300 rounded px-3 py-2" />

    </div>

         <div className="formgroup flex flex-col">
<label htmlFor="asset" className="sr-only">billede</label>
<input type="file" id="asset" name="asset" placeholder="navn" className="border border-gray-300 rounded px-3 py-2" />

    </div>

    <button type="submit" className="bg-[rgb(241,196,14)] disabled:bg-gray-400 px-4 py-2 rounded-3xl  w-[65%] text-black "
        > send</button>
    
    
</form>
      </div>
    )
}