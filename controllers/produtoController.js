const produtoModel = require("../models/produtoModel");

module.exports = {
 // função para processar o cadastro e visualizar na tela // CRUD
  Cadastrarproduto: (req, res) => {
    res.render("produtos/cadastroProdutos", { titulo: "Cadastro" });
  },


  salvarproduto: (req, res) => {
    const { nome, preco, quantidade, descricao, categoria, imagem} = req.body;
    produtoNovo = produtoModel.salvar({ nome, preco, quantidade, descricao, categoria, imagem});
    res.render("produtos/confirmacaoProdutos", {
    tipo: "cadastro",
     titulo: "Cadastro confirmado",
    produtoNovo
    }
  )},
  listarproduto: (req, res) => {
    const produtos = produtoModel.listarTodos();
    res.render("produtos/listaProduto", { produtos, titulo: "Lista de Produtos" });
  },

  buscarproduto: (req, res) => {
    // Busca o id de url como parametro
    const id = req.params.id;
    // Guarda o usuario retornando depois de buscar pelo model
    const produto = produtoModel.buscarPorId(id);
    // Se não achar, avisa que deu erro
    if (!produto) {
      return res.status(404).render("produtos/erroProduto", {
        titulo: "Erro",
        mensagem: "Produto não encontrado"
      });
    }
    // se achar, devolve as informações via json
    res.render("produtos/editarproduto", {
      titulo: "Editar",
      produto
    });
  },
  // Função para atualizar as informações de um usuário
  atualizarproduto: (req, res) => {
    // busca o id de url como parametro
    const id = req.params.id;
    // Busca as novas informações para atualizar
    const { nome, preco, quantidade, descricao, categoria, imagem } = req.body;
    // Guarda o usuario atualizado em uma variavel
    const produtoAtualizado = produtoModel.atualizar(id, {
      nome,
      preco,
      quantidade,
      descricao,
      categoria,
      imagem
    });
    // Se não achar, avisa que deu erro
    if (!produtoAtualizado) {
      return res.status(404).render("produtos/erroProduto", {
        titulo:"Erro",
        mensagem: "Produto não encontrado"
      } 

      );
    }
    // se tudo der certo, devolve uma mensagem de sucesso
    res.render( "produtos/confirmacaoProdutos", {
      titulo: "Edição Confirmada",
      tipo: "edicao",
      produtoAtualizado
    }

    );
  },
  // Função para deletar um usuário
  deletarproduto: (req, res) => {
    // Busca o id de url como parametro
    const id = req.params.id;
    // Guarda o usuario deletado em uma variavel
    const deletando = produtoModel.deletar(id);

    // se não achar, avisa que deu erro
    if (!deletando) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    // se tudo der certo, devolve uma mensagem de sucesso
    res.json({ deletando: deletando, mensagem: "Produto deletado" });
  },
};
