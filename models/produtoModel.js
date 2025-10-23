const db = require("../data/db.json");

// Variavel pra armazenar os usuários do db
let listaprodutos = db.produtos;

module.exports = {
  //funcao para validar o  login
  // função para salvar um novo usuário
  salvar: ({ nome, preco, quantidade, descricao, categoria, imagem }) => {
    const novoProduto = {
      id: listaprodutos.length + 1,
      nome,
      preco,
      quantidade,
      descricao,
      categoria,
      imagem
      
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
  atualizar: (id, { nome, preco, quantidade, descricao, categoria, imagem}) => {
    const index = listaprodutos.findIndex((user) => user.id == id);
    if (index === -1) return null;

    listaprodutos[index] = {
      ...listaprodutos[index],

      nome: nome || listaprodutos[index].nome,
      preco: preco || listaprodutos[index].preco,
      quantidade: quantidade || listaprodutos[index].quantidade,
      descricao: descricao || listaprodutos[index].descricao,
      categoria: categoria || listaprodutos[index].categoria,
      imagem: imagem || listaprodutos[index].imagem
     
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
