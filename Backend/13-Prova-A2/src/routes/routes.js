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
router.get('/agendamento', AgendamentoController.buscarTodos);
router.get('/agendamento/:id', validarID, AgendamentoController.buscarPorID);
router.post('/agendamento', validarAgendamento, AgendamentoController.criar);
router.put('/agendamento/:id', validarID, validarAgendamento, AgendamentoController.atualizar);
router.delete('/agendamento/:id', validarID, AgendamentoController.excluir);

// Cliente
router.get('/cliente', ClienteController.buscarTodos);
router.get('/cliente/:id', validarID, ClienteController.buscarPorID);
router.post('/cliente', validarCliente, ClienteController.criar);
router.put('/cliente/:id', validarID, validarCliente, ClienteController.atualizar);
router.delete('/cliente/:id', validarID, ClienteController.excluir);

// Funcionario
router.get('/funcionario', FuncionarioController.buscarTodos);
router.get('/funcionario/:id', validarID, FuncionarioController.buscarPorID);
router.post('/funcionario', validarFuncionario, FuncionarioController.criar);
router.put('/funcionario/:id', validarID, validarFuncionario, FuncionarioController.atualizar);
router.delete('/funcionario/:id', validarID, FuncionarioController.excluir);

// Pet
router.get('/pet', PetController.buscarTodos);
router.get('/pet/:id', validarID, PetController.buscarPorID);
router.post('/pet', validarPet, PetController.criar);
router.put('/pet/:id', validarID, validarPet, PetController.atualizar);
router.delete('/pet/:id', validarID, PetController.excluir);

// Servico
router.get('/servico', ServicoController.buscarTodos);
router.get('/servico/:id', validarID, ServicoController.buscarPorID);
router.post('/servico', validarServico, ServicoController.criar);
router.put('/servico/:id', validarID, validarServico, ServicoController.atualizar);
router.delete('/servico/:id', validarID, ServicoController.excluir);

module.exports = router;