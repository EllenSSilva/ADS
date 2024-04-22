const prompt = require('prompt-sync')();

function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}
function main() {
    const notas = [];
    for (let i = 1; i <= 4; i++) {
        const nota = parseFloat(prompt("Insira a nota" + i + ": "));
        notas.push(nota);
    }
    
    const media = calcularMedia(notas);
    const situacao = media >= 7.0 ? "Aprovado" : "Reprovado";
    
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: " + situacao);
}
main();
