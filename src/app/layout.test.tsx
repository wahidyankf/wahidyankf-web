import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import RootLayout from "./layout";

// Mock the ScrollToTop component
vi.mock("@/components/ScrollToTop", () => ({
  default: () => <div data-testid="scroll-to-top">ScrollToTop</div>,
}));

// Mock the Inter font
vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter-font" }),
}));

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );

    // Check if the layout renders the children
    expect(container.innerHTML).toContain("Test Child");

    // Check for important elements and attributes
    const bodyElement = container.querySelector("body");
    expect(bodyElement).toBeTruthy();
    expect(bodyElement?.className).toContain("inter-font");

    // Check for lang attribute on the closest ancestor (simulating html tag)
    const rootElement = container.firstElementChild;
    expect(rootElement?.getAttribute("lang")).toBe("en");
  });

  it("includes ScrollToTop component", () => {
    const { getByTestId } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    expect(getByTestId("scroll-to-top")).toBeTruthy();
  });
});
