function calculaDivisao(valor1, valor2){
   if(valor2 == 0) throw new Error('Não pode ser feito divisão por zero');

   const resultado = valor1 / valor2;

   return resultado;
}
try{
  const resultado = calculaDivisao(4, 2)
  console.log(`Resultado ${resultado}`)
} catch(e) {
  console.error(e.message)
}
