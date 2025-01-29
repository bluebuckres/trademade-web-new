import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg prose-indigo max-w-none"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Privacy Policy for TradeMade
            </h1>

            <p className="text-gray-600 mb-8">Last Updated: December 24, 2023</p>

            <div className="text-gray-600 mb-12">
              Thank you for choosing to be part of our community at BlueBuck Research LLP ("Company," "we," "us," or "our"). We are committed to protecting your personal information and your right to privacy.
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600">
                We collect personal information that you voluntarily provide to us when you register on our platform, express an interest in obtaining information about us or our products and services, or otherwise contact us.
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>The personal information we collect may include:</p>
                <ul className="list-disc pl-6">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Broker account details</li>
                  <li>Trading preferences and history</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing your transactions</li>
                <li>Sending you service-related notifications</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Improving our platform and user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">For privacy-related inquiries, please contact us at:</p>
              <div className="text-gray-600">
                <p>Email: privacy@trademade.in</p>
                <p>Address: BlueBuck Research LLP, BF 148/A Rabindrapally, Baguihati, Kolkata, West Bengal 700101, India</p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};