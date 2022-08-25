const BasePage = require('./BasePage');

class AccountPage extends BasePage {
    constructor(page) {
        super(page);
        this.editPersonalData = page.locator("a[href='/personal/personal.phtml']");
        this.userNameInput = page.locator('#frm-l-1');
        this.editChangesSubmit = page.locator('.button-small');
        this.userName = 'Mary';
}
}
module.exports = AccountPage;