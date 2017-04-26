const assert = require('assert');
const getPokerHand = require('../getPokerHand');

const invalidDiceErrorRE = /Invalid dice array/;
const invalidValuesErrorRE = /Dice array has invalid values/;

describe('getPokerHand', () => {
    const positiveTests = [
        [[1,1,1,1,1], 'Покер'],
        [[1,1,1,1,2], 'Каре'],
        [[1,1,1,2,2], 'Фулл хаус'],
        [[1,1,1,2,3], 'Тройка'],
        [[1,1,2,2,3], 'Две пары'],
        [[1,1,2,3,4], 'Пара'],
        [[1,2,3,4,5], 'Наивысшее очко']
    ];

    for (const [dice, expected] of positiveTests) {
        it(`should return \`${expected}\` for [${dice}]`, () => {
            const actual = getPokerHand(dice);

            assert.equal(actual, expected);
        });
    }

    const validationTests = [
        [{ a: 1 }, invalidDiceErrorRE],
        [[1,2], invalidDiceErrorRE],
        [[1,2,3,4,5,5], invalidDiceErrorRE],
        [[1,2,3,4,6], invalidValuesErrorRE],
        [[0,1,2,3,4], invalidValuesErrorRE],
        [['1',2,3,4,5], invalidValuesErrorRE]
    ];

    for (const [dice, errorRE] of validationTests) {
        it(`should throw \`${errorRE}\` for ${JSON.stringify(dice)}`, () => {
            const fn = () => getPokerHand(dice);

            assert.throws(fn, errorRE);
        });
    }
});
