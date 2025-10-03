import { getRandomNumber } from '../utils/randomNumber.js';
export default class AddProductObjects

{
    constructor(page){
        this.page = page;
        this.products = page.locator("//div[@class='inventory_item']");
        this.addToCartButtons = page.locator("//button[contains(@id, 'add-to-cart-')]");
        this.cartIcon = page.locator("//a[@class='shopping_cart_link']");

    }
    
}