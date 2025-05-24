import React from 'react';
import Swal from 'sweetalert2';

const Plant = ({tree}) => {
    const {_id,image,email,name,health}=tree;

    const handleDelete =(_id)=>{
        console.log(_id)
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5173/myplants`,{
        method:'Delete'
    }).then(res=>res.json()).then(data=>console.log(data))
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

    }
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
      <div onClick={()=>{handleDelete(_id)}} className="badge badge-outline">Delet</div>
      <div  className="badge badge-outline">Edit</div>
    </div>
  </div>
</div>
    );
};

export default Plant;