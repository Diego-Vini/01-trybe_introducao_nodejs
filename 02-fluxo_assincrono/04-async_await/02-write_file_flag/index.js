const fs = require('fs').promises

async function main() {
  try {
    await fs.writeFile('./arquivo.txt', 'Passei por aqui', {flag: 'wx'})
    console.log('Escrita no arquivo efetuada com sucesso')
  } catch (error) {
    console.log(error.message)
  }
}

main()  