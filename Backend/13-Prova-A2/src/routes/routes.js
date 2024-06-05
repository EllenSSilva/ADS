const express = require('express')
const router = express.Router()

// Controllers
const CargoController = require('../controller/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ProjetoController = require('../controllers/ProjetoController')
const TarefaController = require('../controllers/TarefaCon  troller')

// Validators
const {validarID} = require ('../validators/Idvalidator')
const {validarCargo} = require ('../validators/CargoValidator')
const {validarDepartamento} = require ('../validators/DepartamentoValidator')
const {validarFuncionario} = require ('../validators/FuncionarioValidator')
const {validarProjeto} = require ('../validators/ProjetoValidator')
const {validarTarefa} = require ('../validators/TarefaValidator')

// Abaixo encontram-se as areas do projeto

// Agendamento 

// Serviço 

// Funcionario

// Departamento

// Cargo

// pet

// cliente 



