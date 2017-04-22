/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice)
{
    var numberOfValues = [0,0,0,0,0,0];
    dice.forEach(function (item)
    {
        if (typeof item !== 'number')
            throw new Error('The result of the dice should be a number!');
        if (item < 1)
            throw new Error('The result of the dice can`t be less than 1!');
        if (item > 6)
            throw new Error('The result of the dice can`t be more than 6!');
        numberOfValues[item-1]++
    });
    numberOfValues.sort(function (a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        if (a === b) return 0;
    });
    switch (numberOfValues[0])
    {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            numberOfValues.shift();
            if (numberOfValues[0] === 2)
                return 'Фулл хаус';
            else
                return 'Тройка';
        case 2:
            numberOfValues.shift();
            if (numberOfValues[0] === 2)
                return 'Две пары';
            else
                return 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;
