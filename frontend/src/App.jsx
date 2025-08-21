import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { FilterContextProvider } from "./contexts/FiltersContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { useSelector } from "react-redux";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

function App() {
  const currTheme = useSelector((store) => store.theme.currTheme);

  return (
    <SnackbarProvider>
      <FilterContextProvider>
        <div className={`${currTheme == `dark` ? `dark` : ``}`}>
          <Header />
          <Breadcrumbs/>
          <Outlet />
        </div>
      </FilterContextProvider>
    </SnackbarProvider>
  );
}

export default App;
