// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simulando una base de datos
const ideas = [];

app.get('/', (req, res) => {
    res.send('Bienvenido a LionLeap Ventures');
});

app.post('/submit-idea', (req, res) => {
    const newIdea = req.body;
    ideas.push(newIdea);
    res.send('Idea recibida');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
