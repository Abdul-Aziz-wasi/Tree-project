import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    fetch('https://mango-server-eight.vercel.app/trees_data')
      .then(res => res.json())
      .then(data => {
        let filtered = [...data];
        if (filterCategory !== 'all') {
          filtered = filtered.filter(plant => plant.category === filterCategory);
        }
        if (sortOrder === 'asc') {
          filtered.sort((a, b) => a.plantName.localeCompare(b.plantName));
        } else {
          filtered.sort((a, b) => b.plantName.localeCompare(a.plantName));
        }
        setPlants(filtered);
      });
  }, [sortOrder, filterCategory]);

  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">🌿 All Plants</h2>

      
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div>
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select onChange={(e) => setFilterCategory(e.target.value)} className="border p-2 rounded">
            <option value="all">All</option>
            <option value="succulent">Succulent</option>
            <option value="fern">Fern</option>
            <option value="flowering">Flowering</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Sort:</label>
          <select onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded">
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
          </select>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plants.map(plant => (
          <div key={plant._id} className="bg-white rounded-xl shadow-md p-4">
            <img src={plant.image} alt={plant.plantName} className="w-full h-48 object-contain rounded" />
            <h3 className="mt-4 text-xl font-semibold">{plant.plantName}</h3>
            <p className="text-gray-500">{plant.category}</p>
            <Link to={`/details/${plant._id}`}>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPlants;
