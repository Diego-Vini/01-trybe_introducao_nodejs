
/*
Escreva um código para consumir a função construída no exercício anterior.
Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
Utilize then e catch para manipular a Promise retornada pela função:
Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
*/
function retornaPromise(num1, num2, num3){
    return new Promise((resolve, reject) => {
        if(typeof num1 != 'number' || typeof num1 != 'number' || typeof num1 != 'number') reject(new Error('Informe apenas numeros'))

        const resultado = (num1 + num2) * num3

        if(resultado < 50) reject(new Error('Valor muito baixo.'))

        resolve(resultado)
    })
}

function geraNumerosAleatorios() {
    return Math.floor(Math.random() *100 + 1)
}

function chamandoRetornoDaPromisse() {
    const numerosAleatorios = Array.from({ length: 3}).map(geraNumerosAleatorios);

    retornaPromise(...numerosAleatorios)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(message.error)
        })
}

chamandoRetornoDaPromisse();