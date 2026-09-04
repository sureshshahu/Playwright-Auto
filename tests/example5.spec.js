const {test, expect} = require('@playwright/test');

test('test navigate to JQuery page', async({page})=>{

await page.goto('https://jqueryui.com/');

await page.pause();

// GetByTitle : It is used to locate the element based on its title.

await page.getByTitle('jQuery UI').first().click();


});