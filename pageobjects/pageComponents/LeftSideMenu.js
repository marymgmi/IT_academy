

class LeftSideMenu {
    constructor() {
        this.leftSideMenuElement = '.menu__list.theme-doc-sidebar-menu > li:nth-child(2) a';
    }

    async clickLeftSideMenu() {
        await browser.pause(2000);
        await $(this.leftSideMenuElement).click();
    }

    async getColorButton() {
        await browser.pause(3000);
        return $(this.leftSideMenuElement).getCSSProperty('ifm-color-primary');
    }
}

module.exports = { LeftSideMenu };