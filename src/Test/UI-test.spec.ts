import { test } from "../Fixtures/fixtures";

test.describe("Items sorting test", () => {

    test.beforeEach("Go to https://www.saucedemo.com/ and login " , async ({ loginPage }) => {
        await loginPage.launchURL();
        await loginPage.login("standard_user", "secret_sauce");
    });

    test("2. Verify that the items are sorted by Name ( A -> Z )", async ({ itemsPage }) => {
        await itemsPage.verifyItemsSortedByNameAsc();
    })
    test("3. Change the sorting to Name ( Z -> A)", async ({ itemsPage }) => {
        await itemsPage.sortItemsByNameDesc();
    })
    test("4. Verify that the items are sorted correctly", async ({ itemsPage }) => {
        await itemsPage.verifyItemsSortedByNameDesc();
    });
});