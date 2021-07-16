const {expect} = require('chai')

const verificaNumero = require('../verificaNumeros/index')

describe('verifica e retorna:', () => {
  describe('Parametro enviado:', () => {
    describe('maior que zero', () => {
        const resposta = verificaNumero(5);
      it('é uma string ', () => {
        expect(resposta).to.be.a('string')

      })
      it('numero positivo', () => {
        expect(resposta).to.be.equals('positivo')
      })
    });
    describe('Menor que zero', () => {
      const resposta = verificaNumero(-5);
      it('é uma string ', () => {
        expect(resposta).to.be.a('string')
      })
      it('numero negativo', () => {
        expect(resposta).to.be.equals('negativo')
      })
    });
    describe('Igual a zero retorna', () => {
      const resposta = verificaNumero(0);
      it('é uma string ', () => {
        expect(resposta).to.be.a('string')
      })
      it('numero neutro', () => {
        expect(resposta).to.be.equals('neutro') 
      });
    });
    describe('Igual uma string', () => {
        const resposta = verificaNumero('DDD');
      it('não é um numero ', () => {
        expect(resposta).to.be.equals('Não é um numero.')
      })
    });
  });
});