export class FinishPageElements{
    constructor(){
        this.productName = () => cy.get('[data-test="inventory-item-name"]');
        this.paymentInformation = () => cy.get('[data-test="payment-info-value"]');
        this.shippingInformation = () => cy.get('[data-test="shipping-info-value"]');
        this.finishButton = () => cy.get('[data-test="finish"]');
        this.cancelButton = () => cy.get('[data-test="cancel"]');
    }
}