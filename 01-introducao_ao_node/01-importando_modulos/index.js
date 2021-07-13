//Importando o objeto todo
//const convert = require('./brValue');

//Importando de maneira desestruturada
const {brl, usdToBrl} = require('./brValue');

const usd = 10;

// Chamando somente a função exportada
// const brl = convert(usd);

//Chamando a variavel e a função de dentro do objeto
console.log(`Valor do dolar ${brl}`);
console.log(`10 dolares convertidos em reais ${usdToBrl(usd)}`);