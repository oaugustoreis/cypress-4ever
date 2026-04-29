import { InventoryPageElements } from "../../page-elements/inventario/inventario.elements";

export class InventoryPageObjects {
    constructor() {
        this.inventarioElements = new InventoryPageElements(); 
    }

    addCart(){
        this.inventarioElements.addToCartButton().click();
        this.inventarioElements.removeButton().should('contain', 'Remove');
        this.inventarioElements.cartButton().click();
    }
}
