const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    /** Положительные тесты */
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [5, 5, 1, 5, 5]', () => {
        const actual = getPokerHand([5, 5, 1, 5, 5]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [4, 4, 5, 5, 5]', () => {
        const actual = getPokerHand([4, 4, 5, 5, 5]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [4, 3, 1, 1, 1]', () => {
        const actual = getPokerHand([4, 3, 1, 1, 1]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 4, 2, 4, 2]', () => {
        const actual = getPokerHand([1, 4, 2, 4, 2]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `4` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });

    /** Негативные тесты */
    /** тесты на тип аргумента */
    it('should throw `Аргумент не может быть null или undefined` for undefined', () => {
        assert.throws(() => getPokerHand(undefined), 'У аргумента должен быть тип массив');
    });

    /**  тест на дилну массива */
    it('should throw `Массив должен быть длины 5` for []', () => {
        assert.throws(() => getPokerHand([]), 'Массив должен быть длины 5');
    });

    /** тесты для элементов массива */
    it('should throw `У аргумента должен быть тип массив` for `str`', () => {
        assert.throws(() => getPokerHand('str'), 'У аргумента должен быть тип массив');
    });

    it('should throw `Элементы массива дожны быть целые числа из отрезка [0, 5]` for [312, 3, 2, 3, 5]', () => {
        assert.throws(() => getPokerHand([312, 3, 2, 3, 5]), 'Элементы массива дожны быть целые числа из отрезка [0, 5]');
    });

    it('should throw `Элементы массива дожны быть целые числа из отрезка [0, 5]` for [-3, -2, 4, 5, 6]', () => {
        assert.throws(() => getPokerHand([-3, -2, 4, 5, 6]), 'Элементы массива дожны быть целые числа из отрезка [0, 5]');
    });

    it('should throw `Элементы массива дожны быть целые числа из отрезка [0, 5]` for [null, 3, 4, 5, 6]', () => {
        assert.throws(() => getPokerHand([null, 3, 4, 5, 6]), 'Элементы массива дожны быть целые числа из отрезка [0, 5]');
    });

    it('should throw `Элементы массива дожны быть целые числа из отрезка [0, 5]` for [undefined, 3, 4, 5, 6]', () => {
        assert.throws(() => getPokerHand([undefined, 3, 4, 5, 6]), 'Элементы массива дожны быть целые числа из отрезка [0, 5]');
    });

    it('should throw `Элементы массива дожны быть целые числа из отрезка [0, 5]` for [NaN, 3, 4, 5, 6]', () => {
        assert.throws(() => getPokerHand([NaN, 3, 4, 5, 6]), 'Элементы массива дожны быть целые числа из отрезка [0, 5]');
    });
});

