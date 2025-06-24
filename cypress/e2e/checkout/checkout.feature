Feature: Finalização de compra no carrinho

  Scenario: Acessar a tela de checkout
    Given Já adicionei um item no carrinho
    When Eu avanço para o checkout
    Then Devo visualizar o formulário de dados do cliente

  Scenario: Inserir informações obrigatórias
    Given Estou na etapa de informações do cliente
    When Preencho os campos obrigatórios do cliente
    Then Devo visualizar os detalhes da compra

  Scenario: Concluir pedido com sucesso
    Given Estou na etapa final da compra
    When Confirmo o pedido
    Then Devo visualizar a confirmação da compra
