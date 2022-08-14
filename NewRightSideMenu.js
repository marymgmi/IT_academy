const BasePage = require('./NewBasePage');

class RightSideMenu extends BasePage {
    constructor(page) {
        super(page);
        this.pageChromiumButton = page.locator('.table-of-contents__left-border > li:first-child a');
    }
}
 module.exports = RightSideMenu;
