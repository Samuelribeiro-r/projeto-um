// Importando o banco de dados
const db = require("../data/db.json");

// Variavel pra armazenar os usuários do db
let listausuarios = db.usuarios;

module.exports = {
  //funcao para validar o  login
  login: (email, senha) => {
    // busca na lista de usuários, se tem aquele usuario com as informações que ele me passou
    let logado =
      listausuarios.find(
        (user) => user.email === email && user.senha === senha
      ) || null;
    return logado;
  },
  // função para salvar um novo usuário
  salvar: ({ usuario, email, senha, tipo }) => {
    const novoUsuario = {
      id: listausuarios.length + 1,
      usuario,
      email,
      senha,
      tipo
    };
    listausuarios.push(novoUsuario);
    console.log("Novo usuario Salvo:", novoUsuario);
    return novoUsuario;
  },
  // Busca todos os usuários do banco
  listarTodos: () => {
    return listausuarios;
  },
  // Busca um usuario especifico do banco
  buscarPorId: (id) => {
    return listausuarios.find((user) => user.id == id || null);
  },
  atualizar: (id, { usuario, email, senha, tipo }) => {
    const index = listausuarios.findIndex((user) => user.id == id);
    if (index === -1) return null;
    // Se achar um usuário com aquele id, atualiza as informações
    listausuarios[index] = {
      ...listausuarios[index],
      usuario: usuario || listausuarios[index].usuario,
      email: email || listausuarios[index].email,
      senha: senha || listausuarios[index].senha,
      tipo: tipo || listausuarios[index].tipo
    };
    // Retporna o usuario atualizado
    return listausuarios[index];
  },
 deletar: (id) => {
    // Busca na lista de usuários, um usuário com aquele id específico, se achar, pega o index dele e guarda na variávl index
    const index = listausuarios.findIndex((user) => user.id == id);
    // Se não achar, significa que um usuário com aquele index não existe
    if (index === -1) return false;
    // Atualiza o array com os usuários, agora com o usuário já retirado
    const usuarioRemovido = listausuarios.splice(index, 1);
    return usuarioRemovido;
  },
};