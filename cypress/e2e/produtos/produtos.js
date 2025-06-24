import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Usuário autenticado no sistema", () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.fixture("users").then((users) => {
    cy.get("#user-name").type(users.validUser.username);
    cy.get("#password").type(users.validUser.password);
    cy.get("#login-button").click();
  });
});

When("Seleciona um item da lista", () => {
  cy.get(".inventory_item").first().find(".inventory_item_name").click();
});

Then("Deve ser exibida a lista de produtos disponíveis", () => {
  cy.get(".inventory_item").should("have.length.greaterThan", 0);
});

Then("Deve visualizar os detalhes do produto", () => {
  cy.get(".inventory_details_name").should("be.visible");
  cy.get(".inventory_details_desc").should("be.visible");
});

When("Aplica ordenação por {string}", (criterio) => {
  cy.get(".product_sort_container").select(criterio);
});

Then("A lista deve refletir a ordem aplicada corretamente", () => {
  cy.get(".product_sort_container").invoke("val").then((selectedOption) => {
    if (selectedOption.includes("az")) {
     
      cy.get(".inventory_item_name").then(($items) => {
        const nomes = [...$items].map((el) => el.innerText);
        const ordenado = [...nomes].sort();
        expect(nomes).to.deep.equal(ordenado);
      });
    } else if (selectedOption.includes("za")) {
      
      cy.get(".inventory_item_name").then(($items) => {
        const nomes = [...$items].map((el) => el.innerText);
        const ordenado = [...nomes].sort().reverse();
        expect(nomes).to.deep.equal(ordenado);
      });
    } else if (selectedOption.includes("lohi")) {
      
      cy.get(".inventory_item_price").then(($items) => {
        const precos = [...$items].map((el) =>
          parseFloat(el.innerText.replace("$", ""))
        );
        const ordenado = [...precos].sort((a, b) => a - b);
        expect(precos).to.deep.equal(ordenado);
      });
    } else if (selectedOption.includes("hilo")) {
      
      cy.get(".inventory_item_price").then(($items) => {
        const precos = [...$items].map((el) =>
          parseFloat(el.innerText.replace("$", ""))
        );
        const ordenado = [...precos].sort((a, b) => b - a);
        expect(precos).to.deep.equal(ordenado);
      });
    } else {
      throw new Error("Critério de ordenação não reconhecido");
    }
  });
});
