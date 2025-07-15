export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      onPrimary: string;
      onSecondary: string;
    };
    accent: string;
    border: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
    };
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: "#1976d2",
    secondary: "#dc004e",
    tertiary: "#9c27b0",
    background: {
      primary: "#ffffff",
      secondary: "#f5f5f5",
      tertiary: "#282c34",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
      onPrimary: "#ffffff",
      onSecondary: "#ffffff",
    },
    accent: "#61dafb",
    border: "#e0e0e0",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      xxl: "32px",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
};
