const express = require('express');
const app = express();

app.use(express.json());

//Rotas
const exercicio01Routes = require('./Exercício 01');
const exercicio02Routes = require('./Exercício 02');
const exercicio03Routes = require('./Exercício 03');
const exercicio04Routes = require('./Exercício 04');
const exercicio05Routes = require('./Exercício 05');
const exercicio06Routes = require('./Exercício 06');
const exercicio07Routes = require('./Exercício 07');
const exercicio08Routes = require('./Exercício 08');
const exercicio09Routes = require('./Exercício 09');

app.use(exercicio01Routes);
app.use(exercicio02Routes);
app.use(exercicio03Routes);
app.use(exercicio04Routes);
app.use(exercicio05Routes);
app.use(exercicio06Routes);
app.use(exercicio07Routes);
app.use(exercicio08Routes);
app.use(exercicio09Routes);

//Aplicação:
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
});