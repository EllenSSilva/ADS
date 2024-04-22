const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Insira a primeira nota: ", function(nota1) {
    readline.question("Insira a segunda nota: ", function(nota2) {
        const peso1 = 4;
        const peso2 = 6;

        const notaPonderada1 = parseFloat(nota1) * peso1;
        const notaPonderada2 = parseFloat(nota2) * peso2;

        const mediaFinal = (notaPonderada1 + notaPonderada2) / (peso1 + peso2);

        console.log("Média final do aluno: " + mediaFinal.toFixed(2));

        readline.close();
    });
});
