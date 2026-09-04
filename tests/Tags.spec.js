const{test, expect} = require('@playwright/test');


test ('Tag tc 1', { tag: '@smoke' }, async ({page})=> {
    
await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
    
});

test('Tag tc 2', { tag: '@regression' }, async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();
});

test('Tag tc 3', { tag: ['@smoke', '@regression', '@story1'] }, async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('Surya');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('Tag tc 4', { tag: ['@smoke', '@regression', '@story2'] }, async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('Surya');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();
});