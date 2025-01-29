import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { HowToUse } from '../components/HowToUse';
import { Pricing } from '../components/Pricing';
import { Contact } from '../components/Contact';
import { Terms } from '../components/Terms';
import { PrivacyPolicy } from '../components/PrivacyPolicy';
import { RefundPolicy } from '../components/RefundPolicy';
import { Security } from '../components/Security';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { SignUp } from '../components/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/how-to-use',
    element: <HowToUse />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/pricing',
    element: <Pricing />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/terms',
    element: <Terms />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/refund',
    element: <RefundPolicy />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/security',
    element: <Security />,
    errorElement: <ErrorBoundary />
  }
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
