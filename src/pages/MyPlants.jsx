import React from 'react';
import { useLoaderData } from 'react-router';
import Plant from '../components/Plant';

const MyPlants = () => {
    const trees =useLoaderData()
    console.log(trees)
    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    trees.map(tree=> <Plant key={tree._id} tree={tree}></Plant>)
                }
            </div>
        </div>
    );
};

export default MyPlants;