import React from 'react';

const Plant = ({tree}) => {
    const {image,email,name,health}=tree
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{health}</div>
    </h2>
    <p>{email}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Delet</div>
      <div className="badge badge-outline">Edit</div>
    </div>
  </div>
</div>
    );
};

export default Plant;