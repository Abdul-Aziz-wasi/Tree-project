import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`https://mango-server-eight.vercel.app/trees_data`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p._id === id);
        setPlant(found);
      });
  }, [id]);

  if (!plant) return (
    <div className="flex justify-center items-center h-64">
      <span className="loading loading-dots loading-lg text-green-600"></span>
    </div>
  );

  return (
    <section className="w-11/12 max-w-6xl mx-auto my-12 p-6 bg-white dark:bg-base-200 rounded-xl shadow-lg transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-96 object-contain rounded-xl shadow-md hover:scale-105 transition duration-300"
        />
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-green-700">{plant.plantName}</h2>
          <p className="text-gray-600 dark:text-gray-300">{plant.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <p><span className="font-semibold text-green-600">🌿 Category:</span> {plant.category}</p>
            <p><span className="font-semibold text-green-600">💧 Care Level:</span> {plant.careLevel}</p>
            <p><span className="font-semibold text-green-600">🕒 Watering:</span> {plant.wateringFrequency}</p>
            <p><span className="font-semibold text-green-600">❤️ Health:</span> {plant.healthStatus}</p>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Added by: <span className="font-medium">{plant.userName}</span> ({plant.userEmail})
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
