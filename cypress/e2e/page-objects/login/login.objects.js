import { LoginPageElements } from "../page-elements/login.elements";

export class LoginPageObjects {
    constructor() {
        this.loginElements = new LoginPageElements();
    }

    login() {
        cy.visit("https://www.saucedemo.com/");
        this.loginElements.usernameField().type("standard_user");
        this.loginElements.passwordField().type("secret_sauce");
        this.loginElements.loginButton().click();
    }
}
