import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Home from "./page";

// Mock the next/navigation module
const mockPush = vi.fn();
const mockGet = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: () => ({
    get: mockGet,
  }),
}));

// Mock the components imported from other files
vi.mock("@/components/Navigation", () => ({
  Navigation: () => <div data-testid="navigation">Navigation</div>,
}));

vi.mock("@/components/SearchComponent", () => ({
  SearchComponent: ({
    searchTerm,
    setSearchTerm,
    placeholder,
  }: {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    placeholder: string;
  }) => (
    <input
      data-testid="search-component"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder}
    />
  ),
}));

vi.mock("@/components/HighlightText", () => ({
  HighlightText: ({ text }: { text: string }) => <span>{text}</span>,
}));

// Mock the data and utility functions
vi.mock("@/app/data", () => ({
  cvData: [
    {
      type: "about",
      details: ["Test about me"],
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "test@example.com",
      },
    },
  ],
  getTopSkillsLastFiveYears: () => [{ name: "Skill 1", duration: 60 }],
  getTopLanguagesLastFiveYears: () => [{ name: "Language 1", duration: 60 }],
  getTopFrameworksLastFiveYears: () => [{ name: "Framework 1", duration: 60 }],
  formatDuration: (duration: number) => `${duration} months`,
}));

// Remove this line:
// import { filterItems } from "@/utils/search";

// Add this mock:
vi.mock("@/utils/search", () => ({
  filterItems: vi.fn((items) => items),
}));

describe("Home component", () => {
  beforeEach(() => {
    mockGet.mockReturnValue("");
    vi.clearAllMocks();
  });

  it("renders the main sections", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to My Portfolio")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Connect With Me")).toBeInTheDocument();
  });

  it("renders the Navigation component", () => {
    render(<Home />);
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("renders the SearchComponent", () => {
    render(<Home />);
    expect(screen.getByTestId("search-component")).toBeInTheDocument();
  });

  it("renders the about me section", () => {
    render(<Home />);
    expect(screen.getByText("Test about me")).toBeInTheDocument();
  });

  it("renders skills, languages, and frameworks", () => {
    render(<Home />);
    expect(screen.getByText("Skill 1")).toBeInTheDocument();
    expect(screen.getByText("Language 1")).toBeInTheDocument();
    expect(screen.getByText("Framework 1")).toBeInTheDocument();
  });

  it("renders quick links", () => {
    render(<Home />);
    expect(screen.getByText("View My CV")).toBeInTheDocument();
    expect(screen.getByText("Browse My Personal Projects")).toBeInTheDocument();
  });

  it("renders connect with me links", () => {
    render(<Home />);
    expect(screen.getByText("Github")).toBeInTheDocument();
    expect(screen.getByText("Linkedin")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("updates search term when typing in the search component", () => {
    render(<Home />);
    const searchInput = screen.getByTestId(
      "search-component"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "React" } });
    expect(searchInput.value).toBe("React");
  });

  it("filters content based on search term", async () => {
    const mockFilterItems = vi.fn((items) =>
      items.filter((item: { name: string }) => item.name === "React")
    );
    vi.mocked(require("@/utils/search").filterItems).mockImplementation(
      mockFilterItems
    );

    render(<Home />);
    const searchInput = screen.getByTestId("search-component");
    fireEvent.change(searchInput, { target: { value: "React" } });

    await waitFor(() => {
      expect(screen.queryByText("Skill 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Language 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Framework 1")).not.toBeInTheDocument();
    });

    expect(mockFilterItems).toHaveBeenCalled();
  });

  it("handles item click and navigates to CV page", () => {
    render(<Home />);
    const skillButton = screen.getByText("Skill 1");
    fireEvent.click(skillButton);
    expect(mockPush).toHaveBeenCalledWith("/cv?search=Skill%201");
  });
});
