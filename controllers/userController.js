
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
    },
        // função para processar o cadastro e visualizar na tela // CRUD
    formCadastro: (req,res) => {
        res.render("cadastrar")
    },

    salvarUsuario: (req,res) => {
        const {usuario, email, senha} = req.body
        userModel.salvar({usuario, email, senha})
        res.render("cadastroConfirmado")
    },
    listarUsuario: (req,res) => {
   const usuarios = userModel.listarTodos();
    res.json(usuarios); 
    res.render("usuarios", { usuarios });
    },
    buscarUsuario: (req,res) => {
       // Busca o id de url como parametro 
     const id = req.params.id
     // Guarda o usuario retornando depois de buscar pelo model
     const usuario = userModel.buscarPorId(id)
     // Se não achar, avisa que deu erro
     if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
     }
     // se achar, devolve as informações via json
        res.json(usuario);
        
    },

    // Função para atualizar as informações de um usuário
    atualizarUsuario: (req,res) => {
        // busca o id de url como parametro
      const id = req.params.id
      // Busca as novas informações para atualizar
      const {usuario, email, senha} = req.body
     // Guarda o usuario atualizado em uma variavel
      const usuarioAtualizado = userModel.atualizar(id, {usuario, email, senha})
      // Se não achar, avisa que deu erro
        if (!usuarioAtualizado) {
              return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
        // se tudo der certo, devolve uma mensagem de sucesso
        res.json({mensagem: "Usuário atualizado"})
    },
    // Função para deletar um usuário
    deletarUsuario: (req,res) => {
       // Busca o id de url como parametro
      const id = req.params.id
      // Guarda o usuario deletado em uma variavel
      const deletando = userModel.deletar(id)

      // se não achar, avisa que deu erro
      if (!deletando) {
          return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }
        // se tudo der certo, devolve uma mensagem de sucesso
        res.json({mensagem: "Usuário deletado"});
    },
};