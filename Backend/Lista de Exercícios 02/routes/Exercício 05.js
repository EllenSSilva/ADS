const express = require('express');
const router = express.Router();

router.get('/:salario', (req, res) => {
    const salario = Number(req.params.salario);

    if (salario <= 2000) {
        const reajuste1 = salario + (salario * 50) / 100;
        res.json(`Seu novo salário é de ${reajuste1}`);
    } else {
        const reajuste2 = salario + (salario * 30) / 100;
        res.json(`Seu novo salário é de ${reajuste2}`);
    }
});

router.get('/', (req, res) => {
    const salario = Number(req.query.salario);

    if (salario <= 2000) {
        const reajuste1 = salario + (salario * 50) / 100;
        res.json(`Seu novo salário é de ${reajuste1}`);
    } else {
        const reajuste2 = salario + (salario * 30) / 100;
        res.json(`Seu novo salário é de ${reajuste2}`);
    }
});

router.post('/', (req, res) => {
    const salario = Number(req.body.salario);

    if (salario <= 2000) {
        const reajuste1 = salario + (salario * 50) / 100;
        res.json(`Seu novo salário é de ${reajuste1}`);
    } else {
        const reajuste2 = salario + (salario * 30) / 100;
        res.json(`Seu novo salário é de ${reajuste2}`);
    }
});

module.exports = express.Router;