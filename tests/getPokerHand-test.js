const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [6, 6, 1, 6, 6]', () => {
        const actual = getPokerHand([6, 6, 1, 6, 6]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 5, 1, 5, 1]', () => {
        const actual = getPokerHand([1, 5, 1, 5, 1]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [3, 1, 3, 3, 2]', () => {
        const actual = getPokerHand([3, 1, 3, 3, 2]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [5, 5, 1, 2, 1]', () => {
        const actual = getPokerHand([5, 5, 1, 2, 1]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [4, 3, 2, 1, 4]', () => {
        const actual = getPokerHand([4, 3, 2, 1, 4]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [6, 5, 4, 3, 2]', () => {
        const actual = getPokerHand([6, 5, 4, 3, 2]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throw an error when dice is not an array', () => {
        const cb = () => getPokerHand(NaN);

        assert.throws(cb, /Argument should be an array/);
    });

    it('should throw an error when dice is not an array', () => {
        const cb = () => getPokerHand('[1, 2, 3, 4, 5]');

        assert.throws(cb, /Argument should be an array/);
    });

    it('should throw an error when dice is not an array', () => {
        const cb = () => getPokerHand();

        assert.throws(cb, /Argument should be an array/);
    });

    it('should throw an error when amount of elements not equals 5', () => {
        const cb = () => getPokerHand([2, 2, 2, 2, 2, 2]);

        assert.throws(cb, /There should be 5 elements in array/);
    });

    it('should throw an error when amount of elements not equals 5', () => {
        const cb = () => getPokerHand([2, 2, 5, 4]);

        assert.throws(cb, /There should be 5 elements in array/);
    });

    it('should throw an error when amount of elements not equals 5', () => {
        const cb = () => getPokerHand([]);

        assert.throws(cb, /There should be 5 elements in array/);
    });

    it('should throw an error when elements are not integer', () => {
        const cb = () => getPokerHand([2, '2', 3, 6, 1]);

        assert.throws(cb, /Every element of array should be an integer number/);
    });

    it('should throw an error when elements are not integer', () => {
        const cb = () => getPokerHand([2, 3, 6, 4, NaN]);

        assert.throws(cb, /Every element of array should be an integer number/);
    });

    it('should throw an error when elements are not integer', () => {
        const cb = () => getPokerHand([2, 1.5, 3, 6, 1]);

        assert.throws(cb, /Every element of array should be an integer number/);
    });

    it('should throw an error when elements are not in range from 1 to 6', () => {
        const cb = () => getPokerHand([2, 1, 7, 4, 6]);

        assert.throws(cb, /Every element of array should be in range from 1 to 6/);
    });

    it('should throw an error when elements are not in range from 1 to 6', () => {
        const cb = () => getPokerHand([2, 1, 0, 4, 6]);

        assert.throws(cb, /Every element of array should be in range from 1 to 6/);
    });

});
