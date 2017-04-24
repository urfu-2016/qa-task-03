'use strict';

const Hand = {
    POKER: 'Покер',
    QUADS: 'Каре', 
    FULL_HOUSE: 'Фул хаус',
    SET: 'Тройка',
    TWO_PAIR: 'Две пары',
    PAIR: 'Пара',
    HIGH_NUMBER: 'Наивысшее очко'
};

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (dice.length !== 5) {
        throw new Error('dice should has five numbers');
    }

    if (!dice.every(Number.isInteger)) {
        throw new Error('dice should contains only integer numbers');
    }

    if (!dice.every(number => 0 < number && number < 7)) {
        throw new Error('dice should contains only numbers in range 1 to 6 inclusive');
    }

    let numberToCount = new Map();
    dice.forEach(number => numberToCount.set(number, numberToCount.get(number) + 1 || 1));
    let sameCounts = [...numberToCount.values()];

    return sameCounts.includes(5) ? Hand.POKER :
           sameCounts.includes(4) ? Hand.QUADS :
           sameCounts.includes(3) && sameCounts.includes(2) ? Hand.FULL_HOUSE :
           sameCounts.includes(3) ? Hand.SET :
           sameCounts.filter(count => count === 2).length === 2 ? Hand.TWO_PAIR :
           sameCounts.includes(2) ? Hand.PAIR :
           Hand.HIGH_NUMBER;
}

module.exports.getPokerHand = getPokerHand;
module.exports.Hand = Hand;
