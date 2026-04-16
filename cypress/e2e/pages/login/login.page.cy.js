import { LoginPageObjects } from "../../page-objects/login.objects";
const loginPage = new LoginPageObjects();

describe("Minha aplicação", () => {
    it("carrega a página inicial", () => {
        loginPage.login();
    });
});
