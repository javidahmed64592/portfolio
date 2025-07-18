import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./test-utils";

test("renders App component without crashing", () => {
  renderWithProviders(<App />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
