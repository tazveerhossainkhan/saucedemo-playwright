# 🧪 SauceDemo Playwright Automation — Locked Out User Validation

This repository contains a **Playwright automated test** for the [Sauce Demo](https://www.saucedemo.com/) website using the **Page Object Model (POM)** structure.  
The focus of this task is to **validate the error message displayed when a locked-out user attempts to log in**.

---

## 📝 Task Overview

**Task:**  
> Attempt to log in with the `locked_out_user` credentials and **verify the exact error message** displayed on the login page.

### ✅ What the test does:
1. Opens the [Sauce Demo](https://www.saucedemo.com/) login page.  
2. Enters:
   - Username: `locked_out_user`  
   - Password: `secret_sauce`
3. Clicks the **Login** button.  
4. Waits for the error message to appear.  
5. Verifies the error text matches:

Epic sadface: Sorry, this user has been locked out.

---

## 📁 Project Structure

.
├── pageObjects/
│ └── LoginObjects.js
│
├── pages/
│ └── Login.js
│
├── spec/
│ └── locked-out-user.spec.js
│
├── utils/
│
├── playwright.config.js
├── package.json
└── README.md


- **pageObjects/** → Locator definitions for login fields and error message.  
- **pages/** → Page actions for interacting with the login page.  
- **spec/** → The actual test validating the locked-out user error message.

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/tazveerhossainkhan/saucedemo-playwright.git
   cd <saucedemo-playwright>
Install dependencies
```bash
npm install
Install Playwright browsers
```
```bash
npx playwright install
```
🧭 Running the Test
Run all tests:
```bash
npx playwright test
```
Run only the locked-out user test:

```bash
npx playwright test tests/spec/locked-out-user.spec.js
```
Run in headed mode:
```bash
npx playwright test --project=chromium --headed
```
View HTML report:

npx playwright show-report
🧠 Notes
The test waits for the error message element and then retrieves its text.

The expect assertion checks exact string match with the expected error message.

The structure uses Page Object Model for clean separation:

LoginObjects → defines input fields, login button, and error locator.

Login.js → handles filling credentials and clicking login.

locked-out-user.spec.js → contains the assertion.

📄 License
MIT © 2025 Your Name

