const Funcionario = require('../models/Funcionario');

async function buscarTodos(req, res) {
    try {
        const funcionarios = await Funcionario.find();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar funcionários", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const funcionario = await Funcionario.findById(req.params.id);
        if (funcionario) {
            res.json(funcionario);
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar funcionário por ID", error });
    }
}

async function criar(req, res) {
    try {
        const novoFuncionario = new Funcionario(req.body);
        const funcionarioCriado = await novoFuncionario.save();
        res.status(201).json(funcionarioCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar funcionário", error });
    }
}

async function atualizar(req, res) {
    try {
        const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (funcionarioAtualizado) {
            res.json({
                mensagem: "Funcionário atualizado com sucesso!",
                funcionarioAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar funcionário", error });
    }
}

async function excluir(req, res) {
    try {
        const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id);
        if (funcionarioExcluido) {
            res.json({
                mensagem: "Funcionário excluído com sucesso!",
                funcionarioExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir funcionário", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};