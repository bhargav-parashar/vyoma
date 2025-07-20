import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { FilterContextProvider } from "./contexts/FilterContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { CartWishlistContextProvider } from "./contexts/CartWishlistContext";
import { Provider } from "react-redux";
import appStore from "./redux/stores/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <SnackbarProvider>
        <FilterContextProvider>
          <CartWishlistContextProvider>
            <Header />
            <Outlet />
          </CartWishlistContextProvider>
        </FilterContextProvider>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
