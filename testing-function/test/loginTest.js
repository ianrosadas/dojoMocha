
var assert = require('assert');
loginController = require('../controllers/login'),

expect = require('chai').expect,
should = require('chai').should(),

chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
chai.use(chaiAsPromised).should();

beforeEach('Setting up the userList', function(){
    console.log('BeforeEach');
    loginController.loadUserList(['zico10', '01ociz']);
})

describe('LoginController', function(){

    describe('isValidUserId', function(){

        it('deve retornar TRUE se valid user id', function(){
            var isValid = loginController.isValidUserId(['zico10','01ociz'],'zico10')
            // assert.equal(isValid, true);
            expect(isValid).to.be.true;
        });

        it('deve retornar FALSE se valid user id', function(){
            var isValid = loginController.isValidUserId('zico11')
            // assert.equal(isValid, true);
            isValid.should.equal(false);
        });

        it('deve retornar TRUE se valid user id DONE', function(done){
            var isValid = loginController.isValidUserId(['zico10','01ociz'],'zico10')
            assert.equal(isValid, true);
            done();
        });
    });

    describe('isAuthorizedPromise', function(){

        it('deveria retornar TRUE if valid user id', function(){
            return loginController.isAuthorizedPromise('zico10').should.eventually.be.true;
        });
    });
});
