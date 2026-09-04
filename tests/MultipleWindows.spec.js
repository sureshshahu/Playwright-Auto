const {test, expect} = require('playwright/test')

test('handle multiple windows', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/windows');
await page.pause();
await page.locator("//a[text()='Click Here']").click();

const [newpage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator("//a[text()='Click Here']").click()
]);

})

//Back to Original Page
await page.bringToFront();
//Back to New Page
await newpage.bringToFront();
