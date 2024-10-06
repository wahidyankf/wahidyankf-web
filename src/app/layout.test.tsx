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
    const rootElement = container.firstElementChild;
    expect(rootElement).toBeTruthy();
    expect(rootElement?.getAttribute("lang")).toBe("en");
    expect(rootElement?.className).toContain("root-layout");

    const bodyContent = rootElement?.firstElementChild;
    expect(bodyContent).toBeTruthy();
    expect(bodyContent?.className).toContain("body-content");
    expect(bodyContent?.className).toContain("inter-font");
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
