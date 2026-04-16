export class LoginPageElements {
    constructor() {
        this.loginButton = () => cy.get('[data-test="login-button"]');
        this.usernameField = () => cy.get('[data-test="username"]');
        this.passwordField = () => cy.get('[data-test="password"]');
    }
}
