const diceLength = 5;
const correctValues = [1, 2, 3, 4, 5, 6];

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice)){
        throw new TypeError(`Аргумент функции должен являться массивом`)
    }
    if (dice.length != diceLength) {
        throw new Error(`Длина массива должна быть равна 5`)
    }
    if (dice.some(value => !(correctValues.includes(value)))) {
        throw new RangeError('Значения должны быть целыми числами и иметь значения от 1 до 6');
    }
    dice.sort();

    var arrMax = getMaxCount(dice);
    switch (arrMax[0]) {
        case 5 :
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            return arrMax[1] == 2 ? 'Фулл хаус' : 'Тройка';
        case 2:
            return arrMax[1] == 2 ? 'Две Пары' : 'Пара';
        case 1:
            return 'Наивысшее очко';
    }
}

/**
 * Определяет две максимальные последовательности повторяющихся цифр
 *
 * @param {Array} dice пять костей, для которых нужно определить максимальное повторение цифры
 * @returns {Array} Массив из двух элементов.
 */
function getMaxCount(dice) {
    var maxCount1 = 0;
    var maxCount2 = 0;
    var count = 1;
    for (var i = 1; i <= dice.length; i++) {
        if (dice[i - 1] != dice[i] || i == dice.length) {
            if (count > maxCount1) {
                maxCount2 = maxCount1;
                maxCount1 = count;
            }
            else {
                if (count > maxCount2)
                    maxCount2 = count;
            }
            count = 1;
        }
        else count++;
    }
    return ([maxCount1, maxCount2]);
}

module.exports = getPokerHand;
