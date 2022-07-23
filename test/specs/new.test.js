
const assert = require('assert');

describe('new test', function() {
    it('new test', async () => { 
        browser.url('https://chromedriver.chromium.org/home/');
        await browser.setWindowSize(1920, 1080);
        // await browser.pause(5000);
        const header = $('.Nu95r');
        await header.waitForDisplayed();
        const actualTitle = await browser.getTitle();
        console.log('actualTitle',actualTitle);
        await assert.equal(actualTitle, "ChromeDriver - WebDriver for Chrome");
        const chromeExtensionButton = $('//*[contains(@class, "K1Ci7d oXBWEc jYxBte")]/li[3]');
        await chromeExtensionButton.click();
        const actualTitleAfterRedirect = await browser.getTitle();
        await assert.equal(actualTitleAfterRedirect, "ChromeDriver - WebDriver for Chrome - Chrome Extensions");
        const searchButton = await $('.U26fgb.mUbCce.fKz7Od.iWs3gf.Wdnjke.M9Bg4d');
        await searchButton.waitForDisplayed();
        await searchButton.click();
        let searchField = $('.whsOnd.zHQkBf');
        await searchField.waitForDisplayed();
        await searchField.setValue('Driver');
        await browser.keys(['Enter']);
        let textInLink = $('.gtazFe:first-child a');
        await textInLink.waitForDisplayed();
        let linkText = await textInLink.getAttribute("href");
        await assert.equal(linkText.includes('driver'), true);

    });
});
  


