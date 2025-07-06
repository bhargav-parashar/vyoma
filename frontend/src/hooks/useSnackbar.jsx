import { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";

const useSnackbar = () =>{
    const context = useContext(SnackbarContext);

    return context;
}

export default useSnackbar;