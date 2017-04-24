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

    it('should return `Фулл хаус` for [2, 2, 3, 3, 3]', () => {
        const actual = getPokerHand([2, 2,  3, 3, 3]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [2, 2, 2, 3, 4]', () => {
        const actual = getPokerHand([2, 2, 2, 3, 4]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [2, 2, 3, 3, 4]', () => {
        const actual = getPokerHand([2, 2, 3, 3, 4]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [6, 6, 1, 2, 3]', () => {
        const actual = getPokerHand([6, 6, 1, 2, 3]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [6, 5, 4, 3, 2]', () => {
        const actual = getPokerHand([6, 5, 4, 3, 2]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throws error when dice value less then 1', () => {
        const cb = () => getPokerHand([0, 1, 2, 3, 4]);

        assert.throws(cb, /Dice should contains integer values from 1 to 6/);
    });


    it('should throws error when dice value more then 6', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, 7]);

        assert.throws(cb, /Dice should contains integer values from 1 to 6/);
    });

    it('should throws error when dice count less then 5', () => {
        const cb = () => getPokerHand([1, 1, 1, 1]);

        assert.throws(cb, /Dice count should be 5/);
    });

    it('should throws error when dice count more then 5', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, 5, 6, 1]);

        assert.throws(cb, /Dice count should be 5/);
    });

    it('should throws error when dice is not an array object', () => {
        const cb = () => getPokerHand(null);

        assert.throws(cb, /Dice should be an array type/);
    });

    it('should throws error when dice elements are double values', () => {
        const cb = () => getPokerHand([1.0, 2.5, 1.2, 4.0, 5.2]);

        assert.throws(cb, /Dice should contains integer values from 1 to 6/);
    });
});
