import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { AuthPages } from '../../src/pages/auth/auth.pages';
import { HomePages } from '../../src/pages/home/home.pages';

const { Given, When, Then, Before } = createBdd();

Before(async ({page}) => {
    const authPage = new AuthPages(page);
    await page.goto('https://www.saucedemo.com/');
    await authPage.login('standard_user','secret_sauce');

    await authPage.expectToLoggedIn();
})

When('I sort item by name: A to Z', async ({ page }) => {
    await page.locator("//select[@data-test='product-sort-container']").selectOption('az');
});

When('I sort item by name: Z to A', async ({ page }) => {
    await page.locator("//select[@data-test='product-sort-container']").selectOption('za');
});

When('I sort item by price: Low to High', async ({ page }) => {
    await page.locator("//select[@data-test='product-sort-container']").selectOption('lohi');
});

When('I sort item by price: High to Low', async ({ page }) => {
    await page.locator("//select[@data-test='product-sort-container']").selectOption('hilo');
});

Then('I should verify item is sorted correctly: Z to A', async ({ page }) => {
    const homePage = new HomePages(page);
    await homePage.expectToSortByNameZtoA();
});

Then('I should verify item is sorted correctly: A to Z', async ({ page }) => {
    const homePage = new HomePages(page);
    await homePage.expectToSortByNameAtoZ();
});

Then('I should verify item is sorted correctly: higher price to lower price', async ({ page }) => {
    const homePage = new HomePages(page);
    await homePage.expectToSortByPriceHighToLow();
});

Then('I should verify item is sorted correctly: lower price to higher price', async ({ page }) => {
    const homePage = new HomePages(page);
    await homePage.expectToSortByPriceLowToHigh();
});