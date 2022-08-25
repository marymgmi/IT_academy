const BasePage = require('../BasePage');

class LoginForm extends BasePage {
    constructor(page) {
        super(page);
        this.loginFormButton = page.locator('#loginFormLoginEmailLink');
        this.inputForEmail = page.locator("div[class='i-input-group__cell'] input[type='email']");
        this.inputForPassword = page.locator("input[type='password']");
        this.submitButton = page.locator('#loginForm button');
        this.email = 'mariawassilieva@mail.ru';
        this.password = '4r763Z';
        this.inputForEmailOnResetPassword = page.locator ("div[class='i-input-group'] input[type='email']");
        this.remindPasswordButton = page.locator('#loginFormRemindLink');
        this.receiveRulesButton = page.locator("button[value='restore']");
        this.messageAfterResetPassword = page.locator("div[id='restoreSuccess'] div[class='i-popup__row i-popup__row_main'] div[class='i-popup__line']");
        this.textInResetPasswordWindow = 'Инструкции по восстановлению пароля высланы на mariawassilieva@mail.ru';
    };
}
 module.exports = LoginForm;