const fs = require('fs').promises;

async function main(){
  try {
      await fs.writeFile('./meuArquivo', 'Meu texto');
      console.log('Efetuado escrita no arquivo com sucesso')
  } catch (error) {
      console.log(`Erro ao efetuar a escrita no arquivo ${erro.message}`)
  }
}

main()