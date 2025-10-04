export default class MyCartObjects{
    constructor(page){
        this.page = page;
        this.checkoutButton = page.locator("//button[@id='checkout']");

    }
}