import React from 'react';
import { FaBolt, FaBrain, FaChartLine } from 'react-icons/fa';
// import { Navbar } from '../components/Navbar';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Command Center for Professional Trading</h1>
          <p className="text-lg text-gray-700">
            In the world of professional trading, success is a function of speed, strategy, and seamless execution. Yet, the modern trading landscape is fragmented. Traders and prop desks are forced to navigate a complex web of multiple brokers, disparate accounts, and siloed information streams. This fragmentation introduces latency, operational drag, and unnecessary risk—the very enemies of profitability.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <span className="font-semibold">TradeMade</span> was born from a singular mission: to eliminate this fragmentation.
          </p>
        </div>
        {/* Our Platform - 3 Column Layout with Icons */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaBolt className="text-indigo-600 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Absolute Speed</h3>
              <p className="text-gray-700 text-sm">
                With one-click order placement and smart routing, we enable you to execute strategies up to 10x faster. Our sub-0.1s latency ensures you are always at the front of the line.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaBrain className="text-indigo-600 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Intelligent Automation</h3>
              <p className="text-gray-700 text-sm">
                Your strategy is your edge. Our platform empowers you to automate it seamlessly, from trade copying to advanced risk management algorithms.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaChartLine className="text-indigo-600 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Real-Time Insight</h3>
              <p className="text-gray-700 text-sm">
                In today's markets, information is alpha. Our platform integrates a real-time, low-latency news feed with AI-powered analysis and smart alerts.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Built for the Elite</h2>
          <p className="text-gray-700 mb-4">
            TradeMade is not a retail platform. It is a precision instrument designed for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Proprietary Trading Desks:</span> Manage team-wide strategies, control risk centrally, and gain a competitive edge with superior infrastructure.
            </li>
            <li>
              <span className="font-semibold">Professional Traders & Fund Managers:</span> Seamlessly execute complex strategies across personal and client accounts, saving critical time and reducing operational costs by up to 30%.
            </li>
            <li>
              <span className="font-semibold">Multi-Account Retail Traders:</span> Are you an expert trader managing accounts for friends and family? Stop juggling dozens of browser tabs—a method that's slow, inefficient, and prone to costly errors. TradeMade consolidates every account into one powerful dashboard, allowing you to execute your strategy across all of them with a single click. Get the speed and control of a professional desk, designed for you.
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Philosophy</h2>
          <p className="text-gray-700 mb-4">
            Our philosophy is simple. When <span className="font-semibold">#TimeIsMoney</span>, every second matters. We believe a trader's focus should be on strategy, not on managing clunky software. Your alpha is generated through your decisions, and our job is to ensure those decisions are executed instantly and intelligently.
          </p>
          <p className="text-gray-700 mb-4">
            Your <span className="font-semibold">#DecisionsShapeDestiny</span>, and we provide the platform to make them count.
          </p>
          <p className="text-gray-700">
            Join the professionals who choose to trade smarter, not harder.
          </p>
        </section>
      </main>
    </div>
  );
};
