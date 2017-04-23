'use strict';

const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand bad tests', () => {
    it('should return exception when call func without argument', () => {
        const actual = () => getPokerHand();

        assert.throws(actual, Error);
    });

    it('should return exception when call func with not array argument', () => {
        const actual = () => getPokerHand('Oleg');

        assert.throws(actual, Error);
    });

    it('should return exception when call func with array which contains less then 5 elements', () => {
        const actual = () => getPokerHand([1]);

        assert.throws(actual, Error);
    });

    it('should return exception when call func with array which contains not only integers', () => {
        const actual = () => getPokerHand([1, 2, 3, 4, '5']);

        assert.throws(actual, Error);
    });

    it('should return exception when call func with array which contains integers not between 1 and 6', () => {
        const actual = () => getPokerHand([1, 2, 3, 4, -1]);

        assert.throws(actual, Error);
    });
});

describe('getPokerHand good tests', () => {
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
});
