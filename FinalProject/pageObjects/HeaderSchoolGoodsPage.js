const BasePage = require('./BasePage');

class HeaderSchoolGoodsPage extends BasePage {
    constructor(page) {
        super(page);
        this.stationeryButton = page.locator('.landing-header__line .landing-nav-list  ul li:first-child a');
        this.expectUrlAfterRedirect = 'https://oz.by/sseries/more150499.html?c=1113115&availability=1;2';
    }
}
 module.exports = HeaderSchoolGoodsPage;

