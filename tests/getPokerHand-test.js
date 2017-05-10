const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    describe('correctHand', () => {
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);
            assert.equal(actual, 'Покер');
        });
        it('should return `Каре` for [5, 4, 4, 4, 4]', () => {
            const actual = getPokerHand([5, 4, 4, 4, 4]);
            assert.equal(actual, 'Каре');
        });
        it('should return `Фулл хаус` for [6, 1, 6, 1, 6]', () => {
            const actual = getPokerHand([6, 1, 6, 1, 6]);
            assert.equal(actual, 'Фулл хаус');
        });
        it('should return `Тройка` for [1, 4, 5, 4, 4]', () => {
            const actual = getPokerHand([1, 4, 5, 4, 4]);
            assert.equal(actual, 'Тройка');
        });
        it('should return `Две пары` for [6, 5, 3, 5, 3]', () => {
            const actual = getPokerHand([6, 5, 3, 5, 3]);
            assert.equal(actual, 'Две пары');
        });
        it('should return `Пара` for [3, 2, 5, 1, 2]', () => {
            const actual = getPokerHand([3, 2, 5, 1, 2]);
            assert.equal(actual, 'Пара');
        });
        it('should return `Наивысшее очко` for [5, 4, 3, 2, 1]', () => {
            const actual = getPokerHand([5, 4, 3, 2, 1]);
            assert.equal(actual, 'Наивысшее очко');
        });
    });
    describe('incorrectHand', () => {
        it('should throw error when dice value is great', () => {
            const callback = () => getPokerHand([1, 2, 7, 4, 5]);
            
            assert.throws(callback, /Dice contains value not from range 1..6/);
        });
        it('should throw error when dice value is less', () => {
            const callback = () => getPokerHand([1, 2, 0, 4, 5]);
            
            assert.throws(callback, /Dice contains value not from range 1..6/);
        });
        it('should throw error when dice is int number', () => {
            const callback = () => getPokerHand(17);
            
            assert.throws(callback, /Dice is not an array/);
        }); 
        it('should throw error when dice is NaN', () => {
            const callback = () => getPokerHand(NaN);
            
            assert.throws(callback, /Dice is not an array/);
        });
        it('should throw error when dice is string', () => {
            const callback = () => getPokerHand("bad string");
            
            assert.throws(callback, /Dice is not an array/);
        });
        it('should throw error when dice is empty', () => {
            const callback = () => getPokerHand([]);
            
            assert.throws(callback, /Dice length is not 5/);
        });
        it('should throw error when dice length is small', () => {
            const callback = () => getPokerHand([1, 2, 3, 4]);
            
            assert.throws(callback, /Dice length is not 5/);
        });
        it('should throw error when dice length is too big', () => {
            const callback = () => getPokerHand([1, 2, 3, 4, 5, 6]);
            
            assert.throws(callback, /Dice length is not 5/);
        });
        it('should throw error when dice contains real number', () => {
            const callback = () => getPokerHand([1, 2, 3, 4, 2.3]);
            
            assert.throws(callback, /Dice contains non-integer value/);
        });
        it('should throw error when dice contains string', () => {
            const callback = () => getPokerHand([1, 2, "I'm string", 4, 5]);
            
            assert.throws(callback, /Dice contains non-integer value/);
        });
    });
});
