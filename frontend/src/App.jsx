import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { FilterContextProvider } from "./contexts/FilterContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { CartWishlistContextProvider } from "./contexts/CartWishlistContext";

function App() {
  return (
    <SnackbarProvider>
      <FilterContextProvider>
        <CartWishlistContextProvider>
          <Header />
          <Outlet />
        </CartWishlistContextProvider>
      </FilterContextProvider>
    </SnackbarProvider>
  );
}

export default App;
