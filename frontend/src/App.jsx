import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { FilterContextProvider } from "./contexts/FiltersContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { Provider } from "react-redux";
import appStore from "./redux/stores/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <SnackbarProvider>
        <FilterContextProvider>
          <div className="" >
            <Header />
            <Outlet />
          </div>
        </FilterContextProvider>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
