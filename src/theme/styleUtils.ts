import { CSSProperties } from "react";
import { Theme } from "./theme";

export const createAppStyles = (theme: Theme): CSSProperties => ({
  display: "flex",
  flexDirection: "column" as const,
  height: "100vh",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.colors.background.primary,
  color: theme.colors.text.primary,
});

export const createPageStyles = (theme: Theme): CSSProperties => ({
  flex: 1,
  backgroundColor: theme.colors.background.tertiary,
  padding: theme.spacing.lg,
  color: theme.colors.text.onPrimary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: theme.typography.fontSize.lg,
  overflowY: "auto",
  minHeight: 0,
});

export const createHeadingStyles = (theme: Theme): CSSProperties => ({
  margin: 0,
  marginBottom: theme.spacing.md,
  fontSize: theme.typography.fontSize.xl,
  fontWeight: theme.typography.fontWeight.bold,
  color: theme.colors.text.onPrimary,
});

export const createTextStyles = (theme: Theme): CSSProperties => ({
  margin: 0,
  fontSize: theme.typography.fontSize.md,
  color: theme.colors.text.onPrimary,
});

export const createButtonStyles = (theme: Theme, variant: "primary" | "secondary" = "primary"): CSSProperties => ({
  backgroundColor: variant === "primary" ? theme.colors.primary : theme.colors.secondary,
  color: theme.colors.text.onPrimary,
  border: "none",
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  borderRadius: "4px",
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeight.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",
});

export const createCardStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.colors.background.secondary,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: "8px",
  padding: theme.spacing.md,
  margin: theme.spacing.sm,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});
