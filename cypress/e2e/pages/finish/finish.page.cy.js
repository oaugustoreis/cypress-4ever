import { LoginPageObjects } from "../../page-objects/login/login.objects";
import { InventoryPageObjects } from "../../page-objects/inventario/inventario.objects";
import { CartPageObjects } from "../../page-objects/cart/cart.objects";
import { CheckoutPageObjects } from "../../page-objects/checkout/checkout.objects";
import { FinishPageObjects } from "../../page-objects/finish/finish.objects";

const loginPage = new LoginPageObjects();
const adicionar = new InventoryPageObjects();
const cart = new CartPageObjects();
const checkout = new CheckoutPageObjects();
const finish = new FinishPageObjects();

describe("Revisão checkout", () => {
    beforeEach(() => {
        loginPage.login();
        adicionar.addCart();
        cart.finishBuy();
        checkout.continueBuy();
    })
    it("Finalizar compra", () => {
        finish.endBuy();
    })
})