export default class Checkout_YourInformation{
    constructor(page){
        this.page = page;
        this.firstName = page.locator("//input[@id='first-name']");
        this.lastName = page.locator("//input[@id='last-name']");
        this.zipCode = page.locator("//input[@id='postal-code']");
        this.continue = page.locator("//input[@id='continue']");

    }
}
