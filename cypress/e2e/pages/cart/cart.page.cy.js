import { LoginPageObjects } from "../../page-objects/login/login.objects";
import { InventoryPageObjects } from "../../page-objects/inventario/inventario.objects";
import { CartPageObjects } from "../../page-objects/cart/cart.objects";

const loginPage = new LoginPageObjects();
const adicionar = new InventoryPageObjects();
const checkout = new CartPageObjects();

describe("Finalizar compra", () => {
    beforeEach(() => {
        loginPage.login();
        adicionar.addCart();
    })
    it("Realizar checkout", () => {
        checkout.finishBuy();
    })
})