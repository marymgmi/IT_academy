class SearchInput {
    constructor() {
        this.searchButton = '.DocSearch.DocSearch-Button';
        this.searchInput = '.DocSearch-Input';
    }

    async doSearch(text) {
        await this.openSearchDialog();
        await this.setValueInInput(text);
        await this.submit();
    }
    
    async openSearchDialog() {
        await $(this.searchButton).waitForClickable();
        await $(this.searchButton).click();
        await browser.pause(2000);
    }

    async setValueInInput(value) {
        await $(this.searchInput).click();
        await $(this.searchInput).setValue(value);
        await browser.pause(2000);
    }

    async submit() {
        await browser.keys(['Enter']);
        await browser.pause(2000);
    }
}

const searchInput = new SearchInput()

module.exports = { searchInput }