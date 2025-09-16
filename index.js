const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const Caminho = path.join(__dirname, 'views')

 app.get("/home", (req,res) =>{
    res.status(200)
    res.sendFile(`${Caminho}/index.html`)

 })
 app.get("/pokemon", (req,res) =>{
    res.status(200)
    res.sendFile("Charizard")

    
 })
 app.use((req,res) =>{
    res.status(404)
    res.sendFile(`${Caminho}/404.html`)
 })


app.get('/', (req, res) => {
  res.status(200).send("Parabéns Você conseguiu")
})

app.listen(port, () => {
  console.log(`Servidor funcionando em http://localhost:${port}`)
})
