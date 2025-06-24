import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Utilitários reutilizáveis
const fazerLogin = () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.fixture("users").then((users) => {
    cy.get("#user-name").type(users.validUser.username);
    cy.get("#password").type(users.validUser.password);
    cy.get("#login-button").click();
  });
};

const incluirProdutoCarrinho = () => {
  cy.get(".inventory_item").first().find(".btn_inventory").click();
};

const acessarTelaCheckout = () => {
  cy.get(".shopping_cart_link").click();
  cy.get(".checkout_button").click();
};

const preencherFormularioCliente = () => {
  cy.get("#first-name").type("Joao");
  cy.get("#last-name").type("Silva");
  cy.get("#postal-code").type("12345678");
  cy.get(".cart_button").click();
};

// Steps

Given("Já adicionei um item no carrinho", () => {
  fazerLogin();
  incluirProdutoCarrinho();
});

When("Eu avanço para o checkout", () => {
  acessarTelaCheckout();
});

Then("Devo visualizar o formulário de dados do cliente", () => {
  cy.get("#first-name").should("be.visible");
  cy.get("#last-name").should("be.visible");
  cy.get("#postal-code").should("be.visible");
});

Given("Estou na etapa de informações do cliente", () => {
  fazerLogin();
  incluirProdutoCarrinho();
  acessarTelaCheckout();
});

When("Preencho os campos obrigatórios do cliente", () => {
  preencherFormularioCliente();
});

Then("Devo visualizar os detalhes da compra", () => {
  cy.get(".summary_info").should("be.visible");
});

Given("Estou na etapa final da compra", () => {
  fazerLogin();
  incluirProdutoCarrinho();
  acessarTelaCheckout();
  preencherFormularioCliente();
});

When("Confirmo o pedido", () => {
  cy.get(".cart_button").click();
});

Then("Devo visualizar a confirmação da compra", () => {
  cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
});
