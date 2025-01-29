import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Benefits } from '../components/Benefits';
import { Technology } from '../components/Technology';
import { Testimonials } from '../components/Testimonials';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
        <Technology />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};
