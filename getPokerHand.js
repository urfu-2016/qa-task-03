/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice)
{
    if (!Array.isArray(dice))
        throw new Error('The argument must be an array!');
    if (dice.length !== 5)
        throw new Error('The array must contain 5 elements!');
    var numberOfValues = [0,0,0,0,0,0];
    dice.forEach(function (item)
    {
        if (typeof item !== 'number' || (item ^ 0) !== item)
            throw new Error('The result of the dice must be an integer!');
        if (item < 1)
            throw new Error('The result of the dice can`t be less than 1!');
        if (item > 6)
            throw new Error('The result of the dice can`t be more than 6!');
        numberOfValues[item-1]++
    });
    numberOfValues.sort((a,b) => b-a);
    switch (numberOfValues[0])
    {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (numberOfValues[1] === 2)
                return 'Фулл хаус';
            else
                return 'Тройка';
        case 2:
            if (numberOfValues[1] === 2)
                return 'Две пары';
            else
                return 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;
