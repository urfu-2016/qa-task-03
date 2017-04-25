const DICE_HASH_TO_DESCRIPTION = {
    25: 'Покер',
    17: 'Каре',
    13: 'Фулл хаус',
    11: 'Тройка',
    9: 'Две пары',
    7: 'Пара'
};

function checkThatDiceIsValid(dice) {
    if (!(dice instanceof Array)) {
        throw new TypeError('Your dice is not an array');
    }

    if (dice.length !== 5) {
        throw new RangeError(`The lenght of your dice must be 5, but was ${dice.length}`);
    }

    if (dice.some(card => typeof card !== 'number')) {
        throw new TypeError('There are cards that is not a number');
    }

    if (dice.some(card => card < 1 || card > 6)) {
        throw new RangeError('Cards must be in range 1..6');
    }

    if (dice.some(card => card % 1 !== 0)) {
        throw new TypeError('Your dice contains float numbers');
    }
}

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь

    checkThatDiceIsValid(dice);

    const diceHash = calculateHashOfDice(dice);
    if (diceHash in DICE_HASH_TO_DESCRIPTION) {
        return DICE_HASH_TO_DESCRIPTION[diceHash];
    }

    return'Наивысшее очко';
}

const calculateHashOfDice = dice => dice
    .sort((x, y) => x - y)
    .reduce((res, item) => {
        let current = res.pop() || {item, count: 0};
        if (current.item !== item) {
            res.push(current);
            current = {item, count: 0};
        }
        current.count++;
        res.push(current);

        return res;
    }, [])
    .map(x => x.count * x.count)
    .reduce((x, y) => x + y);

module.exports = getPokerHand;
