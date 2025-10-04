import AddProductObjects from '../pageObjects/AddProductObjects.js';
import { getRandomNumber } from '../utils/randomNumber.js';

export default class AddProduct {
  constructor(page) {
    this.page = page;
    this.locate = new AddProductObjects(page);
  }

  async addRandomProducts(count = 3) {
    const total = await this.locate.products.count();
    const pick = Math.min(count, total);

    const chosen = new Set();
    while (chosen.size < pick) {
      chosen.add(getRandomNumber(0, total - 1)); 
    }
    for (const i of chosen) {
      await this.locate.addToCartButtons.nth(i).click();
    }
    await this.locate.cartIcon.click(); 
  }
}
