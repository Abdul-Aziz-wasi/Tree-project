import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const [myCount, setMyCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/trees_data')
      .then(res => res.json())
      .then(data => {
        setTotal(data.length);
        const mine = data.filter(p => p.userEmail === user?.email);
        setMyCount(mine.length);
      });
  }, [user]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-700">Welcome, {user?.displayName}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold text-green-700">Total Items</h3>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold text-green-700">My Items</h3>
          <p className="text-3xl font-bold">{myCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
