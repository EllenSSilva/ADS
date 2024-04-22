const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Raio da caixa d'água: ", function(raio) {
    readline.question("Altura da caixa d'água: ", function(altura) {
        const PI = Math.PI;

        const volume = PI * Math.pow(parseFloat(raio), 2) * parseFloat(altura);

        console.log("O volume da caixa d'água cilíndrica é: " + volume.toFixed(2));

        readline.close();
    });
});
