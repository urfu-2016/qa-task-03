const DICE_HASH_TO_DESCRIPTION = {
    25: 'Покер',
    17: 'Каре',
    13: 'Фулл хаус',
    11: 'Тройка',
    9: 'Две пары',
    7: 'Пара'
};

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь

    if (!(dice instanceof Array)) {
        throw new TypeError('Your dice is not an array');
    }

    if (!dice.every(card => typeof card === 'number')) {
        throw new TypeError('There are cards that is not a number');
    }

    if (dice.length !== 5 || !dice.every(card => card >= 1 && card <= 6)) {
        throw new RangeError('Check the correctness of your dice');
    }

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
