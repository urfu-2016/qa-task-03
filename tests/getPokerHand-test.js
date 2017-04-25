const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [1, 1, 2, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 2, 1, 1]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 2, 1, 2, 1]', () => {
        const actual = getPokerHand([1, 2, 1, 2, 1]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Фулл хаус` for [1, 4, 4, 1, 4]', () => {
        const actual = getPokerHand([1, 4, 4, 1, 4]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 6, 2, 6, 6]', () => {
        const actual = getPokerHand([1, 6, 2, 6, 6]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две Пары` for [3, 4, 4, 1, 1]', () => {
        const actual = getPokerHand([3, 4, 4, 1, 1]);

        assert.equal(actual, 'Две Пары');
    });

    it('should return `Пара` for [6, 1, 3, 2, 6]', () => {
        const actual = getPokerHand([6, 1, 3, 2, 6]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [4, 1, 3, 2, 6]', () => {
        const actual = getPokerHand([4, 1, 3, 2, 6]);

        assert.equal(actual, 'Наивысшее очко');
    });

    it('Должен выкидывать ошибку, когда значения кубиков не входят в [1, 6]', () => {
        const cb = () => getPokerHand([1, 2, 0, 10, 7]);

        assert.throws(cb, /Значения должны быть целыми числами и иметь значения от 1 до 6/);
    });

    it('Должен выкидывать ошибку, когда значения кубиков не являются целыми числами', () => {
        const cb = () => getPokerHand([1, 2, 3.5, 4.0, 6]);

        assert.throws(cb, /Значения должны быть целыми числами и иметь значения от 1 до 6/);
    });

    it('Должен выкидывать ошибку, когда значения кубиков не являются целыми числами', () => {
        const cb = () => getPokerHand([1, '2', 4, 5, 6]);

        assert.throws(cb, /Значения должны быть целыми числами и иметь значения от 1 до 6/);
    });

    it('Должен выкидывать ошибку, когда количесвто бросаемых кубиков больше 5', () => {
        const cb = () => getPokerHand([1, 2, 3, 5, 2, 6]);

        assert.throws(cb, /Длина массива должна быть равна 5/);
    });

    it('Должен выкидывать ошибку, когда количесвто бросаемых кубиков меньше 5', () => {
        const cb = () => getPokerHand([1, 2, 3, 5]);

        assert.throws(cb, /Длина массива должна быть равна 5/);
    });

    it('Должен выкидывать ошибку, когда на вход функции подается не массив', () => {
        const cb = () => getPokerHand('1, 2, 3, 5, 6');

        assert.throws(cb, /Аргумент функции должен являться массивом/);
    });

    it('Должен выкидывать ошибку, когда на вход функции ничего не подается', () => {
        const cb = () => getPokerHand();

        assert.throws(cb, /Аргумент функции должен являться массивом/);
    });

});

