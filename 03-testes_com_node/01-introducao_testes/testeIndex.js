const calculaSituacao = require('./index');

console.log('Quando a média for menor que 7, retorna: "reprovado"');

const respostaCenario1 = calculaSituacao(4);
console.log(respostaCenario1 == 'reprovado' ? 'OK' :'Resposta não esperada');

console.log('Quando a média for maior que 7, retorna: "aprovado"');

const respostaCenario2 = calculaSituacao(8);
console.log(respostaCenario2 == 'aprovado' ? 'Ok' : 'Resposta não esperada');

console.log('Quando a média for igual a 7, retorna: "aprovado"')
const respostaCenario3 = calculaSituacao(7);
console.log(respostaCenario3 == 'aprovado' ? 'Ok' : 'Resposta não esperada')