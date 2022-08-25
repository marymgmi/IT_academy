const BasePage = require('../BasePage');

class LeftSideMenu extends BasePage {
    constructor(page) {
        super(page);
        this.salesButton = page.locator('.main-nav__list__li.main-nav__list__li_inner > ul > li:first-child a');
        this.expectUrlAfterRedirect = 'https://oz.by/sseries/more1502742.html';
        this.goodsForSchoolButton = page.locator('.main-nav__list__li.main-nav__list__li_inner > ul > li:nth-child(2) a');
        this.selectGoodsButton = page.locator('.offers-slider__item.offers-slider__item--right.google-teaser .offers-slider__item__btn'); 
        this.foodButton = "//a[contains(text(),'Продукты, деликатесы')]";
        this.chocolateProductsButton = page.locator("a[href='https://oz.by/chocolate/']");
    }
}
 module.exports = LeftSideMenu;