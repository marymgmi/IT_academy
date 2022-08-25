const BasePage = require('../BasePage');

class Header extends BasePage {
    constructor(page) {
        super(page);
        this.checkoutButton = page.locator('.top-panel__userbar__cart__item ');
        this.callBackButton = page.locator("a[class='dark']");
        this.accountButton = page.locator('.top-panel__userbar__user__name__inner');
        this.goodsQuantity = page.locator('.top-panel__userbar__cart__count');
        this.authorizeButton = page.locator('.top-panel__userbar__auth__lbl');
        this.favoriteCount = page.locator('.top-panel__userbar__favs__count');
        this.logoIcon = page.locator('.top-panel__logo__item');
        this.expectValueBackgroundLogo = "rgba(0, 0, 0, 0) url(\"https://oz.by/img/module-header/logo.v1660631111.png\") repeat scroll 0% 0% / auto padding-box border-box";


    }
}
 module.exports = Header;

