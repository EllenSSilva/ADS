const Agendamento = require('../models/Agendamento');

async function buscarTodos(req, res) {
    res.json(await Agendamento.find());
}

async function buscarPorID(req, res) {
    try {
        const agendamento = await Agendamento.findById(req.params.id);
        if (agendamento) {
            res.json(agendamento);
        } else {
            res.status(404).json({ mensagem: "Agendamento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar agendamento por ID", error });
    }
}

async function criar(req, res) {
    try {
        const novoAgendamento = new Agendamento(req.body);
        const agendamentoCriado = await novoAgendamento.save();
        res.status(201).json(agendamentoCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar agendamento", error });
    }
}

async function atualizar(req, res) {
    try {
        const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (agendamentoAtualizado) {
            res.json({
                mensagem: "Agendamento atualizado com sucesso!",
                agendamentoAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Agendamento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar agendamento", error });
    }
}

async function excluir(req, res) {
    try {
        const agendamentoExcluido = await Agendamento.findByIdAndDelete(req.params.id);
        if (agendamentoExcluido) {
            res.json({
                mensagem: "Agendamento excluído com sucesso!",
                agendamentoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Agendamento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir agendamento", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};