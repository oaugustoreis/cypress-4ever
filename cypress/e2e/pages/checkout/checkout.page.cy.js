import { LoginPageObjects } from "../../page-objects/login/login.objects";
import { InventoryPageObjects } from "../../page-objects/inventario/inventario.objects";
import { CartPageObjects } from "../../page-objects/cart/cart.objects";
import { CheckoutPageObjects } from "../../page-objects/checkout/checkout.objects";

const loginPage = new LoginPageObjects();
const adicionar = new InventoryPageObjects();
const cart = new CartPageObjects();
const checkout = new CheckoutPageObjects();

describe("Inserir dados", () => {
    beforeEach(() => {
        loginPage.login();
        adicionar.addCart();
        cart.finishBuy();
    })
    it("Continuar compra", () => {
        checkout.continueBuy();
    })
})