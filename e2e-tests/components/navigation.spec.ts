import { test, expect } from "@playwright/test";

const routes = [
  { name: "Home", path: "/", linkText: "home.tsx" },
  { name: "CV", path: "/cv", linkText: "cv.tsx" },
  {
    name: "Personal Projects",
    path: "/personal-projects",
    linkText: "personal-projects.tsx",
  },
];

test.describe("Navigation Component", () => {
  for (const startRoute of routes) {
    test.describe(`Starting from ${startRoute.name} page`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(startRoute.path);
      });

      test("should display mobile navigation on small screens", async ({
        page,
      }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const mobileNav = page.locator("nav.lg\\:hidden");
        await expect(mobileNav).toBeVisible();
        const linkCount = await mobileNav.locator("a").count();
        expect(linkCount).toBe(routes.length);
      });

      test("should display desktop navigation on large screens", async ({
        page,
      }) => {
        await page.setViewportSize({ width: 1280, height: 720 });
        const desktopNav = page.locator("nav.hidden.lg\\:block");
        await expect(desktopNav).toBeVisible();
        const linkCount = await desktopNav.locator("li").count();
        expect(linkCount).toBe(routes.length);
      });

      test("should highlight active page and navigation links should work correctly", async ({
        page,
      }) => {
        await page.setViewportSize({ width: 1280, height: 720 });

        for (const route of routes) {
          const link = page.locator(`nav.hidden.lg\\:block a`, {
            hasText: route.linkText,
          });
          await link.click();
          await page.waitForURL(route.path);
          await expect(page).toHaveURL(route.path);

          // Check if the clicked link is highlighted
          await expect(link).toHaveClass(/text-yellow-400/);

          // Check if other links are not highlighted
          for (const otherRoute of routes.filter(
            (r) => r.path !== route.path
          )) {
            const otherLink = page.locator(`nav.hidden.lg\\:block a`, {
              hasText: otherRoute.linkText,
            });
            await expect(otherLink).not.toHaveClass(/text-yellow-400/);
          }
        }
      });

      test("desktop navigation should be fixed and main content should be present", async ({
        page,
      }) => {
        await page.setViewportSize({ width: 1280, height: 720 });
        const desktopNav = page.locator("nav.hidden.lg\\:block");
        const mainContent = page.locator("main");

        // Check if navigation is visible
        await expect(desktopNav).toBeVisible();

        // Check if main content is visible
        await expect(mainContent).toBeVisible();

        const navBoundingBox = await desktopNav.boundingBox();
        const contentBoundingBox = await mainContent.boundingBox();

        // Check if navigation has width
        expect(navBoundingBox?.width).toBeGreaterThan(0);

        // Check if main content has width
        expect(contentBoundingBox?.width).toBeGreaterThan(0);

        // Calculate the right edge of the navigation and main content
        const navRightEdge =
          (navBoundingBox?.x || 0) + (navBoundingBox?.width || 0);
        const contentRightEdge =
          (contentBoundingBox?.x || 0) + (contentBoundingBox?.width || 0);

        // Check if main content extends beyond the navigation
        expect(contentRightEdge).toBeGreaterThan(navRightEdge);
      });

      test("navigation should be accessible", async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 720 });

        const nav = page.locator("nav.hidden.lg\\:block");
        await expect(nav).toBeVisible();

        const links = nav.locator("a");
        const count = await links.count();

        // Check that we have at least the number of links defined in our routes
        expect(count).toBeGreaterThanOrEqual(routes.length);

        // Log the actual number of links for debugging
        console.log(`Number of navigation links: ${count}`);

        for (let i = 0; i < count; i++) {
          const link = links.nth(i);
          const linkText = await link.innerText();
          expect(linkText.trim()).not.toBe("");

          // Log each link text for debugging
          console.log(`Link ${i + 1} text: ${linkText.trim()}`);
        }
      });
    });
  }
});
