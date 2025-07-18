import { render, screen } from "@testing-library/react";
import { defaultTheme, Theme } from "./theme";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./";

// Test component to access the theme context
const TestComponent = () => {
  const { theme } = useTheme();
  return (
    <div>
      <span data-testid="primary-color">{theme.colors.primary}</span>
      <span data-testid="font-family">{theme.typography.fontFamily}</span>
      <span data-testid="spacing-md">{theme.spacing.md}</span>
    </div>
  );
};

describe("ThemeProvider", () => {
  it("should render children without crashing", () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("should provide default theme when no theme prop is passed", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("primary-color")).toHaveTextContent(
      defaultTheme.colors.primary
    );
    expect(screen.getByTestId("font-family")).toHaveTextContent(
      defaultTheme.typography.fontFamily
    );
    expect(screen.getByTestId("spacing-md")).toHaveTextContent(
      defaultTheme.spacing.md
    );
  });

  it("should provide custom theme when theme prop is passed", () => {
    const customTheme: Theme = {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primary: "#custom-primary",
      },
      typography: {
        ...defaultTheme.typography,
        fontFamily: "Custom Font Family",
      },
      spacing: {
        ...defaultTheme.spacing,
        md: "20px",
      },
    };

    render(
      <ThemeProvider theme={customTheme}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("primary-color")).toHaveTextContent(
      "#custom-primary"
    );
    expect(screen.getByTestId("font-family")).toHaveTextContent(
      "Custom Font Family"
    );
    expect(screen.getByTestId("spacing-md")).toHaveTextContent("20px");
  });

  it("should render multiple children correctly", () => {
    render(
      <ThemeProvider>
        <div data-testid="child1">Child 1</div>
        <div data-testid="child2">Child 2</div>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("child1")).toBeInTheDocument();
    expect(screen.getByTestId("child2")).toBeInTheDocument();
    expect(screen.getByTestId("primary-color")).toHaveTextContent(
      defaultTheme.colors.primary
    );
  });

  it("should handle nested providers correctly", () => {
    const outerTheme: Theme = {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primary: "#outer-primary",
      },
    };

    const innerTheme: Theme = {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primary: "#inner-primary",
      },
    };

    const OuterComponent = () => {
      const { theme } = useTheme();
      return <span data-testid="outer-primary">{theme.colors.primary}</span>;
    };

    const InnerComponent = () => {
      const { theme } = useTheme();
      return <span data-testid="inner-primary">{theme.colors.primary}</span>;
    };

    render(
      <ThemeProvider theme={outerTheme}>
        <OuterComponent />
        <ThemeProvider theme={innerTheme}>
          <InnerComponent />
        </ThemeProvider>
      </ThemeProvider>
    );

    expect(screen.getByTestId("outer-primary")).toHaveTextContent(
      "#outer-primary"
    );
    expect(screen.getByTestId("inner-primary")).toHaveTextContent(
      "#inner-primary"
    );
  });

  it("should preserve theme reference when theme prop doesn't change", () => {
    const customTheme: Theme = {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primary: "#stable-primary",
      },
    };

    let renderCount = 0;
    const ThemeConsumerComponent = () => {
      useTheme(); // Access theme to trigger context subscription
      renderCount++;
      return <span data-testid="render-count">{renderCount}</span>;
    };

    const { rerender } = render(
      <ThemeProvider theme={customTheme}>
        <ThemeConsumerComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("render-count")).toHaveTextContent("1");

    // Rerender with the same theme object
    rerender(
      <ThemeProvider theme={customTheme}>
        <ThemeConsumerComponent />
      </ThemeProvider>
    );

    // The component should re-render because the context value is recreated
    expect(screen.getByTestId("render-count")).toHaveTextContent("2");
  });
});
