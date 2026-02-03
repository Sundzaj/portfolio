import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { validUser, invalidUser } from "../utils/testData";

test.describe("Login tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Successful login", async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
  });
});

test.describe("Login tests", () => {
  test("Successful login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(validUser.username, validUser.password);

    await expect(page.locator('a[href="/logout"]')).toBeVisible();
  });

  test("Login fails with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(invalidUser.username, invalidUser.password);

    await expect(loginPage.errorMessage).toContainText(
      "Your username is invalid",
    );
  });
});
