const express = require('express')
const router = express.Router()

let listafuncionarios = [
    {
        id: 1,
        nome: "Ellen",
        email: "ellen.ruth@gmail.com",
        telefone: "61985859698",
        cargo: "auxiliar administrativo",
        salario: 1200
    },
    {
        id: 2,
        nome: "Ruth",
        email: "ruth.ellen@gmail.com",
        telefone: "61986975869",
        cargo: "assistente administrativo",
        salario: 1290
    }
]

// Rota para calcular e retornar a média salarial de todos os funcionários da lista
router.get('/funcionarios/mediasalarial', (req, res) => {
    if (listafuncionarios.length === 0) {
        return res.status(404).json({ mensagem: "Não há funcionários na lista" });
    }

    let somaSalarios = 0;
    listafuncionarios.forEach(funcionario => {
        somaSalarios += parseFloat(funcionario.salario);
    });

    const mediaSalarial = somaSalarios / listafuncionarios.length;

    res.json({ mediaSalarial });
});

// CREATE -> Cadastro de funcionario 
router.post('/funcionarios', (req, res) => {
    const dados = req.body;

    if (!dados.nome || !dados.email || !dados.telefone || !dados.cargo || !dados.salario) {
        return res.status(400).json({ mensagem: "Nome, email, telefone, cargo e salario são obrigatórios!" });
    }

    const funcionario = {
        id: listafuncionarios.length + 1,
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        cargo: dados.cargo,
        salario: parseFloat(dados.salario),
    }

    listafuncionarios.push(funcionario);
    res.json({ mensagem: "Funcionario cadastrado com sucesso!", funcionario });
});

// UPDATE -> Atualização de cadastro de funcionario
router.put('/funcionarios/:id', (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    if (!dados.nome || !dados.email || !dados.telefone || !dados.cargo || !dados.salario) {
        return res.status(400).json({ mensagem: "Nome, email, telefone, cargo e salario são obrigatórios!" });
    }

    const index = listafuncionarios.findIndex(funcionario => funcionario.id == id);
    if (index === -1) {
        return res.status(404).json({ mensagem: "Funcionario não encontrado!" });
    }

    const funcionarioAtualizado = {
        id: Number(id),
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        cargo: dados.cargo,
        salario: parseFloat(dados.salario),
    };

    listafuncionarios[index] = funcionarioAtualizado;

    res.json({ mensagem: "Funcionario atualizado com sucesso!", funcionario: funcionarioAtualizado });
});

// DELETE -> Excluir funcionario
router.delete('/funcionarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listafuncionarios.findIndex(funcionario => funcionario.id == id);
    if (index === -1) {
        return res.status(404).json({ mensagem: "Funcionario não encontrado!" });
    }
    listafuncionarios.splice(index, 1);
    res.json({ mensagem: "Funcionario excluído com sucesso!" });
});

module.exports = router;
