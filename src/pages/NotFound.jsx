import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-4 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            <FaHome />
            <span>Go to Home</span>
          </Link>
          <Link
            to="/shop"
            className="flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            <FaSearch />
            <span>Browse Products</span>
          </Link>
        </div>

        <div className="mt-12">
          <img
            src="https://illustrations.popsy.co/amber/resistance-band.svg"
            alt="404 illustration"
            className="w-64 h-64 mx-auto opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
