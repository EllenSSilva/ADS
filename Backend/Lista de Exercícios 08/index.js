const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');

// Configuração da aplicação
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// Configuração do banco de dados
const sequelize = new Sequelize('sqlite::memory:');  // Usando SQLite para simplicidade, mude para seu banco de dados

// Modelo
const Departamento = sequelize.define('Departamento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: 'departamentos',
  timestamps: false
});

// Sincronizar o modelo com o banco de dados
sequelize.sync();

// Controlador
const departamentoController = {
  create: async (req, res) => {
    try {
      const departamento = await Departamento.create(req.body);
      res.status(201).json(departamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  findAll: async (req, res) => {
    try {
      const departamentos = await Departamento.findAll();
      res.status(200).json(departamentos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  findOne: async (req, res) => {
    try {
      const departamento = await Departamento.findByPk(req.params.id);
      if (departamento) {
        res.status(200).json(departamento);
      } else {
        res.status(404).json({ error: 'Departamento não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const [updated] = await Departamento.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedDepartamento = await Departamento.findByPk(req.params.id);
        res.status(200).json(updatedDepartamento);
      } else {
        res.status(404).json({ error: 'Departamento não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleted = await Departamento.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Departamento não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// Rotas
app.post('/departamentos', departamentoController.create);
app.get('/departamentos', departamentoController.findAll);
app.get('/departamentos/:id', departamentoController.findOne);
app.put('/departamentos/:id', departamentoController.update);
app.delete('/departamentos/:id', departamentoController.delete);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
