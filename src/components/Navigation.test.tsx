import React from "react";
import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { describe, it, expect } from "vitest";

describe("Navigation", () => {
  it("renders mobile navigation", () => {
    render(<Navigation activePage="home" />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "CV" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Personal Projects" })
    ).toBeInTheDocument();
  });

  it("renders desktop navigation", () => {
    render(<Navigation activePage="home" />);
    expect(screen.getByText("organiclever")).toBeInTheDocument();
    expect(screen.getByText("home.tsx")).toBeInTheDocument();
    expect(screen.getByText("cv.tsx")).toBeInTheDocument();
    expect(screen.getByText("personal-projects.tsx")).toBeInTheDocument();
  });
});
