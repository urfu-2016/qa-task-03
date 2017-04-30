const assert = require('assert');
const getPokerHand = require('../getPokerHand');

const invalidDiceErrorRE = /Invalid dice array/;
const invalidValuesErrorRE = /Dice array has invalid values/;

describe('getPokerHand', () => {
    const successTests = [
        { dice: [1,1,1,1,1], expected: 'Покер' },
        { dice: [1,1,1,1,2], expected: 'Каре' },
        { dice: [1,1,1,2,2], expected: 'Фулл хаус' },
        { dice: [1,1,1,2,3], expected: 'Тройка' },
        { dice: [1,1,2,2,3], expected: 'Две пары' },
        { dice: [1,1,2,3,4], expected: 'Пара' },
        { dice: [1,2,3,4,5], expected: 'Наивысшее очко' }
    ];

    for (const { dice, expected } of successTests) {
        it(`should return \`${expected}\` for [${dice}]`, () => {
            const actual = getPokerHand(dice);

            assert.equal(actual, expected);
        });
    }

    const validationTests = [
        { dice: undefined, expectedErrorRE: invalidDiceErrorRE },
        { dice: { a: 1 }, expectedErrorRE: invalidDiceErrorRE },
        { dice: [1,2], expectedErrorRE: invalidDiceErrorRE },
        { dice: [1,2,3,4,5,5], expectedErrorRE: invalidDiceErrorRE },
        { dice: [1,2,3,4,7], expectedErrorRE: invalidValuesErrorRE },
        { dice: [0,1,2,3,4], expectedErrorRE: invalidValuesErrorRE },
        { dice: ['1',2,3,4,5], expectedErrorRE: invalidValuesErrorRE },
        { dice: [1,2,3,4,5.1], expectedErrorRE: invalidValuesErrorRE },
    ];

    for (const { dice, expectedErrorRE } of validationTests) {
        it(`should throw \`${expectedErrorRE}\` for ${JSON.stringify(dice)}`, () => {
            const fn = () => getPokerHand(dice);

            assert.throws(fn, expectedErrorRE);
        });
    }
});
