/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
const correctDiceLength = 5;

function getPokerHand(dice) {

    checkInputData(arguments);
    var numbersCount = getNumbersCount(dice);

    switch (numbersCount[0]) {
        case 5 : return 'Покер';
        case 4 : return 'Каре';
        case 3 : return numbersCount[1] === 2 ? 'Фулл хаус' : 'Тройка';
        case 2 : return numbersCount[1] === 2 ? 'Две пары' : 'Пара';
        case 1 : return 'Наивысшее очко';
    }
}

function checkInputData(args) {

    if (args.length != 1)
        throw new Error('На вход должен подаваться только один параметр');
    if (!Array.isArray(args[0]))
        throw new TypeError('На вход должен подаваться массив значений');
    if (args[0].length != correctDiceLength)
        throw new RangeError('Массив должен содержать ровно 5 значений');
    if (Math.min.apply(null,args[0]) < 1 || Math.max.apply(null,args[0]) > 6)
        throw new Error('Значения массива должны находиться в диапазоне от 1 до 6');
    if (args[0].some(function (element) {
        return !Number.isInteger(element);
    }))
        throw new TypeError('Значения массива должны являться целыми числами');
}

function getNumbersCount(dice) {

    var numbersCount = [0,0,0,0,0,0];
    dice.forEach(function (number) {
        numbersCount[number - 1]++;
    });
    return numbersCount.sort(function (a, b) {
        return b - a;
    });
}
module.exports = getPokerHand;