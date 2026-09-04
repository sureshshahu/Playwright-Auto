const {test, expect} = require('@playwright/test');

test('verify the login page using getBylabel',async({page})=>{

await page.goto('https://www.salesforce.com/in/sales/demos/crm-overview/?d=701ed00000ag7FxAAI&nc=701ed00000afbnyAAA&utm_source=google&utm_medium=sem&utm_campaign=apac_in_all-sales-cloud-apm-l2_cross-industry&utm_content=cross-segment_brand+phrase_701ed00000ag7FxAAI_english_crm-overview&gclsrc=aw.ds&gad_source=1&gad_campaignid=22826734729&gbraid=0AAAABAVuWUlADCEFl8OVAau9bmalAcrzF&gclid=CjwKCAjw0o3SBhBVEiwAh28-jZmWrLIXpWx7UCfy_uWa6gkAMlgFD4OlP0TcOtKO0J2HcSsH0na2hxoCXl0QAvD_BwE');

//await page.pause();
// GetByLabel : It is used to locate the element based on its label. 


await page.getByLabel('First name').fill('Suresh');
await page.getByLabel('Last name').fill('Shahu');



})