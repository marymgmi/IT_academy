const BasePage = require('../BasePage');

class SearchTab extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = page.locator('#top-s');
        this.searchDropdownElement = '.ui-autocomplete';
        this.textInInput = 'Агата Кристи';
        this.expectUrlSearchPage ='https://oz.by/search/?q=%D0%90%D0%B3%D0%B0%D1%82%D0%B0+%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B8';
    }
}

module.exports = SearchTab; 