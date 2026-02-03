import { test, expect } from "@playwright/test";

test("GET single user from DummyJSON", async ({ request }) => {
  const response = await request.get("https://dummyjson.com/users/1");

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.email).toContain("@");
});
