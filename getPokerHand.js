/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!(dice instanceof  Array)) {
        throw new Error('В функцию передан не массив');
    }

    if (dice.length !== 5) {
        throw new Error('Длина массива не равна пяти');
    }

    dice.forEach((num, index) => {
        let isAppropriateNumber = (num >= 1 && num <= 6);

        if (!Number.isInteger(num)) {
            throw new Error(`Под индексом '${index}' лежит не целое число`)
        }

        if (!isAppropriateNumber) {
            throw new Error(`Число под индексом '${index}' лежит не в диапазоне 1-6`);
        }
    });

    let countOfNumbers = [0, 0, 0, 0, 0, 0];
    let inArray = num => countOfNumbers.indexOf(num) !== -1;

    dice.forEach((num) => {
        countOfNumbers[num - 1]++;
    });


    let isTwoPair = inArray(2) &&
        countOfNumbers.indexOf(2, countOfNumbers.indexOf(2) + 1) !== -1;
    let combinations = {
        'Покер': inArray(5),
        'Каре': inArray(4),
        'Фулл Хаус': inArray(3) && inArray(2),
        'Тройка': inArray(3),
        'Две пары': isTwoPair,
        'Пара': inArray(2),
        'Наивысшее очко': inArray(1)
    };

    for (let key in combinations) {
        if (combinations[key]) {
            return key;
        }
    }
}

module.exports = getPokerHand;
