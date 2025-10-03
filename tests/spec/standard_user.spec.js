import { test, expect } from '@playwright/test';
import Login from '../pages/Login.js';
import ResetAppState from '../pages/ResetAppState.js'

test('Login with standard_user credentials', async ({ page }) => {
  const loginPage = new Login(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.enterUserName('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLoginButton();

  const reset = new ResetAppState(page);
  await reset.reset();
    
});


