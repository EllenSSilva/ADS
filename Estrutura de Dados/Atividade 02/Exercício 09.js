let pilha = []

function dire(numeros) {
    if (numeros % 2 == 0) {
        pilha.push(numeros)
        console.log(pilha)
    } 
    if (numeros % 2 !== 0) {
        pilha.pop();
        console.log(pilha)
    }
    if(pilha.length !== 0){
        pilha = []
        console.log(pilha)
    }
    else{
        console.log(`valor inválido`)
    }
}

dire(12);