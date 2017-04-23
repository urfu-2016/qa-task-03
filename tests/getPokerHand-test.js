const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should throw error when no dice given', () => {
        const cb = () => getPokerHand();

        assert.throws(cb, /Cannot read property 'length' of undefined/);
    });

    it('should throw error when dice has less than 5 elements', () => {
        const cb = () => getPokerHand([1, 1, 1, 1]);

        assert.throws(cb, /Wrong amount of dices/);
    });

    it('should throw error when dice has more than 5 elements', () => {
        const cb = () => getPokerHand([1, 1, 1, 1, 2, 2]);

        assert.throws(cb, /Wrong amount of dices/);
    });

    it('should throw error when dice has not int element', () => {
        const cb = () => getPokerHand(['1', 3, 4, 4, 5]);

        assert.throws(cb, /Dice should contain int numbers from 1 to 6/);
    });

    it('should throw error when dice has not int element', () => {
        const cb = () => getPokerHand([1, 3, 4, 4, 5.2]);

        assert.throws(cb, /Dice should contain int numbers from 1 to 6/);
    });

    it('should throw error when dice has element higher than 6', () => {
        const cb = () => getPokerHand([1, 3, 4, 4, 7]);

        assert.throws(cb, /Dice should contain int numbers from 1 to 6/);
    });

    it('should throw error when dice has element lower than 1', () => {
        const cb = () => getPokerHand([0, 3, 4, 4, 5]);

        assert.throws(cb, /Dice should contain int numbers from 1 to 6/);
    });

    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [1, 1, 1, 1, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 3]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 1, 1, 5, 5]', () => {
        const actual = getPokerHand([1, 1, 1, 5, 5]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [4, 5, 5, 6, 6]', () => {
        const actual = getPokerHand([4, 5, 5, 6, 6]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [3, 4, 5, 6, 6]', () => {
        const actual = getPokerHand([3, 4, 5, 6, 6]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [2, 3, 4, 1, 6]', () => {
        const actual = getPokerHand([2, 3, 4, 1, 6]);

        assert.equal(actual, 'Наивысшее очко');
    });
// Напишите тесты на ваш замечательный код здесь
});
