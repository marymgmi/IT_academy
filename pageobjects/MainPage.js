// const { default: $ } = require('webdriverio/build/commands/browser/$');
const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
    constructor() {
        super();
        this.searchButton = '.DocSearch.DocSearch-Button';
        this.searchInput = '.DocSearch-Input';
        this.nextButton = '.pagination-nav__item.pagination-nav__item--next';
        this.articleName = '//*[contains(@class,"pagination-nav__item--next")]/a/div[@class="pagination-nav__label"]/text()';
    };


    async nextPageNavigation() {
        await $(this.nextButton).waitForClickable();
        await $(this.nextButton).click();
    }
}

module.exports = { MainPage };

