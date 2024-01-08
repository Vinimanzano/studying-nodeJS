import express from 'express'

const app = express()

// mock 
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Portugal', grupo: 'G'},
    {id: 3, selecao: 'Espanha', grupo: 'G'},
    {id: 4, selecao: 'Inglaterra', grupo: 'G'},
]

// criar rota padrão ou raiz
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

export default app


