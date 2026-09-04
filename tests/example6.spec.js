const {test, expect} = require('@playwright/test');

test( 'verify the login page using getbytext', async({page})=>{

    //GetByText : It is used to locate the element based on its text.
    //Span, div, a, p, h1, h2, h3, h4, h5, h6, li, td, th, button,

await page.goto('https://www.flipkart.com/');

await page.getByText('Login').click();


});