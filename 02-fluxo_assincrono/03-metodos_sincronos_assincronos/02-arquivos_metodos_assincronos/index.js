const fs = require('fs');

const nomeDoArquivo = ('./meuArquivo.txt');

fs.readFile(nomeDoArquivo, 'utf8' ,(err, content) => {
    if(err){
        console.error(`Não foi possivel ler o arquivo ${nomeDoArquivo} \n Erro: ${err}`);
        process.exit(1);
    }
    console.log(`Conteudo do Arquivo:  ${content}`);
})