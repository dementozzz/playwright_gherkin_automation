import { Locator, Page } from "@playwright/test";

export class AuthLocator{   
    
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginBtn: Locator

    constructor(page: Page){

        this.usernameInput = page.locator("//input[@data-test='username']")
        this.passwordInput = page.locator("//input[@data-test='password']")
        this.loginBtn = page.locator("//input[@data-test='login-button']")      
    }
}