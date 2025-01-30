import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Benefits } from '../components/Benefits';

export const Home = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
      </main>
    </div>
  );
};
