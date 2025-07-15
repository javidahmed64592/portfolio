import { createContext } from "react";
import { Theme, defaultTheme } from "./theme";

interface ThemeContextType {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});
