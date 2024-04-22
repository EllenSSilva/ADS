const prompt = require('prompt-sync') ();


percentual_Disstribuidor =0.28;
percentual_Impostos = 0.45;

const valorCustro= Number(prompt("qual o valor de custo do veiculo ? R$"));

custo_distribuidor = valorCustro * percentual_Disstribuidor;
custo_impostos = valorCustro * percentual_Impostos;
custo = valorCustro + custo_distribuidor + custo_impostos;

console.log("Valor de venda : R$ ", custo)