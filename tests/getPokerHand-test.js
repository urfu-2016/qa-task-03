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

    it('should return `Фулл Хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл Хаус');
    });

    it('should return `Тройка` for [1, 1, 1, 2, 4]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 4]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [2, 3, 3, 4, 4]', () => {
        const actual = getPokerHand([2, 3, 3, 4, 4]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [2, 3, 3, 4, 5]', () => {
        const actual = getPokerHand([2, 3, 3, 4, 5]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('should throw Error when getPokerHand argument is not Array', () => {
        const cb = () => getPokerHand(121);

        assert.throws(cb, /В функцию передан не массив/);
    });

    it('should throw Error when getPokerHand argument.length < 5', () => {
        const cb = () => getPokerHand([1, 2]);

        assert.throws(cb, /Длина массива не равна пяти/);
    });

    it('should throw Error when getPokerHand argument.length > 5', () => {
        const cb = () => getPokerHand([1, 2, 3, 3, 4, 4]);

        assert.throws(cb, /Длина массива не равна пяти/);
    });

    it('should throw Error when there are not Integer elements in Array', () => {
        const cb = () => getPokerHand(['1', 2, 3, 4, 5]);

        assert.throws(cb, /Под индексом '0' лежит не целое число/)
    });

    it('should throw Error when there are elements more then 6', () => {
        const cb = () => getPokerHand([1, 7, 2, 3, 4]);

        assert.throws(cb, /Число под индексом '1' лежит не в диапазоне 1-6/);
    });

    it('should throw Error when there are elements less then 1', () => {
        const cb = () => getPokerHand([1, 0, 2, 3, 4]);

        assert.throws(cb, /Число под индексом '1' лежит не в диапазоне 1-6/);
    });

    it('should throw Error when getPokerHand take more then 1 argument', () => {
        const cb = () => getPokerHand([1, 1, 2, 3, 4], 2);

        assert.throws(cb, /Функция должна принимать один аргумент/);
    });

    it('should throw Error when getPokerHand take less then 1 argument', () => {
        const cb = () => getPokerHand();

        assert.throws(cb, /Функция должна принимать один аргумент/);
    });
});
