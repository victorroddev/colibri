import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import Services from './pages/Services.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <HomePage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'services',
        element: <Services />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)