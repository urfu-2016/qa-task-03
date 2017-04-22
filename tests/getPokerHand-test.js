const assert = require('assert');
const getPokerHand = require('../getPokerHand');

function getPokerHandError(args, errRegExp) {
    return assertError(getPokerHand, args, errRegExp)
}

function assertError(func, args, errRegExp) {
    const f = () => {
        args == undefined ? func() : func(...args)
    }
    assert.throws(f, errRegExp);
}

describe('getPokerHand errors', () => {
    it('should throw error for empty arguments length', () => {
        getPokerHandError(undefined, /Function getPokerHand take 1 argument/)
    });
    it('should throw error for more than 1 argument', () => {
        getPokerHandError([1, 2], /Function getPokerHand take 1 argument/)
    });
    it('should throw error if argument not Array', () => {
        getPokerHandError(["fake"], /Argument must be Array/)
    });
    it('should throw error if dice contain less than 5 numbers', () => {
        getPokerHandError([[1, 2, 3, 4, 5, 3]], /Dice should contain 5 elements/)
    });
    it('should throw error if dice contain less more 5 numbers', () => {
        getPokerHandError([[1, 3]], /Dice should contain 5 elements/)
    });
    it('should throw error if dice contain not integer value', () => {
        getPokerHandError([[1, 3, 4.1, 3, 1]],
          /Dice array must contain only integer numbers numbers/)
    });
    it('should throw error if dice contain integer value less than 1', () => {
        getPokerHandError([[1, 3, 0, 3, 1]],
          /Dice array must contain only numbers between 1 and 5/)
    });
    it('should throw error if dice contain integer value more than 5', () => {
        getPokerHandError([[1, 3, 10, 3, 1]],
          /Dice array must contain only numbers between 1 and 5/)
    });
});
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
})
