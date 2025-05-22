import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const {id}=useParams()
    const trees =useLoaderData()
    const treeData =trees.find(tree=>tree._id==id)
    console.log(treeData)
    const {image,name,category,health} =treeData;
    return (
        <div className="card bg-base-100 w-10/12 mx-auto  shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Category: {category}</p>
    
      <p>Health: {health}</p>
    
  </div>
</div>
    );
};

export default Details;