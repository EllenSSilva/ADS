const Pet = require('../models/Pet');

async function buscarTodos(req, res) {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pets", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const pet = await Pet.findById(req.params.id);
        if (pet) {
            res.json(pet);
        } else {
            res.status(404).json({ mensagem: "Pet não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pet por ID", error });
    }
}

async function criar(req, res) {
    try {
        const novoPet = new Pet(req.body);
        const petCriado = await novoPet.save();
        res.status(201).json(petCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar pet", error });
    }
}

async function atualizar(req, res) {
    try {
        const petAtualizado = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (petAtualizado) {
            res.json({
                mensagem: "Pet atualizado com sucesso!",
                petAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Pet não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar pet", error });
    }
}

async function excluir(req, res) {
    try {
        const petExcluido = await Pet.findByIdAndDelete(req.params.id);
        if (petExcluido) {
            res.json({
                mensagem: "Pet excluído com sucesso!",
                petExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Pet não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir pet", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};