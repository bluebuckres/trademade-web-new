import React from 'react';
import { Navbar } from '../components/Navbar';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About TradeMade</h1>
          <p className="mt-4 text-lg text-gray-500">
            TradeMade is a revolutionary trading platform designed to make trading accessible and efficient for everyone.
          </p>
        </div>
        <div className="mt-12 prose prose-lg mx-auto">
          <h2>Our Mission</h2>
          <p>
            We strive to provide the best trading experience by combining cutting-edge technology with user-friendly interfaces.
          </p>
          <h2>Our Vision</h2>
          <p>
            To become the most trusted and innovative trading platform in the market.
          </p>
        </div>
      </main>
    </div>
  );
};
