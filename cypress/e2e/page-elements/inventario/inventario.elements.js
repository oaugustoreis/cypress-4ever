export class InventoryPageElements {
    constructor() {
        this.addToCartButton = () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeButton = () => cy.get('[data-test="remove-sauce-labs-backpack"]');
        this.cartButton = () => cy.get('[data-test="shopping-cart-link"]');
    }
}