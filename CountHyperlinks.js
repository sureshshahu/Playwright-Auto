const { test, expect } = require('playwright/test')

test('count hyperlinks on a page',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/');
const links = page.locator('a');
const count = await links.count();
console.log('Total number of hyperlinks', count);

});

