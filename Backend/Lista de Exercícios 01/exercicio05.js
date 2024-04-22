const prompt = require('prompt-sync') ();

const valorCusto = Number(prompt("qual o valor de custo do veiculo ? R$"));
const valorDistribuidor= Number(prompt("qual a porcentagem do distribuidor ? "));
const valorImpostos= Number(prompt("qual a porcentagem dos impostos ? "));


 custoDistribuidor = valorCusto * valorDistribuidor/100;
 custoImpostos = valorCusto * valorImpostos/100;
 custo = valorCusto + custoDistribuidor + custoImpostos;

 console.log("Valor de venda : R$ ", custo)