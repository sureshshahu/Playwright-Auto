const {test, expect} = require('@playwright/test');

test('Saucedemo login with valid credentials', async ({ page }) =>{


await page.goto('/');

//Traditional Locators
await page.fill('#user-name', 'standard_user');

await page.fill('#password','secret_sauce');

await page.click('#login-button');

await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


});