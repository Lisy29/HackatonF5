import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App component", () => {
  test("renders App component correctly", () => {
    render(<App />);

    // Check if the main heading is present
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent("Vite + React");

    // Check if the Vite logo is present
    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument();

    // Check if the React logo is present
    const reactLogo = screen.getByAltText("React logo");
    expect(reactLogo).toBeInTheDocument();

    // Check if the counter button is present
    const counterButton = screen.getByRole("button", { name: /count is/i });
    expect(counterButton).toBeInTheDocument();

    // Check if the HMR text is present
    const hmrText = screen.getByText(/Edit/i);
    expect(hmrText).toBeInTheDocument();

    // Check if the documentation link text is present
    const docLinkText = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(docLinkText).toBeInTheDocument();
  });
});
