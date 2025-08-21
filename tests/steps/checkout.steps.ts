import { createBdd } from 'playwright-bdd';
import { AuthPages } from '../../src/pages/auth/auth.pages';
import { HomePages } from '../../src/pages/home/home.pages';
import { CheckoutPages } from '../../src/pages/checkout/checkout.pages';
import { checkoutInterface } from '../../src/interface/checkout.interface';

const { Given, When, Then, Before } = createBdd();


Before(async ({page}) => {
    const authPage = new AuthPages(page);
    await page.goto('https://www.saucedemo.com/');
    await authPage.login('standard_user','secret_sauce');

    await authPage.expectToLoggedIn();
})

When("I'll make sure my item cart empty first", async ({page}) => {
    const homePage = new HomePages(page)
    
    try {
        await homePage.emptyCartItem();
    } catch (error) {
        throw error;
    }
    
})

When("I'll add several items in my cart", async ({page}) => {
    const homePage = new HomePages(page)
    await homePage.addItems({
        qty : 2
    })
})

Given("I fill checkout information data", async ({page}) => {
    const checkoutPage = new CheckoutPages(page);
    const checkoutInformationData : checkoutInterface = {
        firstname: "Edo",
        lastname: "Agustino",
        postalcode: "77190"
    }
    await checkoutPage.fillInformationData(checkoutInformationData)
})

When("I navigate to cart page", async ({page}) => {
    const homePage = new HomePages(page);
    await homePage.navigateToCartPage();
})

When("I proceed to checkout step 1: Information", async ({page}) => {
    const checkoutPage = new CheckoutPages(page);
    await checkoutPage.navigateToCheckoutInformationPage()
})

When("I proceed to checkout step 2: Overview", async ({page}) => {
    const checkoutPage = new CheckoutPages(page);
    await checkoutPage.navigateToCheckoutOverviewPage();
})

Given("I verify subtotal & total of items price: Checkout Overview Page", async ({page}) => {
    const checkoutPage = new CheckoutPages(page);
    await checkoutPage.expectTotalPriceIsCorrect();
})

Then("I should finish my checkout process", async ({page}) => {
    const checkoutPage = new CheckoutPages(page);
    await checkoutPage.finishCheckout();
})

Then("I see the successfull checkout text", async ({page}) => {
    const checkoutPage = new CheckoutPages(page);
    await checkoutPage.expectToFinishCheckout();
})
