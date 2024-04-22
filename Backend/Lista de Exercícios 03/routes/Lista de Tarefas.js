const express = require('express');
const router = express.Router();

let tasks = [];

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.get('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks[id];
  if (!task) {
    return res.status(404).json({ message: 'Tarefa não encontrada' });
  }
  res.json(task);
});

router.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json({ message: 'Tarefa adicionada com sucesso', task: newTask });
});

router.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  if (!tasks[id]) {
    return res.status(404).json({ message: 'Tarefa não encontrada' });
  }
  tasks[id] = updatedTask;
  res.json({ message: 'Tarefa atualizada com sucesso', task: updatedTask });
});

router.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  if (!tasks[id]) {
    return res.status(404).json({ message: 'Tarefa não encontrada' });
  }
  tasks.splice(id, 1);
  res.json({ message: 'Tarefa removida com sucesso' });
});

module.exports = router;