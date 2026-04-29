import { LoginPageObjects } from "../../page-objects/login/login.objects";
import { InventoryPageObjects } from "../../page-objects/inventario/inventario.objects";
import { CartPageObjects } from "../../page-objects/cart/cart.objects";
import { CheckoutPageObjects } from "../../page-objects/checkout/checkout.objects";
import { FinishPageObjects } from "../../page-objects/finish/finish.objects";
import { CompleteCheckoutPageObjects } from "../../page-objects/completeCheckout/completeCheckout.objects";

const loginPage = new LoginPageObjects();
const adicionar = new InventoryPageObjects();
const cart = new CartPageObjects();
const checkout = new CheckoutPageObjects();
const finish = new FinishPageObjects();
const complete = new CompleteCheckoutPageObjects();

describe("Tela checkout finalizado", () => {
    beforeEach(() => {
        loginPage.login();
        adicionar.addCart();
        cart.finishBuy();
        checkout.continueBuy();
        finish.endBuy();
    })
    it("Retornar ao menu principal", () => {
        complete.returnHome();
    })
})