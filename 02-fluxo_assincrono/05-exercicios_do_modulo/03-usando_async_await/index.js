
/*
Reescreva o código do exercício anterior para que utilize async/await 
*/

async function main(){}


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

async function chamandoRetornoDaPromisse() {
    const numerosAleatorios = Array.from({ length: 3}).map(geraNumerosAleatorios);

    try {
        const result = await retornaPromise(...numerosAleatorios)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

chamandoRetornoDaPromisse();