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
import { Layout } from '../components/Layout';
import { About } from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'how-to-use',
        element: <HowToUse />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'refund-policy',
        element: <RefundPolicy />,
      },
      {
        path: 'security',
        element: <Security />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ]
  }
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
