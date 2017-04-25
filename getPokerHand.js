'use strict';

const COMBINATIONS = ['Покер', 'Каре', 'Фулл хаус', 'Тройка', 'Две пары', 'Пара', 'Наивысшее очко'];
const DICE_ITEMS = new Set([1, 2, 3, 4, 5, 6]);

function convert(items, func) {
    var result = [];
    items.forEach(function(item) {
        result.push(func(item));
    });

    return result;
}

function diceValidation(dice) {
    if (!(dice instanceof Array)) {
        throw new Error('Type of dice is not Array');
    }

    if (dice.length !== 5) {
        throw new Error('Length of dice is not 5');
    }
}

function diceItemValidation(diceItem) {
    if (typeof diceItem !== 'number') {
        throw new Error('Type of dice item is not number');
    }
    
    if (!DICE_ITEMS.has(diceItem)) {
        throw new Error('Dice item is not in {1, 2, 3, 4, 5, 6}');
    }
}

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (arguments.length !== 1) {
        throw new Error('Length of arguments is not 1');
    }
        
    diceValidation(dice);
    
    var diceItemCount = {};
    
    dice.forEach(diceItem => {
        diceItemValidation(diceItem);

        if (!diceItemCount.hasOwnProperty(diceItem)) {
            diceItemCount[diceItem] = 0;
        }

        diceItemCount[diceItem] += 1;
    });

    var countList = convert(Object.keys(diceItemCount), diceItem => diceItemCount[diceItem]);
    countList.sort();

    var combination;

    switch(countList.length) {
        case 1: combination = COMBINATIONS[0];
            break;
        case 5: combination = COMBINATIONS[6];
            break;
        case 4: combination = COMBINATIONS[5];
            break;
        case 2: combination = countList[0] === 1 ? COMBINATIONS[1] : COMBINATIONS[2];
            break;
        case 3: combination = countList[1] === 1 ? COMBINATIONS[3] : COMBINATIONS[4];
            break;
    }

    return combination;
}

module.exports = getPokerHand;
