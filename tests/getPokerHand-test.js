/* eslint-env mocha */
const assert = require('assert');

let pokerModule = require('../getPokerHand');
const getPokerHand = pokerModule.getPokerHand;
const Hand = pokerModule.Hand;

function createCase(currentDice, expectedHand) {
    return {
        currentDice: currentDice,
        expectedHand: expectedHand
    };
}

describe('getPokerHand', () => {
    describe('incorrect dice length tests', () => {
        let errorPattern = /dice should has five numbers/;

        it('should throws if dice length > 5', () => {
            assert.throws(() => getPokerHand([1, 2, 3, 4, 5, 6]), errorPattern);
        });

        it('should throws if dice length < 5', () => {
            assert.throws(() => getPokerHand([1, 2, 3, 4]), errorPattern);
        });
    });

    describe('incorrect number in dice tests', () => {
        let errorPattern =  /dice should contains only numbers in range 1 to 6 inclusive/;

        it('should throws if dice contains number > 6', () => {
            assert.throws(() => getPokerHand([7, 1, 1, 1, 1]), errorPattern);
        });

        it('should throws if dice contains number < 1', () => {
            assert.throws(() => getPokerHand([0, 1, 1, 1, 1]), errorPattern);
        });
    });

    describe('not integer in dice tests', () => {
        let errorPattern = /dice should contains only integer numbers/;
        let notIntegers = [0.38, NaN, 'somestring', {}]
        
        notIntegers.forEach(notInteger => {
            it(`should throws if dice contains not integer: ${notInteger}`, () => {
                assert.throws(() => getPokerHand([notInteger, 1, 1, 1, 1]), errorPattern);
            });
        });
    });

    describe('combinations tests', () => {
        const handTestCases = [
            createCase([1, 1, 1, 1, 1], Hand.POKER),
            createCase([1, 1, 1, 1, 6], Hand.QUADS),
            createCase([1, 2, 1, 2, 1], Hand.FULL_HOUSE),
            createCase([1, 1, 2, 3, 1], Hand.SET),
            createCase([3, 1, 3, 1, 6], Hand.TWO_PAIR),
            createCase([6, 4, 3, 2, 6], Hand.PAIR),
            createCase([1, 2, 3, 4, 6], Hand.HIGH_NUMBER)
        ];
        
        handTestCases.forEach(test => {
            it(`should return '${test.expectedHand}' on '${test.currentDice}'`, () => {
                assert.equal(getPokerHand(test.currentDice), test.expectedHand);
            });
        });  
    });
});
