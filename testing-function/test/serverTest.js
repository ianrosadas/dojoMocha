var server = require('../controllers/server'),
assert = require('assert'),
http = require('http');

var port = 8000;

describe('Servidor ', function(){
    // Além de antes before e beforeEach- 
    // antes de todo o conjunto, antes de cada teste e assim por diante.
    before(function(){
        server.listen(port);
    });

    // Além depois after e afterEach - 
    // podem ser usados para limpar a configuracao de teste, como dados do banco de dados. 
    after(function(){
        server.close();
    });

    describe('Servidor status e mensagem', function(){
        it('Status resposta deve ser igual 200', function(done){
            http.get('http://localhost:' +port, function(response){
                assert.equal(response.statusCode, 200);
                done();
            });
        });
    });
});