const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false
        },
        preco: {
            type: Number,
            required: true
        },
    },
    {timestamps:true})

const Servico = mongoose.model('servico',schema)

module.exports = Servico