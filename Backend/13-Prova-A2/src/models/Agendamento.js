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
            type: mongoose.Types.ObjectId,
            ref: 'pet',
            required: true
        },
        servico: {
            type: mongoose.Types.ObjectId,
            ref: 'servico',
            required: true
        },
    },
    {timestamps:true})

const Agendamento = mongoose.model('agendamento',schema)

module.exports = Agendamento