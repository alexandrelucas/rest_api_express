const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const _PORT = 3000;
const app = express();


// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Pegar todos os produtos
app.get('/products', (req, res) => {
    res.send(db.getProducts());
});

// Pegar apenas um produto
app.get('/products/:id', (req, res) => {
    res.send(db.getProduct(req.params.id));
});

// Envia os dados
app.post('/products/', (req, res) => {
    const product = db.addProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product);
});

// Atualiza os dados
app.put('/products/:id', (req, res) => {
    const product = db.addProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });
    res.send(product);
});

app.delete('/products/:id', (req, res) => {
    const product = db.deleteProduct(req.params.id);
    res.send(product);
});


app.listen(_PORT, () => {
    console.log(`Server running on localhost:${_PORT}`);
});