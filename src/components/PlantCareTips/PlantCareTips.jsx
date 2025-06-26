import React from 'react';
import { FaSun, FaTint, FaTemperatureLow, FaLeaf } from 'react-icons/fa';

const tips = [
  {
    icon: <FaSun className="text-yellow-500 text-4xl" />,
    title: 'Proper Sunlight',
    description: 'Place your plant near indirect sunlight for healthy growth.',
  },
  {
    icon: <FaTint className="text-blue-500 text-4xl" />,
    title: 'Watering',
    description: 'Water once every 3-5 days depending on plant type.',
  },
  {
    icon: <FaTemperatureLow className="text-red-400 text-4xl" />,
    title: 'Temperature',
    description: 'Maintain room temperature between 18°C to 25°C.',
  },
  {
    icon: <FaLeaf className="text-green-500 text-4xl" />,
    title: 'Leaf Care',
    description: 'Clean leaves regularly to prevent dust and pests.',
  },
];

const PlantCareTips = () => {
  return (
    <section className="my-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        🌿 Plant Care Tips
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
          >
            <div className="mb-4 flex justify-center">{tip.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareTips;
