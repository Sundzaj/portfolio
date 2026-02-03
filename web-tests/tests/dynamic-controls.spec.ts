import { test, expect } from "@playwright/test";

test.describe("Dynamic Controls", () => {
  test("Checkbox can be removed dynamically", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

    const checkbox = page.locator("#checkbox");
    const removeButton = page.getByRole("button", { name: "Remove" });
    const message = page.locator("#message");

    // assert - checkbox is visible
    await expect(checkbox).toBeVisible();

    // act
    await removeButton.click();

    // assert - checkbox disappears
    await expect(checkbox).not.toBeVisible();

    // assert - success message
    await expect(message).toHaveText("It's gone!");
  });
});
