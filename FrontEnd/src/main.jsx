import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//pages
import Dashboard from './pages/Dashboard.jsx'
import Category from './pages/Category.jsx'
import Products from './pages/Products.jsx'
import Movement from './pages/Movement.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/categorias",
        element: <Category />
      },
      {
        path: "/produtos",
        element: <Products />
      },
      {
        path: "/movimentacoes",
        element: <Movement />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
