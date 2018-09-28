# DOJO MOCHA

Leia importante: 
https://mochajs.org/

O Mocha é uma das muitas estruturas de teste disponíveis para o Node.js. Como você verá em breve, isso nos ajuda a escrever casos de teste e suítes de testes, além de fornecer um mecanismo de relatório de resultados de testes. Foi escolhido sobre as alternativas porque apóia Promises. Ele se encaixa muito bem com a biblioteca de asserts de Chai mencionada anteriormente.

Abre o VSCode. 

Run install the npm:

* npm install --global mocha
* npm install --save-dev mocha / npm install mocha
* npm test
* npm install chai / npm install --save-dev chai
* npm install chai-as-promised / npm install --save-dev chai-as-promise
* npm install express / npm install --save-dev express

https://nodejs.org/api/assert.html

Vou apresentar os códigos de mocha.

Implementar em ordem:
Crie uma nova pasta “basicoMocha”: 
1. firstMocha.js

A seguir estão alguns dos métodos de chai assert library

Apresentar o link https://www.chaijs.com/api/assert/

Crie uma nova pasta “testing-function” e crie duas novas pastas “controllers” e “test” dentro na pasta de testing. Implementa o primeiro export test.
1. controllers -> first.js
2. test -> firstTest.js

Crie outra nova pasta “modelF1Test” na pasta de test. 

O mesmo de novo e implementa o calculo:
1. controllers -> calc.js
2. test -> calcTest.js

Teste Node.js usar o HTTP server com Mocha
1. controllers -> server.js
2. test -> serverTest.js

Example um link: 
http://taylor.fausak.me/2013/02/17/testing-a-node-js-http-server-with-mocha/


Exemplo como se faz “skip” e “only” depois de describe ou it. 

Depois podem ler um link https://webapplog.com/tdd/ quando der tempo disponível.
