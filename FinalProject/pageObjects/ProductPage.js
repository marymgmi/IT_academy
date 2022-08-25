const BasePage = require('./BasePage');

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.buyButton = page.locator('.b-product-control__button.i-button.i-button_large.i-button_orange.addtocart-btn.first-button');
        this.deleteFilterButton = page.locator('.top-filters__sqcheckers.top-filters__sqcheckers--flat li:first-child a');
        this.redirectToFirstSingleItem = page.locator('.viewer-type-card__li:first-child');
        this.redirectToSecondSingleItem = page.locator('.viewer-type-card__li:nth-child(2)');
        this.availableIAnotherStoresButton = page.locator("button[type='button'] span:nth-child(2)");
        this.favoriteButton = page.locator("div[class='b-product__media'] label[class='b-product-action__label b-product-action__label_fav-action i-button i-button_small']");
        this.brandButton = page.locator("a[title='Все товары серии «Шоколад для настроения»']");
        this.expectUrlBrandPage = 'https://oz.by/producer/series14039232.html';
        this.expectUrlWithFilters = 'https://oz.by/chocolate/?availability=2';
}
}
module.exports = ProductPage;
