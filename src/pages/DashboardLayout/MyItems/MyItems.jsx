import React, { useContext, useEffect, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthContext';
import EditModal from '../../../components/EditModal/EditModal';
import Swal from 'sweetalert2';


const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [editingPlant, setEditingPlant] = useState(null); 

  const fetchData = () => {
    if (user?.email) {
      fetch(`https://mango-server-eight.vercel.app/trees_data?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyPlants(data));
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);



const handleDelete = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this plant!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://mango-server-eight.vercel.app/trees_data/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount > 0) {
            setMyPlants(prev => prev.filter(p => p._id !== id));
            Swal.fire('Deleted!', 'The plant has been deleted.', 'success');
          }
        });
    }
  });
};


  return (
    <div>
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌿 My Plants</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table w-full">
          <thead className="bg-green-100 text-green-700">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Watering</th>
              <th>Care Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myPlants.map(plant => (
              <tr key={plant._id} className='font-semibold'>
                <td>
                  <img src={plant.image} alt={plant.plantName} className="w-16 h-16 object-cover rounded" />
                </td>
                <td>{plant.plantName}</td>
                <td>{plant.category}</td>
                <td>{plant.wateringFrequency}</td>
                <td>{plant.careLevel}</td>
                <td className="space-x-2">
                  <button onClick={() => setEditingPlant(plant)} className="text-green-600 hover:underline">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(plant._id)} className="text-red-500 hover:underline">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {myPlants.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">No plants found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    
      {editingPlant && (
        <EditModal
          plant={editingPlant}
          onClose={() => setEditingPlant(null)}
          onUpdate={fetchData}
        />
      )}
    </div>
  );
};

export default MyItems;
