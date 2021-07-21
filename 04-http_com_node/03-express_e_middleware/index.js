const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

const langs = ['HTML', 'CSS']

const logMidleware = (req, res, next) => {
  const { token } = req.headers;
  console.log(token);
  if(!token) return res.send
  next();
}

app.get('/langs', logMidleware, (req, res) => {
  res.send(langs)
});


app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send('Nova linguagem salva.')
})

app.listen(3002, () => {
  console.log('Servidor Rodando')
});