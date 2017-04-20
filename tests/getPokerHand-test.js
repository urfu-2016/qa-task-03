const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });


    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });


    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });


    it('should throw error for array contains not equal five arguments', () => {
        const error = () => getPokerHand([1, 2, 3, 4, 5, 5]);

        assert.throws(error, 'Invalid length array');
    });


    it('should throw error for array contains incorrect values (more than 5)', () => {
        const error = () => getPokerHand([1, 2, 3, 4, 7]);

        assert.throws(error, 'Array contains incorrect values');
    });

    it('should throw error for array contains incorrect values (less 1)', () => {
        const error = () => getPokerHand([1, 2, 3, 4, -1]);

        assert.throws(error, 'Array contains incorrect values');
    });

    it('should throw error for incorrect arguments', () => {
        const error = () => getPokerHand([1, 2, 3, 4, -1], 'Hi!');

        assert.throws(error, 'Incorrect arguments');
    });

    it('should return `2` for [1, 2, 2]', () => {
        var arr = [1, 2, 2];

        assert.equal(arr.getCountIdentical(2), 2);
    });

});
