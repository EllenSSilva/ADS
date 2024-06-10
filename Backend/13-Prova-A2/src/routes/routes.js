const express = require('express');
const router = express.Router();

// controllers
const AgendamentoController = require('../controllers/AgendamentoController');
const ClienteController = require('../controllers/ClienteController');
const FuncionarioController = require('../controllers/FuncionarioController');
const PetController = require('../controllers/PetController');
const ServicoController = require('../controllers/ServicoController');

// validators
const { validarID } = require('../validators/IdValidator');
const { validarAgendamento } = require('../validators/AgendamentoValidator');
const { validarCliente } = require('../validators/ClienteValidator');
const { validarFuncionario } = require('../validators/FuncionarioValidator');
const { validarPet } = require('../validators/PetValidator');
const { validarServico } = require('../validators/ServicoValidator');

// Agendamento
router.get('/agendamentos', AgendamentoController.buscarTodos);
router.get('/agendamentos/:id', validarID, AgendamentoController.buscarPorID);
router.post('/agendamentos', validarAgendamento, AgendamentoController.criar);
router.put('/agendamentos/:id', validarID, validarAgendamento, AgendamentoController.atualizar);
router.delete('/agendamentos/:id', validarID, AgendamentoController.excluir);

// Cliente
router.get('/clientes', ClienteController.buscarTodos);
router.get('/clientes/:id', validarID, ClienteController.buscarPorID);
router.post('/clientes', validarCliente, ClienteController.criar);
router.put('/clientes/:id', validarID, validarCliente, ClienteController.atualizar);
router.delete('/clientes/:id', validarID, ClienteController.excluir);

// Funcionario
router.get('/funcionarios', FuncionarioController.buscarTodos);
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID);
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar);
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar);
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir);

// Pet
router.get('/pets', PetController.buscarTodos);
router.get('/pets/:id', validarID, PetController.buscarPorID);
router.post('/pets', validarPet, PetController.criar);
router.put('/pets/:id', validarID, validarPet, PetController.atualizar);
router.delete('/pets/:id', validarID, PetController.excluir);

// Servico
router.get('/servicos', ServicoController.buscarTodos);
router.get('/servicos/:id', validarID, ServicoController.buscarPorID);
router.post('/servicos', validarServico, ServicoController.criar);
router.put('/servicos/:id', validarID, validarServico, ServicoController.atualizar);
router.delete('/servicos/:id', validarID, ServicoController.excluir);

module.exports = router;