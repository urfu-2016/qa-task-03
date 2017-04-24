const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {

    const results = {
        '5': 'Покер',
        '4': 'Каре',
        '32': 'Фулл хаус',
        '3': 'Тройка',
        '22': 'Две пары',
        '2': 'Пара',
        '1': 'Наивысшее очко'
    };

    it(`should return ${results['5']} for [1, 1, 1, 1, 1]`, () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, results['5']);
    });
    it(`should return ${results['5']} for [6, 6, 6, 6, 6]`, () => {
        const actual = getPokerHand([6, 6, 6, 6, 6]);

        assert.equal(actual, results['5']);
    });
    it(`should return ${results['4']} for [6, 6, 3, 6, 6]`, () => {
        const actual = getPokerHand([6, 6, 3, 6, 6]);

        assert.equal(actual, results['4']);
    });
    it(`should return ${results['32']} for [6, 1, 1, 6, 6]`, () => {
        const actual = getPokerHand([6, 1, 1, 6, 6]);

        assert.equal(actual, results['32']);
    });
    it(`should return ${results['3']} for [6, 1, 2, 6, 6]`, () => {
        const actual = getPokerHand([6, 1, 2, 6, 6]);

        assert.equal(actual, results['3']);
    });
    it(`should return ${results['22']} for [6, 1, 2, 2, 6]`, () => {
        const actual = getPokerHand([6, 1, 2, 2, 6]);

        assert.equal(actual, results['22']);
    });
    it(`should return ${results['2']} for [6, 1, 2, 3, 6]`, () => {
        const actual = getPokerHand([6, 1, 2, 3, 6]);

        assert.equal(actual, results['2']);
    });
    it(`should return ${results['1']} for [5, 1, 2, 3, 4]`, () => {
        const actual = getPokerHand([5, 1, 2, 3, 6]);

        assert.equal(actual, results['1']);
    });

    it(`should throw error when dice is not an array`, () => {
        const cb = () => getPokerHand('hello');

        assert.throws(cb, /Dice is not an array/);
    });
    it(`should throw error when dice is not an array`, () => {
        const cb = () => getPokerHand(null);

        assert.throws(cb, /Dice is not an array/);
    });
    it(`should throw error when dice is not an array`, () => {
        const cb = () => getPokerHand();

        assert.throws(cb, /Dice is not an array/);
    });
    it(`should throw error when one dice is not correct`, () => {
        const cb = () => getPokerHand([6, 1, 2, 3, 7]);

        assert.throws(cb, /Invalid dice at place 4 with value 7/);
    });
    it(`should throw error when one dice is not correct`, () => {
        const cb = () => getPokerHand([6, 1, 2, 3, 0]);

        assert.throws(cb, /Invalid dice at place 4 with value 0/);
    });
    it(`should throw error when dices count is not correct`, () => {
        const cb = () => getPokerHand([]);

        assert.throws(cb, /Array must have 5 elements/);
    });
});
