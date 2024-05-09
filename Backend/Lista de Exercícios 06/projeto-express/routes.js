const express = require('express');
const router = express.Router();

// Rota para recuperar todas as pessoas
router.get('/pessoas', (req, res) => {
  // Implemente a lógica para recuperar todas as pessoas
});

// Rota para recuperar uma pessoa específica por meio de seu identificador
router.get('/pessoas/:id', (req, res) => {
  // Implemente a lógica para recuperar uma pessoa específica
});

// Rota para adicionar uma nova pessoa
router.post('/pessoas', (req, res) => {
  // Implemente a lógica para adicionar uma nova pessoa
});

// Rota para atualizar uma pessoa existente com base em seu identificador
router.put('/pessoas/:id', (req, res) => {
  // Implemente a lógica para atualizar uma pessoa existente
});

// Rota para remover uma pessoa com base em seu identificador
router.delete('/pessoas/:id', (req, res) => {
  // Implemente a lógica para remover uma pessoa
});


module.exports = router;
