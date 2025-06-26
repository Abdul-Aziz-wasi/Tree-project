import React, { useContext, useEffect, useState } from 'react';

import { FaTrash, FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthContext';

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/trees_data?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyPlants(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this plant?')) {
      fetch(`http://localhost:3000/trees_data/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount > 0) {
            setMyPlants(prev => prev.filter(p => p._id !== id));
          }
        });
    }
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
                  <button className="text-green-600 hover:underline">
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
    </div>
  );
};

export default MyItems;
