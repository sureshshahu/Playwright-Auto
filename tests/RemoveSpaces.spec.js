const {test, expect} = require('@playwright/test');

test('remove spaces', () => {
    const str = 'Suresh Shahu 33';
    const result = str.replace(/\s/g, '');
    expect(result).toBe('SureshShahu33');
});
