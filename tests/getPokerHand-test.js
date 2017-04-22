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

    it('should return `Фулл хаус` for [1, 1, 1, 3, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 3, 3]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [3, 3, 3, 1, 5]', () => {
        const actual = getPokerHand([3, 3, 3, 1, 5]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [3, 3, 4, 4, 5]', () => {
        const actual = getPokerHand([3, 3, 4, 4, 5]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [5, 5, 3, 1, 4]', () => {
        const actual = getPokerHand([5, 5, 3, 1, 4]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [3, 4, 2, 1, 6]', () => {
        const actual = getPokerHand([3, 4, 2, 1, 6]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throw error when number of arguments is more than one', () => {
        const cb = () => getPokerHand([1, 1, 1, 1, 1], [1, 2, 3]);

        assert.throws(cb, /Функция принимает только один аргумент/);
    });

    it('should throw error when dice is not array', () => {
        const cb = () => getPokerHand("this is dice");

        assert.throws(cb, /Аргумент должен быть массивом/);
    });

    it('should throw error when dice length is not equals five', () => {
        const cb = () => getPokerHand([1, 1, 1, 1, 1, 1]);

        assert.throws(cb, /Размер массива должен быть равен 5/);
    });

    it('should throw error when dice contains not a number', () => {
        const cb = () => getPokerHand([1, 1, 1, 1, "NaN"]);

        assert.throws(cb, /Значение кости должно быть числом/);
    });

    it('should throw error when dice contains element less than one', () => {
        const cb = () => getPokerHand([1, 1, 1, 1, 0]);

        assert.throws(cb, /Значение кости должно быть целым числом от 1 до 6/);
    });

    it('should throw error when dice contains element greater than six', () => {
        const cb = () => getPokerHand([1, 1, 1, 1, 42]);

        assert.throws(cb, /Значение кости должно быть целым числом от 1 до 6/);
    });
});