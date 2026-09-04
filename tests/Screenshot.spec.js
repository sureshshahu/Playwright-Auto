const {test, expect} = require('playwright/test')

test('handle screenshot', async({page})=>{ 

await page.goto('https://www.saucedemo.com/');
await page.pause();

await page.screenshot({path:'screenshot.png', fullPage:true}); 


});