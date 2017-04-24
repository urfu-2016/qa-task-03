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
	
	it ('shoud throw error for null', () => {
		const cb = () => getPokerHand(null);

		assert.throws(cb, /Argument should be array/);
	});
	
	it ('shoud throw error for [1, 1, 1, 1, 1, 1]', () => {
		const cb = () => getPokerHand([1, 1, 1, 1, 1, 1]);

		assert.throws(cb, /Length should be 5/);
	});
	
	it ('shoud throw error for [1, 1]', () => {
		const cb = () => getPokerHand([1, 1]);

		assert.throws(cb, /Length should be 5/);
	});
	
	it ('shoud throw error for [1, 5, 1, 2, 6]', () => {
		const cb = () => getPokerHand([1, 5, 1, 2, 6]);

		assert.throws(cb, /Array item should be integer in range from 1 to 5/);
	});
	
	it ('shoud throw error for [1, 5, 1, 2, 0]', () => {
		const cb = () => getPokerHand([1, 5, 1, 2, 0]);

		assert.throws(cb, /Array item should be integer in range from 1 to 5/);
	});
	
	it ('shoud throw error for [1, 5, 1, 2, \'d\']', () => {
		const cb = () => getPokerHand([1, 5, 1, 2, 'd']);

		assert.throws(cb, /Array item should be integer in range from 1 to 5/);
	});
});
