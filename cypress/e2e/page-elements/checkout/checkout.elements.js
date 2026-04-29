export class CheckoutPageElements{
    constructor(){
        this.firstNameField = () => cy.get('[data-test="firstName"]').type('Sara');
        this.lastNameField = () => cy.get('[data-test="lastName"]');
        this.codeField = () => cy.get('[data-test="postalCode"]');
        this.continueButton = () => cy.get('[data-test="continue"]');
    }
}