const express = require('express');
const app = express();

app.use(express.json());

// Rotas
const Crud01Routes = require('./Crud 01'); 

app.use(Crud01Routes);

// Aplicação:
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
});
