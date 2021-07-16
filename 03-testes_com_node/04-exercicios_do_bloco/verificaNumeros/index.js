function verificaNumeros(numero){
  if (typeof numero != 'number'){
    return 'Não é um numero.'
  }
    return numero > 0 ? 'positivo' : 
    numero < 0 ? 'negativo' :
    'neutro'
};

module.exports = verificaNumeros;
