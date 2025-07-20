import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Products from './pages/Products/Products.jsx';
import ProductDetails from "./pages/Products/ProductDetails.jsx";
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import Cart from './pages/Cart/Cart1.jsx';

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/",
        element : <Products/>
      },
      {
        path : "/products/:section",
        element : <Products/>
      },
      {
        path : "/products/details/:id",
        element : <ProductDetails/>
      },
      {
        path : "/wishlist",
        element : <Wishlist/>
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
