const express = require('express');
const router = express.Router();

router.get('/:salario/:codigo', (req, res) => {
    const salario = Number(req.params.salario);
    const codigo = Number(req.params.codigo);

    if (codigo === 101) {
        const reajuste = salario + (salario * 5) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else if (codigo === 102) {
        const reajuste = salario + (salario * 7.5) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else if (codigo === 103) {
        const reajuste = salario + (salario * 10) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else {
        const foraDaTabela = salario + (salario * 15) / 100;
        const diferenca = foraDaTabela - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${foraDaTabela}. Seu aumento foi de R$ ${diferenca}.`);
    }
});

router.get('/', (req, res) => {
    const salario = Number(req.query.salario);
    const codigo = Number(req.query.codigo);

    if (codigo === 101) {
        const reajuste = salario + (salario * 5) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else if (codigo === 102) {
        const reajuste = salario + (salario * 7.5) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else if (codigo === 103) {
        const reajuste = salario + (salario * 10) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else {
        const foraDaTabela = salario + (salario * 15) / 100;
        const diferenca = foraDaTabela - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${foraDaTabela}. Seu aumento foi de R$ ${diferenca}.`);
    }
});

router.post('/', (req, res) => {
    const salario = Number(req.body.salario);
    const codigo = Number(req.body.codigo);

    if (codigo === 101) {
        const reajuste = salario + (salario * 5) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else if (codigo === 102) {
        const reajuste = salario + (salario * 7.5) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else if (codigo === 103) {
        const reajuste = salario + (salario * 10) / 100;
        const diferenca = reajuste - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${reajuste}. Seu aumento foi de R$ ${diferenca}.`);
    } else {
        const foraDaTabela = salario + (salario * 15) / 100;
        const diferenca = foraDaTabela - salario;

        res.json(`Seu salário antigo é R$ ${salario}. Seu novo salário é R$ ${foraDaTabela}. Seu aumento foi de R$ ${diferenca}.`);
    }
});

module.exports = express.Router;