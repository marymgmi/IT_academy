const BasePage = require('./NewBasePage');

class SearchTab extends BasePage {
    constructor(page) {
        super(page);
        this.searchButton = page.locator('.DocSearch-Button-Container');
        this.searchInput = page.locator('.DocSearch-Input');
        this.searchDropdownElement = '.DocSearch-Hit-content-wrapper';
    }
}

module.exports = SearchTab;