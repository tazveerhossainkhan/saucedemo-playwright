import { test, expect } from '@playwright/test';
import Login from '../pages/Login.js';

test('Login with locked_out_user credentials', async ({ page }) => {
  const loginPage = new Login(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.enterUserName('locked_out_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLoginButton();

  const expected = "Epic sadface: Sorry, this user has been locked out.";
  const errorLocator = page.locator("//h3[@data-test='error']");
  const errorText = await errorLocator.innerText();

  await expect(page.locator('//h3[@data-test="error"]'))
    .toHaveText(expected, { timeout: 10000 });
    
});


