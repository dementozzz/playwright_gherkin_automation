import { Locator, Page } from "@playwright/test";

export class CheckoutLocator{   
    
    readonly page: Page
    readonly cartItem: Locator
    readonly cartItemRemoveBtn: Locator
    readonly cartItemName: Locator
    readonly cartItemPrice: Locator
    readonly checkoutInformationBtn: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly postalCodeInput: Locator
    readonly checkoutOverviewBtn: Locator
    readonly subtotalPrice: Locator
    readonly totalPrice: Locator
    readonly checkoutFinishBtn: Locator
    readonly successPurchaseTxt: Locator


    constructor(page: Page){

        this.cartItem = page.locator("//div[@data-test='inventory-item']")
        this.cartItemRemoveBtn = page.locator("//div[@class='item_pricebar']//button")
        this.cartItemName = page.locator("//div[@data-test='inventory-item-name']")
        this.cartItemPrice = page.locator("//div[@data-test='inventory-item-price']")
        this.checkoutInformationBtn = page.locator("//button[@data-test='checkout']")


        this.firstNameInput = page.locator("//input[@data-test='firstName']")
        this.lastNameInput = page.locator("//input[@data-test='lastName']")
        this.postalCodeInput = page.locator("//input[@data-test='postalCode']")
        this.checkoutOverviewBtn = page.locator("//input[@data-test='continue']")
        //url checkout step-1: https://www.saucedemo.com/checkout-step-one.html

        
        this.subtotalPrice = page.locator("//div[@data-test='subtotal-label']")
        this.totalPrice = page.locator("//div[@data-test='total-label']")
        this.checkoutFinishBtn = page.locator("//button[@data-test='finish']")
        //url checkout step-2: https://www.saucedemo.com/checkout-step-two.html


        this.successPurchaseTxt = page.locator("//h2[@data-test='complete-header']")
        // url checkout complete: https://www.saucedemo.com/checkout-complete.html
    }


}