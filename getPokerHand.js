'use strict';

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (arguments.length !== 1) {
        throw new Error('Неверное число аргументов');
    }
    if (!Array.isArray((dice))) {
        throw new TypeError('Неверный тип аргумента');
    }
    if (dice.length !== 5) {
        throw new Error('Неправильное число костей');
    }
    const repetitions = getRepetitions(dice);
    const maxCount = Math.max(...repetitions);
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
            throw new Error('Значение кости должно быть целым числом в диапазоне от 1 до 6');
        }
        repetitions[current-1]++;

        return repetitions;
    }, arr.map(() => {

        return 0;
    }));
}

module.exports = getPokerHand;
