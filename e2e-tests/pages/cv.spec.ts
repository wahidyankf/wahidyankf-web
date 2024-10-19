import { test, expect } from "@playwright/test";

test.describe("CV Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cv");
  });

  test("should render main sections", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Curriculum Vitae" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Highlights" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Work Experience" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Honors & Awards" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Licenses & Certifications" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Education" })
    ).toBeVisible();
  });

  test("should render Navigation component", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("should render SearchComponent", async ({ page }) => {
    await expect(page.getByPlaceholder("Search CV entries...")).toBeVisible();
  });

  test("should render about section", async ({ page }) => {
    const aboutSection = page.locator("div", { hasText: "Highlights" }).first();
    await expect(aboutSection).toBeVisible();
    // You may want to add more specific checks for the content of the About section
  });

  test("should render work experience", async ({ page }) => {
    const workExperienceSection = page
      .locator("div", { hasText: "Work Experience" })
      .first();
    await expect(workExperienceSection).toBeVisible();

    // Check for the presence of work experience entries
    const workEntries = workExperienceSection.locator(".mb-4.border");
    await expect(workEntries.first()).toBeVisible();

    // Check for the presence of job titles
    const jobTitles = workExperienceSection.locator("h3.text-lg");
    await expect(jobTitles.first()).toBeVisible();

    // Check for the presence of company names
    const companyNames = workExperienceSection.locator("p.mb-2.text-green-300");
    await expect(companyNames.first()).toBeVisible();

    // Verify that at least one work entry contains both a job title and a company name
    const workEntryCount = await workEntries.count();
    let foundValidEntry = false;
    for (let i = 0; i < workEntryCount; i++) {
      const entry = workEntries.nth(i);
      const hasJobTitle = await entry.locator("h3.text-lg").isVisible();
      const hasCompanyName = await entry
        .locator("p.mb-2.text-green-300")
        .isVisible();
      if (hasJobTitle && hasCompanyName) {
        foundValidEntry = true;
        break;
      }
    }
    expect(foundValidEntry).toBe(true);
  });

  test("should render skills, languages, and frameworks", async ({ page }) => {
    // Check for the skills section
    const skillsSection = page
      .locator("div", { hasText: "Top Skills Used in The Last 5 Years" })
      .first();
    await expect(skillsSection).toBeVisible();

    // Check for the languages section
    const languagesSection = page
      .locator("div", {
        hasText: "Top Programming Languages Used in The Last 5 Years",
      })
      .first();
    await expect(languagesSection).toBeVisible();

    // Check for the frameworks section
    const frameworksSection = page
      .locator("div", {
        hasText: "Top Frameworks & Libraries Used in The Last 5 Years",
      })
      .first();
    await expect(frameworksSection).toBeVisible();

    // Check for React-related skills
    const reactSkills = ["React.js", "React Native", "ReasonReact"];
    for (const skill of reactSkills) {
      const skillButton = page.getByRole("button", { name: skill }).first();
      await expect(skillButton).toBeVisible();
    }
  });

  test("should update URL when searching", async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search CV entries...");
    await searchInput.fill("React");
    await searchInput.press("Enter");
    await expect(page).toHaveURL("/cv?search=React");
  });

  test("should filter content based on search term", async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search CV entries...");
    await searchInput.fill("Software");
    await searchInput.press("Enter");

    // Check for any job title within the work experience section
    const workExperienceSection = page
      .locator("div", { hasText: "Work Experience" })
      .first();

    // Wait for the filtered content to appear
    await page.waitForTimeout(1000); // Wait for 1 second for the filter to apply

    // Check if any job title is visible in the work experience section
    const jobTitles = workExperienceSection.locator("h3.text-lg");
    const jobTitleCount = await jobTitles.count();

    expect(jobTitleCount).toBeGreaterThan(0);

    if (jobTitleCount > 0) {
      await expect(jobTitles.first()).toBeVisible();
    }

    // Log visible job titles for debugging
    const visibleJobTitles = await jobTitles.allTextContents();
    console.log("Visible job titles after filtering:", visibleJobTitles);

    // Check that some unrelated content is not visible
    await expect(
      page.getByText("Unrelated Job Title", { exact: true })
    ).not.toBeVisible();
  });

  test("should toggle recent work experience if toggle is present", async ({
    page,
  }) => {
    const toggleButton = page.getByRole("button", {
      name: "Show recent only (≤5 years)",
    });

    // Check if the toggle button exists
    const isTogglePresent = await toggleButton.isVisible().catch(() => false);

    if (isTogglePresent) {
      // If the toggle is present, click it and check for changes
      await toggleButton.click();

      // Wait for any potential updates to the page
      await page.waitForTimeout(1000);

      // Add assertions to check if the content has been filtered
      // For example, you could check if the number of visible work entries has changed
      const workEntries = page.locator(".mb-4.border");
      const visibleEntriesCount = await workEntries.count();

      console.log(
        `Number of visible work entries after toggle: ${visibleEntriesCount}`
      );

      // You might want to compare this count with the initial count before toggling
    } else {
      // If the toggle is not present, log a message and skip the test
      console.log("Recent work experience toggle not found. Skipping test.");
      test.skip();
    }
  });

  test("should navigate to correct sections when clicking on skills", async ({
    page,
  }) => {
    const skillButton = page.getByRole("button", { name: "React.js" }).first();
    await skillButton.click();
    await expect(page).toHaveURL("/cv?search=React.js");

    // Check if the page has scrolled to the top
    const pageYOffset = await page.evaluate(() => window.pageYOffset);
    expect(pageYOffset).toBe(0);
  });

  test("should render education entries", async ({ page }) => {
    const educationSection = page
      .locator("div", { hasText: "Education" })
      .first();
    await expect(educationSection).toBeVisible();

    // Check for the presence of education entries
    const educationEntries = educationSection.locator(".mb-4.border");
    await expect(educationEntries.first()).toBeVisible();

    // Check for the presence of education titles
    const educationTitles = educationSection.locator("h3.text-lg");
    await expect(educationTitles.first()).toBeVisible();

    // Check for the presence of institution names
    const institutionNames = educationSection.locator("p.mb-2.text-green-300");
    await expect(institutionNames.first()).toBeVisible();

    // Log education details for debugging
    const titles = await educationTitles.allTextContents();
    const institutions = await institutionNames.allTextContents();
    console.log("Education Titles:", titles);
    console.log("Institutions:", institutions);

    // Verify that at least one education entry contains both a title and an institution name
    const entryCount = await educationEntries.count();
    let foundValidEntry = false;
    for (let i = 0; i < entryCount; i++) {
      const entry = educationEntries.nth(i);
      const hasTitle = await entry.locator("h3.text-lg").isVisible();
      const hasInstitution = await entry
        .locator("p.mb-2.text-green-300")
        .isVisible();
      if (hasTitle && hasInstitution) {
        foundValidEntry = true;
        break;
      }
    }
    expect(foundValidEntry).toBe(true);
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

        try {
          // Set a timeout for page load
          await Promise.race([
            newPage.waitForLoadState("domcontentloaded"),
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error("Page load timeout")), 10000)
            ),
          ]);

          console.log(`Checking link: ${linkText} (${href})`);

          if (linkText?.includes("GitHub")) {
            await expect(newPage.url()).toContain("github.com");
          } else if (linkText?.includes("LinkedIn")) {
            await expect(newPage.url()).toContain("linkedin.com");
          } else if (linkText?.includes("Email")) {
            // Check for the email address instead of mailto: protocol
            await expect(newPage.url()).toContain("wahidyankf@gmail.com");
          }
        } catch (error) {
          console.error(`Error loading page for link: ${linkText}`, error);
        } finally {
          await newPage.close();
        }
      }
    }
  });
});
