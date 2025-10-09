const express = require("express");

const roteador = express.Router();

const userController = require("../controllers/userController");

// login
// rota pra solicitar a pagina de login
roteador.get("/login", userController.formLogin);
// rota pra enviar dados na pagina de login
roteador.post("/login", userController.loginUsuario);
// rota pra solicitar a pagina de cadastro


// CRUD

// C = CRIAR NOVO USUÁRIO

// Rota para solicitar a pagina de cadastro
roteador.get("/cadastrar", userController.formCadastro);

// Rota para enviar os dados de cadastro
roteador.post("/cadastrar", userController.salvarUsuario);

//R = LER USUÁRIOS
// retorna as informações de todos os usuários
roteador.get("/", userController.listarUsuario);

// Retorna as informações de um usuário apenas
roteador.get("/:id", userController.buscarUsuario);

// U = ATUALIZAR USUÁRIOS
roteador.put("/:id", userController.atualizarUsuario);

// D = DELETAR USUÁRIOS
roteador.delete("/:id", userController.deletarUsuario);

// Criando a exportação desse arquivo
module.exports = roteador;

module.exports = roteador