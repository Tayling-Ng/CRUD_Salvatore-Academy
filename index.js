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

app.listen(3000)