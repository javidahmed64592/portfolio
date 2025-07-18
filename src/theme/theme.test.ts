import { Theme, defaultTheme } from "./theme";

describe("theme", () => {
  describe("Theme interface", () => {
    it("should have all required color properties", () => {
      expect(defaultTheme.colors).toHaveProperty("primary");
      expect(defaultTheme.colors).toHaveProperty("secondary");
      expect(defaultTheme.colors).toHaveProperty("tertiary");
      expect(defaultTheme.colors).toHaveProperty("background");
      expect(defaultTheme.colors).toHaveProperty("accent");
      expect(defaultTheme.colors).toHaveProperty("border");
      expect(defaultTheme.colors).toHaveProperty("text");
    });

    it("should have all required text color properties", () => {
      expect(defaultTheme.colors.text).toHaveProperty("onPrimary");
      expect(defaultTheme.colors.text).toHaveProperty("onSecondary");
      expect(defaultTheme.colors.text).toHaveProperty("onTertiary");
      expect(defaultTheme.colors.text).toHaveProperty("onBackground");
    });

    it("should have all required spacing properties", () => {
      expect(defaultTheme.spacing).toHaveProperty("xs");
      expect(defaultTheme.spacing).toHaveProperty("sm");
      expect(defaultTheme.spacing).toHaveProperty("md");
      expect(defaultTheme.spacing).toHaveProperty("lg");
      expect(defaultTheme.spacing).toHaveProperty("xl");
    });

    it("should have all required typography properties", () => {
      expect(defaultTheme.typography).toHaveProperty("fontFamily");
      expect(defaultTheme.typography).toHaveProperty("fontSize");
      expect(defaultTheme.typography).toHaveProperty("fontWeight");
    });

    it("should have all required font size properties", () => {
      expect(defaultTheme.typography.fontSize).toHaveProperty("xs");
      expect(defaultTheme.typography.fontSize).toHaveProperty("sm");
      expect(defaultTheme.typography.fontSize).toHaveProperty("md");
      expect(defaultTheme.typography.fontSize).toHaveProperty("lg");
      expect(defaultTheme.typography.fontSize).toHaveProperty("xl");
      expect(defaultTheme.typography.fontSize).toHaveProperty("xxl");
    });

    it("should have all required font weight properties", () => {
      expect(defaultTheme.typography.fontWeight).toHaveProperty("light");
      expect(defaultTheme.typography.fontWeight).toHaveProperty("normal");
      expect(defaultTheme.typography.fontWeight).toHaveProperty("medium");
      expect(defaultTheme.typography.fontWeight).toHaveProperty("bold");
    });

    it("should have all required breakpoint properties", () => {
      expect(defaultTheme.breakpoints).toHaveProperty("mobile");
      expect(defaultTheme.breakpoints).toHaveProperty("tablet");
      expect(defaultTheme.breakpoints).toHaveProperty("desktop");
    });
  });

  describe("defaultTheme values", () => {
    it("should have correct color values", () => {
      expect(defaultTheme.colors.primary).toBe("#0D659D");
      expect(defaultTheme.colors.secondary).toBe("#5C8AAC");
      expect(defaultTheme.colors.tertiary).toBe("#C7D8E7");
      expect(defaultTheme.colors.background).toBe("#050B1F");
      expect(defaultTheme.colors.accent).toBe("#5C8AAC");
      expect(defaultTheme.colors.border).toBe("#E8EEF1");
    });

    it("should have correct text color values", () => {
      expect(defaultTheme.colors.text.onPrimary).toBe("#E8EEF1");
      expect(defaultTheme.colors.text.onSecondary).toBe("#E8EEF1");
      expect(defaultTheme.colors.text.onTertiary).toBe("#E8EEF1");
      expect(defaultTheme.colors.text.onBackground).toBe("#E8EEF1");
    });

    it("should have correct spacing values", () => {
      expect(defaultTheme.spacing.xs).toBe("4px");
      expect(defaultTheme.spacing.sm).toBe("8px");
      expect(defaultTheme.spacing.md).toBe("16px");
      expect(defaultTheme.spacing.lg).toBe("24px");
      expect(defaultTheme.spacing.xl).toBe("32px");
    });

    it("should have correct typography values", () => {
      expect(defaultTheme.typography.fontFamily).toBe(
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
      );
    });

    it("should have correct font size values", () => {
      expect(defaultTheme.typography.fontSize.xs).toBe("12px");
      expect(defaultTheme.typography.fontSize.sm).toBe("14px");
      expect(defaultTheme.typography.fontSize.md).toBe("16px");
      expect(defaultTheme.typography.fontSize.lg).toBe("18px");
      expect(defaultTheme.typography.fontSize.xl).toBe("24px");
      expect(defaultTheme.typography.fontSize.xxl).toBe("32px");
    });

    it("should have correct font weight values", () => {
      expect(defaultTheme.typography.fontWeight.light).toBe(300);
      expect(defaultTheme.typography.fontWeight.normal).toBe(400);
      expect(defaultTheme.typography.fontWeight.medium).toBe(500);
      expect(defaultTheme.typography.fontWeight.bold).toBe(700);
    });

    it("should have correct breakpoint values", () => {
      expect(defaultTheme.breakpoints.mobile).toBe("768px");
      expect(defaultTheme.breakpoints.tablet).toBe("1024px");
      expect(defaultTheme.breakpoints.desktop).toBe("1200px");
    });
  });

  describe("Theme structure validation", () => {
    it("should be a valid theme object that satisfies the Theme interface", () => {
      // This test ensures that defaultTheme conforms to the Theme interface
      const theme: Theme = defaultTheme;
      expect(theme).toBeDefined();
    });

    it("should have numeric font weight values", () => {
      Object.values(defaultTheme.typography.fontWeight).forEach(weight => {
        expect(typeof weight).toBe("number");
        expect(weight).toBeGreaterThan(0);
      });
    });

    it("should have string pixel values for spacing", () => {
      Object.values(defaultTheme.spacing).forEach(spacing => {
        expect(typeof spacing).toBe("string");
        expect(spacing).toMatch(/^\d+px$/);
      });
    });

    it("should have string pixel values for font sizes", () => {
      Object.values(defaultTheme.typography.fontSize).forEach(fontSize => {
        expect(typeof fontSize).toBe("string");
        expect(fontSize).toMatch(/^\d+px$/);
      });
    });

    it("should have string pixel values for breakpoints", () => {
      Object.values(defaultTheme.breakpoints).forEach(breakpoint => {
        expect(typeof breakpoint).toBe("string");
        expect(breakpoint).toMatch(/^\d+px$/);
      });
    });

    it("should have valid hex color values", () => {
      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

      expect(defaultTheme.colors.primary).toMatch(hexColorRegex);
      expect(defaultTheme.colors.secondary).toMatch(hexColorRegex);
      expect(defaultTheme.colors.tertiary).toMatch(hexColorRegex);
      expect(defaultTheme.colors.background).toMatch(hexColorRegex);
      expect(defaultTheme.colors.accent).toMatch(hexColorRegex);
      expect(defaultTheme.colors.border).toMatch(hexColorRegex);

      Object.values(defaultTheme.colors.text).forEach(textColor => {
        expect(textColor).toMatch(hexColorRegex);
      });
    });
  });
});
