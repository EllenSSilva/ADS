function fatorial(numeros) {
    let arrayFatorial = []
    let fatorial = 1
    
    for (let i = 1; i <= numeros; i++) {
        fatorial *= i
        arrayFatorial.push(fatorial)
    }
    console.log(arrayFatorial.join(' - '))
}

fatorial(9)