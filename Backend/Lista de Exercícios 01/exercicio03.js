const prompt = require('prompt-sync')();

function main() {
    const salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário: "));
    const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%): "));

    const novoSalario = calcularNovoSalario(salarioAtual, percentualReajuste);

    console.log("Novo salário: R$ " + novoSalario.toFixed(2));
}
function calcularNovoSalario(salarioAtual, percentualReajuste) {
    const fatorReajuste = 1 + (percentualReajuste / 100);
    return salarioAtual * fatorReajuste;
}

main();
