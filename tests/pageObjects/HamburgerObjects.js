export default class HamburgerObjects{
    constructor(page){
        this.page = page;
        this.hamburgerIcon = page.locator("//button[@id='react-burger-menu-btn']");
        this.resetAppState = page.locator("//a[@id='reset_sidebar_link']");
        
    }
}