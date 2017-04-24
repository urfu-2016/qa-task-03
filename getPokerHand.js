/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {

    if (!Array.isArray(dice)) {
        throw new Error('Dice is not an array');
    }

    if (dice.length !== 5) {
        throw new Error('Array must have 5 elements');
    }

    const results = {
        '50': 'Покер',
        '41': 'Каре',
        '32': 'Фулл хаус',
        '31': 'Тройка',
        '22': 'Две пары',
        '21': 'Пара',
        '11': 'Наивысшее очко'
    };

    const quantities = fillQuantities(dice);

    const sortedKeys = Object.keys(quantities).sort((key1, key2) => {
        return quantities[key2] - quantities[key1];
    });

    return results['' + quantities[sortedKeys[0]] + quantities[sortedKeys[1]]];
}

function fillQuantities(dice) {

    let count = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

    dice.forEach((value, index) => {
        if (!Number.isInteger(value) || value < 1 || value > 6) {
            throw new Error(`Invalid dice at place ${index} with value ${value}`);
        }
        count[value]++;
    });

    return count;
}

module.exports = getPokerHand;
