const express = require("express");

const roteador = express.Router();

const produtoController = require("../controllers/produtoController");

roteador.get("/cadastrar", produtoController.Cadastrarproduto);

// Rota para enviar os dados de cadastro
roteador.post("/cadastrar", produtoController.salvarproduto);



//R = LER USUÁRIOS
// retorna as informações de todos os usuários
roteador.get("/", produtoController.listarproduto);

// Retorna as informações de um usuário apenas
roteador.get("/:id", produtoController.buscarproduto);

// U = ATUALIZAR USUÁRIOS
roteador.post("/:id", produtoController.atualizarproduto);

// D = DELETAR USUÁRIOS
roteador.get("/:id", produtoController.deletarproduto);

// Criando a exportação desse arquivo
module.exports = roteador;
