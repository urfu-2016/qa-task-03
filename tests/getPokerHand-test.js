const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    describe('pokerCombination', () => {
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);
            assert.equal(actual, 'Покер');
        });

        it('should return `Покер` for [3, 3, 3, 3, 3]', () => {
            const actual = getPokerHand([3, 3, 3, 3, 3]);
            assert.equal(actual, 'Покер');
        });
    });

    describe('kareCombination', () => {
        it('should return `Каре` for [5, 4, 4, 4, 4]', () => {
            const actual = getPokerHand([5, 4, 4, 4, 4]);
            assert.equal(actual, 'Каре');
        });
    });
    
    describe('fullHouseCombination', () => {
        it('should return `Фулл хаус` for [6, 1, 6, 1, 6]', () => {
            const actual = getPokerHand([6, 1, 6, 1, 6]);
            assert.equal(actual, 'Фулл хаус');
        });

        it('should return `Фулл хаус` for [2, 2, 3, 3, 3]', () => {
            const actual = getPokerHand([2, 2, 3, 3, 3]);
            assert.equal(actual, 'Фулл хаус');
        });
    });

    describe('setCombination', () => {
        it('should return `Тройка` for [1, 4, 5, 4, 4]', () => {
            const actual = getPokerHand([1, 4, 5, 4, 4]);
            assert.equal(actual, 'Тройка');
        });
        it('should return `Тройка` for [6, 6, 5, 2, 6]', () => {
            const actual = getPokerHand([6, 6, 5, 2, 6]);
            assert.equal(actual, 'Тройка');
        });
    });
    
    describe('twoPairCombination', () => {
        it('should return `Две пары` for [6, 5, 3, 5, 3]', () => {
            const actual = getPokerHand([6, 5, 3, 5, 3]);
            assert.equal(actual, 'Две пары');
        });
        it('should return `Две пары` for [1, 1, 2, 3, 3]', () => {
            const actual = getPokerHand([1, 1, 2, 3, 3]);
            assert.equal(actual, 'Две пары');
        });
    });
    describe('singlePairCombination', () => {
        it('should return `Пара` for [3, 2, 5, 1, 2]', () => {
            const actual = getPokerHand([3, 2, 5, 1, 2]);
            assert.equal(actual, 'Пара');
        });
        it('should return `Пара` for [1, 2, 3, 4, 1]', () => {
            const actual = getPokerHand([1, 2, 3, 4, 1]);
            assert.equal(actual, 'Пара');
        });
        it('should return `Пара` for [1, 2, 3, 6, 6]', () => {
            const actual = getPokerHand([1, 2, 3, 6, 6]);
            assert.equal(actual, 'Пара');
        });
    });
    describe('highestRankCombination', () => {
        it('should return `Наивысшее очко` for [5, 4, 3, 2, 1]', () => {
            const actual = getPokerHand([5, 4, 3, 2, 1]);
            assert.equal(actual, 'Наивысшее очко');
        });
        it('should return `Наивысшее очко` for [2, 3, 4, 5, 6]', () => {
            const actual = getPokerHand([2, 3, 4, 5, 6]);
            assert.equal(actual, 'Наивысшее очко');
        });
        it('should return `Наивысшее очко` for [1, 2, 3, 6, 6]', () => {
            const actual = getPokerHand([3, 6, 1, 2, 4]);
            assert.equal(actual, 'Наивысшее очко');
        });
    }); 
});
