import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarLogo from './components/NavbarLogo';

import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarLogo />
    <RouterProvider router={router} />
  </React.StrictMode>
);