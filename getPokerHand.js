/**
 * Определении комбинации по максимальному
 * и второму максимальному встречающемуся числу
 * @param {Number} firstMax первый максимум
 * @param {Number} secondMax второй максимум
 * @returns {String} название комбинации
 */

function getCombinationType(firstMax, secondMax) {
    switch(firstMax) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            return secondMax === 2 ? 'Фулл хаус' : 'Тройка';
        case 2:
            return secondMax === 2 ? 'Две пары' : 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */

function getPokerHand(dice) {
    if (arguments.length != 1) {
        throw new Error("Function getPokerHand take 1 argument")
    }

    if (!(dice instanceof Array)) {
        throw new Error("Argument must be Array")
    }
    
    if (dice.length !== 5) {
        throw new Error("Dice should contain 5 elements")
    }

    dice.forEach(card => {
        if (!Number.isInteger(card)) {
            throw new Error("Dice array must contain only integer numbers numbers")
        }
        if (card < 1 || card > 5) {
            throw new Error("Dice array must contain only numbers between 1 and 5")
        }
    })
    
    var countCards = [0, 0, 0, 0, 0]
    dice.forEach(card => {
        countCards[card - 1] += 1
    })
    countCards.sort((a, b) => b - a)

    return getCombinationType(countCards[0], countCards[1])
}

module.exports = getPokerHand;
