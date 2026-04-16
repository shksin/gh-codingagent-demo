import { expect, test } from "@playwright/test";

test.describe("Credit Card App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads and shows the credit card", async ({ page }) => {
    await expect(page).toHaveTitle(/GitHub Copilot Demo/);
  });

  test("displays the GitHub Copilot header", async ({ page }) => {
    await expect(page.getByText("GitHub")).toBeVisible();
    await expect(page.getByText("Copilot")).toBeVisible();
  });

  test("displays the credit card number", async ({ page }) => {
    await expect(page.getByText("1234")).toBeVisible();
    await expect(page.getByText("5678")).toBeVisible();
    await expect(page.getByText("9012")).toBeVisible();
    await expect(page.getByText("3456")).toBeVisible();
  });

  test("displays the expiry date", async ({ page }) => {
    await expect(page.getByText("EXPIRE")).toBeVisible();
    await expect(page.getByText("15/25")).toBeVisible();
  });

  test("shows the First Name input field", async ({ page }) => {
    const input = page.getByPlaceholder("First Name");
    await expect(input).toBeVisible();
  });

  test("accepts text input in First Name field", async ({ page }) => {
    const input = page.getByPlaceholder("First Name");
    await input.fill("John Doe");
    await expect(input).toHaveValue("John Doe");
  });
});
