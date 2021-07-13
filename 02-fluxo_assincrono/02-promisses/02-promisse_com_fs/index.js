

const fs = require('fs');

function readFilePromisse (fileName){
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, content) => {
            if(err) return reject(new Error('Erro ao ler o arquivo'))
            resolve(content)
        });
    });
}

readFilePromisse('./arquivo1.txt')
    .then((r) => {
      console.log(`Leitura do arquivo executada, conteudo: ${r}`)
      return readFilePromisse('./arquivo2.txt')
    })
    .then((r) => {
      console.log(`Leitura do arquivo executada, conteudo: ${r}`)
      return(readFilePromisse('./arquivo3.txt'))
    })
    .then((r) => {
       console.log(`Leitura do arquivo executada, conteudo: ${r}`)
      return(readFilePromisse('./arquivo4.txt'))
    })
    .catch((e) => console.log(e.message) );

    console.log("Aguardando rodar a função assincrona");