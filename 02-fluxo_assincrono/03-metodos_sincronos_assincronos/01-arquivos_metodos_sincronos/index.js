const fs = require('fs');

const nomeDoArquivo = ('./arquivo2.txt');

try {
    const data = fs.readFileSync(nomeDoArquivo, 'utf-8')
    console.log(`Leitura do arquivo efetuada com sucesso, conteudo:  ${data}`)
} catch (err) {
    console.error(`Erro ao ler o arquivo ${err.path}`)
}

console.log("VAI RODAR OU ESPERAR.....")