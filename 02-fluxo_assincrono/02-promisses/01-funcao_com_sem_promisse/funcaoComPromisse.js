/*
A função vai retornar uma promisse, essa será tratada
na chamada da funçao para retornar resolvida ou rejeitada
*/

function calculaDivisao(valor1, valor2){
  const promise = new Promise((resolve, reject) => {
    if(valor2 == 0) reject(new Error('Não pode ser feito divisao por zero'));

    const resultado = valor1 / valor2;
    
    resolve(resultado);
  })
  return promise
}


calculaDivisao(4, 0)
  .then((r) => console.log(r))
  .catch((e) => console.log(e.message))