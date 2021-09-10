const { test, expect } = require('@playwright/test');

test('landing page test', async ({ page }) => {
    await page.goto('https://ultimateqa.com/fake-landing-page');
    const title = await page.title();
    await expect(title).toEqual('Fake landing page - Ultimate QA ');
});