const bodyParser = require('body-parser');
const express = require('express');
const middleware = require('./middleware');

const app = express()

const PORT = 3000;

const musics = [
  {
    id: 475,
    name: 'We are the champions',
    author: 'queen',
    user: 'Danode'
  },
  {
    id: 547,
    name: 'Express Yourself',
    author: 'Madonna',
    user: 'Aliexpress'
  }
]
app.use(bodyParser.json())
app.use(middleware.log)

const getMusicByid = (req, res, next) => {
  const {id} = req.params;
  const music = musics.find((songs) => songs.id === Number(id) );
  if(!music) return next();
  
  res.status(200).json(music)
 }

app.get('/musics/:id', middleware.validator , getMusicByid, (req, res, next) => {
  
  res.status(200).json(musics);
});

app.post('/musics', (req, res, next) => {
  const { id, name, author, user} = req.body

  musics.push({id, name, author, user});

  res.status(200).json({id, name, author, user})

});

app.put('/path', middleware.dummy);

app.delete('/path', middleware.dummy);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});