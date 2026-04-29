import { CompleteCheckoutPageElements } from "../../page-elements/completeCheckout/completeCheckout.elements";

export class CompleteCheckoutPageObjects{
    constructor(){
        this.completeElements = new CompleteCheckoutPageElements();
    }

    returnHome(){
        this.completeElements.homeButton().click();
    }
}
