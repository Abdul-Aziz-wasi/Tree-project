import React from 'react';
import "cally";


const AddPlant = () => {
     const handleAddTree =(e)=>{
        e.preventDefault()
        const form =e.target;
        const formData =new FormData(form);
        const newTree =Object.fromEntries(formData.entries());
        console.log(newTree);

        fetch('http://localhost:3000/trees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newTree)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
     }

    return (
        <div className='p-8'>
           <div className='p-4 text-center text-green-600'>
            <h1 className='text-6xl font-bold'>Add plants</h1>
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
    <label className="label">Last Watered Date </label>
    {/*
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
*/}

{/* <button popoverTarget="cally-popover1" className="input input-border" id="cally1" style="anchorName:--cally1">
  Pick a date
</button>
<div popover id="cally-popover1" className="dropdown bg-base-100 rounded-box shadow-lg" style="positionAnchor:--cally1">
  <calendar-date class="cally" onchange={document.getElementById('cally1').innerText = this.value}>
    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
    <calendar-month></calendar-month>
  </calendar-date>
</div> */}
    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Next Watering Date</label>
    <input type="text"  name="next" className="input w-full" placeholder="next watering" />
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
            <input type="submit" value="Add tree" className='btn w-full'/>
           </form>
        </div>
    );
};

export default AddPlant;