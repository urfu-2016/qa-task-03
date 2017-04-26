'use strict';

const assert = require('assert');
const getPokerHand = require('../getPokerHand');


describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        let actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [2, 1, 1, 1, 1]', () => {
        let actual = getPokerHand([2, 1, 1, 1, 1]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        let actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
        let actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        let actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [1, 1, 4, 2, 3]', () => {
        let actual = getPokerHand([1, 1, 4, 2, 3]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        let actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throw TypeError when dice is not an array', () => {
        let cb = () => getPokerHand(null);

        assert.throws(cb, /dice should be an array/);
    });

    it('should throw Error when dice length is not equal to 5', () => {
        let cb = () => getPokerHand([1, 2, 3]);

        assert.throws(cb, /dice length should be equal to 5/);
    });

    it('should throw Error when dice has string values', () => {
        let cb = () => getPokerHand([1, 2, 3, 4, '5']);

        assert.throws(cb, /All dice values should be an integer numbers/);
    });

    it('should throw Error when dice has double values', () => {
        let cb = () => getPokerHand([1, 2, 3, 4, 5.5]);

        assert.throws(cb, /All dice values should be an integer numbers/);
    });

    it('should throw RangeError when dice has value, which greater than 6', () => {
        let cb = () => getPokerHand([1, 2, 3, 4, 7]);

        assert.throws(cb, /All dice values in dice should be greater or equal to 1 and less or equal to 6/);
        assert.throws(cb, RangeError);
    });

    it('should throw RangeError when dice has value, which less than 1', () => {
        let cb = () => getPokerHand([0, 2, 3, 4, 5]);

        assert.throws(cb, /All dice values in dice should be greater or equal to 1 and less or equal to 6/);
        assert.throws(cb, RangeError);
    });
});