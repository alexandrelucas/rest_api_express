// pm2 rodar processos nodeJS em produção
const express = require('express');
const app = express();

// Esta função é chamada em qualquer URL
app.use((req, res) => {
    res.send('OK'); 
});

app.get('/json', (req, res) => {
    res.json({
        name: 'Ipad',
        price: 1899.99,
        discount: 0.12
    })
});


app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});