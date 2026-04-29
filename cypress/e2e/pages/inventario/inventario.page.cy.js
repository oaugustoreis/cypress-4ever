import { LoginPageObjects } from "../../page-objects/login/login.objects";
import { InventoryPageObjects } from "../../page-objects/inventario/inventario.objects";

const loginPage = new LoginPageObjects();
const adicionar = new InventoryPageObjects();

describe("Add produto ao carrinho", () => {
    beforeEach(() => {
        loginPage.login();
    })
    it("add carrinho", () => {
        adicionar.addCart();
    })
})



