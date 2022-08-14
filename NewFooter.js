const BasePage = require('./NewBasePage');

class Footer extends BasePage {
    constructor(page) {
        super(page);
        this.apiReferenceButton = page.locator('.footer__col:first-child ul li:nth-child(2) a');
        this.getStartedButton = page.locator('.footer__col:first-child ul li:first-child a');
    }
}
 module.exports = Footer;