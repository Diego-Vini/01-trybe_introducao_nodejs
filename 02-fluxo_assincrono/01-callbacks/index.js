/*
Usamos calbacks para não travar o funcionamento da nossa aplicação
assim esse tipo de função retornará um resultado somente quando
a função for resolvida
Caso queira rodar callbacks de mesma função em sequencias especificas, é necessário
que uma esteja dentro da outra para o resultado esperado.
*/

const fs = require('fs');

fs.readFile('./arquivo2.txt', (err, content) => {
    if(err) {
      console.err(`Erro ao carregar o arquivo ${err.message}`)
      return;
    }
    console.log(`Arquivo carregado com sucesso. Conteudo: ${content.toString('utf-8')}`)
    
    fs.readFile('./arquivo.txt', (err, content) => {
        if(err) {
          console.error(`Erro ao carregar o arquivo ${err.message}`);
         return;
        }
        console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf-8')}`)
      } );

  })

// fs.readFile('./arquivo.txt', (err, content) => {
//   if(err) {
//     console.error(`Erro ao carregar o arquivo ${err.message}`);
//    return;
//   }
//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf-8')}`)
// } );

console.log("Diego")