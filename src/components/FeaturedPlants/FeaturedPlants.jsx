import React, { useEffect, useState } from 'react';

const FeaturedPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://mango-server-eight.vercel.app/trees_data/featured') 
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter((item) => item.isFeatured === true);
        setPlants(featured);
      })
      .catch((err) => console.error('Error fetching featured plants:', err));
  }, []);

  return (
    <section className="my-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        🌿 Featured Plants
      </h2>

      {plants.length === 0 ? (
        <p className="text-center text-gray-500">No featured plants available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div key={plant._id} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-48 object-contain rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">{plant.plantName}</h3>
              <p className="text-gray-500">{plant.category}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedPlants;
