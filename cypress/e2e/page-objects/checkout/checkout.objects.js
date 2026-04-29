import { CheckoutPageElements } from "../../page-elements/checkout/checkout.elements";

export class CheckoutPageObjects{
    constructor(){
        this.checkoutElements = new CheckoutPageElements();
    }

    continueBuy(){
        this.checkoutElements.firstNameField().should('be.visible').type("Sara");
        this.checkoutElements.lastNameField().type("Bla bla");
        this.checkoutElements.codeField().type("12345");
        this.checkoutElements.continueButton().click();
    }
}
