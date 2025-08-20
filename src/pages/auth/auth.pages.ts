import { Page, expect } from "@playwright/test";
import { AuthLocator } from "./locator/auth.locator";

export class AuthPages{   
    
    readonly page: Page
    readonly authLocator: AuthLocator

    constructor(page: Page){
        this.page = page;
        this.authLocator = new AuthLocator(page)
    }

    async login(username: string, password: string){
        await this.authLocator.usernameInput.fill(username);
        await this.authLocator.passwordInput.fill(password);
        await this.authLocator.loginBtn.click();
    }

    async expectToLoggedIn(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}