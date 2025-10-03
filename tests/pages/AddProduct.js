import AddProductObjects from '../pageObjects/AddProductObjects.js';
import { getRandomNumber } from '../utils/randomNumber.js';

export default class AddProduct {
  constructor(page) {
    this.page = page;
    this.locate = new AddProductObjects(page);
  }

  async addRandomProducts(count = 3) {
    const totalProducts = await this.locate.products.count();
    const selectedIndexes = new Set();

    while (selectedIndexes.size < count) {
      const randomIndex = getRandomNumber(1, totalProducts - 1);
      selectedIndexes.add(randomIndex);
    }

    for (const index of selectedIndexes) {
      await this.locate.addToCartButtons.nth(index).click();
    }
    await this.locate.cartIcon.click();
  }
  
}
