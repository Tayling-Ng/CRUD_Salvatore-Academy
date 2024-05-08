const express = require('express')
const app = express()

// Receber o corpo da requisição em json
app.use(express.json())

// Requisição GET: http://localhost:3000
app.get('/', function (req, res) {
    res.send('Hi Folks!')
})

const lista = ['Java', 'Kotlin', 'Android']

// Endpoint Read All: [GET] /personagem
// Requisição GET: http://localhost:3000/personagem
app.get('/personagem', function (req, res) {
    res.send(lista)
})

// Endpoint Read by ID: [GET] /personagem/:id
// Requisição GET: http://localhost:3000/personagem/id
app.get('/personagem/:id', function (req, res) {
    
    const id = req.params.id // Acessando o parâmetro id

    const item = lista[id - 1] // Acessando o item da lista usando id - 1

    res.send(item)
})

// Endpoint Create: [POST] /personagem
// Escrever o corpo da requisição
// Requisição POST: http://localhost:3000/personagem
app.post('/personagem', function (req, res) {

    const body = req.body // Acessando o corpo da requisição
    // console.log(body)

    const novoItem = body.nome // Acessando a propriedade nome no corpo da requisião

    lista.push(novoItem) // Adiciona o valor da propriedade na lista

    res.send('Item adicionado com sucesso!: ' + novoItem)
    // console.log(lista)
})

app.listen(3000)