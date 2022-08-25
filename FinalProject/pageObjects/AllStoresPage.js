const BasePage = require('./BasePage');

class AllStoresPage extends BasePage {
    constructor(page) {
        super(page);
        this.storeOnHoruzhey = page.locator("div[class='b-map'] div[class='b-map-menu__list-container'] li:nth-child(11) a:nth-child(1)");
        this.theWholeGoodsHoruzheyStore = page.locator('.b-map-balloon__button');
        this.storeHoruzheyPage = 'https://oz.by/store/more32.html';
    
}
}
module.exports = AllStoresPage;

