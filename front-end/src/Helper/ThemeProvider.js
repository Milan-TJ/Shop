import React from "react";
import theme from "./Theme";
import { createContext } from "react";

const ThemeContext = createContext(theme);

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };