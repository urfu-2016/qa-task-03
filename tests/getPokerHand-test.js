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
	it('should return `Тройка` for [[1, 1, 1, 2, 3]', () => {
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
	it('should return `Массив неверной длины, должно быть 5 костей` for [1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 2, 3, 4]);

        assert.equal(actual, 'Должно быть 5 костей');
    });
	it('should return `В массиве могут быть только целые числа от 1 до 6` for [1, 2, 3, 4, "g"]', () => {
        const actual = getPokerHand([1, 2, 3, 4, "g"]);

        assert.equal(actual, 'В массиве могут быть только целые числа от 1 до 6');
    });
	it('should return `На вход поступил не массив` for "1"', () => {
        const actual = getPokerHand("1");

        assert.equal(actual, 'На вход поступил не массив');
    });
	it('should return `Должно быть 5 костей` for []', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, 'Должно быть 5 костей');
    });
	it('should return `В массиве могут быть только целые числа от 1 до 6` for [1, 8, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 8, 2, 3, 4]);

        assert.equal(actual, 'В массиве могут быть только целые числа от 1 до 6');
    });
	it('should return `В массиве могут быть только целые числа от 1 до 6` for [1, -1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, -1, 2, 3, 4]);

        assert.equal(actual, 'В массиве могут быть только целые числа от 1 до 6');
    });
	it('should return `В массиве могут быть только целые числа от 1 до 6` for [1, 1.1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, -1, 2, 3, 4]);

        assert.equal(actual, 'В массиве могут быть только целые числа от 1 до 6');
    });
	it('should return `Должен быть ровно 1 аргумент` for Nothing', () => {
        const actual = getPokerHand();

        assert.equal(actual, 'Должен быть ровно 1 аргумент');
    });
	it('should return `Должен быть ровно 1 аргумент` for [1,2,3],[1,2,3]', () => {
        const actual = getPokerHand([1,2,3],[1,2,3]);

        assert.equal(actual, 'Должен быть ровно 1 аргумент');
    });
});
