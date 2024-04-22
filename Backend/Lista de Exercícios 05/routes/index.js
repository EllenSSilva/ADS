const express = require('express');
const app = express();

app.use(express.json());

// Rotas
const CrudListaValidaçãoRoutes = require('./Crud Lista Validação'); 

app.use(CrudListaValidaçãoRoutes);

// Aplicação:
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
});