const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o número de carros vendidos: ", function(numCarrosVendidos) {
    readline.question("Digite o valor total das vendas: ", function(valorTotalVendas) {
        readline.question("Digite o salário fixo do vendedor: ", function(salarioFixo) {
            readline.question("Digite o valor recebido por carro vendido: ", function(valorPorCarro) {
                const numCarros = parseInt(numCarrosVendidos);
                const valorVendas = parseFloat(valorTotalVendas);
                const salarioFixoVendedor = parseFloat(salarioFixo);
                const valorCarroVendido = parseFloat(valorPorCarro);

                const comissaoFixa = numCarros * valorCarroVendido;
                const comissaoPercentual = 0.05 * valorVendas;
                const salarioFinal = salarioFixoVendedor + comissaoFixa + comissaoPercentual;

                console.log("Salário final do vendedor: R$ " + salarioFinal.toFixed(2));

                readline.close();
            });
        });
    });
});
