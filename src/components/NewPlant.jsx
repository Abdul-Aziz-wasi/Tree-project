import React from 'react';
import { useLoaderData } from 'react-router';
import TreesCard from './TreesCard';

const NewPlant = () => {
    const trees =useLoaderData()
    console.log(trees)
    return (

       <div className='mt-8 p-8 '>
         <h3 className='text-2xl font-bold text-center text-green-500'>New Plants</h3>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 '>
            

            {
                trees.map(tree=> <TreesCard key={tree._id} tree={tree}></TreesCard>)
            }

            
        </div>
       </div>
    );
};

export default NewPlant;