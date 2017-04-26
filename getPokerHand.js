'use strict';

let errorMessages = {
    'needArg': 'Функция должна получить один аргумент',
    'argType': 'Аргумент должен являться массивом',
    'arrLen': 'Массив должен включать ровно 5 элементов',
    'arrNumbers': 'Все элементы массива должны быть числами',
    'arrRange': 'Каждый элемент массива должен принимать значения от 1 до 6'

};

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш ̶з̶а̶м̶е̶ч̶а̶т̶е̶л̶ь̶н̶ы̶й великолепный код здесь

    if (arguments.length !== 1) {
        throw new Error(errorMessages.needArg)
    }

    if (!Array.isArray(dice)) {
        throw new Error(errorMessages.argType)
    }

    if (dice.length !== 5) {
        throw new Error(errorMessages.arrLen)
    }

    dice.forEach(item => {
        if (!Number.isInteger(item)) {
            throw new Error(errorMessages.arrNumbers);
        }

        if (!(item >= 1 && item <= 6)) {
            throw new Error(errorMessages.arrRange)
        }
    });

    let mapCombinations = {
        '5': 'Покер',
        '1,4': 'Каре',
        '2,3': 'Фулл хаус',
        '1,1,3': 'Тройка',
        '1,2,2': 'Две пары',
        '1,1,1,2': 'Пара',
        '1,1,1,1,1': 'Наивысшее очко'
    };

    let counter = dice.reduce((counter, item) => {
        !counter.hasOwnProperty(item) ? counter[item] = 1 : counter[item]++;

        return counter;
    }, {});

    return mapCombinations[Object.values(counter).sort().toString()];
}

module.exports = {
    getPokerHand: getPokerHand,
    errorMessages: errorMessages
};
