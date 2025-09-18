// Importando o banco de dados
const db = require("../data/db.json")

// Variavel pra armazenar os usuários do db
let listausuarios = db.usuarios

module.exports = {
    //funcao para validar o  login
    login : (usuario,senha) => {
        // busca na lista de usuários, se tem aquele usuario com as informações que ele me passou
        let logado = listausuarios.find ((user) => {user.email === usuario && user.senha === senha}) || null 
        return logado
    }
}