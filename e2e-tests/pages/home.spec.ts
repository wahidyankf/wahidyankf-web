import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render main sections", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Welcome to My Portfolio" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Skills & Expertise" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Quick Links" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Connect With Me" })
    ).toBeVisible();
  });

  test("should render Navigation component", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("should render SearchComponent", async ({ page }) => {
    await expect(
      page.getByPlaceholder("Search skills, languages, or frameworks...")
    ).toBeVisible();
  });

  test("should render about me section", async ({ page }) => {
    const aboutMeSection = page.locator("section", { hasText: "About Me" });
    await expect(aboutMeSection).toBeVisible();
    // You may want to add more specific checks for the content of the About Me section
  });

  test("should render skills, languages, and frameworks", async ({ page }) => {
    // Check for a skill button
    await expect(
      page.getByRole("button", { name: /Software Engineering/ })
    ).toBeVisible();

    // Check for a programming language
    await expect(
      page.getByRole("button", { name: /JavaScript/ })
    ).toBeVisible();

    // Check for React-related frameworks
    await expect(page.getByRole("button", { name: "React.js" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "React Native" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "ReasonReact" })
    ).toBeVisible();
  });

  test("should render quick links", async ({ page }) => {
    await expect(page.getByRole("link", { name: "View My CV" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Browse My Personal Projects" })
    ).toBeVisible();
  });

  test("should render connect with me links", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "Github", exact: true })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "GithubOrg" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Linkedin" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Email" })).toBeVisible();
  });

  test("should update URL when searching", async ({ page }) => {
    const searchInput = page.getByPlaceholder(
      "Search skills, languages, or frameworks..."
    );
    await searchInput.fill("React");
    await searchInput.press("Enter");
    await expect(page).toHaveURL("/?search=React");
  });

  test("should filter content based on search term", async ({ page }) => {
    const searchInput = page.getByPlaceholder(
      "Search skills, languages, or frameworks..."
    );
    await searchInput.fill("React");
    await searchInput.press("Enter");

    // Check if React.js button is still visible
    await expect(page.getByRole("button", { name: "React.js" })).toBeVisible();

    // Check if some other content is not visible
    await expect(
      page.getByRole("button", { name: "Software Engineering" })
    ).not.toBeVisible();
  });

  test("should navigate to CV page when clicking on a skill", async ({
    page,
  }) => {
    // Wait for the React skill buttons to be visible
    await page.waitForSelector("button", { state: "visible" });

    // Use page.evaluate to find and click the React.js button
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      const reactButton = buttons.find((button) =>
        button.textContent?.includes("React.js")
      );
      if (reactButton) {
        (reactButton as HTMLElement).click();
      } else {
        throw new Error("React.js button not found");
      }
    });

    // Wait for navigation to complete
    await page.waitForURL("/cv?search=React.js&scrollTop=true");

    // Assert that we've navigated to the correct URL
    await expect(page).toHaveURL("/cv?search=React.js&scrollTop=true");
  });

  test("should navigate to correct pages from quick links", async ({
    page,
  }) => {
    // Navigate to CV page
    await page.evaluate(() => {
      const cvLink = document.querySelector(
        'a[href="/cv"]'
      ) as HTMLAnchorElement;
      if (cvLink) {
        cvLink.click();
      } else {
        throw new Error("CV link not found");
      }
    });
    await page.waitForURL("/cv");
    await expect(page).toHaveURL("/cv");

    await page.goto("/"); // Go back to home page

    // Navigate to Personal Projects page
    await page.evaluate(() => {
      const projectsLink = document.querySelector(
        'a[href="/personal-projects"]'
      ) as HTMLAnchorElement;
      if (projectsLink) {
        projectsLink.click();
      } else {
        throw new Error("Personal Projects link not found");
      }
    });
    await page.waitForURL("/personal-projects");
    await expect(page).toHaveURL("/personal-projects");
  });

  test("should open external links in new tabs", async ({ page, context }) => {
    // Wait for all links to be visible
    await page.waitForSelector('a[target="_blank"]');

    // Get all external links
    const externalLinks = await page.$$('a[target="_blank"]');

    for (const link of externalLinks) {
      const href = await link.getAttribute("href");
      const linkText = await link.textContent();

      if (href) {
        const [newPage] = await Promise.all([
          context.waitForEvent("page"),
          page.evaluate((url) => window.open(url, "_blank"), href),
        ]);

        await newPage.waitForLoadState();
        console.log(`Checking link: ${linkText} (${href})`);

        if (linkText?.includes("Github")) {
          await expect(newPage.url()).toContain("github.com");
        } else if (linkText?.includes("Linkedin")) {
          await expect(newPage.url()).toContain("linkedin.com");
        } else if (linkText?.includes("Email")) {
          // Check for the email address instead of mailto: protocol
          await expect(newPage.url()).toContain("wahidyankf@gmail.com");
        }

        await newPage.close();
      }
    }
  });
});
