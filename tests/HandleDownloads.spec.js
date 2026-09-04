const {test, expect} = require ('playwright/test')


test('handle downlaods', async({page})=>{

 await page.goto('https://the-internet.herokuapp.com/download');
 
 //wait for the download to start
 const[download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("//a[text()='some-file.txt']").click()
 ]);


});