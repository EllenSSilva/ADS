const express = require('express');
const router = express.Router();

router.get('/:salario', (req, res) => {
    const salario = Number(req.params.salario);
    if (salario < 1000) {
        const reajuste = (salario * 30) / 100;
        const novoSalario = reajuste + salario;
        res.json(`O novo salário é ${novoSalario}`);
    } else {
        res.json("Não tem direito ao reajuste");
    }
});

module.exports = express.Router;