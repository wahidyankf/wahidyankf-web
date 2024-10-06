import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

// Mock the ScrollToTop component
vi.mock("@/components/ScrollToTop", () => ({
  default: () => <div data-testid="scroll-to-top">ScrollToTop</div>,
}));

// Mock the Inter font
vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter-font" }),
}));

// Mock the ThemeToggle component
vi.mock("@/components/ThemeToggle", () => ({
  default: () => <div data-testid="theme-toggle">ThemeToggle</div>,
}));

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="child">Test Child</div>
      </RootLayout>
    );

    const htmlElement = container.firstElementChild;
    expect(htmlElement?.tagName).toBe("HTML");

    const bodyElement = htmlElement?.children[1]; // Target the second child (body)
    expect(bodyElement?.tagName).toBe("BODY");
    expect(bodyElement?.className).toContain("root-layout");

    const bodyContent = bodyElement?.firstElementChild;
    expect(bodyContent?.className).toBe("body-content");

    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByTestId("scroll-to-top")).toBeInTheDocument();
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
