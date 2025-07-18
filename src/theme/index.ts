import { createContext, useContext } from "react";
import { defaultTheme, Theme } from "./theme";

export * from "./theme";
export * from "./ThemeProvider";
export * from "./styleUtils";

interface ThemeContextType {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
