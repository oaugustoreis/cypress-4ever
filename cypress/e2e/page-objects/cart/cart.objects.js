import { CartPageElements } from "../../page-elements/cart/cart.elements";

export class CartPageObjects{ 
    constructor(){
        this.cartElements = new CartPageElements();
    }

    finishBuy(){
        this.cartElements.productName().should('contain', 'Sauce Labs Backpack');
        this.cartElements.quantity().should('contain', '1');
        this.cartElements.price().should('contain', '$29.99'); 
        this.cartElements.chckoutButton().click();
    }
}
