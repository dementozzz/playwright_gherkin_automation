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

    async getTax(){
        const tax = await this.cartLocator.itemTax.innerText();
        const finaltax = tax.replace("Tax: $", "");

        return parseFloat(finaltax);
    }

    async getTotalPrice(){
        const totalPrice = await this.cartLocator.totalPrice.innerText();
        const finalTotalPrice = totalPrice.replace("Total: $", "");

        return parseFloat(finalTotalPrice);
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

    async expectTotalPriceIsCorrect(){
        let price = 0.00
        const itemPrice = this.cartLocator.cartItemPrice;
        const countSubTotal = await itemPrice.count()

        if(countSubTotal > 0){
            for (let i=0; i<countSubTotal; i++){
                const val = await itemPrice.nth(i).innerText();
                const finalVal = val.replace('$', '');
                price = price + parseFloat(finalVal);   
            }

            const subtotalTxt = await this.cartLocator.subtotalPrice.innerText();
            const finalSubtotalTxt = subtotalTxt.replace("Item total: $", "");

            expect(parseFloat(finalSubtotalTxt).toFixed(2)).toEqual(price.toFixed(2));

            const tax = await this.getTax();
            const totalPrice = await this.getTotalPrice();
            price = price + tax;

            expect(totalPrice.toFixed(2)).toEqual(price.toFixed(2));
        }
    }

    async expectToFinishCheckout(){
        const successPurchaseTxt = this.cartLocator.successPurchaseTxt
        await expect(successPurchaseTxt).toBeVisible();
        await expect(successPurchaseTxt).toContainText("Thank you for your order!");
    }
}