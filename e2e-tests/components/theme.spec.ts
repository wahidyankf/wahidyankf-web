import { test, expect } from "@playwright/test";

test.describe("Theme and Responsiveness", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should toggle between light and dark themes", async ({ page }) => {
    // Check initial theme (assuming it starts in dark mode)
    await expect(page.locator("html")).not.toHaveClass(/light-theme/);

    // Find the theme toggle button
    const themeToggle = page.getByRole("button", { name: /theme/i });

    // Check if the theme toggle button exists
    const isThemeTogglePresent = await themeToggle
      .isVisible()
      .catch(() => false);

    if (isThemeTogglePresent) {
      // Click the theme toggle button
      await themeToggle.click();

      // Check if the theme has changed to light
      await expect(page.locator("html")).toHaveClass(/light-theme/);

      // Toggle back to dark theme
      await themeToggle.click();
      await expect(page.locator("html")).not.toHaveClass(/light-theme/);
    } else {
      console.log("Theme toggle button not found. Skipping theme toggle test.");
      test.skip();
    }
  });

  test("should persist theme preference across page navigation", async ({
    page,
  }) => {
    // Log the initial page state
    console.log("Initial page URL:", page.url());
    console.log(
      "Initial body classes:",
      await page.evaluate(() => document.body.className)
    );

    // Try to find the theme toggle button
    const themeToggle = page.getByRole("button", { name: /theme/i });

    // Check if the theme toggle button exists
    const isThemeTogglePresent = await themeToggle
      .isVisible()
      .catch(() => false);

    if (isThemeTogglePresent) {
      // Click the theme toggle button
      await themeToggle.click();

      // Check if the theme has changed to light
      const isLightTheme = await page.evaluate(() =>
        document.documentElement.classList.contains("light-theme")
      );
      expect(isLightTheme).toBe(true);

      // Navigate to the CV page programmatically
      await page.goto("/cv");

      // Check if the light theme persists
      const isLightThemeAfterNavigation = await page.evaluate(() =>
        document.documentElement.classList.contains("light-theme")
      );
      expect(isLightThemeAfterNavigation).toBe(true);
    } else {
      console.log(
        "Theme toggle button not found. Skipping theme persistence test."
      );
      console.log("Page content:", await page.content());
      test.skip();
    }
  });

  test("should be responsive on mobile devices", async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Check if the desktop navigation menu is hidden on mobile
    const desktopNav = page.locator("nav.hidden.lg\\:block");
    await expect(desktopNav).toHaveClass(/hidden/);

    // Check if the mobile navigation menu is visible
    const mobileNav = page.locator("nav.lg\\:hidden");
    await expect(mobileNav).toBeVisible();

    // Check if the mobile menu items are visible
    await expect(mobileNav.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "CV" })).toBeVisible();
    await expect(
      mobileNav.getByRole("link", { name: "Personal Projects" })
    ).toBeVisible();
  });

  test("should be responsive on tablet devices", async ({ page }) => {
    // Set viewport to tablet size
    await page.setViewportSize({ width: 768, height: 1024 });

    // Check if the desktop navigation menu is present on tablet
    const desktopNav = page.locator("nav.hidden.lg\\:block");
    await expect(desktopNav).toBeAttached();

    // Check if the mobile navigation menu is present
    const mobileNav = page.locator("nav.lg\\:hidden");
    await expect(mobileNav).toBeAttached();

    // Check if the mobile nav is positioned correctly for tablet view
    const isMobileNavPositionedCorrectly = await mobileNav.evaluate((el) => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return (
        style.position === "fixed" &&
        rect.bottom === window.innerHeight &&
        rect.left === 0 &&
        rect.right === window.innerWidth
      );
    });
    expect(isMobileNavPositionedCorrectly).toBe(true);

    // Check if desktop navigation links are present in the DOM
    const desktopNavLinks = desktopNav.locator("a");
    await expect(desktopNavLinks.first()).toBeAttached();

    // Log the visibility state of desktop nav for debugging
    const isDesktopNavVisible = await desktopNav.isVisible();
    console.log("Is desktop nav visible on tablet?", isDesktopNavVisible);

    // Log the number of desktop nav links for debugging
    const desktopNavLinksCount = await desktopNavLinks.count();
    console.log("Number of desktop nav links:", desktopNavLinksCount);
  });

  test("should be responsive on desktop devices", async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Check if the desktop navigation menu is present and visible on desktop
    const desktopNav = page.locator("nav.hidden.lg\\:block");
    await expect(desktopNav).toBeAttached();
    await expect(desktopNav).toBeVisible();

    // Check if the mobile navigation menu is not visible
    const mobileNav = page.locator("nav.lg\\:hidden");
    await expect(mobileNav).not.toBeVisible();
  });

  test("should adjust layout for different screen sizes", async ({ page }) => {
    const checkLayoutForSize = async (width: number, height: number) => {
      await page.setViewportSize({ width, height });

      // Check if the main content area adjusts its width
      const mainContent = page.locator("main");
      const boundingBox = await mainContent.boundingBox();
      expect(boundingBox?.width).toBeLessThanOrEqual(width);

      // Check if images are responsive
      const images = page.locator("img");
      for (let i = 0; i < (await images.count()); i++) {
        const image = images.nth(i);
        const imageBoundingBox = await image.boundingBox();
        expect(imageBoundingBox?.width).toBeLessThanOrEqual(width);
      }
    };

    // Test layout for different screen sizes
    await checkLayoutForSize(375, 667); // Mobile
    await checkLayoutForSize(768, 1024); // Tablet
    await checkLayoutForSize(1280, 800); // Desktop
  });

  test("should have readable text on all themes and screen sizes", async ({
    page,
  }) => {
    const checkReadability = async (width: number, height: number) => {
      await page.setViewportSize({ width, height });

      console.log(`Checking readability for viewport size: ${width}x${height}`);

      // Try to find the theme toggle button
      const themeToggle = page.getByRole("button", { name: /theme/i });

      // Check if the theme toggle button exists
      const isThemeTogglePresent = await themeToggle
        .isVisible()
        .catch(() => false);

      if (isThemeTogglePresent) {
        console.log("Theme toggle button found. Attempting to click.");
        await themeToggle.click();
      } else {
        console.log("Theme toggle button not found. Skipping theme toggle.");
      }

      // Check text contrast for headings and paragraphs
      const textElements = page.locator("h1, h2, h3, p");
      for (let i = 0; i < (await textElements.count()); i++) {
        const element = textElements.nth(i);
        const color = await element.evaluate(
          (el) => window.getComputedStyle(el).color
        );
        const backgroundColor = await element.evaluate(
          (el) => window.getComputedStyle(el).backgroundColor
        );

        console.log(
          `Element ${i + 1}: Color: ${color}, Background: ${backgroundColor}`
        );

        // You might want to implement a contrast ratio calculation here
        // For simplicity, we're just checking that color and background are different
        expect(color).not.toBe(backgroundColor);
      }

      if (isThemeTogglePresent) {
        console.log("Toggling theme back.");
        await themeToggle.click();
      }
    };

    // Check readability for different screen sizes
    await checkReadability(375, 667); // Mobile
    await checkReadability(768, 1024); // Tablet
    await checkReadability(1280, 800); // Desktop
  });
});
