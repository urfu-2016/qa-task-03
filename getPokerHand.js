"use strict";
/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    var arrayDice = Object.seal([0, 0, 0, 0, 0 ,0, 0]);
    for(var i = 0; i < 5; i++) {
        try {
            if ((dice.length > 5) || (dice[i] > 6)) {
                throw new UserException('Смухлевать решил?')
            }
            arrayDice[dice[i]]++;
        } catch(e) {
            return 'Смухлевать решил?'; 
        }
    }
    var combination = 'none';
    var setDice = new Set();
    var royalFlush = 0;
    for(var i = 1; i < arrayDice.length; i++) {
        if ((setDice.has(arrayDice[i])) && (arrayDice[i] === 2)) {
            return ('Две пары');
        } else {
            setDice.add(arrayDice[i]);
        }
        if (arrayDice[i] === 1) {
            royalFlush++;
        } else if (royalFlush < 5) {
            royalFlush = 0;
        }
    }
    if (royalFlush === 5) {
        return 'Наивысшее очко!'
    }
    if (setDice.has(3) && setDice.has(2)) {
        return 'Фулл хаус';
    }
    if (setDice.has(4)) {
        return 'Каре';
    }
    if (setDice.has(5)) {
        return 'Покер';
    }
    if (setDice.has(2)) {
        return 'Пара';
    }
    if (setDice.has(3)) {
        return 'Тройка';
    }
    return 'Увы ничего'
}

module.exports = getPokerHand;
