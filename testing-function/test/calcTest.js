var assert = require('chai').assert;
var add = require('../controllers/calc');
var multi = require('../controllers/calc');
var div = require('../controllers/calc');

describe('Add', () => {

    var result = add.methodAdd(5); 

    it('Should add 5 and return 10', () => {
        console.log('Result is: ', result)
        assert.equal(result, 10);
    });

    it('Should return type number', ()=> {
        console.log('Result is: ', result)
        assert.typeOf(result, 'number');
    })
});

describe('Multi', () => {

    var result = multi.methodMulti(20);

    it('Should multiplica 3 and result is 60', ()=> {
        console.log('Result is: ', result)
        assert.equal(result, 60);
    })
})

describe('Div', () => {

    var result = div.methodDiv(20);

    it('Should div 10 and result is 2', ()=> {
        console.log('Result is: ', result)
        assert.equal(result, 2);
    })
})

// Exercicios:
// Vamos jogar e implementar os calculos em suas mãos. 