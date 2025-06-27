import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorElement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />

      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist or an unexpected error occurred.
      </p>

      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded shadow"
      >
         Go Back Home
      </button>
    </div>
  );
};

export default ErrorElement;
