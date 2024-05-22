const { assert, js } = require('./helpers.js')

// const { line, takeAnumber, nowServing } = require('../index');

describe('Deli Counter Lab', () => {
    let katz_deli;

    beforeEach(() => {
        katz_deli = [];
    });

    describe('#line()', () => {
        it('returns "The line is currently empty." when there are no people in line', () => {
            assert.strictEqual(line(katz_deli), 'The line is currently empty.');
        });

        it('returns the current line with position numbers when there are people in line', () => {
            takeANumber(katz_deli, 'Ada');
            takeANumber(katz_deli, 'Grace');
            takeANumber(katz_deli, 'Kent');
            assert.strictEqual(line(katz_deli), 'The line is currently: 1. Ada 2. Grace 3. Kent');
        });
    });

    describe('#takeANumber()', () => {
        it('returns the welcome message with the customer\'s position in line', () => {
            assert.strictEqual(takeANumber(katz_deli, 'Ada'), 'Welcome, Ada. You are number 1 in line.');
        });

        it('adds the customer to the end of the line', () => {
            takeANumber(katz_deli, 'Ada');
            assert.strictEqual(line(katz_deli), 'The line is currently: 1. Ada');
        });
    });

    describe('#nowServing()', () => {
        it('returns "There is nobody waiting to be served!" when there are no people in line', () => {
            assert.strictEqual(nowServing(katz_deli), 'There is nobody waiting to be served!');
        });

        it('returns the name of the next person in line and removes them from the line', () => {
            takeANumber(katz_deli, 'Ada');
            takeANumber(katz_deli, 'Grace');
            assert.strictEqual(nowServing(katz_deli), 'Currently serving Ada.');
            assert.strictEqual(line(katz_deli), 'The line is currently: 1. Grace');
        });
    });
});
