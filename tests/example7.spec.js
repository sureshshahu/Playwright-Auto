const{test, expect} = require('@playwright/test');

test('verify the image on Bing homepage by using getbyalttext', async({page})=>{

// GetByAltText : It is used to locate the element based on its alt text. It is used for images, icons, and other elements that have an alt attribute. It is more reliable and less prone to changes in the UI. It is also more readable and easier to understand.
await page.goto('https://www.bing.com/');

await page.getByAltText('© News18').first().click();

});