const{test, expect} = require('playwright/test')

test('handle file upload', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/upload');

await page.locator('//input[@id="file-upload"]').setInputFiles('test-data/sample.pdf');


});