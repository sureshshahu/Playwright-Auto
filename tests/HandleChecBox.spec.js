const {test , expect} = require('@playwright/test') ;

test('test checkbox', async({page})=>{

await page.goto('https://www.bing.com/account');

//await page.locator('#enAS').check();
await page.getByLabel('See search suggestions as you type').check();
await page.close();


});