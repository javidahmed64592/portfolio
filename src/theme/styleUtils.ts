import { CSSProperties } from "react";
import { Theme } from "./theme";

export const createAppStyles = (theme: Theme): CSSProperties => ({
  display: "flex",
  flexDirection: "column" as const,
  height: "100vh",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.colors.background,
  color: theme.colors.text.onBackground,
});

export const createPageStyles = (theme: Theme): CSSProperties => {
  return {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    color: theme.colors.text.onBackground,
    display: "flex",
    flexDirection: "column",
    fontSize: theme.typography.fontSize.lg,
    overflowY: "auto",
    minHeight: 0,
  };
};

export const createHeadingStyles = (
  theme: Theme,
  variant: "primary" | "secondary" | "tertiary" | "background" = "primary"
): CSSProperties => {
  const getTextColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.text.onPrimary;
      case "secondary":
        return theme.colors.text.onSecondary;
      case "tertiary":
        return theme.colors.text.onTertiary;
      case "background":
        return theme.colors.text.onBackground;
    }
  };

  return {
    margin: 0,
    marginBottom: theme.spacing.md,
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: getTextColor(),
  };
};

export const createTextStyles = (
  theme: Theme,
  variant: "primary" | "secondary" | "tertiary" | "background" = "primary"
): CSSProperties => {
  const getTextColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.text.onPrimary;
      case "secondary":
        return theme.colors.text.onSecondary;
      case "tertiary":
        return theme.colors.text.onTertiary;
      case "background":
        return theme.colors.text.onBackground;
    }
  };

  return {
    margin: 0,
    fontSize: theme.typography.fontSize.md,
    color: getTextColor(),
  };
};

export const createButtonStyles = (
  theme: Theme,
  variant: "primary" | "secondary" | "tertiary" = "primary"
): CSSProperties => {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.secondary;
      case "tertiary":
        return theme.colors.tertiary;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.text.onPrimary;
      case "secondary":
        return theme.colors.text.onSecondary;
      case "tertiary":
        return theme.colors.text.onTertiary;
    }
  };

  return {
    backgroundColor: getBackgroundColor(),
    color: getTextColor(),
    border: "none",
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: "4px",
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };
};

export const createCardStyles = (
  theme: Theme,
  variant: "primary" | "secondary" | "tertiary" = "secondary"
): CSSProperties => {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.secondary;
      case "tertiary":
        return theme.colors.tertiary;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.text.onPrimary;
      case "secondary":
        return theme.colors.text.onSecondary;
      case "tertiary":
        return theme.colors.text.onTertiary;
    }
  };

  return {
    backgroundColor: getBackgroundColor(),
    color: getTextColor(),
    border: `1px solid ${theme.colors.border}`,
    borderRadius: "8px",
    padding: theme.spacing.md,
    margin: theme.spacing.sm,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
};
