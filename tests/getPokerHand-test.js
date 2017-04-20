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

    it('should return `Фулл хаус` for [12, 12, 100, 100, 100]', () => {
        const actual = getPokerHand([12, 12, 100, 100, 100]);

        assert.equal(actual, 'Фулл хаус');
    });

    it('should return `Тройка` for [12, 13, -1, -1, -1]', () => {
        const actual = getPokerHand([12, 13, -1, -1, -1]);

        assert.equal(actual, 'Тройка');
    });

    it('should return `Две пары` for [9, 0, 2, 0, 2]', () => {
        const actual = getPokerHand([9, 0, 2, 0, 2]);

        assert.equal(actual, 'Две пары');
    });

    it('should return `4` for [-1, 0, 3, 4, 2]', () => {
        const actual = getPokerHand([-1, 0, 3, 4, 2]);

        assert.equal(actual, '4');
    });

    /** Негативные тесты */
    it('should return `null` for []', () => {
        const actual = getPokerHand([]);

        assert.equal(actual, null);
    });

    /** Негативные тесты */
    it('should return `null` for array which length < 5', () => {
        const actual = getPokerHand([1,3,4]);

        assert.equal(actual, null);
    });

    it('should return `null` for undefined', () => {
        const actual = getPokerHand();

        assert.equal(actual, null);
    });

    it('should return `Type error` for [1, 4, 3, `5`, 4]', () => {
        try {
            getPokerHand([1, 4, 3, '5', 4]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Type error');
        }
    });

    it('should return `Type error` for [1, 4, 3, null]', () => {
        try {
            getPokerHand([1, 4, 3, null]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Type error');
        }
    });

    it('should return `Type error` for [1, 4, 3, undefined]', () => {
        try {
            getPokerHand([1, 4, 3, undefined]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Type error');
        }
    });

    it('should return `Type error` for [1, 4, 3, NaN]', () => {
        try {
            getPokerHand([1, 4, 3, NaN]);
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Type error');
        }
    });

    it('should return `Type error` for {}', () => {
        try {
            getPokerHand({});
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Type error');
        }
    });

    it('should return `Type error` for `string`' , () => {
        try {
            getPokerHand('string');
            throw new Error('`getPokerHand` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Type error');
        }
    });
});

