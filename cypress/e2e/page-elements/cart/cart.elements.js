export class CartPageElements{ 
    constructor(){
        this.productName = () => cy.get('[data-test="inventory-item-name"]');
        this.quantity = () => cy.get('[data-test="item-quantity"]');
        this.price = () => cy.get('[data-test="inventory-item-price"]');
        this.chckoutButton = () => cy.get('[data-test="checkout"]');
    }
}