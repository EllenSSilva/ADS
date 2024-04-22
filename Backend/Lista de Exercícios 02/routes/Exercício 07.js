const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    const corpo = req.body;
    let listaProdutos = corpo.produtos; // Alteração aqui

    let soma = 0;
    let maiorPreco = 0;

    listaProdutos.forEach(produto => {
        soma += produto.preco;
        if (produto.preco > maiorPreco) {
            maiorPreco = produto.preco;
        }
    });

    const media = soma / listaProdutos.length;
    
    const resultado = {
        precoMedio: media.toFixed(2),
        maiorPreco: maiorPreco
    };

    res.json(resultado);
});

module.exports = express.Router;