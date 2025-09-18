
const path = require("path")

const userModel = require ("../models/userModel")

module.exports = {
    formLogin :  (req,res) => { 
        res.render("login")
    },
    // função para processar o login
    loginUsuario : (req,res) => {
        // Cria um Objeto Com as informa~ções do body,  retirados dos inputs 
        const { email, senha} = req.body
        // chama a função de login do model
        const logado = userModel.login(email, senha)
        // Se não conseguiu Logar, manda uma mensagem de um error
        if(!logado){
            return res.status(401).json({mensagem: "Usuário ou senha inválidos"})  
        }
        // Se tudo der certo, manda uma mensagem de sucesso
        else{
            res.json({mensagem: "Login realizado Manin"})      
        }
    }
}