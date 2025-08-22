import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Products from "./pages/ProductRelated/ProductsPage.jsx";
import ProductDetails from "./pages/ProductRelated/ProductDetails.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import Cart from "./pages/Cart/CartPage.jsx";
import appStore from "./redux/stores/appStore.jsx";
import { Provider } from "react-redux";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/:section",
        element: <Products />,
      },
      {
        path: "/:section/:id",
        element: <ProductDetails />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
