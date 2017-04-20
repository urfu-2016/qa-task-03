'use strict';

Array.prototype.getCountIdentical = function (elem) {
    return this.reduce((count, currentElem) => {
        return count + ((currentElem === elem) ? 1 : 0);
    }, 0);
};

function checkInput(dice) {
    if (!Array.isArray(dice) || arguments.length != 1) {
        throw new Error('Incorrect arguments');
    }

    if (dice.length !== 5) {
        throw new Error('Invalid length array');
    }

    if (Math.max.apply(Math, dice) > 5 || Math.min.apply(Math, dice) < 1) {
        throw new Error('Array contains incorrect values');
    }
}

function getCombinations(dice) {
    checkInput(dice);

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
