import { createContext, useState, useCallback } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    message: "",
    visible: false,
    type: "success",
  });

  const showSnackbar = useCallback((message, duration = 3000, type) => {
    setSnackbar({ message, visible: true, type });
    setTimeout(() => {
      setSnackbar({ message: "", visible: false, type: "success" });
    }, duration);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar.visible && (
        <div
          className={`flex items-center gap-2 justify-start fixed bottom-5 left-1/2 -translate-x-1/2 bg-orange-400 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 z-50`}
        >
          {snackbar.type == "error" ? (
            <ExclamationCircleIcon className="h-5 w-5" />
          ) : (
            <CheckCircleIcon className="h-5 w-5" />
          )}
          {snackbar.message}
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export { SnackbarProvider, SnackbarContext };
