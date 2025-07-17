import {
  createAppStyles,
  createPageStyles,
  createHeadingStyles,
  createTextStyles,
  createButtonStyles,
  createCardStyles,
} from "./styleUtils";
import { Theme, defaultTheme } from "./theme";

describe("styleUtils", () => {
  let mockTheme: Theme;

  beforeEach(() => {
    mockTheme = {
      colors: {
        primary: "#primary",
        secondary: "#secondary",
        tertiary: "#tertiary",
        background: "#background",
        text: {
          onPrimary: "#onPrimary",
          onSecondary: "#onSecondary",
          onTertiary: "#onTertiary",
          onBackground: "#onBackground",
        },
        accent: "#accent",
        border: "#border",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      typography: {
        fontFamily: "Arial, sans-serif",
        fontSize: {
          xs: "10px",
          sm: "12px",
          md: "14px",
          lg: "16px",
          xl: "18px",
          xxl: "20px",
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
  });

  describe("createAppStyles", () => {
    it("should return correct app styles with theme values", () => {
      const styles = createAppStyles(mockTheme);

      expect(styles).toEqual({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: mockTheme.typography.fontFamily,
        backgroundColor: mockTheme.colors.background,
        color: mockTheme.colors.text.onBackground,
      });
    });

    it("should use default theme values", () => {
      const styles = createAppStyles(defaultTheme);

      expect(styles.fontFamily).toBe(defaultTheme.typography.fontFamily);
      expect(styles.backgroundColor).toBe(defaultTheme.colors.background);
      expect(styles.color).toBe(defaultTheme.colors.text.onBackground);
    });
  });

  describe("createPageStyles", () => {
    it("should return correct page styles with theme values", () => {
      const styles = createPageStyles(mockTheme);

      expect(styles).toEqual({
        flex: 1,
        backgroundColor: mockTheme.colors.background,
        padding: mockTheme.spacing.lg,
        color: mockTheme.colors.text.onBackground,
        display: "flex",
        flexDirection: "column",
        fontSize: mockTheme.typography.fontSize.lg,
        overflowY: "auto",
        minHeight: 0,
      });
    });

    it("should use default theme values", () => {
      const styles = createPageStyles(defaultTheme);

      expect(styles.backgroundColor).toBe(defaultTheme.colors.background);
      expect(styles.padding).toBe(defaultTheme.spacing.lg);
      expect(styles.fontSize).toBe(defaultTheme.typography.fontSize.lg);
    });
  });

  describe("createHeadingStyles", () => {
    it("should return correct heading styles with primary variant by default", () => {
      const styles = createHeadingStyles(mockTheme);

      expect(styles).toEqual({
        margin: 0,
        marginBottom: mockTheme.spacing.md,
        fontSize: mockTheme.typography.fontSize.xl,
        fontWeight: mockTheme.typography.fontWeight.bold,
        color: mockTheme.colors.text.onPrimary,
      });
    });

    it("should return correct heading styles with secondary variant", () => {
      const styles = createHeadingStyles(mockTheme, "secondary");

      expect(styles.color).toBe(mockTheme.colors.text.onSecondary);
    });

    it("should return correct heading styles with tertiary variant", () => {
      const styles = createHeadingStyles(mockTheme, "tertiary");

      expect(styles.color).toBe(mockTheme.colors.text.onTertiary);
    });

    it("should return correct heading styles with background variant", () => {
      const styles = createHeadingStyles(mockTheme, "background");

      expect(styles.color).toBe(mockTheme.colors.text.onBackground);
    });

    it("should use correct font weight and size", () => {
      const styles = createHeadingStyles(mockTheme);

      expect(styles.fontSize).toBe(mockTheme.typography.fontSize.xl);
      expect(styles.fontWeight).toBe(mockTheme.typography.fontWeight.bold);
      expect(styles.marginBottom).toBe(mockTheme.spacing.md);
    });
  });

  describe("createTextStyles", () => {
    it("should return correct text styles with primary variant by default", () => {
      const styles = createTextStyles(mockTheme);

      expect(styles).toEqual({
        margin: 0,
        fontSize: mockTheme.typography.fontSize.md,
        color: mockTheme.colors.text.onPrimary,
      });
    });

    it("should return correct text styles with secondary variant", () => {
      const styles = createTextStyles(mockTheme, "secondary");

      expect(styles.color).toBe(mockTheme.colors.text.onSecondary);
    });

    it("should return correct text styles with tertiary variant", () => {
      const styles = createTextStyles(mockTheme, "tertiary");

      expect(styles.color).toBe(mockTheme.colors.text.onTertiary);
    });

    it("should return correct text styles with background variant", () => {
      const styles = createTextStyles(mockTheme, "background");

      expect(styles.color).toBe(mockTheme.colors.text.onBackground);
    });

    it("should use correct font size", () => {
      const styles = createTextStyles(mockTheme);

      expect(styles.fontSize).toBe(mockTheme.typography.fontSize.md);
    });
  });

  describe("createButtonStyles", () => {
    it("should return correct button styles with primary variant by default", () => {
      const styles = createButtonStyles(mockTheme);

      expect(styles).toEqual({
        backgroundColor: mockTheme.colors.primary,
        color: mockTheme.colors.text.onPrimary,
        border: "none",
        padding: `${mockTheme.spacing.sm} ${mockTheme.spacing.md}`,
        borderRadius: "4px",
        fontSize: mockTheme.typography.fontSize.sm,
        fontWeight: mockTheme.typography.fontWeight.medium,
        cursor: "pointer",
        transition: "all 0.2s ease",
      });
    });

    it("should return correct button styles with secondary variant", () => {
      const styles = createButtonStyles(mockTheme, "secondary");

      expect(styles.backgroundColor).toBe(mockTheme.colors.secondary);
      expect(styles.color).toBe(mockTheme.colors.text.onSecondary);
    });

    it("should return correct button styles with tertiary variant", () => {
      const styles = createButtonStyles(mockTheme, "tertiary");

      expect(styles.backgroundColor).toBe(mockTheme.colors.tertiary);
      expect(styles.color).toBe(mockTheme.colors.text.onTertiary);
    });

    it("should use correct spacing and typography", () => {
      const styles = createButtonStyles(mockTheme);

      expect(styles.padding).toBe(
        `${mockTheme.spacing.sm} ${mockTheme.spacing.md}`
      );
      expect(styles.fontSize).toBe(mockTheme.typography.fontSize.sm);
      expect(styles.fontWeight).toBe(mockTheme.typography.fontWeight.medium);
    });
  });

  describe("createCardStyles", () => {
    it("should return correct card styles with secondary variant by default", () => {
      const styles = createCardStyles(mockTheme);

      expect(styles).toEqual({
        backgroundColor: mockTheme.colors.secondary,
        color: mockTheme.colors.text.onSecondary,
        border: `1px solid ${mockTheme.colors.border}`,
        borderRadius: "8px",
        padding: mockTheme.spacing.md,
        margin: mockTheme.spacing.sm,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      });
    });

    it("should return correct card styles with primary variant", () => {
      const styles = createCardStyles(mockTheme, "primary");

      expect(styles.backgroundColor).toBe(mockTheme.colors.primary);
      expect(styles.color).toBe(mockTheme.colors.text.onPrimary);
    });

    it("should return correct card styles with tertiary variant", () => {
      const styles = createCardStyles(mockTheme, "tertiary");

      expect(styles.backgroundColor).toBe(mockTheme.colors.tertiary);
      expect(styles.color).toBe(mockTheme.colors.text.onTertiary);
    });

    it("should use correct spacing and border styles", () => {
      const styles = createCardStyles(mockTheme);

      expect(styles.padding).toBe(mockTheme.spacing.md);
      expect(styles.margin).toBe(mockTheme.spacing.sm);
      expect(styles.border).toBe(`1px solid ${mockTheme.colors.border}`);
      expect(styles.borderRadius).toBe("8px");
      expect(styles.boxShadow).toBe("0 2px 4px rgba(0, 0, 0, 0.1)");
    });
  });
});
