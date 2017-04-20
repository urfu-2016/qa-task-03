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

function calc(x) {
    const res = [];
    var current = x[0];
    var y = 0;
    for (var i = 0; i < x.length; i++) {
        if (current !== x[i]) {
            current = x[i];
            res.push(y * y);
            y = 0;
        }
        y++;
    }
    res.push(y * y);

    return res.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
}


module.exports = getPokerHand;
