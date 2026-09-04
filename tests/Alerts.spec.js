const{test,expect} = require('playwright/test')

test('Handle Alerts', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog=>{
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept()
})

    await page.pause();
    await page.locator('button', { hasText: 'Click for JS Alert' }).click();

})

