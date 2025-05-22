import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';


const TreesCard = ({tree}) => {
  const navigate =useNavigate()
       const trees =useLoaderData();
       console.log(trees)
 
    const {image,health ,name,category}=tree
    return (
      <div className="card card-side bg-base-100 shadow-sm border-2 border-green-800 p-4">
  <figure>
    <img className='rounded-2xl'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body pt-12 h-full ">
    <div className='gap-4 font-bold'>
        <p className="">Name : {name}</p>
    <p>Category:{category}</p>
    <p>Health : {health}</p>
    </div>
    <div className="pt-12 justify-end">
      <button onClick={()=>navigate(`/details/${tree._id}`)}   className="btn btn-primary ">Details</button>
    </div>
  </div>
</div>

    );
};

export default TreesCard;