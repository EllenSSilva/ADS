const prompt = require('prompt-sync')();

function main() {
    const totalEleitores = parseInt(prompt("Total de eleitores: "));
    const votosBrancos = parseInt(prompt("Votos brancos: "));
    const votosNulos = parseInt(prompt("Votos nulos: "));
    const votosValidos = parseInt(prompt("Votos válidos: "));

    const percentualBrancos = (votosBrancos / totalEleitores) * 100;
    const percentualNulos = (votosNulos / totalEleitores) * 100;
    const percentualValidos = (votosValidos / totalEleitores) * 100;

    console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
}
main();
