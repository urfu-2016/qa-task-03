const DICES_HASH_TO_DESCRIPTION = {
    25: 'Покер',
    17: 'Каре',
    13: 'Фулл хаус',
    11: 'Тройка',
    9: 'Две пары',
    7: 'Пара'
};

function checkThatDiceIsValid(dices) {
    if (arguments.length !== 1) {
        throw new Error(`Expected exactly one argument, but ${arguments.length} is provided`);
    }
    if (!(dices instanceof Array)) {
        throw new TypeError('Your dices is not an array');
    }

    if (dices.length !== 5) {
        throw new RangeError(`Dices count must be equal to 5, but was ${dices.length}`);
    }

    if (dices.some(dice => typeof dice !== 'number')) {
        throw new TypeError('There are dice that is not a number');
    }

    if (dices.some(dice => dice < 1 || dice > 6)) {
        throw new RangeError('Dice value must be in range 1..6');
    }

    if (dices.some(dice => dice % 1 !== 0)) {
        throw new TypeError('Your dices contains float numbers');
    }
}

/**
 * Определение комбинации в броске
 *
 * @param {Array} dices пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dices) {
    // Напишите ваш замечательный код здесь

    checkThatDiceIsValid(dices);

    return DICES_HASH_TO_DESCRIPTION[calculateDicesHash(dices)] || 'Наивысшее очко';
}

const calculateDicesHash = dices => dices
    .sort((x, y) => x - y)
    .reduce((res, dice) => {
        let current = res.pop() || {dice, count: 0};
        if (current.dice !== dice) {
            res.push(current);
            current = {dice, count: 0};
        }
        current.count++;
        res.push(current);

        return res;
    }, [])
    .map(x => x.count * x.count)
    .reduce((x, y) => x + y);

module.exports = getPokerHand;
