import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu estou logado com sucesso", () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.fixture("users").then((users) => {
    cy.get("#user-name").type(users.validUser.username);
    cy.get("#password").type(users.validUser.password);
    cy.get("#login-button").click();
  });
});