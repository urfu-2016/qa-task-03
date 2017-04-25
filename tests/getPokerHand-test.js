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

    it('should return `Наивысшее очко for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throw error when count of arguments is not 1', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, 5], '6');

        assert.throws(cb, /Length of arguments is not 1/);
    });
    
    it('should throw error when type of dice is not Array', () => {
        const cb = () => getPokerHand("1, 2, 3, 4, 5");

        assert.throws(cb, /Type of dice is not Array/);
    });

    it('should throw error when length of dice is not 5', () => {
        const cb = () => getPokerHand([1, 2, 3, 4]);

        assert.throws(cb, /Length of dice is not 5/);
    });
    
    it('should throw error when type of dice item is not number', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, "5"]);

        assert.throws(cb, /Type of dice item is not number/);
    });

    it('should throw error when dice item is not in {1, 2, 3, 4, 5, 6}', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, 7]);

        assert.throws(cb, /Dice item is not in {1, 2, 3, 4, 5, 6}/);
    });
});
