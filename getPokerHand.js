/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    if (dice.length != 5)
        throw new Error('Wrong amount of dices');

    var combo = dice.reduce(function(acc, val) {
        if(val < 1 || val > 6 || !Number.isInteger(val))
            throw new Error('Dice should contain int numbers from 1 to 6');
        acc[val-1] += 1;

        return acc;
    }, [0, 0, 0, 0, 0, 0])
        .filter(function (value) {
            return value > 1;
        });

    return getComboName(combo);
}

var singleValueCombos = {
    5: 'Покер',
    4: 'Каре',
    3: 'Тройка',
    2: 'Пара'
};

var doubleValueCombos = {
    5: 'Фулл хаус',
    4: 'Две пары'
};

/**
 *
 * @param {Array} combo
 * @returns {String}
 */
function getComboName(combo) {
    if (combo.length == 0)
        return 'Наивысшее очко';
    if (combo.length == 1)
        return singleValueCombos[combo[0]];
    return doubleValueCombos[combo[0] + combo[1]];
}

module.exports = getPokerHand;
