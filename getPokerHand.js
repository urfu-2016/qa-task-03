const DICES_HASH_TO_DESCRIPTION = {
    25: 'Покер',
    17: 'Каре',
    13: 'Фулл хаус',
    11: 'Тройка',
    9: 'Две пары',
    7: 'Пара',
    5: 'Наивысшее очко'
};

function validateDices(dices) {
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
        throw new RangeError('All dice values must be in range 1..6');
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
    if (arguments.length !== 1) {
        throw new Error(`Expected exactly 1 argument, but ${arguments.length} is provided`);
    }

    validateDices(dices);

    return DICES_HASH_TO_DESCRIPTION[calculateDicesHash(dices)];
}

const calculateDicesHash = dices => {
    const diceFrequencies = {};
    dices.forEach(dice => diceFrequencies[dice] = (diceFrequencies[dice] || 0) + 1);
    return Object.keys(diceFrequencies)
        .reduce((hash, key) => hash + Math.pow(diceFrequencies[key], 2), 0);
};

module.exports = getPokerHand;
