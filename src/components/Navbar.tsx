import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Navigation Links */}
          <div className="flex items-center flex-1">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/trademadelogo.jpeg"
                alt="TradeMade"
              />
            </Link>
            
            {/* Navigation Links */}
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/about"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                to="/how-to-use"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 relative group"
              >
                How to Use
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                to="/pricing"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/sign-up"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};