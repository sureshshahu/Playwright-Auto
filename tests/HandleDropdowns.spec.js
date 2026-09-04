const {test, expect} = require('@playwright/test')

test('handle dropdowns', async({page})=>{

await page.goto('https://www.salesforce.com/in/sales/demos/crm-overview/?d=701ed00000ag7FxAAI&nc=701ed00000afbnyAAA&utm_source=google&utm_medium=sem&utm_campaign=apac_in_all-sales-cloud-apm-l2_cross-industry&utm_content=cross-segment_brand+phrase_701ed00000ag7FxAAI_english_crm-overview&gclsrc=aw.ds&gad_source=1&gad_campaignid=22826734729&gbraid=0AAAABAVuWUlADCEFl8OVAau9bmalAcrzF&gclid=CjwKCAjw0o3SBhBVEiwAh28-jZmWrLIXpWx7UCfy_uWa6gkAMlgFD4OlP0TcOtKO0J2HcSsH0na2hxoCXl0QAvD_BwE');

await page.pause(); //it will open playwright inspector.
await page.locator('select[name="country"]').selectOption('Albania');
await page.locator('//select [@name ="country"]').selectOption('Albania');


await page.getByRole('combobox').selectOption('Algeria');
await page.getByLabel('country/region').selectOption('Aland Islands');
await page.locator('//select [@name ="country"]').selectOption('Albania');
//tagname[attribute='value']
await page.locator('select[name="country"]').selectOption('Albania');
await page.close();


});