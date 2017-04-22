/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */

function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    var numberOfRepetitions = [0, 0, 0, 0, 0, 0];

    if (!Array.isArray(dice))
        throw new Error('Ожидался массив');

    if (dice.length !== 5)
        throw new Error('Ожидалось 5 значений');

    dice.forEach(function(item) {
        if (typeof item !== 'number' || !Number.isInteger(item))
            throw  new Error('Значения должны быть целыми числами');
        if (item < 1 || item > 6)
            throw new Error('Значения должны быть от 1 до 6');
        numberOfRepetitions[item-1]++
    });

    var maxCount = Math.max.apply(null, numberOfRepetitions);
    console.log(maxCount);
    switch (maxCount) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (numberOfRepetitions.indexOf(2) !== -1) {
                return 'Фулл хаус';
            }
            return 'Тройка';
        case 2:

            if (numberOfRepetitions.filter(item => {
                    return item === 2;
                }).length === 2)
                return 'Две пары';
            return 'Пара';
        default:
            return 'Наивысшее очко';
        }
}

module.exports = getPokerHand;
