export default class LoginObjects {
  constructor(page) {
    this.page = page;
    this.userNameInputField = page.locator("//input[@id='user-name']");
    this.passwordInputField = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//input[@id='login-button']");
  }
}
