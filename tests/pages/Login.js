import LoginObjects from '../pageObjects/LoginObjects';

export default class Login {
  constructor(page) {
    this.page = page;
    this.locate = new LoginObjects(page); 
  }

  async enterUserName(text) {
    await this.locate.userNameInputField.fill(text);
    return this;  
  }

  async enterPassword(text) {
    await this.locate.passwordInputField.fill(text);
    return this;
  }

  async clickLoginButton() {
    await this.locate.loginButton.click();
    return this;
  }
}
