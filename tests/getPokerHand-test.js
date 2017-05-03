const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for all same values', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });
    it('should return `Каре` for 4 same values', () => {
        const actual = getPokerHand([1, 4, 4, 4, 4]);

        assert.equal(actual, 'Каре');
    });
    it('should return `Фулл хаус` for pair and triple of same values', () => {
        const actual = getPokerHand([2, 2, 4, 4, 4]);

        assert.equal(actual, `Фулл хаус`);
    });
    it('should return `Тройка` for 3 same values', () => {
        const actual = getPokerHand([3, 3, 3, 1, 4]);

        assert.equal(actual, 'Тройка');
    });
    it('should return `Две пары` for two pairs of same values', () => {
        const actual = getPokerHand([3, 3, 6, 6, 1]);

        assert.equal(actual, `Две пары`);
    });
    it('should return `Пара` for two same values', () => {
        const actual = getPokerHand([3, 3, 5, 6, 1]);

        assert.equal(actual, `Пара`);
    });
    it('should return `Наивысшее очко` for all different values', () => {
        const actual = getPokerHand([1, 3, 6, 5, 2]);

        assert.equal(actual, `Наивысшее очко`);
    });

    it('should throw Error for values < 1', () => {
        const cb = () => getPokerHand([0, 1, 2, 3, 4]);

        assert.throws(cb, /Значения массива должны находиться в диапазоне от 1 до 6/);
    });
    it('should throw Error for values > 6', () => {
        const cb = () => getPokerHand([7, 1, 2, 3, 4]);

        assert.throws(cb, /Значения массива должны находиться в диапазоне от 1 до 6/);
    });
    it('should throw RangeError for more than 5 values', () => {
        const cb = () => getPokerHand([2, 1, 2, 3, 4, 5]);

        assert.throws(cb, /Массив должен содержать ровно 5 значений/);
    });
    it('should throw RangeError for less than 5 values', () => {
        const cb = () => getPokerHand([2, 3, 4, 5]);

        assert.throws(cb, /Массив должен содержать ровно 5 значений/);
    });
    it('should throw TypeError for NaN values', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, '5']);

        assert.throws(cb, /Значения массива должны являться целыми числами/);
    });
    it('should throw TypeError for fractional values', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, 5.1]);

        assert.throws(cb, /Значения массива должны являться целыми числами/);
    });

    it('should throw Error for an empty argument', () => {
        const cb = () => getPokerHand();

        assert.throws(cb, /На вход должен подаваться только один параметр/);
    });
    it('should throw Error for more than 1 arguments', () => {
        const cb = () => getPokerHand([1, 1, 2, 3, 4],[1, 1, 2, 3, 4]);

        assert.throws(cb, /На вход должен подаваться только один параметр/);
    });
    it('should throw TypeError for not an Array argument', () => {
        const cb = () => getPokerHand('123');

        assert.throws(cb, /На вход должен подаваться массив значений/);
    });
});
