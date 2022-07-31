const { searchInput } = require('./pageComponents/SearchInput');
const { topNavigationBar } = require('./pageComponents/TopNavigationBar');
const { LeftSideMenu } = require('./pageComponents/LeftSideMenu');

const leftSideMenu = new LeftSideMenu();

class BasePage {
    constructor() {
        this.style='html[data-theme]';
    }

    async navigate(url) {
        await browser.url(url);
    }

    async getTitle() {
        return await browser.getTitle()
    }

    async doSearch(text) {
        return searchInput.doSearch(text)
    }

    async redirectToVersionsPage() {
        return topNavigationBar.redirectToVersionsPage();
    }    

    async clickLeftSideMenu() {
        return leftSideMenu.clickLeftSideMenu();
    }

    async changePageStyle() {
        return topNavigationBar.changePageStyle();
    }

    async stylePage() {
       return $(this.style).getAttribute('data-theme');

    }
    async redirectToApiPage() {
        return topNavigationBar.redirectToApiPage();
    }
}

module.exports = { BasePage };
