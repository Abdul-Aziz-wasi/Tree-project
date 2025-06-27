import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newItem = {
      image: form.image.value,
      plantName: form.plantName.value,
      category: form.category.value,
      description: form.description.value,
      careLevel: form.careLevel.value,
      wateringFrequency: form.wateringFrequency.value,
      lastWatered: form.lastWatered.value,
      nextWatering: form.nextWatering.value,
      healthStatus: form.healthStatus.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch('https://mango-server-eight.vercel.app/trees_data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire('Success!', 'Plant item added!', 'success');
          form.reset();
        }
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
        Swal.fire('Error', 'Something went wrong!', 'error');
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-green-700">🌿 Add a New Plant</h2>
      <form onSubmit={handleAdd} className="space-y-4">
        <input name="image" type="text" placeholder="Image URL" className="input input-bordered w-full" required />
        <input name="plantName" type="text" placeholder="Plant Name" className="input input-bordered w-full" required />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="category" className="select select-bordered" required>
            <option disabled selected>Category</option>
            <option value="succulent">Succulent</option>
            <option value="fern">Fern</option>
            <option value="flowering">Flowering</option>
          </select>
          <select name="careLevel" className="select select-bordered" required>
            <option disabled selected>Care Level</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>

        <input name="wateringFrequency" type="text" placeholder="Watering Frequency (e.g., every 3 days)" className="input input-bordered w-full" required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="lastWatered" type="date" className="input input-bordered w-full" required />
          <input name="nextWatering" type="date" className="input input-bordered w-full" required />
        </div>

        <input name="healthStatus" type="text" placeholder="Health Status" className="input input-bordered w-full" required />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>

        <button type="submit" className="btn bg-green-700 text-white hover:bg-green-800 w-full" disabled={loading}>
          {loading ? 'Adding...' : 'Add Plant'}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
