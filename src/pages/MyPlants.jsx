import React from 'react';
import { useLoaderData } from 'react-router';

const MyPlants = () => {
    const trees =useLoaderData()
    console.log(trees)
    return (
        <div>
            My plants
        </div>
    );
};

export default MyPlants;