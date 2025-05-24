import React from 'react';
import 'react-day-picker/dist/style.css';
import "cally";
import Swal from 'sweetalert2';


const AddPlant = () => {

     const handleAddTree =(e)=>{
        e.preventDefault()
        const form =e.target;
        const formData =new FormData(form);
        const newTree =Object.fromEntries(formData.entries());
        console.log(newTree);

        fetch('https://mango-server-p4j3q1uz8-abdul-azizs-projects-9f179af7.vercel.app/trees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newTree)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                 Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added successfully",
                        showConfirmButton: false,
                        timer: 1500
                        });
                        form.reset()
            }
            
        })
     }

    return (
        <div className='p-8'>
           <div className='p-4 text-center text-green-800'>
            <h1 className='text-6xl font-bold'>Add Plants</h1>
           </div>
           <form onSubmit={handleAddTree}>
            <div className='p-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Image</label>
    <input type="text" name="image" className="input w-full" placeholder="Image url" />
    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Plant Name</label>
    <input type="text" name="name" className="input w-full" placeholder="plant name" />
    </fieldset>
                   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Categoty</label>
                     <input type="text" name='category' className="input w-full " placeholder="select category" list="browsers" />
<datalist id="browsers">
  <option value="succulent"></option>
  <option value="fern"></option>
  <option value="flowering"></option>
</datalist>
                   </fieldset>


    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Description</label>
    <input type="text"  name="description" className="input w-full" placeholder="Description" />
    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Care level</label>
                     <input type="text" name='care level' className="input w-full " placeholder="select care level" list="browsers" />
<datalist id="browsers">
  <option value="easy"></option>
  <option value="moderate"></option>
  <option value="difficult"></option>
</datalist>
                   </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Watering Frequency </label>
    <input type="text"  name="watering" className="input w-full" placeholder="watering frequency" />
    </fieldset>


                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">last watering date</label>
    <input type="date" name="data" className="input w-full" placeholder="plant name" />
    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Next Watering Date</label>
    <input type="date"  name="data" className="input w-full" placeholder="next watering" />
    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Health Status</label>
    <input type="text"  name="health" className="input w-full" placeholder="health" />
    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">User Email</label>
    <input type="text"  name="email" className="input w-full" placeholder="email" />
    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">User Name</label>
    <input type="text"  name="user" className="input w-full" placeholder="user name" />
    </fieldset>
                    
            </div>
            <input type="submit" value="Add Plant" className='btn w-full bg-green-800 text-white'/>
           </form>
        </div>
    );
};

export default AddPlant;