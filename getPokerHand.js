'use strict';

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (arguments.length !== 1 || !Array.isArray((dice)) || dice.length !== 5) {
        throw new Error('Неверные аргументы');
    }
    const repetitions = getRepetitions(dice);
    const maxCount = maxItem(repetitions);
    switch (maxCount) {
    case 5:
        return 'Покер';
    case 4:
        return 'Каре';
    case 3:
        if (repetitions.indexOf(2) >= 0) {
            return 'Фулл хаус';
        }
        return 'Тройка';
    case 2:

        if (repetitions.filter(item => {
            return item === 2;
        }).length === 2) {
            return 'Две пары';
        }
        return 'Пара';
    default:
        return 'Наивысшее очко';
    }
}

/**
 * Возвращает число повторений элементов массива
 *
 * @param {Array} arr
 * @returns {Number}
 */
function getRepetitions(arr) {
    return arr.reduce((repetitions, current) => {
        if (current < 1 || current > 6) {
            throw new Error('Неправильное значение');
        }
        repetitions[current-1]++;

        return repetitions;
    }, arr.map(() => {

        return 0;
    }));
}

/**
 * Возвращает наибольший элемент массива чисел
 *
 * @param {Array} arr
 * @return {Number}
 */
function maxItem(arr) {
    return arr.reduce((current, item) => {

        return item > current ? item : current;
    }, 0);
}

module.exports = getPokerHand;
