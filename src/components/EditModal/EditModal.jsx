// src/components/EditModal.jsx

import React, { useState, useEffect } from 'react';

const EditModal = ({ plant, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(plant);
  }, [plant]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`http://localhost:3000/trees_data/${plant._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          onUpdate();
          onClose();  
        }
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Plant</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="plantName" value={formData.plantName || ''} onChange={handleChange} placeholder="Plant Name" className="input input-bordered w-full" required />
          <input type="text" name="image" value={formData.image || ''} onChange={handleChange} placeholder="Image URL" className="input input-bordered w-full" required />
          <input type="text" name="category" value={formData.category || ''} onChange={handleChange} placeholder="Category" className="input input-bordered w-full" required />
          <input type="text" name="wateringFrequency" value={formData.wateringFrequency || ''} onChange={handleChange} placeholder="Watering Frequency" className="input input-bordered w-full" />
          <input type="text" name="careLevel" value={formData.careLevel || ''} onChange={handleChange} placeholder="Care Level" className="input input-bordered w-full" />
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="btn">Cancel</button>
            <button type="submit" className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
