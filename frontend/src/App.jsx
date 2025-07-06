import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { FilterContextProvider } from "./contexts/FilterContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <FilterContextProvider>
      <SnackbarProvider>
        <Header />
        <Outlet />
      </SnackbarProvider>
    </FilterContextProvider>
  );
}

export default App;
