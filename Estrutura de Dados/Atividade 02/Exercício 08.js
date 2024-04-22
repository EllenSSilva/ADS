function decimaç(numDecimal) {
    let arrayVazio = []
    let resto
    let hexadecimal = ''

    while (numDecimal > 0) {
        resto = numDecimal % 12;
        arrayVazio.push(resto);
        numDecimal = Math.floor(numDecimal / 12)
    }

    while (arrayVazio.length > 0) {
        hexadecimal += arrayVazio.pop().toString(12)
    }
    return hexadecimal;
}

console.log(decimaç(10));