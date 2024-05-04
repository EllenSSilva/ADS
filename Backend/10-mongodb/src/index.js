//Imports
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

//Middlewares
app.use(express.json())

//Conexão com MongoDB
mongoose.connect("mongodb+srv://<----->@cluster0.vs3zrnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log ("Conectado ao MongoDB"))
        .catch(err => console.log("Erro ao conectar no MongoDB" , err))
//Schemas
const Tarefas = mongoose.model('tarefa', {nome: String})

//Rotas
app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefas({nome: req.body.nome})
    const tarefaCriada = await tarefa.save()
    res.json(tarefaCriada)
})

app.listen (PORT, () => {
    console.log('Aplicação rodando na porta ${PORT}')
})