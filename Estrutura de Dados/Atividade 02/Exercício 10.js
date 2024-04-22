var prompt = require('prompt-sync')()

class deClasse {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

   
    pop() {
        if (this.isEmpty()) {
            return "deClasse vazia";
        }
        return this.itens.pop();
    }

    
    isEmpty() {
        return this.itens.length === 0;
    }

   
    clear() {
        this.itens = [];
    }

    
    saida() {
        return this.itens;
    }
    desempilhar() {
        let elementosDesempilhados = [];

        while (!this.isEmpty()) {
            elementosDesempilhados.push(this.pop())
        }

        return elementosDesempilhados;
    }
}

function principal() {
    let par = new deClasse()
    let impar = new deClasse()

    
    
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Digite um número:"))

        if (numero % 2 === 0) {
            par.push(numero)
        } else {
            impar.push(numero);
        }

    
        if (numero === 0) {
            if (par.isEmpty() || impar.isEmpty()) {
                console.log("Erro: uma das deClasses está vazia.")
            } else {
                par.pop()
                impar.pop()
            }
        }
    }

    console.log("par:", par.saida());
    console.log("ímpar:", impar.saida());
    console.log("desempilhados", par.desempilhar())
    console.log("desempilhados", impar.desempilhar())

}


principal();