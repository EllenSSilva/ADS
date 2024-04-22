const express = require('express');
const router = express.Router();

router.get('/:altura/:sexo', (req, res) => {
    const altura = Number(req.params.altura);
    const sexo = req.params.sexo.toLowerCase();

    if (sexo === 'masculino') {
        const calculoPeso = (72.7 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calculoPeso.toFixed(2)} kg.`);
    } else if (sexo === 'feminino') {
        const calcularPesoMulher = (62.1 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calcularPesoMulher.toFixed(2)} kg.`);
    } else {
        res.status(400).json('Por favor, especifique "Masculino" ou "Feminino" como sexo.');
    }
});

router.get('/', (req, res) => {
    const altura = Number(req.query.altura);
    const sexo = req.query.sexo.toLowerCase();

    if (sexo === 'masculino') {
        const calculoPeso = (72.7 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calculoPeso.toFixed(2)} kg.`);
    } else if (sexo === 'feminino') {
        const calcularPesoMulher = (62.1 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calcularPesoMulher.toFixed(2)} kg.`);
    } else {
        res.status(400).json('Por favor, especifique "Masculino" ou "Feminino" como sexo.');
    }
});

router.post('/', (req, res) => {
    const altura = Number(req.body.altura);
    const sexo = req.body.sexo.toLowerCase();

    if (sexo === 'masculino') {
        const calculoPeso = (72.7 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calculoPeso.toFixed(2)} kg.`);
    } else if (sexo === 'feminino') {
        const calcularPesoMulher = (62.1 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calcularPesoMulher.toFixed(2)} kg.`);
    } else {
        res.status(400).json('Por favor, especifique "Masculino" ou "Feminino" como sexo.');
    }
});

module.exports = express.Router;