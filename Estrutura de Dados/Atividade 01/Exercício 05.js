class Aluno {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
}
const meuAluno = new Aluno("Seu Nome", 25, 70.5);

meuAluno.nome = "Novo Nome";
meuAluno.idade = 30;
meuAluno.peso = 75.3;

console.log("Nome do aluno:", meuAluno.nome);
console.log("Idade do aluno:", meuAluno.idade);
console.log("Peso do aluno:", meuAluno.peso);
