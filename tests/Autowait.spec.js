const {test,expect} = require('@playwright/test')

test('Autowait tc 1', async({page})=>{

await page.goto('http://uitestingplayground.com/ajax');
await page.locator('#ajaxButton').click();
//await page.waitForSelector('.bg-success');
//await page.locator('.bg-success').click();

const val = await page.locator('.bg-success').textContent();
console.log(val);

await page.close();



});