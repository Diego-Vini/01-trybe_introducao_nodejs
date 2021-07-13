
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

// exportando função
//module.exports = usdToBrl;

// exportando a variavel mais a função dentro de um objeto
module.exports = {
    brl,
    usdToBrl
};