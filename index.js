const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Olá')
})

app.listen(3000)