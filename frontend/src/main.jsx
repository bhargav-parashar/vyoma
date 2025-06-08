import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import MenProducts from "./pages/Products/Men/MenProducts.jsx";
import WomenProducts from "./pages/Products/Women/WomenProducts.jsx";
import KidsProducts from "./pages/Products/Kids/KidsProducts.jsx";
import HomeProducts from "./pages/Products/Home/HomeProducts.jsx";

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/men-products",
        element : <MenProducts/>
      },
      {
        path : "/women-products",
        element : <WomenProducts/>
      },
      {
        path : "/kids-products",
        element : <KidsProducts/>
      },
      {
        path : "/home-products",
        element : <HomeProducts/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
