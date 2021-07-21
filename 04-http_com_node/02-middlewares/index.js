const express = require('express');
const authMiddleware = require('./auth-middleware')

const app = express();

app.get('/aberto', (req, res) => {
    res.status(200).json({ message: 'Eu posso ser acessado sem autenticação.'})
});

app.get('/secure',authMiddleware, (req, res) => {
    res.status(200).json({
        message:
          'se esse middleware foi chamado pelo Express, é porque deu tudo certo dentro de `authMiddleware`, e o `next` foi chamado',
      });
});

app.get('/otherSecure', authMiddleware, (req, res) => {
    res.status(200).json({
      message: 'podemos utilizar o mesmo middleware pra quantas rotas quisermos',
    });
  });

app.listen(3001, () => {
  console.log('Servidor rodando!')
});