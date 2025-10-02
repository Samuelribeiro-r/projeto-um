const produtoModel = require("../models/produtoModel");

module.exports = {
  Cadastrarproduto: (req, res) => {
    res.render("cadastrar");
  },

  salvarproduto: (req, res) => {
    const { nome, preço, quantidade, descricao, categoria } = req.body;
    produtoModel.salvar({ nome, preço, quantidade, descricao, categoria });
    res.render("cadastroConfirmado");
  },
  listarproduto: (req, res) => {
    const produto = produtoModel.listarTodos();
    res.json(produto);
    res.render("produto", { produto });
  },
  buscarproduto: (req, res) => {
    // Busca o id de url como parametro
    const id = req.params.id;
    // Guarda o usuario retornando depois de buscar pelo model
    const produto = produtoModel.buscarPorId(id);
    // Se não achar, avisa que deu erro
    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    // se achar, devolve as informações via json
    res.json(produto);
  },

  // Função para atualizar as informações de um usuário
  atualizarproduto: (req, res) => {
    // busca o id de url como parametro
    const id = req.params.id;
    // Busca as novas informações para atualizar
    const { nome, preço, quantidade, descricao, categoria } = req.body;
    // Guarda o usuario atualizado em uma variavel
    const produtoAtualizado = produtoModel.atualizar(id, {
      nome,
      preço,
      quantidade,
      descricao,
      categoria,
    });
    // Se não achar, avisa que deu erro
    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    // se tudo der certo, devolve uma mensagem de sucesso
    res.json({ mensagem: "Produto atualizado" });
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
    res.json({ mensagem: "Produto deletado" });
  },
};
