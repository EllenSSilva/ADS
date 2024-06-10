const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        raca: {
            type: String,
            required: false
        },
        dono: {
            type: String,
            required: true
        },
    },
    {timestamps:true})

const Pet = mongoose.model('pet',schema)

module.exports = Pet