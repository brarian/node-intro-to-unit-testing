const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
    it('should return a string if a multiple of 3', () => {
        [3, 6, 9].forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz');
        });
    });

    it('should return number if not divisible be 3 or 5', () => {
        [7, 8, 11, 13].forEach(function(input) {
            fizzBuzzer(input).should.equal(input);
        });
    });
});