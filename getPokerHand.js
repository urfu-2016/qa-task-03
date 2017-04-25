/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)) {
        throw new Error('Argument should be an array');
    }

    if (dice.length !== 5) {
        throw new Error('There should be 5 elements in array');
    }

    dice.forEach(diceThrow => {
        if (!Number.isInteger(diceThrow)) {
            throw new Error('Every element of array should be an integer number');
        }
        if (diceThrow < 1 || diceThrow > 6) {
            throw new Error('Every element of array should be in range from 1 to 6');
        }
    });

    // показывает, сколько раз выпадала каждая грань
    const timesFacesThrown = [0, 0, 0, 0, 0, 0];

    dice.forEach(face => {
        timesFacesThrown[face - 1]++;
    });

    timesFacesThrown.sort((a, b) => {
        return b - a;
    });

    const topFreq1 = timesFacesThrown[0];
    const topFreq2 = timesFacesThrown[1];

    switch (topFreq1) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            return topFreq2 === 2 ? 'Фулл хаус' : 'Тройка';
        case 2:
            return topFreq2 === 2 ? 'Две пары' : 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;

