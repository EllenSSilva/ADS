let pessoas = [];

module.exports = {
  getPessoas: () => pessoas,
  getPessoaById: (id) => pessoas.find((pessoa) => pessoa.id === id),
  adicionarPessoa: (pessoa) => {
    pessoas.push(pessoa);
    return pessoa;
  },
  atualizarPessoa: (id, pessoaAtualizada) => {
    const index = pessoas.findIndex((pessoa) => pessoa.id === id);
    if (index !== -1) {
      pessoas[index] = pessoaAtualizada;
      return pessoaAtualizada;
    }
    return null;
  },
  removerPessoa: (id) => {
    pessoas = pessoas.filter((pessoa) => pessoa.id !== id);
  },
};
