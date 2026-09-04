const {test, expect} = require('@playwright/test')

test('handle textfields', async ({page})=>{

await page.goto('https://www.saucedemo.com/');
//await page.pause(); //it will open playwright inspector.

//await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
//await page.getByRole('textbox', {name: 'Username'}).clear();
await expect(page.locator('#user-name')).toBeVisible();
await expect(page.locator('#user-name')).toBeEditable();
await expect(page.locator('#user-name')).tobeempty();




await page.close();

});