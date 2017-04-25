"use strict";
/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    var arrayDice = [0, 0, 0, 0, 0 ,0, 0];
    if (dice.length != 5) {
        throw new Error('Кубиков должно быть ровно 5');
    }
    for(var i = 0; i < 5; i++) {
        if (typeof(dice[i]) != 'number') {
            throw new Error('Бракованный кубик! На кубиках должны быть числа 1-6');
        }
        if (dice[i] > 6 || dice[i] < 1) {
            throw new Error('Бракованный кубик! На кубиках должны быть числа 1-6');
        }
        arrayDice[dice[i]]++;
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
