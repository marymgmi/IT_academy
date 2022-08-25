const BasePage = require('../BasePage');

class ModalWindow extends BasePage {
    constructor(page) {
        super(page);
        this.inputForName = page.locator('#fullname');
        this.dropdownMenu = page.locator('#subject');
        this.phoneInput = page.locator('#phone-body');
        this.submitCallBackButton = page.locator('#phonecall-submit');
        this.closeButton = page.locator('.pp-window-gotocart a');
}
}
module.exports = ModalWindow;
