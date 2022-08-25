const BasePage = require('./BasePage');
const Header = require('./pageComponents/Header');
const ProductPage = require('./ProductPage');
const SearchTab = require('./pageComponents/SearchTab');
const LeftSideMenu = require('./pageComponents/LeftSideMenu');
const HeaderSchoolGoodsPage = require('./HeaderSchoolGoodsPage');
const CheckoutPage = require('./CheckoutPage');
const ModalWindow = require('./pageComponents/ModalWindow');
const AccountPage = require('./AccountPage');
const AllStoresPage = require('./AllStoresPage');
const LoginForm = require('./pageComponents/LoginForm');
const Footer = require('./pageComponents/Footer');



class PageFactory {
    constructor(page) {
        this.basePage = new BasePage(page);
        this.header = new Header(page);
        this.productPage = new ProductPage(page);
        this.searchTab = new SearchTab(page);
        this.leftSideMenu = new LeftSideMenu(page);
        this.headerSchoolGoodsPage = new HeaderSchoolGoodsPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.modalWindow = new ModalWindow(page);
        this.accountPage = new AccountPage(page);
        this.allStoresPage = new AllStoresPage(page);
        this.loginForm = new LoginForm(page);
        this.footer = new Footer(page);

    }
}

module.exports = PageFactory;