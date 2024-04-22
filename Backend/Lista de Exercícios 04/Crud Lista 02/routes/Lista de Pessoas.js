const express = require('express');
const router = express.Router();

let listaPessoas = [];

router.get('/pessoas', (req, res) => {
  res.json(listaPessoas);
});

router.get('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  const pessoa = listaPessoas[id];
  if (!pessoa) {
    return res.status(404).json({ message: 'Pessoa não encontrada' });
  }
  res.json(pessoa);
});

router.post('/pessoas', (req, res) => {
  const pessoa = req.body;
  listaPessoas.push(pessoa);
  res.json({ message: 'Pessoa cadastrada' });
});

router.delete('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= listaPessoas.length) {
    return res.status(404).json({ message: 'Índice inválido' });
  }
  listaPessoas.splice(id, 1);
  res.json({ message: 'Pessoa deletada' });
});

router.put('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= listaPessoas.length) {
    return res.status(404).json({ message: 'Índice inválido' });
  }
  const { nome, idade, email, telefone } = req.body;
  const pessoaExistente = listaPessoas[id];
  if (!pessoaExistente) {
    return res.status(404).json({ message: 'Pessoa não encontrada' });
  }
  pessoaExistente.nome = nome;
  pessoaExistente.idade = idade;
  pessoaExistente.email = email;
  pessoaExistente.telefone = telefone;
  res.json(pessoaExistente);
});

module.exports = express.Router
