
var assert = require('chai').assert;
var first = require('../controllers/first');

describe('First', () => {
    it('first should return new message "Hello all devs" ', () => {
        assert.equal(first(), 'Hello all devs');
    });
});
