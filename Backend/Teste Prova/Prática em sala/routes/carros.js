const express = require('express')
const router = express.Router()
let listaCarros = [
    {
        id: 1,
        marca: "Fiat",
        modelo: "Marea BOMBA",
        cor: "Vermelho",
        valor: 30000.00
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Civic",
        cor: "Preto",
        valor: 120000.00
    }
]
// READ -> Buscar todos os carros
router.get('/carros', (req, res) => {
    res.json(listaCarros)
})
// READ -> Busca de carro por id
router.get('/carros/:id', (req, res) => {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id)
    if (carro) {
        return res.json(carro)
    }
    return res.status(404).json({ mensagem: "Carro não encontrato!" })
})
// CREATE -> Cadastro de carro
router.post('/carros', (req, res) => {
    const dados = req.body

    if (!dados.modelo || !dados.marca || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "Marca, modelo, cor e valor são obrigatórios" })
    }

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros.push(carro)

    res.json({
        mensagem: "Carro cadastrado com sucesso!",
        carro: carro
    })
})
router.put('/carros/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body

    if (!dados.modelo || !dados.marca || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "Marca, modelo, cor e valor são obrigatórios" })
    }

    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrato!" })
    }

    const carroAtualizado = {
        id: Number(id),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros[index] = carroAtualizado

    res.json({
        mensagem: "Carro atualizado com sucesso!",
        carro: carroAtualizado
    })
})

// DELETE -> Excluir um carro
router.delete('/carros/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrato!" })
    }

    listaCarros.splice(index, 1)
    res.json({ mensagem: "Carro excluído com sucesso!" })
})
// READ -> Buscar todos os carros de uma determinada cor
router.get('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())
    res.json(carros)
})
// READ -> Buscar o valor somado(total) de todos os carros de uma determinada cor
router.get('/carros/cor/:cor/valor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())

    let valorTotal = 0
    carros.forEach(carro => {
        valorTotal = valorTotal + carro.valor
    })

    res.json({
        quantidade: carros.length,
            valor: valorTotal
        })
})

module.exports = router