//Calculando imc com valores fixos

const calculoImc = (peso, altura) => peso / (altura * altura);

const imc = calculoImc(76, 1.72);

console.log(`Seu imc é ${imc.toFixed(2)}`);