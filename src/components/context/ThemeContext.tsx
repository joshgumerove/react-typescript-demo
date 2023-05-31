import { createContext, FC } from "react";
import { theme } from "./theme";
import { ThemeContextProviderProps } from "./types";

const ThemeContext = createContext(theme);

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
