const path = require("path");

const userModel = require("../models/userModel");

module.exports = {
  formLogin: (req, res) => {
    res.render("login", { titulo: "Login" });
  },
  // função para processar o login
  loginUsuario: (req, res) => {
    // Cria um Objeto Com as informa~ções do body,  retirados dos inputs
    const { email, senha } = req.body;
    // chama a função de login do model
    const logado = userModel.login(email, senha);
    // Se não conseguiu Logar, manda uma mensagem de um error
    if (!logado) {
      res.status(401);
      res.render("login", {
        titulo: "Login errado",
        erro: "Email ou senha Inválidos",
      });
    }
    // Se tudo der certo, manda uma mensagem de sucesso
    else {
      res.status(200);
      res.render("index", { titulo: "Bem vindo", usuario: logado.nome });
    }
  },
  // função para processar o cadastro e visualizar na tela // CRUD
  formCadastro: (req, res) => {
    res.render("usuarios/cadastroUsuarios", { titulo: "Cadastro" });
  },

  salvarUsuario: (req, res) => {
    const { usuario, email, senha, tipo } = req.body;
    usuarioNovo = userModel.salvar({ usuario, email, senha, tipo });
    res.render("usuarios/confirmacaoUsuarios", { 
      tipo: "cadastro",
       titulo: "Cadastro confirmado", 
      usuarioNovo      
      });
  },
  // R
  // Função para listar todos os usuários
  listarUsuario: (req, res) => {
    // Guarda a lista de usuarios retornando depois de buscar pelo model
    const usuarios = userModel.listarTodos();
   // Renderiza a view com a lista de usuários
    res.render("usuarios/listaUsuarios", {usuarios, titulo: "Lista de Usuários"});
  },
  buscarUsuario: (req, res) => {
    // Busca o id de url como parametro
    const id = req.params.id;
    // Guarda o usuario retornando depois de buscar pelo model
    const usuario = userModel.buscarPorId(id);
    // Se não achar, avisa que deu erro
    if (!usuario) {
      return res.status(404).render("usuarios/erroUsuario", {
        titulo: "Erro",
        mensagem: "Usuário não encontrado"
      });
    }
    // se achar, devolve as informações via json
    res.render("usuarios/editarUsuarios", {
      titulo: "Editar",
      usuario
    });
  },

  // Função para atualizar as informações de um usuário
  atualizarUsuario: (req, res) => {
    // busca o id de url como parametro
    const id = req.params.id;
    // Busca as novas informações para atualizar
    const { usuario, email, senha, tipo } = req.body;
    // Guarda o usuario atualizado em uma variavel
    const usuarioAtualizado = userModel.atualizar(id, {
      usuario,
      email,
      senha,
      tipo
    });
    // Se não achar, avisa que deu erro
   if (!usuarioAtualizado) {
      return res.status(404).render("usuarios/erroUsuario",{
        titulo: "Erro",
        mensagem:"Não foi possível atualizar"
      }
      )
    }
    // se atualizar, manda uma mensagem dizendo que deu certo
    res.render("usuarios/confirmacaoUsuarios",{
      titulo:"Edicao Confirmada",
      tipo: "edicao",
      usuarioAtualizado
    })
  },
  // Função para deletar um usuário
  deletarUsuario: (req, res) => {
    // Busca o id de url como parametro
    const id = req.params.id;
    // Guarda o usuario deletado em uma variavel
    const deletado = userModel.deletar(id);

    // se não achar, avisa que deu erro
    if (!deletado) {
      return res.status(404).render("usuarios/erroUsuario",{
        titulo: "Erro",
        mensagem:"Não foi possível deletar"
      })
    }
    // se tudo der certo, devolve uma mensagem de sucesso
res.render("usuarios/confirmacaoUsuarios",{
      titulo:"Deletado",
      tipo: "deletar",
      deletado
    })
  },
};
