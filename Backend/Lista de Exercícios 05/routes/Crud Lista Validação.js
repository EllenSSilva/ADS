const express = require('express');
const router = express.Router();

let pessoas = [
    { id: 1, nome: 'Ellen', idade: 21, email: 'ellen@gmail.com', telefone: '6187875986' }
];

router.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

router.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (!pessoa) {
        res.status(404).json({ error: 'Pessoa não encontrada' });
    } else {
        res.json(pessoa);
    }
});

router.post('/pessoas', (req, res) => {
    const pessoa = req.body;
    if (!pessoa.nome || !pessoa.idade || !pessoa.email || !pessoa.telefone) {
        res.status(400).json({ error: 'Todos os atributos devem ser preenchidos' });
    } else {
        pessoa.id = pessoas.length + 1;
        pessoas.push(pessoa);
        res.status(201).json(pessoa);
    }
});

router.put('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoaIndex = pessoas.findIndex(p => p.id === id);
    if (pessoaIndex === -1) {
        res.status(404).json({ error: 'Pessoa não encontrada' });
    } else {
        const pessoa = req.body;
        if (!pessoa.nome || !pessoa.idade || !pessoa.email || !pessoa.telefone) {
            res.status(400).json({ error: 'Todos os atributos devem ser preenchidos' });
        } else {
            pessoas[pessoaIndex] = { ...pessoa, id };
            res.json(pessoas[pessoaIndex]);
        }
    }
});

router.delete('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pessoas = pessoas.filter(p => p.id !== id);
    res.status(204).end();
});

module.exports = router;
