const express = require("express")

const roteador = express.Router()

const userController = require ("../controllers/userController")

// login
// rota pra solicitar a pagina de login
roteador.get("/login", userController.formLogin)
// rota pra enviar dados na pagina de login
roteador.post("/login", userController.loginUsuario)
// rota pra solicitar a pagina de cadastro
module.exports = roteador