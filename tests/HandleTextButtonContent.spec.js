const {test, expect} = require('@playwright/test');

//TextContent
//allTextContents


test('handle text button content', async ({page}) => {

    await page.goto('https://in.bookmyshow.com/');
    //const val = await page.locator("//div[@class='sc-1jg5yz-1 etWTgO']").nth(3).textContent();
    
    const val = await page.locator("//div[@class='sc-1jg5yz-1 etWTgO']").allTextContents();

    console.log(val);

    await page.close();


});