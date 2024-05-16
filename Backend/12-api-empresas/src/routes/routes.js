const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')

// validators
const { validarCargo } = require('../validators/CargoValidator')


// Cargo
router.post('/cargos', validarCargo, CargoController.criar)




// Funcionarios



// Departamentos







module.exports = router