/*
Crie uma função que recebe três parâmetros retorna uma Promise .
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

*/

function retornaPromise(num1, num2, num3){
    return new Promise((resolve, reject) => {
        if(typeof num1 != 'number' || typeof num1 != 'number' || typeof num1 != 'number') reject(new Error('Informe apenas numeros'))

        const resultado = (num1 + num2) * num3

        if(resultado < 50) reject(new Error('Valor muito baixo.'))

        resolve(resultado)
    })
}

retornaPromise(2,4,2)
    .then((result) => {
      console.log(`O valor retornado é ${result}.`)
    })
    .catch((err) => {
        console.log(err.message)
    })
