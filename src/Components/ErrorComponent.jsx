import React from 'react';
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-800 text-center">
      <div className="mb-6">
        <img src="https://i.imgur.com/kmRHq9Q.gif" alt="Error" className="w-52 h-auto" />
      </div>
      <div>
        <h1 className="text-4xl font-semibold mb-4 text-red-500">Oops! Something Went Wrong</h1>
        <p className="text-lg mb-6">We couldn't load your beautiful memories. Please try again later.</p>
        <Link to="/" className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;