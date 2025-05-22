// import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import TreesTable from '../components/TreesTable';

const AllPlants = () => {
   const navigate =useNavigate()
     const trees =useLoaderData();
    //  const [tree, setTree] =useState()
    
    return (
        <div className='p-8'>
            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Wtering</th>
        <th>Health</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {
    trees.map(tree=>   <tr key={tree._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={tree.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{tree.name}</div>
              <div className="text-sm opacity-50">{tree.category}</div>
            </div>
          </div>
        </td>
        <td>
          {tree.watering}
          <br />
          
        </td>
        <td>{tree.health}</td>
        <th>
          <button onClick={()=>navigate(`/details/${tree._id}`)} className="btn btn-primary  btn-xs">View details</button>
        </th>
      </tr>)
   }
      
    
    </tbody>
        
    </table>
    </div>
                </div>
            </div>
    );
};

export default AllPlants;