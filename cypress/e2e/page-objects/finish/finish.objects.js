import { FinishPageElements } from "../../page-elements/finish/finish.elements";

export class FinishPageObjects{
    constructor(){
        this.finishElements = new FinishPageElements();
    }

    endBuy(){
        this.finishElements.productName().should('contain', 'Sauce Labs Backpack');
        this.finishElements.finishButton().click();
    }
}
