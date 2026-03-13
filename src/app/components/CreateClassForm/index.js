"use client"

import { useActionState } from "react";
import { createClass } from "@/lib/dal";


const initialState = {
    className: null,
    classDescription: null,
classDay: null,
    classTime: null,
    maxParticipants: null,
    trainerId: null,
    asset: null,
}


export default function CreateClassForm({userId, userFirstName, userLastName}) {
const [state, formAction, isPending] = useActionState(createClass, initialState)

    return (

      <div className="p-5 text-black">
        <h1 className="text-3xl text-bold mb-4 "> </h1>


<form action={formAction} enctype="multipart/form-data">
    <div className="formgroup flex flex-col">
<label htmlFor="name" className="sr-only">navn</label>
<input type="text" name="className" id="className"  placeholder="className" className="border border-gray-300 rounded px-3 py-2" />

    </div>
        <div className="formgroup flex flex-col">
<label htmlFor="description" className="sr-only">description</label>
<input type="description" name="classDescription" id="classDescription"  placeholder="description" className="border border-gray-300 rounded px-3 py-2" />

    </div>
        <div className="formgroup flex flex-col">
<label htmlFor="classDay" className="sr-only">class day</label>
<select name="classDay"  id="classDay" className="border border-gray-300 rounded px-3 py-2">

<option value="Monday"> Monday</option>
<option value="Tuesday"> Tuesday</option>
<option value="Wednesday"> Wednesday</option>
<option value="Thursday"> Thursday</option>
<option value="Friday"> Friday</option>
<option value="Saturday"> Saturday</option>
<option value="Sunday"> Sunday</option>
</select>
    </div>

        <div className="formgroup flex flex-col">
<label htmlFor="classTime" className="sr-only">tid</label>
<input type="text" name="classTime" id="classTime"   placeholder="tid" className="border border-gray-300 rounded px-3 py-2" />

    </div>


    
            <div className="formgroup flex flex-col">
<label htmlFor="admin" className="sr-only">admin</label>
<input type="text" id="trainerName" readOnly value={`${userFirstName} ${userLastName}`} placeholder="navn" className="border border-gray-300 rounded px-3 py-2" />

    </div>
 
        <div className="formgroup flex flex-col">
<label htmlFor="maxParticipants" className="sr-only">max antal</label>
<input type="text"  name="maxParticipants" id="maxParticipants"  placeholder="maxParticipants" className="border border-gray-300 rounded px-3 py-2" />

    </div>

         <div className="formgroup flex flex-col">
<label htmlFor="file" className="sr-only">billede</label>
<input type="file" id="file" name="file" accept="image/png, image/jpeg" placeholder="navn"  className="border border-gray-300 rounded px-3 py-2"  />

    </div>
<input type="hidden" name="trainerId" value={userId} />
    <button type="submit" className="bg-[rgb(241,196,14)] disabled:bg-gray-400 px-4 py-2 rounded-3xl  w-[65%] text-black "
        > send</button>
    
    
</form>
      </div>
    )
}