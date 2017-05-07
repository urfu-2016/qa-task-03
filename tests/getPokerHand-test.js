const assert = require('assert');
const getPokerHand = require('../getPokerHand');

function validateError(errorType, errorMessage) {
    return err => (err instanceof errorType) && errorMessage.test(err);
}

describe('getPokerHand', () => {
    describe('Valid cases', () => {
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            assert.equal(getPokerHand([1, 1, 1, 1, 1]), 'Покер');
        });

        it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
            assert.equal(getPokerHand([1, 1, 1, 1, 2]), 'Каре');
        });

        it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
            assert.equal(getPokerHand([1, 1, 1, 2, 2]), 'Фулл хаус');
        });

        it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
            assert.equal(getPokerHand([1, 1, 1, 2, 3]), 'Тройка');
        });

        it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
            assert.equal(getPokerHand([1, 1, 2, 2, 3]), 'Две пары');
        });

        it('should return `Пара` for [1, 1, 2, 4, 3]', () => {
            assert.equal(getPokerHand([1, 1, 2, 4, 3]), 'Пара');
        });

        it('should return `Наивысшее очко` for [1, 5, 2, 4, 3]', () => {
            assert.equal(getPokerHand([1, 5, 2, 4, 3]), 'Наивысшее очко');
        });

        it('should return `Пара` for unsorted [1, 2, 4, 1, 3]', () => {
            assert.equal(getPokerHand([1, 2, 4, 1, 3]), 'Пара');
        });

    });

    describe('Exceptional cases', () => {
        it('should throw an exception for cards count less than 5', () => {
            assert.throws(getPokerHand.bind(null, [1, 4, 2, 3]),
                validateError(RangeError, /Dices count must be equal to 5, but was 4/));
        });

        it('should throw an exception for cards count greater than 5', () => {
            assert.throws(getPokerHand.bind(null, [1, 4, 2, 3, 2, 4]),
                validateError(RangeError, /Dices count must be equal to 5, but was 6/));
        });

        it('should throw an exception if there are any card with value not within 1..6 range', () => {
            assert.throws(getPokerHand.bind(null, [1, 4, 2, 3, 7]),
                validateError(RangeError, /All dice values must be in range 1..6/));
        });

        it('should throw an exception if there are any non number card', () => {
            assert.throws(getPokerHand.bind(null, [1, 4, 2, 3, '1']),
                validateError(TypeError, /There are dice that is not a number/));
        });

        it('should throw an exception if dice is not an array', () => {
            assert.throws(getPokerHand.bind(null, '123'),
                validateError(TypeError, /Your dices is not an array/));
        });

        it('should throw an exception if dice is null', () => {
            assert.throws(getPokerHand.bind(null, null),
                validateError(TypeError, /Your dices is not an array/));
        });

        it('should throw an exception if dice contains non integer number', () => {
            assert.throws(getPokerHand.bind(null, [1, 1, 1, 1, 1.5]),
                validateError(TypeError, /Your dices contains float numbers/));
        });

        it('should throw an exception if more than one argument is provided', () => {
            assert.throws(() => getPokerHand(1, 1, 1),
                validateError(Error, /Expected exactly 1 argument, but 3 is provided/));
        });

        it('should throw an exception if no argument is provided', () => {
            assert.throws(getPokerHand.bind(null),
                validateError(Error, /Expected exactly 1 argument, but 0 is provided/));
        });
    });
    // Напишите тесты на ваш замечательный код здесь
});
