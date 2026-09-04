const { test, expect } = require('@playwright/test');

test(' validate login functionality using getByRole', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
//Traditional Locators
// await page.locator('#user-name').fill('standard_user');
// await page.locator('#password').fill('secret_sauce');
// await page.locator('#login-button').click();

// Modern or in bulit Playwright Locators :
// GetByRole : It is used to locate the element based on its role and name.

await page.getByRole('textbox',{name: 'Username'}).fill('standard_user');
await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();


});
