import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-stone-500 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-white text-2xl">Task Management</h1>
        </Link>
        <ul className="flex gap-10">
          <li>
            <Link to="/" className="text-white text-lg hover:text-gray-300 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-lg hover:text-gray-300 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/signin" className="text-white text-lg hover:text-gray-300 transition-colors duration-200">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
