'use strict';

const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand exception tests', () => {
    it('should return exception when call func without argument', () => {
        const actual = () => getPokerHand();

        assert.throws(actual, new RegExp('Функция должна получить один аргумент'));
    });

    it('should return exception when call func with not array argument', () => {
        const actual = () => getPokerHand('Oleg');

        assert.throws(actual, new RegExp('Аргумент должен являться массивом'));
    });

    it('should return exception when call func with array which contains less then 5 elements', () => {
        const actual = () => getPokerHand([1]);

        assert.throws(actual, new RegExp('Массив должен включать ровно 5 элементов'));
    });

    it('should return exception when call func with array which contains greater then 5 elements', () => {
        const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]);

        assert.throws(actual, new RegExp('Массив должен включать ровно 5 элементов'));
    });

    it('should return exception when call func with array which contains not only integers', () => {
        const actual = () => getPokerHand([1, 2, 3, 4, '5']);

        assert.throws(actual, new RegExp('Все элементы массива должны быть числами'));
    });

    it('should return exception when call func with array which contains integers not between 1 and 6', () => {
        const actual = () => getPokerHand([1, 2, 3, 4, -1]);

        assert.throws(actual, new RegExp('Каждый элемент массива должен принимать значения от 1 до 6'));
    });
});

describe('getPokerHand tests', () => {
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
