const {test, expect}= require('playwright/test')

test('handle Drag and Drop', async({page})=>{


await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
await page.pause();

await page.locator('#column-a').dragTo(await page.locator('#column-b'));
await page.waitForTimeout(15000);


})