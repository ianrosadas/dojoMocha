
var assert = require('assert');
var should = require('chai').should();

describe('Object test', function(){
    it('should have property name', function(){
        var car = { name:'Ian', car:'Fusca'}
        car.should.have.property('name');
    });

    it('should have property name with value Figo', function(){
        var car = { name: 'Ian', car: 'Fusca'};
        car.should.have.property('name').equal('Ian');
    });

    it('should compare objects', function(){
        var car = { name: 'Ian', car: 'Fusca'};
        var car1 = { name: 'Ian', car: 'Fusca'};

        car.should.deep.equal(car1);

    });

    it('handling null ', function(){
        var car = null;
        // should.not.exist(car);

        should.exist(car);
    })
})