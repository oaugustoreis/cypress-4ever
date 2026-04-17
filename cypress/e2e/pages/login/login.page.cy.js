import { LoginPageObjects } from "../../page-objects/login/login.objects";
 const loginPage = new LoginPageObjects();

describe("Logar na aplicação", () => {
    it("Logar com sucesso", () => {
        loginPage.login();
    });
    it("Comprar camisa", () => {
        cy.log("Comprar camisa");
    });
    it("Fazer logout", () => {
        cy.log("Fazer logout");
    });
});
