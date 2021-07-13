const readline = require('readline-sync');

const calculaVelocidade = (distancia, tempo) => distancia / tempo;

const inputDistancia = readline.questionFloat('Informe a distância percorrida em metros: ');
const inputTempo = readline.questionFloat('Informe o tempo em segundos: ');

const converteParaKm = inputDistancia * 3.6;
const convertParaHora = (inputTempo / 60) / 60;

console.log(`A velocidade média percorrida é ${calculaVelocidade(converteParaKm, inputTempo)} km/h`)