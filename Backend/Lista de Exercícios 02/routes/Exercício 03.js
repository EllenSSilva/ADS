const express = require('express');
const router = express.Router();

router.get('/:nome/:salario/:vendas/:porcentagem', (req, res) => {
    const nome = req.params.nome;
    const salario = Number(req.params.salario);
    const vendas = Number(req.params.vendas);
    const porcentagem = Number(req.params.porcentagem);
    const por = (vendas * porcentagem) / 100;
    const salarioFinal = salario + por;
    res.json(`Olá ${nome}, seu salário este mês foi de R$ ${salarioFinal}`);
});

router.get('/', (req, res) => {
    const nome = req.query.nome;
    const salario = Number(req.query.salario);
    const vendas = Number(req.query.vendas);
    const porcentagem = Number(req.query.porcentagem);
    const por = (vendas * porcentagem) / 100;
    const salarioFinal = salario + por;
    res.json(`Olá ${nome}, seu salário este mês foi de R$ ${salarioFinal}`);
});

router.post('/', (req, res) => {
    const nome = req.body.nome;
    const salario = Number(req.body.salario);
    const vendas = Number(req.body.vendas);
    const porcentagem = Number(req.body.porcentagem);
    const por = (vendas * porcentagem) / 100;
    const salarioFinal = salario + por;
    res.json(`Olá ${nome}, seu salário este mês foi de R$ ${salarioFinal}`);
});

module.exports = express.Router;