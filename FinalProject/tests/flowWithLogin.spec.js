const { test, expect, request } = require('@playwright/test');
const PageFactory = require('../pageObjects/PageFactory');

let pageFactory, page;

test.describe('Basic functionality with login', () => {

    test.beforeAll(async ({browser}) => {
      page = await browser.newPage();
      pageFactory = new PageFactory(page);
      await page.goto(pageFactory.basePage.baseUrl);
      await pageFactory.header.authorizeButton.click();
      await pageFactory.loginForm.loginFormButton.click();
      await pageFactory.loginForm.inputForEmail.type(pageFactory.loginForm.email);
      await pageFactory.loginForm.inputForPassword.type(pageFactory.loginForm.password);
      await pageFactory.loginForm.submitButton.click();
    });


  test('Edit username functionality', async () => {
    await pageFactory.header.accountButton.isVisible();
    await pageFactory.header.accountButton.click();
    await pageFactory.accountPage.editPersonalData.click();
    await pageFactory.accountPage.userNameInput.dblclick();
    await page.keyboard.press('Backspace');
    await pageFactory.accountPage.userNameInput.fill(pageFactory.accountPage.userName);
    await pageFactory.accountPage.editChangesSubmit.click();
    await page.reload();
    await expect(pageFactory.accountPage.userNameInput).toHaveAttribute('value', 'Mary');
  });


  test('Delete item from checkout page functionality', async () => {
    await page.goto(pageFactory.basePage.baseUrl);
    await page.hover(pageFactory.leftSideMenu.foodButton);
    await pageFactory.leftSideMenu.chocolateProductsButton.click();
    await pageFactory.productPage.redirectToSecondSingleItem.click();
    await pageFactory.productPage.buyButton.click();
    await pageFactory.header.checkoutButton.click();
    await pageFactory.checkoutPage.deleteAllbutton.isVisible();
    await pageFactory.checkoutPage.deleteAllbutton.click();
    await page.pause(1000);
    await pageFactory.checkoutPage.deleteButton.click();
    await pageFactory.checkoutPage.confirmDeleteButton.click();
    await expect(pageFactory.checkoutPage.emptyState).toHaveText('В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:');
  });
  
  test('Testing adding product to favorite for logged in users', async () => {
    await page.goto(pageFactory.basePage.baseUrl);
    await page.hover(pageFactory.leftSideMenu.foodButton);
    await pageFactory.leftSideMenu.chocolateProductsButton.click();
    await pageFactory.productPage.redirectToFirstSingleItem.click();
    await pageFactory.productPage.favoriteButton.click();
    await expect(pageFactory.header.favoriteCount).toHaveText('1');
  });
  
  });