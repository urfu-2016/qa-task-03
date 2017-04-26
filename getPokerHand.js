'use strict';

const minValue = 1;
const maxValue = 6;
const diceLength = 5;

const poker = 'Покер';
const quads = 'Каре';
const fullHouse = 'Фулл хаус';
const three = 'Тройка';
const twoCouples = 'Две пары';
const couple = 'Пара';
const highestPoint = 'Наивысшее очко';

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)) {
        throw new TypeError('dice should be an array');
    }
    if (dice.length !== diceLength) {
        throw new Error(`dice length should be equal to ${diceLength}`);
    }
    if (!dice.every(Number.isInteger)) {
        throw new Error('All dice values should be an integer numbers');
    }
    if (dice.some(value => value < minValue || value > maxValue)) {
        throw new RangeError(`All dice values in dice should be greater or equal to ${minValue} and less or equal to ${maxValue}`);
    }

    let values = {};
    dice.forEach(value => values[value] = value in values ? ++values[value] : 1);
    let valuesCounts = Object.keys(values).map(key => values[key]);
    let maxCount = Math.max(...valuesCounts);
    switch (maxCount) {
        case 5:
            return poker;
        case 4:
            return quads;
        case 3:
            return valuesCounts.indexOf(2) !== -1 ? fullHouse : three;
        case 2:
            let twoCount = valuesCounts.filter(count => count === 2).length;
            return twoCount === 2 ? twoCouples : couple;
        default:
            return highestPoint;
    }
}

module.exports = getPokerHand;
