const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });
//Каре
	it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, 'Каре');
    });
	it('should return `Каре` for [1, 2, 2, 2, 2]', () => {
        const actual = getPokerHand([1, 2, 2, 2, 2]);

        assert.equal(actual, 'Каре');
    });
//Фулл хаус
	it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });
	it('should return `Фулл хаус` for [1, 1, 2, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });
//Тройка
	it('should return `Тройка` for [[1, 1, 1, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 3]);

        assert.equal(actual, 'Тройка');
    });
	it('should return `Тройка` for [[1, 2, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 2, 2, 2, 3]);

        assert.equal(actual, 'Тройка');
    });
	it('should return `Тройка` for [[3, 2, 3, 3, 1]', () => {
        const actual = getPokerHand([3, 2, 3, 3, 1]);

        assert.equal(actual, 'Тройка');
    });
//Две пары
	it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });
	it('should return `Две пары` for [1, 1, 2, 3, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 3]);

        assert.equal(actual, 'Две пары');
    });
	it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 2, 2, 3, 3]);

        assert.equal(actual, 'Две пары');
    });
//Пара
	it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });
	it('should return `Пара` for [1, 2, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 2, 2, 3, 4]);

        assert.equal(actual, 'Пара');
    });
	it('should return `Пара` for [1, 2, 3, 3, 4]', () => {
        const actual = getPokerHand([1, 2, 3, 3, 4]);

        assert.equal(actual, 'Пара');
    });
	it('should return `Пара` for [1, 2, 3, 4, 4]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 4]);

        assert.equal(actual, 'Пара');
    });
//Наивысшее очко
	it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });
//Неверная длинна
	it('should return `Массив неверной длинны, должно быть 5 костей` for [1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 2, 3, 4]);

        assert.equal(actual, 'Должно быть 5 костей');
    });
	it('should return `Массив неверной длинны, должно быть 5 костей` for [1, 2, 3, 4, 5, 6]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5, 6]);

        assert.equal(actual, 'Должно быть 5 костей');
    });
	it('should return `В массиве могут быть только числа` for [1, 2, 3, 4, g]', () => {
        const actual = getPokerHand([1, 2, 3, 4, "g"]);

        assert.equal(actual, 'В массиве могут быть только числа');
    });
	it('should return `В массиве могут быть только числа` for [1, 2, 3, 4, 1g]', () => {
        const actual = getPokerHand([1, 2, 3, 4, "1g"]);

        assert.equal(actual, 'В массиве могут быть только числа');
    });
	it('should return `Пустой массив` for []', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, 'Пустой массив');
    });
    // Напишите тесты на ваш замечательный код здесь
});
