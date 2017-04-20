/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    switch (calc(dice)) {
        case 25:
            return 'Покер';
        case 17:
            return 'Каре';
        case 13:
            return 'Фулл хаус';
        case 11:
            return 'Тройка';
        case 9:
            return 'Две пары';
        case 7:
            return 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

function calc(dice) {
    return dice.reduce(function (res, item) {
        var current = res.pop() || {item, count: 0};
        if (current.item !== item) {
            res.push(current);
            current = {item, count: 0};
        }
        current.count++;
        res.push(current);

        return res;
    }, [])
        .map(x => x.count * x.count)
        .reduce((x, y) => x + y);
}


module.exports = getPokerHand;
