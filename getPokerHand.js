/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 *
 *[1,1,1,1,1] - Покер
 *[1,1,1,1,2] - Каре
 *[1,1,1,2,2] - Фул хаус
 *[1,1,1,2,3] - Тройка
 *[1,1,2,2,3] - Две пары
 *[1,1,2,3,4] - Пара
 *[1,2,3,4,5] - Наивысшее очко
*/
const combinations = ['Покер', 'Каре', 'Фул хаус', 'Тройка', 'Две пары', 'Пара', 'Наивысшее очко'];

function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    //Проверка на то, что входные данные: 1)массив, 
    //                                    2)длина 5,
    //                                    3)элементы - целые числа
    //                                    4)элементы - числа от 1 до 6
    if (!(dice instanceof Array))
    	throw new Error('Необходимо подавать массив');

    if (!(dice.length == 5))
    	throw new Error('Массив должен состоять из 5 элементов');
    
    if (!(isArrayOfInteger(dice) == 0))
    	throw new Error('Элементы должны быть целые числа');

    if (!(isArrayFromTo(dice, 1, 6) == 0))
    	throw new Error('Элементы должны быть числа от 1 до 6');

    var sortedDice = dice.sort();
    var counterOfDifferences = 0;
    var indexOfDifference = 1;

    for (var i = 0; i < sortedDice.length - 1; i++) {
    	if (sortedDice[i] != sortedDice[i+1]) {
    		counterOfDifferences += 1;
    		indexOfDifference *= i+1;
    	}
    }

    if (counterOfDifferences == 0) return combinations[0];
    else if (counterOfDifferences == 1) {
    	if ((indexOfDifference == 1) || (indexOfDifference == 4)) return combinations[1]
    	else return combinations[2]}
    else if (counterOfDifferences == 2) {
    	if ((indexOfDifference == 12) || (indexOfDifference == 2) || (indexOfDifference == 4)) return combinations[3]
    	else return combinations[4]}
    else if (counterOfDifferences == 3) return combinations[5]
    else return combinations[6]

}

function isArrayOfInteger(arr) {
	var errorOfTypeCounter = 0;
	for (var i = arr.length - 1; i >= 0; i--) {
		if (!Number.isInteger(arr[i])) {
			errorOfTypeCounter += 1;
		}
	}
	return errorOfTypeCounter;
}

function isArrayFromTo(arr, lowerBorder, upperBorder) {
	var errorOfBorderCounter = 0;
	for (var i = arr.length - 1; i >= 0; i--) {
		if ((!(arr[i] <= upperBorder)) || (!(arr[i] >= lowerBorder))) {
			errorOfBorderCounter += 1;
		}
	}
	return errorOfBorderCounter;
}

module.exports = getPokerHand;
