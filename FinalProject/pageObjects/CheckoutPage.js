const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.expectURLCheckoutPage = ('https://oz.by/checkout/');
        this.deleteButton = page.locator("button[class='i-button i-button_danger i-button_small remove']");
        this.deleteAllbutton = page.locator("input[name='checkAll']");
        this.confirmDeleteButton = page.locator('.i-button.i-button_danger.i-button_small.remove-yes');
        this.emptyState = page.locator('.i-textual__plain.i-textual__plain_arrow.i-textual__plain_limited');
}
}
module.exports = CheckoutPage;
