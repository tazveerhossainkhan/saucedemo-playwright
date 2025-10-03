import HamburgerObjects from "../pageObjects/HamburgerObjects.js";
export default class ResetAppState{
    constructor(page){
        this.page = page;
        this.locate = new HamburgerObjects(page);
    }
    async reset(){
        await this.locate.resetAppState.click();
    }

}