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
		
	if (!Array.isArray(dice))
	        throw new Error('Ожидается массив');
	if (dice.length !== 5)
	    throw new Error('Число аргументов  должгно быть равно 5');
	var repeat_number = [0,0,0,0,0,0];

    dice.forEach(function(item) {
    	if (!Number.isInteger(item))
	       	throw  new Error('ожидаются целые числа');
        if (item > 6 || item <= 0)
            throw new Error('ожидаются числа в диапазоне от 1 до 6');	 
        repeat_number[item-1]++
    });

var max = Math.max.apply(null, repeat_number);
    switch (max) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (repeat_number.indexOf(2) !== -1) {
                return 'Фулл хаус';
            }
            return 'Тройка';
        case 2:
            if (repeat_number.filter(item => {
                    return item === 2;
                }).length === 2)
                return 'Две пары';
            return 'Пара';
        default:
            return 'Наивысшее очко';
        }

}

module.exports = getPokerHand;
