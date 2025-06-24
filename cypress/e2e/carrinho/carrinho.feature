Feature: Funcionalidade do carrinho de compras

  Scenario: Inserir item no carrinho
    Given Eu estou logado com sucesso
    When Eu clico para adicionar um item no carrinho
    Then Devo ver 1 produto no ícone do carrinho

  Scenario: Excluir item do carrinho
    Given Já adicionei um item no carrinho
    When Eu excluo o item do carrinho
    Then O carrinho deve estar sem itens

  Scenario: Verificar item adicionado
    Given Já adicionei um item no carrinho
    When Eu abro a página do carrinho
    Then O item listado deve ser o mesmo que foi incluído
