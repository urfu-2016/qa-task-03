const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
	it('should return `Увы ничего` for [1, 2, 3, 5, 6]', () => {
        const actual = getPokerHand([1, 2, 3, 5, 6]);

        assert.equal(actual, 'Увы ничего');
    });
	it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 6]);

        assert.equal(actual, 'Пара');
    });
    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });
    it('should return `Тройка` for [1, 6, 2, 2, 2]', () => {
        const actual = getPokerHand([1, 6, 2, 2, 2]);

        assert.equal(actual, 'Тройка');
    });
    it('should return `Фулл хаус` for [1, 1, 2, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });
    it('should return `Каре` for [1, 2, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 2, 1, 1, 1]);

        assert.equal(actual, 'Каре');
    });
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });
    it('should return `Наивысшее очко!` for [2, 3, 4, 5, 6]', () => {
        const actual = getPokerHand([2, 3, 4, 5, 6]);

        assert.equal(actual, 'Наивысшее очко!');
    });
    it('should return `Бракованный кубик! На кубиках должны быть числа 1-6` for [2, 3, 4, 9, 9]', () => {
        try {
            const actual = getPokerHand([2, 3, 4, 9, 9]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Бракованный кубик! На кубиках должны быть числа 1-6');
        }
    });
    it('should return `Бракованный кубик! На кубиках должны быть числа 1-6` for [-2, 3, 4, 2, 2]', () => {
        try {
            const actual = getPokerHand([-2, 3, 4, 2, 2]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Бракованный кубик! На кубиках должны быть числа 1-6');
        }
    });
    it('should return `Кубиков должно быть ровно 5` for [2, 3, 4, 1]', () => {
        try {
            const actual = getPokerHand([2, 3, 4, 1]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Кубиков должно быть ровно 5');
        }
    });
    it('should return `Кубиков должно быть ровно 5` for [6, 6, 6, 6, 6, 6]', () => {
        try {
            const actual = getPokerHand([6, 6, 6, 6, 6, 6]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Кубиков должно быть ровно 5');
        }
    });
    it('should return `Кубиков должно быть ровно 5` for []', () => {
        try {
            const actual = getPokerHand([]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Кубиков должно быть ровно 5');
        }
    });
    it('should return `Бракованный кубик! На кубиках должны быть числа 1-6` for [undefined, 6, 6, 6, 6]', () => {
        try {
            const actual = getPokerHand([undefined, 6, 6, 6, 6]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Бракованный кубик! На кубиках должны быть числа 1-6');
        }
    });
    it('should return `Бракованный кубик! На кубиках должны быть числа 1-6` for [shuller, 6, 6, 6, 6]', () => {
        try {
            const actual = getPokerHand(['shuller', 6, 6, 6, 6]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Бракованный кубик! На кубиках должны быть числа 1-6');
        }
    });
});
