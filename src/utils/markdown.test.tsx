import React from "react";
import { render, screen } from "@testing-library/react";
import { parseMarkdownLinks } from "./markdown";
import { describe, it, expect } from "vitest";

describe("parseMarkdownLinks", () => {
  it("should return an array with plain text when no links are present", () => {
    const text = "This is a plain text without any links";
    const result = parseMarkdownLinks(text);
    expect(result).toEqual([text]);
  });

  it("should parse a single markdown link correctly", () => {
    const text = "Check out [Google](https://www.google.com)";
    const result = parseMarkdownLinks(text);
    render(<>{result}</>);

    const link = screen.getByRole("link", { name: "Google" });
    expect(link).toHaveAttribute("href", "https://www.google.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText("Check out", { exact: false })).toBeInTheDocument();
  });

  it("should parse multiple markdown links correctly", () => {
    const text =
      "Visit [Google](https://www.google.com) or [GitHub](https://github.com)";
    const result = parseMarkdownLinks(text);
    render(<>{result}</>);

    const googleLink = screen.getByRole("link", { name: "Google" });
    const githubLink = screen.getByRole("link", { name: "GitHub" });

    expect(googleLink).toHaveAttribute("href", "https://www.google.com");
    expect(githubLink).toHaveAttribute("href", "https://github.com");

    // Check for the presence of text fragments using a more flexible approach
    const textElements = screen.getAllByText((content, element) => {
      return (
        (element?.textContent?.includes("Visit") &&
          element?.textContent?.includes("or")) ||
        false
      );
    });
    expect(textElements.length).toBeGreaterThan(0);

    // Check that the full text is present, allowing for multiple elements
    const fullTextElements = screen.getAllByText((content, element) => {
      const hasText = (text: string) =>
        element?.textContent?.includes(text) || false;
      return (
        hasText("Visit") &&
        hasText("Google") &&
        hasText("or") &&
        hasText("GitHub")
      );
    });
    expect(fullTextElements.length).toBeGreaterThan(0);
  });

  it("should handle links with spaces in the URL", () => {
    const text = "Check [My Profile](https://example.com/my profile)";
    const result = parseMarkdownLinks(text);
    render(<>{result}</>);

    const link = screen.getByRole("link", { name: "My Profile" });
    expect(link).toHaveAttribute("href", "https://example.com/my profile");
  });

  it("should return the input when it is not a string", () => {
    const nonStringInput = <div>Some JSX</div>;
    const result = parseMarkdownLinks(nonStringInput);
    expect(result).toBe(nonStringInput);
  });

  it("should handle text with markdown syntax but no actual links", () => {
    const text = "This [is not a link] and (neither is this)";
    const result = parseMarkdownLinks(text);
    expect(result).toEqual([text]);
  });

  it("should apply the correct CSS classes to links", () => {
    const text = "[Styled Link](https://example.com)";
    const result = parseMarkdownLinks(text);
    render(<>{result}</>);

    const link = screen.getByRole("link", { name: "Styled Link" });
    expect(link).toHaveClass(
      "text-yellow-400",
      "hover:text-green-400",
      "transition-colors",
      "duration-200"
    );
  });
});
