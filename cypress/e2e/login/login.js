import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Função reutilizável de login
const realizarLogin = (username, password) => {
  cy.get("#user-name").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.get("#login-button").click();
};

Given("Estou na página de login do SauceDemo", () => {
  cy.visit("https://www.saucedemo.com/v1/");
});

When("Eu informo credenciais válidas", () => {
  cy.fixture("users").then((users) => {
    realizarLogin(users.validUser.username, users.validUser.password);
  });
});

When("Eu informo credenciais inválidas", () => {
  cy.fixture("users").then((users) => {
    realizarLogin(users.invalidUser.username, users.invalidUser.password);
  });
});

Then("Devo ser redirecionado para a lista de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".inventory_list").should("be.visible");
});

Then("Devo visualizar uma mensagem de erro de login", () => {
  cy.get("[data-test='error']")
    .should("be.visible")
    .and("contain", "Username and password do not match");
});

Given("Já estou logado no sistema", () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.fixture("users").then((users) => {
    realizarLogin(users.validUser.username, users.validUser.password);
  });
});

When("Eu clico no menu lateral e seleciono logout", () => {
  cy.get(".bm-burger-button").click();
  cy.get("#logout_sidebar_link").click();
});

Then("Devo voltar para a tela de login", () => {
  cy.url().should("include", "/index.html");
  cy.get("#login-button").should("be.visible");
});
