/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {

    if (!isValidInput(dice)) {
        return '';
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

    const counts = fillCounts(dice);

    const sortedKeys = Object.keys(counts).sort((a, b) => {
        return counts[b] - counts[a];
    });

    return results['' + counts[sortedKeys[0]] + counts[sortedKeys[1]]];
}

function isValidInput(dice) {
    if (!Array.isArray(dice)) {
        throw new Error('Dice is not an array')
    }

    dice.forEach((value, index) => {
        if (value !== parseInt(value) || value < 1 || value > 6) {
            throw new Error(`Invalid dice at place ${index} with value ${value}`);
        }
    });

    return true;
}

function fillCounts(dice) {

    let count = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

    dice.forEach(cube => {
        count[cube]++;
    });

    return count;
}

module.exports = getPokerHand;
