const express = require('express');
const app = express();

app.use(express.json());

//Rotas
const ListadePessoasRoutes = require('./Lista de Pessoas');

app.use(ListadePessoasRoutes);

//Aplicação:
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
});