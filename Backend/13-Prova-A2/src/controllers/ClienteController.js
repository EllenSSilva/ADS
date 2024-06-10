const Cliente = require('../models/Cliente');

async function buscarTodos(req, res) {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar clientes", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ mensagem: "Cliente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar cliente por ID", error });
    }
}

async function criar(req, res) {
    try {
        const novoCliente = new Cliente(req.body);
        const clienteCriado = await novoCliente.save();
        res.status(201).json(clienteCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar cliente", error });
    }
}

async function atualizar(req, res) {
    try {
        const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (clienteAtualizado) {
            res.json({
                mensagem: "Cliente atualizado com sucesso!",
                clienteAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Cliente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar cliente", error });
    }
}

async function excluir(req, res) {
    try {
        const clienteExcluido = await Cliente.findByIdAndDelete(req.params.id);
        if (clienteExcluido) {
            res.json({
                mensagem: "Cliente excluído com sucesso!",
                clienteExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Cliente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir cliente", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};