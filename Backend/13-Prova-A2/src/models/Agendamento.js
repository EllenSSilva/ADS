const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        data: {
            type: Date,
            required: true
        },
        hora: {
            type: String,
            required: true
        },
        pet: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        servico: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
    },
    {timestamps:true})

const Agendamento = mongoose.model('agendamento',schema)

module.exports = Agendamento