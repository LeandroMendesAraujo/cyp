import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("Eu clico para adicionar um item no carrinho", () => {
  cy.get(".inventory_item").first().find(".btn_inventory").click();
});

Then("Devo ver 1 produto no ícone do carrinho", () => {
  cy.get(".shopping_cart_badge").should("contain", "1");
});

Given("Já adicionei um item no carrinho", () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.fixture("users").then((users) => {
    cy.get("#user-name").type(users.validUser.username);
    cy.get("#password").type(users.validUser.password);
    cy.get("#login-button").click();
    cy.get(".inventory_item").first().find(".btn_inventory").click();
  });
});

When("Eu excluo o item do carrinho", () => {
  cy.get(".shopping_cart_link").click();
  cy.get(".cart_button").click();
});

Then("O carrinho deve estar sem itens", () => {
  cy.get(".cart_item").should("not.exist");
});

When("Eu abro a página do carrinho", () => {
  cy.get(".shopping_cart_link").click();
});

Then("O item listado deve ser o mesmo que foi incluído", () => {
  cy.get(".cart_item").should("have.length", 1);
});
