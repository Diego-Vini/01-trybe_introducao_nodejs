const readline = require('readline-sync')

const calculoImc = (peso, altura) => peso / (altura * altura);

const inputPeso = readline.questionFloat('Qual seu peso? ');
const inputAltura = readline.questionFloat('Qual sua altura? ');

const retornaCalculoImc = calculoImc(inputPeso, inputAltura).toFixed(2)

retornaCalculoImc <= 18.5 ? console.log('Abaixo de 18.5') : 
    retornaCalculoImc <= 24.9 ? console.log('Abaixo do peso (magreza)') :
    retornaCalculoImc <= 29.9 ? console.log('Acima do peso') :
    retornaCalculoImc <= 34.9 ? console.log('Obesidade grau I ') :
    retornaCalculoImc <= 39.9 ? console.log('Obesidade grau II ') :
    console.log('Obesidade graus III e IV ');

