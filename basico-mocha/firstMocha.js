

var assert = require('assert');

var string = "Welcome first test Mocha"

describe('Basic Mocha String test', function(){

    it('deve retornar o numero de tamanho no string', function(){
        assert.equal(string.length, 13);
    });

    it('deve retonar a primeira letra', function(){
        assert.equal(string.charAt(1), 'e');
    });

    it('deve retornar ok', function(){
        assert.ok(typeof string === 'string');
    });
});

// Testar uma array 
describe('String split', function(){

    it('Deve retornar uma Array', function(){
      assert(Array.isArray('a,b,c'.split(',')));
    });
  })


// Vamos brincar o jogo ? 
// Escreve os numeros que retornam se for igual ou qualquer coisa.

// Ex: 

var numero = 12345678;

describe('Testar os numeros', function(){
    
    it('deve retornar o numero de tamanho', function(){
        assert.equal(numero, 12345678);
    });

    it('deve retornar o numero ao inves string', function(){
        assert.equal(parseInt(numero), "12345678");
    })
})


