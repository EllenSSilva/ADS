const express = require('express');
const router = express.Router();

router.get('/:salarioMinimo/:horasTrabalhadas/:dependentes/:horasExtras', (req, res) => {
    const salarioMinimo = Number(req.params.salarioMinimo);
    const horasTrabalhadas = Number(req.params.horasTrabalhadas);
    const dependentes = Number(req.params.dependentes);
    const horasExtras = Number(req.params.horasExtras);

    const valorHoras = salarioMinimo / 5;
    const salarioMensal = horasTrabalhadas * valorHoras;
    const valorExtra = (valorHoras * 50) / 100;
    const valorDependente = dependentes * 32;
    const salarioBruto = salarioMensal + (valorExtra * horasExtras) + valorDependente;

    let irrf;
    if (salarioBruto < 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;
    res.json(`Seu salário é R$${salarioReceber}`);
});

router.get('/', (req, res) => {
    const salarioMinimo = Number(req.query.salarioMinimo);
    const horasTrabalhadas = Number(req.query.horasTrabalhadas);
    const dependentes = Number(req.query.dependentes);
    const horasExtras = Number(req.query.horasExtras);

    const valorHoras = salarioMinimo / 5;
    const salarioMensal = horasTrabalhadas * valorHoras;
    const valorExtras = (valorHoras * 50) / 100;
    const valorDependente = dependentes * 32;
    const salarioBruto = salarioMensal + (valorExtras * horasExtras) + valorDependente;

    let irrf;
    if (salarioBruto < 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;
    res.json(`Seu salário é R$${salarioReceber}`);
});

router.post('/', (req, res) => {
    const salarioMinimo = Number(req.body.salarioMinimo);
    const horasTrabalhadas = Number(req.body.horasTrabalhadas);
    const dependentes = Number(req.body.dependentes);
    const horasExtras = Number(req.body.horasExtras);

    const valorHoras = salarioMinimo / 5;
    const salarioMensal = horasTrabalhadas * valorHoras;
    const valorExtras = (valorHoras * 50) / 100;
    const valorDependente = dependentes * 32;
    const salarioBruto = salarioMensal + (valorExtras * horasExtras) + valorDependente;

    let irrf;
    if (salarioBruto < 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;
    res.json(`Seu salário é R$${salarioReceber}`);
});

module.exports = express.Router;