const { test, expect, request } = require('@playwright/test');
const PageFactory = require('../pageFactory');


test.use({
  viewport:{
    width: 1920,
    height: 1080,
  }
})

test('Testing search', async ({ page }) => {

  const pageFactory = new PageFactory(page);
  await page.goto('https://playwright.dev/');
  await pageFactory.searchTab.searchButton.isVisible();
  await pageFactory.searchTab.searchButton.click();
  await pageFactory.searchTab.searchInput.fill('frame');
  await page.waitForSelector(pageFactory.searchTab.searchDropdownElement);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('https://playwright.dev/docs/frames');
});

test('Testing websitenavigation', async ({ page }) => {

  const pageFactory = new PageFactory(page);
  await page.goto('https://playwright.dev/');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await pageFactory.footer.apiReferenceButton.isVisible();
  await pageFactory.footer.apiReferenceButton.click();
  await pageFactory.rightSideMenu.pageChromiumButton.click();
  await expect(page).toHaveURL('https://playwright.dev/docs/api/class-playwright#playwright-chromium');
});

test('Testing title', async ({ page }) => {

  const pageFactory = new PageFactory(page);
  await page.goto('https://playwright.dev/');
  await expect(pageFactory.mainPage.expectTitle).toHaveText('Playwright');
});


test('Testing url', async ({ page }) => {

  const pageFactory = new PageFactory(page);
  await page.goto('https://playwright.dev/');
  await pageFactory.footer.getStartedButton.click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});



