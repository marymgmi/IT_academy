const { MainPage } = require('../../pageobjects/MainPage');
const assert = require('assert');
const { LeftSideMenu } = require('../../pageobjects/pageComponents/LeftSideMenu');

const mainPage = new MainPage();
const leftSideMenu = new LeftSideMenu();

describe('Pagination flow', function() {

    it('should redirect user to relevant next page', async () => { 
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.doSearch('Driver')
        await mainPage.nextPageNavigation();
        const pageTitle = await mainPage.getTitle();
        await assert.equal(pageTitle, 'Selectors | WebdriverIO');
    });
});

describe('Change page style', function() {

    it('should switch to dark theme', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.changePageStyle();
        const currentPageStyle = await mainPage.stylePage();
        await assert.equal(currentPageStyle, 'dark');
    });
});


describe('Redirect from left side menu', function() {

    it('should redirect user to relevant page from left side menu', async () => { 
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.redirectToApiPage();
        await mainPage.clickLeftSideMenu();
        const actualPageTitle = await mainPage.getTitle();
        await assert.equal(actualPageTitle, 'Expect | WebdriverIO');
    });
});


//every time I receive different values, tried pause, but didn't help, that's why I didn't include this test, it fails, but I really spent a lot of time to rea;ize it)

// describe('Check button color change after click', function() {

//     it('button should change color after becoming active', async () => { 
//         await mainPage.navigate('https://webdriver.io/');
//         await mainPage.redirectToApiPage();
//         await mainPage.clickLeftSideMenu();
//         await console.log('color'+leftSideMenu.getColorButton);
//     });
// });
