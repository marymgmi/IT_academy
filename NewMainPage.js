const BasePage = require('./NewBasePage');

class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.navbarDropdown = page.locator('.navbar__item.dropdown.dropdown--hoverable');
        this.expectTitle = page.locator('.navbar__inner .navbar__title');
        this.expectTitleOnGetPage = page.locator('.breadcrumbs__item:nth-child(3)');
    }
}

module.exports = MainPage;