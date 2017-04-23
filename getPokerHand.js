/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {

    if (arguments.length !== 1) {
        throw new Error("Функция getPokerHand принимает ровно один элемент")
    }

    if (!Array.isArray(dice)) {
        throw new Error("Аргумент getPokerHand должен быть массивом")
    }

    if (dice.length !== 5) {
        throw new Error("Аргумент getPokerHand должен быть массивом ровно из пяти элементов")
    }

    let pointCounts = getPointCountsList(dice);
    pointCounts.sort((a, b) => b - a);

    return getCombination(pointCounts);
}

/**
 * Получения массива для каждого очка
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {Array} массив количества очков, где индекс элемента соотвествует очку, а значение - сколько встречается
 */
function getPointCountsList(dice) {
    let pointCounts = [0, 0, 0, 0, 0, 0];
    dice.forEach((point) => {
        if (!Number.isInteger(point)) {
            throw new Error("Элементы массива должны быть целыми числами")
        }
        if (point < 1 || point > 6) {
            throw new Error("Элементы массива должны содержать числа от 1 до 6")
        }
        pointCounts[point - 1]++;
    });
    return pointCounts;
}


/**
 * Получение названия комбинации
 *
 * @param {Array} pointCounts массив количества очков
 * @returns {String} название комбинации
 */
function getCombination(pointCounts) {
    switch (pointCounts[0]) {
        case 5:
            return "Покер";
        case 4:
            return "Каре";
        case 3:
            return pointCounts[1] === 2 ? "Фулл хаус" : "Тройка";
        case 2:
            return pointCounts[1] === 2 ? "Две пары" : "Пара";
        case 1:
            return "Наивысшее очко"
    }
}

module.exports = getPokerHand;
