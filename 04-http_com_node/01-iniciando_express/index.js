const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json())

app.get('/', handleHelloWorldRequest);

app.listen(3000, () => {
  console.log('Aplicação ouvindo a porta 3000')
});

const langs = ['HTML', 'CSS', 'JS', 'React'];

app.post('/langs', (req, res) => {
  const {name} = req.body;
  langs.push(name)
  res.send(`Linguagem ${name} adicionada com sucesso.`)
})

app.get('/langs', (req, res) => {
  res.send(langs)
})

function handleHelloWorldRequest(req, res){
 res.status(200).send('Hello world');
}