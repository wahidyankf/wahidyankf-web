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
    const htmlElement = container.firstElementChild;
    expect(htmlElement).toBeTruthy();
    expect(htmlElement?.getAttribute("lang")).toBe("en");
    expect(htmlElement?.className).toContain("inter-font");

    const bodyElement = htmlElement?.firstElementChild;
    expect(bodyElement).toBeTruthy();
    expect(bodyElement?.className).toContain("root-layout");

    const bodyContent = bodyElement?.firstElementChild;
    expect(bodyContent).toBeTruthy();
    expect(bodyContent?.className).toBe("body-content");
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
