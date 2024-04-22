const express = require('express');
const router = express.Router();

router.get('/:quantidadeMin/:quantidadeMax', (req, res) => {
    const quantidadeMinima = Number(req.params.quantidadeMin);
    const quantidadeMaxima = Number(req.params.quantidadeMax);
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
    res.send(`A quantidade média é: ${estoqueMedio}`);
});
router.get('/', (req, res) => {
    const quantidadeMinima = Number(req.query.quantidadeMin);
    const quantidadeMaxima = Number(req.query.quantidadeMax);
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
    res.send(`A quantidade média é: ${estoqueMedio}`);
});
router.post('/', (req, res) => {
    const quantidadeMinima = Number(req.body.quantidadeMin);
    const quantidadeMaxima = Number(req.body.quantidadeMax);
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
    res.send(`A quantidade média é: ${estoqueMedio}`);
});

module.exports = express.Router;
