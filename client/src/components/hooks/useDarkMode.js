import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark");

  useEffect(() => {
    darkMode
      ? document.querySelector("*").classList.add("dark-mode")
      : document.querySelector("*").classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}