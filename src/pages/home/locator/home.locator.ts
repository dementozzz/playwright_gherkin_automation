import { Locator, Page } from "@playwright/test";

export class HomeLocator{   
    
    readonly page: Page

    readonly item: Locator
    readonly itemName: Locator
    readonly itemPrice: Locator

    readonly cartBtn: Locator
    readonly selectItemBtn: Locator
    readonly sortItemBtn: Locator

    constructor(page: Page){

        this.item = page.locator("//div[@data-test='inventory-item']")
        this.itemName = page.locator("//div[@data-test='inventory-item-name']")
        this.itemPrice = page.locator("//div[@data-test='inventory-item-price']")

        this.cartBtn = page.locator("//a[@data-test='shopping-cart-link']")
        this.selectItemBtn = page.locator("//div[@class='pricebar']//button")
        this.sortItemBtn = page.locator("//select[@data-test='product-sort-container']")     
    }
}