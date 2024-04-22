const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const nome = req.query.nome;
    const distancia = Number(req.query.distancia);
    const tempo = Number(req.query.tempo);
    const velocidadeMedia = distancia / tempo;
    res.json(`A velocidade média do ${nome} foi de ${velocidadeMedia} Km/h`);
});

router.post('/', (req, res) => {
    const nome = req.body.nome;
    const distancia = Number(req.body.distancia);
    const tempo = Number(req.body.tempo);
    const velocidadeMedia = distancia / tempo;
    res.json(`A velocidade média do ${nome} foi de ${velocidadeMedia} Km/h`);
});

module.exports = express.Router;