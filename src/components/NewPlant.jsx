import React, { useEffect, useState } from 'react';

const NewPlant = () => {
  const [newPlants, setNewPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trees_data/new')
      .then((res) => res.json())
      .then((data) => setNewPlants(data))
      .catch((err) => console.error('Error fetching new plants:', err));
  }, []);

  return (
    <section className="my-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        🌿 New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {newPlants.map((plant) => (
          <div key={plant._id} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-48  object-contain rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">{plant.plantName}</h3>
            <p className="text-gray-500">Category: {plant.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPlant;
