'use strict';

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

    it('should throw Error for less than 5 arguments count', () => {
        const cb = () => getPokerHand([1, 2, 3, 4]);

        assert.throws(cb, /Неправильное число костей/);
    });

    it('should throw Error for more than 5 arguments count', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, 5, 6]);

        assert.throws(cb, /Неправильное число костей/);
    });

    it('should throw TypeError for not an array', () => {
        const cb = () => getPokerHand(1);

        assert.throws(cb, /Неверный тип аргумента/);
    });

    it('should throw Error for less than one argument', () => {
        const cb = () => getPokerHand();

        assert.throws(cb, /Неверное число аргументов/);
    });

    it('should throw Error for more than one argument', () => {
        const cb = () => getPokerHand([1, 2, 3], [4, 5]);

        assert.throws(cb, /Неверное число аргументов/);
    });

    it('should throw Error for dice values grater than 6', () => {
        const cb = () => getPokerHand([1, 2, 7, 4, 5]);

        assert.throws(cb, /Значение кости должно быть целым числом в диапазоне от 1 до 6/);
    });

    it('should throw Error for dice values less than 1', () => {
        const cb = () => getPokerHand([1, 2, 0, 4, 5]);

        assert.throws(cb, /Значение кости должно быть целым числом в диапазоне от 1 до 6/);
    });
});
