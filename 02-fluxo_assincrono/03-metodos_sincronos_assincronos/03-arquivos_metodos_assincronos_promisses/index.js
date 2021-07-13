const fs = require('fs').promises;

fs.writeFile('./meuArquivo.txt', 'meu texto')
    .then((r) => {
        console.log(`Escrita do arquivo executada com sucesso`)
    })
    .catch((err) => {
        console.log(`Erro ao escrever no arquivo ${err.message}`)
    });