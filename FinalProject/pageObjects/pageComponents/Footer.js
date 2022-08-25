const BasePage = require('../BasePage');

class Footer extends BasePage {
    constructor(page) {
        super(page);
        this.expectURLBonusPage = ('https://oz.by/bonus/');
        this.bonusSectionButton = page.locator("div[class='footer-full'] ul:nth-child(2) li:nth-child(4) a:nth-child(1)");
}
}
module.exports = Footer;



