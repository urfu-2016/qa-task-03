/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    if (arguments.length !== 1)
         throw new Error('Неверное число аргументов');
    if (dice.length !== 5)
         throw new Error('Было брошено не 5 костей');
    var setDice = new Set(dice);
    for (var item of setDice){
		if (typeof item !== 'number' || isNaN(item))
			throw new Error('Значение кости не число');
		if (item <= 0)
			throw new Error('Значение кости не положительное число');
		if (!Number.isInteger(item))
			throw new Error('Значение кости не целое число');
		if (item > 6)
			throw new Error('Значение кости больше 6');
	}
	if (setDice.size == 1)
		return 'Покер';
	if (setDice.size == 5)
		return 'Наивысшее очко';
	if (setDice.size == 4)
		return 'Пара';
	else {
		var QuantityList = getCountOfOccurrences(dice, setDice);
		if (QuantityList.indexOf(4) !== -1 ){
			return 'Каре'
		}
		if (QuantityList.indexOf(3) !== -1 ){
			if (QuantityList.indexOf(2) !== -1 ){
				return 'Фулл хаус'
			} else {
				return 'Тройка'
			}
		}
		return 'Две пары'
	}
}

function getCountOfOccurrences(dice, setDice) {
	var QuantityList = [];
	var k = 0;
	for (var item of setDice){
		for (var i = 0; i <= 5; i++) {
			if (item == dice[i]){
				k++;
			}
		};
		QuantityList.push(k);
		k = 0
	}; 
	return QuantityList;
}

module.exports = getPokerHand;