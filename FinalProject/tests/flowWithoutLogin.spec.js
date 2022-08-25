const { test, expect, request } = require('@playwright/test');
const PageFactory = require('../pageObjects/PageFactory');

let pageFactory, page

test.describe('Basic functionality without login', () => {

  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    pageFactory = new PageFactory(page);
  });

  test.beforeEach(async () => {
    await page.goto(pageFactory.basePage.baseUrl);
  })

  test('Testing redirect from left side menu', async () => {
  await pageFactory.leftSideMenu.salesButton.isVisible();
  await pageFactory.leftSideMenu.salesButton.click();
  await expect(page).toHaveURL(pageFactory.leftSideMenu.expectUrlAfterRedirect);
});

test('Testing search input ', async () => {
  await pageFactory.searchTab.searchInput.isVisible();
  await pageFactory.searchTab.searchInput.fill(pageFactory.searchTab.textInInput);
  await page.waitForSelector(pageFactory.searchTab.searchDropdownElement);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(pageFactory.searchTab.expectUrlSearchPage);
});

test('Testing redirect from section page', async () => {
  await pageFactory.leftSideMenu.goodsForSchoolButton.click();
  await pageFactory.leftSideMenu.selectGoodsButton.click();
  await pageFactory.headerSchoolGoodsPage.stationeryButton.click();
  await expect(page).toHaveURL(pageFactory.headerSchoolGoodsPage.expectUrlAfterRedirect);
});


test('Testing adding product to basket', async () => {
  await page.hover(pageFactory.leftSideMenu.foodButton);
  await pageFactory.leftSideMenu.chocolateProductsButton.click();
  await pageFactory.productPage.redirectToFirstSingleItem.click();
  await pageFactory.productPage.buyButton.click();
  await expect(pageFactory.header.goodsQuantity).toHaveText('1');
});

test('Testing redirect to store', async () => {
  await page.hover(pageFactory.leftSideMenu.foodButton);
  await pageFactory.leftSideMenu.chocolateProductsButton.click();
  await pageFactory.productPage.redirectToFirstSingleItem.click();
  await pageFactory.productPage.availableIAnotherStoresButton.click();
  await pageFactory.allStoresPage.storeOnHoruzhey.click();
  await pageFactory.allStoresPage.theWholeGoodsHoruzheyStore.click();
 await expect(page).toHaveURL(pageFactory.allStoresPage.storeHoruzheyPage);
});

test('Testing call back functionality', async () => {
  await pageFactory.header.callBackButton.click();
  await pageFactory.modalWindow.inputForName.fill('Мария');
  await pageFactory.modalWindow.phoneInput.fill('3858566');
  await pageFactory.modalWindow.submitCallBackButton.click();
  await expect(pageFactory.modalWindow.closeButton).toBeVisible();
});

test('Testing redirect delete filter from section page', async () => {
  await page.hover(pageFactory.leftSideMenu.foodButton);
  await pageFactory.leftSideMenu.chocolateProductsButton.click();
  await pageFactory.productPage.deleteFilterButton.click();
  await expect(page).toHaveURL(pageFactory.productPage.expectUrlWithFilters);
});

test('Testing adding product to favorit for not logged in users', async () => {
  await page.hover(pageFactory.leftSideMenu.foodButton);
  await pageFactory.leftSideMenu.chocolateProductsButton.click();
  await pageFactory.productPage.redirectToFirstSingleItem.click();
  await pageFactory.productPage.favoriteButton.click();
  await expect(pageFactory.loginForm.loginFormButton).toBeVisible();
});

test('Testing reset password functionality', async () => {
 await pageFactory.header.authorizeButton.click();
await pageFactory.loginForm.loginFormButton.click();
await pageFactory.loginForm.remindPasswordButton.click();
await pageFactory.loginForm.inputForEmailOnResetPassword.fill(pageFactory.loginForm.email);
await pageFactory.loginForm.receiveRulesButton.click();
 await expect(pageFactory.loginForm.messageAfterResetPassword).toHaveText(pageFactory.loginForm.textInResetPasswordWindow);
});

test('Testing redirect from footer', async () => {
 await pageFactory.footer.bonusSectionButton.click();
await expect(page).toHaveURL(pageFactory.footer.expectURLBonusPage);
});

test('Testing redirect to brand page', async () => {
  await page.hover(pageFactory.leftSideMenu.foodButton);
  await pageFactory.leftSideMenu.chocolateProductsButton.click();
  await pageFactory.productPage.redirectToFirstSingleItem.click();
  await pageFactory.productPage.brandButton.click();
  await expect(page).toHaveURL(pageFactory.productPage.expectUrlBrandPage);
});

test('Check logo on main page', async () => {
  await pageFactory.header.logoIcon.isVisible();
  await expect(pageFactory.header.logoIcon).toHaveCSS('background', pageFactory.header.expectValueBackgroundLogo);
});

});
