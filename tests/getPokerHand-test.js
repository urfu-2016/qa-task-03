const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should throw `Кубиков должно быть 5` for [1, 1, 1, 1]', () => {
        
        try {
        	const actual = getPokerHand([1, 1, 1, 1]);
        	throw Error('shoud Throw Error');	
        } catch (e) {
        	assert.equal(e.message, 'Кубиков должно быть 5');
        }
    });

    it('should throw `В кубике все грани являются числами` for [1, 1, 1, 1, `1`]', () => {
        
        try {
        	const actual = getPokerHand([1, 1, 1, 1, '1']);
        	throw Error('shoud Throw Error');	
        } catch (e) {
        	assert.equal(e.message, 'В кубике все грани являются числами');
        }
    });

    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 2]);

        assert.equal(actual, 'Каре');
    });

    it('should return `Фулл хаус` for [1, 5, 1, 1, 5]', () => {
        const actual = getPokerHand([1, 5, 1, 1, 5]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [1, 2, 1, 3, 1]', () => {
        const actual = getPokerHand([1, 2, 1, 3, 1]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [1, 2, 5, 1, 2]', () => {
        const actual = getPokerHand([1, 2, 5, 1, 2]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `Пара` for [1, 2, 5, 1, 3]', () => {
        const actual = getPokerHand([1, 2, 5, 1, 3]);

        assert.equal(actual, 'Пара');
    });

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 5]);

        assert.equal(actual, 'Наивысшее очко');
    });
});
