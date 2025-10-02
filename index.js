// Ele é o arquivo principal do projeto     
const express = require('express')
//  importando o express 
const app = express()
//  criando uma aplicação express
const port = 5000

 // criando uma porta para o servidor   
const path = require('path')
// importando o path
const caminho = path.join(__dirname, "views")

// importações
// importa as rotas de usuário
const userRoutes = require("./routes/userRoutes")
const produtoRoutes = require("./routes/produtoRoutes")
// cria uma rota principal para as sub rotas de usuario

// Interpretador de json Para tratar as informações do body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/usuarios", userRoutes)

app.use("/produtos", produtoRoutes)

// definindo o ejs como view engine
app.set('view engine', 'ejs')

// definindo 'atalho' onde buscar as views
app.set("views", path.join(__dirname, "views"))


// criando o caminho para a pasta views
 app.get("/home", (req,res) =>{
    res.status(200)
    res.render("index", {titulo: "Pagina inicial"})

 })
 app.get('/', (req, res) => {

  res.status(200).render("index",  {titulo: "Pagina inicial"})
})
 
 // enviando o arquivo html como resposta
 app.use((req,res) =>{
    
    res.status(404)
    res.render("404",  {titulo: "Pagina de erro"})
 })

// enviando o arquivo html como resposta

// enviando uma mensagem como resposta
app.listen(port, () => {
    // iniciando o servidor
  console.log(`Servidor funcionando em http://localhost:${port}`)
})
