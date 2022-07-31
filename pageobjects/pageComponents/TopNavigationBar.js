
class TopNavigationBar {
    constructor() {
        this.navBar = '.navbar__items';
        this.versionsPage = '.navbar__link:first-child';
        this.apiPage = 'div.navbar__items>a:nth-child(4)';
        this.changeStyleButton = '.toggleButton_rCf9';
    }

    async redirectToVersionsPage() {
        await $(this.versionsPage).waitForClickable();
        await $(this.versionsPage).click();
    }

    async changePageStyle() {
        await $(this.changeStyleButton).waitForClickable();
        await $(this.changeStyleButton).click();
    }

    async redirectToApiPage() {
        await $(this.apiPage).waitForClickable();
        await $(this.apiPage).click();
    }
}

const topNavigationBar = new TopNavigationBar();

module.exports = { topNavigationBar };
