const BasePage = require('./NewBasePage');
const MainPage = require('./NewMainPage');
const Footer = require('./NewFooter');
const SearchTab = require('./NewSearchTab');
const RightSideMenu = require('./NewRightSideMenu');

class PageFactory {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.mainPage = new MainPage(page);
        this.footer = new Footer(page);
        this.searchTab = new SearchTab(page);
        this.rightSideMenu = new RightSideMenu(page);
    }
}

module.exports = PageFactory;