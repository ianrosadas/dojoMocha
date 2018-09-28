var assert = require('assert');
var should = require('chai').should();

var formula = {name:'Hamilton', marca:'Mercedez W09' }
var formula1 = {name:'Vettel', marca:'Ferrari SF71H' }

describe('Modelo e nome de F1', function(){

    it('Deve ser propriedade a cada nome', function(){
        formula.should.have.property('name');
        formula1.should.have.property('name');
    });

    it('Deve ser propriedade de nomes', function(){

        formula.should.have.property('name').equal('Hamilton');
        formula1.should.have.property('name').equal('Vettel');
    });
    
    it('Deve ser propriedade de modelos', function(){

        formula.should.have.property('marca').equal('Mercedez W09');
        formula1.should.have.property('marca').equal('Ferrari SF71H');
    });
    
});

describe('Objetos F1', function(){
    it('Comparar entre F1', function(){
        // formula.should.equal(formula);
        formula.should.deep.equal(formula);
    });

    it('Diferente entre F1', function(){

        formula.should.not.equal(formula1);
    });

    it('Handling null', function(){
        var f1 = null;
        should.not.exist(f1);

    });
});