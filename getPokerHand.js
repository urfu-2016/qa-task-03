const minValue = 1;
const maxValue = 6;
const diceCount = 5;

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)) {
        throw new TypeError('Dice should be an array type')
    }
    if (dice.length != diceCount) {
        throw new RangeError(`Dice count should be ${diceCount}`)
    }
    if (dice.some(value => !Number.isInteger(value) || value < minValue || value > maxValue)) {
        throw new Error(`Dice should contains integer values from ${minValue} to ${maxValue}`)
    }

    var countByValue = {};
    dice.forEach(value => countByValue.hasOwnProperty(value)
        ? countByValue[value] += 1
        : countByValue[value] = 1);

    var uniqueDiceValues = Object.keys(countByValue);
    var uniqueDiceCount = uniqueDiceValues.length;
    var groupsLength = uniqueDiceValues.map(key => countByValue[key]);

    switch (uniqueDiceCount) {
        case 1:
            return "Покер";
        case 2:
            return groupsLength.includes(3) ? 'Фулл хаус' : "Каре";
        case 3:
            return groupsLength.includes(2) ? "Две пары" : "Тройка";
        case 4:
            return "Пара";
        case 5:
            return "Наивысшее очко";
    }
}

module.exports = getPokerHand;