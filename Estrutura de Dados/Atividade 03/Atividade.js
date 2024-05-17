class Aluno {
    constructor(nome, nota, status) {
      this.nome = nome;
      this.nota = nota;
      this.status = status; 
    }
  }
  
  class ListaDeAlunos {
    constructor() {
      this.alunos = [];
      this.limite = 40;
    }
  
    adicionarAluno(nome, nota, status) {
      if (this.alunos.length >= this.limite) {
        console.log('Limite de alunos atingido.');
        return;
      }
  
      const novoAluno = new Aluno(nome, nota, status);
      this.alunos.push(novoAluno);
      this.ordenarPorNotaDecrescente();
      this.mostrarListaCompleta();
    }
  
    removerAluno(nome) {
      const index = this.alunos.findIndex(aluno => aluno.nome === nome);
      if (index !== -1) {
        this.alunos.splice(index, 1);
        console.log(`${nome} removido da posição ${index + 1}`);
        this.mostrarListaCompleta();
      } else {
        console.log(`${nome} não encontrado na lista.`);
      }
    }
  
    ordenarPorNotaDecrescente() {
      this.alunos.sort((a, b) => b.nota - a.nota);
    }
  
    mostrarListaCompleta() {
      console.log('Pos Aluno Nota Status');
      this.alunos.forEach((aluno, index) => {
        console.log(`${index + 1} ${aluno.nome} ${aluno.nota} ${aluno.status}`);
      });
    }
  
    mostrarListaAtivos() {
      console.log('Pos Aluno Nota Status (Ativos)');
      this.alunos
        .filter(aluno => aluno.status === 'A')
        .forEach((aluno, index) => {
          console.log(`${index + 1} ${aluno.nome} ${aluno.nota} ${aluno.status}`);
        });
    }
  }  
  const lista = new ListaDeAlunos();
  
  lista.adicionarAluno('Pedro', 8.9, 'A');
  lista.adicionarAluno('Ana', 8.7, 'A');
  lista.adicionarAluno('Maria', 9.3, 'I');
  
  lista.removerAluno('Pedro');
  
  lista.adicionarAluno('Paula', 9.1, 'A');
  lista.adicionarAluno('Pedro', 8.9, 'A');
  lista.adicionarAluno('João', 7.5, 'A');
  
  lista.mostrarListaCompleta();
  lista.mostrarListaAtivos();
  