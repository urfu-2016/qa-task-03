'use strict';

Array.prototype.getCountIdentical = function (elem) {
    return this.reduce((count, currentElem) => {
        return count + ((currentElem === elem) ? 1 : 0);
    }, 0);
};

/**
 * Проверяем корректность колоды
 *
 * @param {Array} dice набор, для которых нужно определить комбинацию
 */
function checkDice(dice) {
    if (!Array.isArray(dice)) {
        throw new TypeError('Incorrect arguments');
    }

    if (dice.length !== 5) {
        throw new RangeError('Invalid length array');
    }

    if (!dice.every(card => {
        return Number.isInteger(card);
        })) {
        throw new RangeError('Array contains incorrect values');
    }

    if (Math.max.apply(Math, dice) > 5 || Math.min.apply(Math, dice) < 1) {
        throw new RangeError('Array contains incorrect values');
    }
}

/**
 * Ищем комбинации пары, сета, одиночные карты
 *
 * @param {Array} dice набор, для которых нужно определить комбинацию
 * @returns {Object} количество каждой найденной комбинации
 */
function getCombinations(dice) {

    var combinations = {
        pair: 0,
        set: 0,
        single: 0
    };
    var pastCombinations = [];
    for (var i = 0; i < dice.length; i++) {
        if (pastCombinations.indexOf(dice[i]) !== -1) {
            continue;
        }
        switch (dice.getCountIdentical(dice[i])) {
            case 1:
                combinations.single++;
                pastCombinations.push(dice[i]);
                break;
            case 2:
                combinations.pair++;
                pastCombinations.push(dice[i]);
                break;
            case 3:
                combinations.set++;
                pastCombinations.push(dice[i]);
                break;
        }
    }

    return combinations;
}

/**
 * Проверяет наличие комбинации в колоде
 *
 * @param {Array} dice набор, для которых нужно определить комбинацию
 * @returns {Boolean} Есть ли данная комбинация в колоде
 */
function isPoker(dice) {
    var firstCard = dice[0];

    return dice.every((card) => {
        return firstCard === card;
    });
}

function isFourOfKind(dice) {
    return (dice.getCountIdentical(dice[0]) === 4) ||
        (dice.getCountIdentical(dice[1] === 4));
}

function isFullHouse(dice) {
    var combinations = getCombinations(dice);

    return combinations.pair === 1 && combinations.set === 1;
}

function isSet(dice) {
    var combinations = getCombinations(dice);

    return combinations.single === 2 && combinations.set === 1;
}


function isTwoPair(dice) {
    var combinations = getCombinations(dice);

    return combinations.pair === 2;
}

function isOnePair(dice) {
    var combinations = getCombinations(dice);

    return combinations.pair === 1 && combinations.single === 3;
}

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (arguments.length != 1) {
        throw new Error('Incorrect arguments');
    }

    checkDice(dice);

    if (isPoker(dice)) {
        return 'Покер';
    }

    if (isFourOfKind(dice)) {
        return 'Каре';
    }

    if (isFullHouse(dice)) {
        return 'Фулл хаус';
    }

    if (isSet(dice)) {
        return 'Тройка';
    }

    if (isTwoPair(dice)) {
        return 'Две пары';
    }

    if (isOnePair(dice)) {
        return 'Пара';
    }

    return 'Наивысшее очко';
}

module.exports = getPokerHand;