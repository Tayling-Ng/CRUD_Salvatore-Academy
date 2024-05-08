const express = require('express')
const app = express()

// Requisição: http://localhost:3000
app.get('/', function (req, res) {
    res.send('Hi Folks!')
})

const lista = ['Java', 'Kotlin', 'Android']

// Endpoint Read All: [GET] /personagem
// Requisição: http://localhost:3000/personagem
app.get('/personagem', function (req, res) {
    res.send(lista)
})

// Endpoint Read by ID: [GET] /personagem/:id
// Requisição: http://localhost:3000/personagem/id
app.get('/personagem/:id', function (req, res) {
    
    const id = req.params.id // Acessando o parâmetro id

    const item = lista[id - 1] // Acessando o item da lista usando id - 1

    res.send(item)
})

app.listen(3000)