# Automação SauceDemo

## Visão Geral

Este projeto automatiz os principais fluxos funcionais do site [SauceDemo](https://www.saucedemo.com/) usando **BDD (Behavior Driven Development)** com **Cypress** e **Cucumber**. Os testes são escritos em **linguagem Gherkin** com nomes e descrições personalizados para melhor clareza, organização e manutenção.

---

## Funcionalidades Automatizadas

### 1. Autenticação do Usuário

| Cenário                      | Descrição                                                                 |
|-----------------------------|---------------------------------------------------------------------------|
| Acesso com dados válidos     | Usuário realia login com sucesso e visualiza a página de produtos        |
| Acesso com dados incorretos  | Tentativa de login incorreto exibe mensagem de erro                       |
| Encerrar sessão após login   | Usuário logado acessa o menu e realiza logout retornando à tela de login  |

---

### 2. Catálogo de Produtos

| Cenário                       | Descrição                                                                |
|------------------------------|--------------------------------------------------------------------------|
| Listar produtos após login   | Usuário autenticado visualiza a lista de produtos disponíveis            |
| Acessar página de um produto | Usuário seleciona um produto e vê seus detalhes                         |
| Aplicar ordenação na lista   | Ordenar produtos por nome (A-Z/Z-A) e preço (baixo-alto/alto-baixo)     |

---

### 3. Gerenciamento do Carrinho

| Cenário                        | Descrição                                                          |
|-------------------------------|--------------------------------------------------------------------|
| Inserir item no carrinho       | Adicionar um produto e validar o ícone do carrinho                |
| Excluir item do carrinho       | Remover produto e garantir que o carrinho fique vazio             |
| Verificar itens adicionados    | Confirmar que os itens exibidos são os mesmos adicionados         |

---

### 4. Finalização de Compra

| Cenário                         | Descrição                                                         |
|--------------------------------|-------------------------------------------------------------------|
| Acessar tela de checkout        | Navegar para o formulário de dados do cliente                     |
| Inserir informações obrigatórias| Preencher nome, sobrenome e CEP no checkout                       |
| Confirmar pedido com sucesso    | Finalizar compra e visualizar mensagem de confirmação             |

---

## Como Executar os Testes

### 1. Instalar dependências:

```bash
npm install
```

### 2. Executar todos os testes em modo headless:

```bash
npx cypress run
```

### 3. Executar com interface gráfica (modo interativo):

```bash
npx cypress open
```

Na interface, selecione o(s) arquivo(s) `.feature` para executar todos os cenários sequencialmente.

---

## 📁 Estrutura de Arquivos

```
cypress/
│
├── e2e/
│   ├── login/
│   │   └── login.feature
│   │    └──login.js
│   ├── produtos/
│   │   └── produtos.feature
│   │        └──produtos.js
│   ├── carrinho/
│   │   └── carrinho.feature
│   │          └──carrinho.js
│   └── checkout/
│   │   └── checkout.feature
│   │         └──checkout.js
│
├── fixtures/
│   └── users.json
│
└── support/
    └── step_definitions/
        ├── global.js
```

---

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber + Gherkin](https://github.com/badeball/cypress-cucumber-preprocessor)
- JavaScript (ES6+)
- Node.js

---


