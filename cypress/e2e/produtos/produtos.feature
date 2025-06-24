Feature: Catálogo de Produtos

  Como usuário autenticado
  Quero visualizar e ordenar os produtos disponíveis
  Para facilitar minha navegação e escolha

  Scenario: Exibir lista de produtos após login
    Given Usuário autenticado no sistema
    Then Deve ser exibida a lista de produtos disponíveis

  Scenario: Visualizar detalhes de um produto
    Given Usuário autenticado no sistema
    When Seleciona um item da lista
    Then Deve visualizar os detalhes do produto

  Scenario Outline: Aplicar ordenação na lista de produtos
    Given Usuário autenticado no sistema
    When Aplica ordenação por "<criterio>"
    Then A lista deve refletir a ordem aplicada corretamente

    Examples:
      | criterio            |
      | Name (A to Z)       |
      | Name (Z to A)       |
      | Price (low to high) |
      | Price (high to low) |
