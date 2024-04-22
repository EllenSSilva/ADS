const express = require('express');
const router = express.Router(); 
let pessoas = [
    {
        id: 1,
        nome: 'Ellen',
        idade: 18,
        email: 'ellen@gmail.com',
        telefone: '6187875986'
    }
];
router.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

router.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    res.json(pessoa);
});

router.post('/pessoas', (req, res) => {
    const novaPessoa = req.body;
    novaPessoa.id = pessoas.length + 1;
    pessoas.push(novaPessoa);
    res.status(201).json(novaPessoa);
});

router.put('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoaIndex = pessoas.findIndex(p => p.id === id);
    if (pessoaIndex === -1) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    const pessoaAtualizada = req.body;
    pessoas[pessoaIndex] = { ...pessoas[pessoaIndex], ...pessoaAtualizada };
    res.json(pessoas[pessoaIndex]);
});

router.delete('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoaIndex = pessoas.findIndex(p => p.id === id);
    if (pessoaIndex === -1) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    pessoas.splice(pessoaIndex, 1);
    res.json({ message: 'Pessoa removida com sucesso' });
});

module.exports = router;