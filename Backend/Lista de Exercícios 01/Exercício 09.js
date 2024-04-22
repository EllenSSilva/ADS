const prompt = require('prompt-sync') ();

const numero1 = Number (prompt("Qual o primeiro valor?"));
const numero2 = Number (prompt("Qual o segundo valor?"));

soma= numero1 + numero2;
mutiplica= soma * numero1;

console.log("soma: ", soma);
console.log("mutiplica: ", mutiplica);