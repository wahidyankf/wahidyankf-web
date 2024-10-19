import { test, expect } from "@playwright/test";

test.describe("Personal Projects Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/personal-projects");
  });

  test("should render main sections", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Personal Projects" })
    ).toBeVisible();
    await expect(page.getByPlaceholder("Search projects...")).toBeVisible();
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("should render all projects initially", async ({ page }) => {
    await expect(page.getByText("AyoKoding")).toBeVisible();
    await expect(page.getByText("Organic Lever")).toBeVisible();
    await expect(page.getByText("The Organic")).toBeVisible();
  });

  test("should filter projects based on search term", async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search projects...");
    await searchInput.fill("AyoKoding");
    await searchInput.press("Enter");

    await expect(page.getByText("AyoKoding")).toBeVisible();
    await expect(page.getByText("Organic Lever")).not.toBeVisible();
    await expect(page.getByText("The Organic")).not.toBeVisible();
  });

  test("should display 'No projects found' message when no matches", async ({
    page,
  }) => {
    const searchInput = page.getByPlaceholder("Search projects...");
    await searchInput.fill("NonexistentProject");
    await searchInput.press("Enter");

    await expect(
      page.getByText("No projects found matching your search.")
    ).toBeVisible();
  });

  test("should update URL when searching", async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search projects...");
    await searchInput.fill("AyoKoding");
    await searchInput.press("Enter");

    await expect(page).toHaveURL("/personal-projects?search=AyoKoding");
  });

  test("should render project links correctly", async ({ page }) => {
    const repositoryLinks = page.getByRole("link", { name: /Repository/i });
    await expect(repositoryLinks.first()).toHaveAttribute(
      "href",
      "https://github.com/organiclever/ayokoding"
    );

    const websiteLinks = page.getByRole("link", { name: /Website/i });
    await expect(websiteLinks.first()).toHaveAttribute(
      "href",
      "https://ayokoding.com/"
    );

    const youtubeLink = page.getByRole("link", { name: /YouTube/i });
    await expect(youtubeLink).toHaveAttribute(
      "href",
      "https://www.youtube.com/@AyoKoding"
    );
  });

  test("should open external links in new tabs", async ({ page, context }) => {
    const links = [
      { name: "Repository", url: "https://github.com/organiclever/ayokoding" },
      { name: "Website", url: "https://ayokoding.com/" },
      { name: "YouTube", url: "https://www.youtube.com/@AyoKoding" },
    ];

    for (const link of links) {
      const linkElement = page
        .getByRole("link", { name: new RegExp(link.name, "i") })
        .first();

      const href = await linkElement.getAttribute("href");

      if (href) {
        const [newPage] = await Promise.all([
          context.waitForEvent("page"),
          page.evaluate((url) => window.open(url, "_blank"), href),
        ]);

        await newPage.waitForLoadState("domcontentloaded");
        expect(newPage.url()).toBe(link.url);
        await newPage.close();
      } else {
        throw new Error(
          `Link with name "${link.name}" not found or has no href attribute`
        );
      }
    }
  });

  test("should render project details correctly", async ({ page }) => {
    await expect(
      page.getByText(
        "A website to learn about software engineering through books, blogs, and YouTube videos."
      )
    ).toBeVisible();
    await expect(
      page.getByText(
        "Comprehensive learning resources for software engineering"
      )
    ).toBeVisible();
    await expect(
      page.getByText("Public learning platform to share knowledge")
    ).toBeVisible();
    await expect(
      page.getByText("Includes a YouTube channel for video content")
    ).toBeVisible();
  });
});
