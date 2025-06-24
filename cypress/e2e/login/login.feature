Feature: Autenticação de Usuário

  Como um usuário do sistema
  Quero poder realizar login e logout
  Para acessar e encerrar minha sessão com segurança

  Scenario: Login com credenciais válidas
    Given Estou na página de login do SauceDemo
    When Eu informo credenciais válidas
    Then Devo ser redirecionado para a lista de produtos

  Scenario: Login com credenciais inválidas
    Given Estou na página de login do SauceDemo
    When Eu informo credenciais inválidas
    Then Devo visualizar uma mensagem de erro de login

  Scenario: Logout após login bem-sucedido
    Given Já estou logado no sistema
    When Eu clico no menu lateral e seleciono logout
    Then Devo voltar para a tela de login
