const mysql = require("mysql2")

// CRIAR UUMA VARIAVEL PARA CONEXÃO COM O BANCO DE DADOS
const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "supermercado",
    user: "root",
    password: "usbw"
})

// conedar com o banco de dados, ou tenta pelo menos
conn.connect( (erro) => {
    if(erro){
        console.log(erro)
      
    }
    else{
        console.log("Conectado com sucesso!")
    }
})

module.exports = conn