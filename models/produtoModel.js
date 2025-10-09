const db = require("../data/db.json");

// Variavel pra armazenar os usuários do db
let listaprodutos = db.produtos;

module.exports = {
  //funcao para validar o  login
  // função para salvar um novo usuário
  salvar: ({ nome, preço, quantidade, descricao, categoria, url }) => {
    const novoProduto = {
      id: listaprodutos.lenght + 1,
      nome,
      preço,
      quantidade,
      descricao,
      categoria,
      url
      
    };
    listaprodutos.push(novoProduto);
    console.log("Novo produto Salvo:", novoProduto);
    return novoProduto;
  },

  listarTodos: () => {
    return listaprodutos;
  },

  buscarPorId: (id) => {
    return listaprodutos.find((user) => user.id == id || null);
  },
  atualizar: (id, { nome, preço, quantidade, descricao, categoria, url }) => {
    const index = listaprodutos.findIndex((user) => user.id == id);
    if (index === -1) return null;

    listaprodutos[index] = {
      ...listaprodutos[index],

      listaprodutos: id || listaprodutos[index].id,
      listaprodutos: nome || listaprodutos[index].nome,
      listaprodutos: preço || listaprodutos[index].preço,
      listaprodutos: quantidade || listaprodutos[index].quantidade,
      listaprodutos: descricao || listaprodutos[index].descricao,
      listaprodutos: categoria || listaprodutos[index].categoria,
      listaprodutos: url || listaprodutos[index].url
    };
    // Retporna o usuario atualizado
    return listaprodutos[index];
  },
  deletar: (id) => {
    const index = listaprodutos.findIndex((user) => user.id == id);
    if (index === -1) return false;
    listaprodutos.splice(index, 1);
    return true;
  },
};
