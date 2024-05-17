const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());

// Conexão ao MongoDB
mongoose.connect('mongodb://localhost:27017/crud-express-mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Definição do modelo Person
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);

// Rotas CRUD

// Create
app.post('/persons', async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).send(person);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read (all)
app.get('/persons', async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).send(persons);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read (by ID)
app.get('/persons/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).send();
        }
        res.status(200).send(person);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update
app.patch('/persons/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!person) {
            return res.status(404).send();
        }
        res.status(200).send(person);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete
app.delete('/persons/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        if (!person) {
            return res.status(404).send();
        }
        res.status(200).send(person);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
