import { Page, expect } from "@playwright/test";
import { CheckoutLocator } from "./locator/checkout.locator";
import { checkoutInterface } from "../../interface/checkout.interface";


export class CheckoutPages{   
    
    readonly page: Page
    readonly cartLocator: CheckoutLocator

    constructor(page: Page){
        this.page = page;
        this.cartLocator = new CheckoutLocator(page)
    }

    async navigateToCheckoutInformationPage(){
        await this.cartLocator.checkoutInformationBtn.click();
    }

    async navigateToCheckoutOverviewPage(){
        await this.cartLocator.checkoutOverviewBtn.click();
    }

    async finishCheckout(){
        await this.cartLocator.checkoutFinishBtn.click();
    }

    async fillInformationData(obj: checkoutInterface){
        const {
            firstname, 
            lastname, 
            postalcode
        } = obj

        await this.cartLocator.firstNameInput.fill(firstname)
        await this.cartLocator.lastNameInput.fill(lastname)
        await this.cartLocator.postalCodeInput.fill(postalcode)
    }

    async expectToFinishCheckout(){
        const successPurchaseTxt = this.cartLocator.successPurchaseTxt
        await expect(successPurchaseTxt).toBeVisible();
        await expect(successPurchaseTxt).toContainText("Thank you for your order!");
    }
}