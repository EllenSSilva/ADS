const Servico = require('../models/Servico');

async function buscarTodos(req, res) {
    try {
        const servicos = await Servico.find();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar serviços", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const servico = await Servico.findById(req.params.id);
        if (servico) {
            res.json(servico);
        } else {
            res.status(404).json({ mensagem: "Serviço não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar serviço por ID", error });
    }
}

async function criar(req, res) {
    try {
        const novoServico = new Servico(req.body);
        const servicoCriado = await novoServico.save();
        res.status(201).json(servicoCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar serviço", error });
    }
}

async function atualizar(req, res) {
    try {
        const servicoAtualizado = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (servicoAtualizado) {
            res.json({
                mensagem: "Serviço atualizado com sucesso!",
                servicoAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Serviço não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar serviço", error });
    }
}

async function excluir(req, res) {
    try {
        const servicoExcluido = await Servico.findByIdAndDelete(req.params.id);
        if (servicoExcluido) {
            res.json({
                mensagem: "Serviço excluído com sucesso!",
                servicoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Serviço não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir serviço", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};