import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Button } from './ui/button';

export const ErrorBoundary = () => {
  const error = useRouteError() as any;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {error?.status === 404 ? "Page Not Found" : "Oops! Something went wrong"}
            </h1>
            <p className="text-gray-600 mb-8">
              {error?.status === 404 
                ? "The page you're looking for doesn't exist."
                : "We're sorry, but something went wrong. Please try again later."}
            </p>
            <Link to="/">
              <Button>
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
