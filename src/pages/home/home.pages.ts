import { Page, expect } from "@playwright/test";
import { HomeLocator } from "./locator/home.locator";


export class HomePages{   
    
    readonly page: Page
    readonly homeLocator: HomeLocator

    constructor(page: Page){
        this.page = page;

        this.homeLocator = new HomeLocator(page)
    }

    async navigateToCartPage(){
        await this.homeLocator.cartBtn.click();
    }

    async addItems(obj: {qty: number}){
        const availableItems = this.page.getByRole('button', { name: 'Add to cart' });
        const count = await availableItems.count();

        if(obj.qty > 0){
            for(let i = 0; i <obj.qty; i++){
                let rng = Math.floor(Math.random() * (count-1));
                await availableItems.nth(rng).click();
            }
        }
    }

    async emptyCartItem(){
        try {
            const removeButtons = this.page.getByRole('button', { name: 'Remove' });
            const count = await removeButtons.count();

            if (count > 0){
                for (let i = 0; i < count; i++) {
                    await removeButtons.nth(i).click();
                }
            }
        }catch (error) {
            throw error;
        }
    }

    async expectToSortByNameAtoZ(){
        try {
            const allItems = await this.homeLocator.itemName.allInnerTexts();
            const sortedAtoZ = [...allItems].sort((a, b) => a.localeCompare(b));

            expect(allItems).toEqual(sortedAtoZ);

            console.log(`Original Item: ${allItems}`);
            console.log(`Sorted item Item: ${sortedAtoZ}`);

        } catch (error) {
            throw error;
        }   
    }
    async expectToSortByNameZtoA(){
        try {
            const allItems = await this.homeLocator.itemName.allInnerTexts();
            const sortedZtoA = [...allItems].sort((a, b) => b.localeCompare(a));

            expect(allItems).toEqual(sortedZtoA);

            console.log(`Original Item: ${allItems}`);
            console.log(`Sorted item Item: ${sortedZtoA}`);

        } catch (error) {
            throw error;
        }
    }
    async expectToSortByPriceLowToHigh(){
        try {
            const allItems = await this.homeLocator.itemPrice.allInnerTexts();
            const finalItems = allItems.map(price => {
                return price.replace('$', '');
            })

            const sortedLowToHigh = [...finalItems].sort((a, b) => parseFloat(a) - parseFloat(b));

            expect(finalItems).toEqual(sortedLowToHigh);

            console.log(`Original Item: ${finalItems}`);
            console.log(`Sorted item Item: ${sortedLowToHigh}`);

        } catch (error) {
            throw error;
        }
       
    }
    async expectToSortByPriceHighToLow(){
        try {
            const allItems = await this.homeLocator.itemPrice.allInnerTexts();
            const finalItems = allItems.map(price => {
                return price.replace('$', '');
            })

            const sortedLowToHigh = [...finalItems].sort((a, b) => parseFloat(b) - parseFloat(a));

            expect(finalItems).toEqual(sortedLowToHigh);

            console.log(`Original Item: ${finalItems}`);
            console.log(`Sorted item Item: ${sortedLowToHigh}`);

        } catch (error) {
            throw error;
        }
    }
}