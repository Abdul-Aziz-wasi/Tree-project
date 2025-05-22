import React from 'react';

const TreesCard = ({tree}) => {
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
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>

    );
};

export default TreesCard;