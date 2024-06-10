const mongoose = require('mongoose')

const schema = new mongoose.Schema (
    {
        nome: {
            type: String,
            required: true
        },
        cargo: {
            type: String, 
            required: false
        },
    },
    {timestamps:true})

const Funcionario = mongoose.model('funcionario',schema)

module.exports = Funcionario