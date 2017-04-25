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

	it('should throw Error for < 5 dice.length', () => {
		const actual = () => getPokerHand([1, 2, 3, 4]);

		assert.throws(actual, /Было брошено не 5 костей/);
	});

	it('should throw Error for > 5 dice.length', () => {
		const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]);

		assert.throws(actual, /Было брошено не 5 костей/);
	});

	it('should throw Error for != 1 arguments', () => {
		const actual = () => getPokerHand([1, 2, 3, 4, 5],['']);

		assert.throws(actual, /Неверное число аргументов/);
	});

	it('should throw Error value of bone is not a number', () => {
		const actual = () => getPokerHand([1, 2, 3, 4, '5']);

		assert.throws(actual, /Значение кости не число/);
	});

	it('should throw Error value of bone is a NaN', () => {
		const actual = () => getPokerHand([1, 2, NaN, 4, 5]);

		assert.throws(actual, /Значение кости не число/);
	});

	it('should throw Error value of bone is not integer', () => {
		const actual = () => getPokerHand([1, 2, 3.5, 4, 5]);

		assert.throws(actual, /Значение кости не целое число/);
	});

	it('should throw Error value of bone is not >0', () => {
		const actual = () => getPokerHand([-1, 2, 3, 4, 5]);

		assert.throws(actual, /Значение кости не положительное число/);
	});

	it('should throw Error value of bone is >6', () => {
		const actual = () => getPokerHand([8, 2, 3, 4, 5]);

		assert.throws(actual, /Значение кости больше 6/);
	});
});
