import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value) );
  },[value, key])

  return [value, setValue];
  
};

export default useLocalStorage;
