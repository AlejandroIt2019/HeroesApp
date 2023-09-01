import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HeroesApp } from './HeroesApp';
const router = createBrowserRouter([
  {
    path: "/*",
    element: <HeroesApp/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
