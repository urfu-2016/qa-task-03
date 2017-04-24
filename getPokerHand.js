/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (arguments.length !== 1) {
        throw new Error('Функция принимает только один аргумент');
    }
    validateDice(dice);
    const repetitionsNumber = getRepetitionsNumber(dice);
    return getCombination(repetitionsNumber);
}

/**
 * Проверка входных данных на корректность
 *
 * @param {Array} dice массив из пяти костей, который нужно проверить
 */
function validateDice(dice) {
    if (!Array.isArray(dice)) {
        throw new Error('Аргумент должен быть массивом');
    }
    if (dice.length !== 5) {
        throw new Error('Размер массива должен быть равен 5');
    }
    dice.forEach((item) => {
        if (!Number.isInteger(item) || item < 1 || item > 6) {
            throw new Error('Значение кости должно быть целым числом от 1 до 6');
        }
    });
}

/**
 * Поиск количества одинаковых элементов в массиве
 *
 * @param {Array} array
 * @returns {Array}
 */
function getRepetitionsNumber(array) {
    let result = [0, 0, 0, 0, 0, 0];
    array.forEach((item) => {
        result[item-1]++;
    });
    return result;
}

/**
 * Возвращает название комбинации
 *
 * @param {Array} repetitionsNumber массив количества повторяющихся элементов
 * @returns {String} название комбинации
 */
function getCombination(repetitionsNumber) {
    const maxRepetition = Math.max(...repetitionsNumber);
    switch (maxRepetition) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (repetitionsNumber.indexOf(2) !== -1) {
                return 'Фулл хаус';
            }
            return 'Тройка';
        case 2:
            return repetitionsNumber.filter((item) => {
                return item === maxRepetition;
            }).length === 2 ? 'Две пары' : 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;