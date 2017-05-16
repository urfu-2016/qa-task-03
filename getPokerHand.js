/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    checkArray(dice);
	const repeats = getRepeat(dice);
    switch (Object.keys(repeats).length) {
        case 5: 
            return 'Наивысшее очко';
        case 4: 
            return 'Пара';
        case 3:
            if (getMaxOfArray(Object.keys(repeats).map(
            function(key) { return repeats[key];})) === 3)
                return 'Тройка';
            return 'Две пары';
        case 2: 
            if (getMaxOfArray(Object.keys(repeats).map(
            function(key) { return repeats[key];})) === 4)
                return 'Каре';
            return 'Фулл Хаус';
        default : 
            return 'Покер';
        }
}


function getMaxOfArray(array) {
    return Math.max.apply(null, array);
}


function checkArray(array) {
    if (!Array.isArray(array))
        throw new Error("На вход должен подаваться массив");
        
    if (array.length !== 5)
        throw new Error("Длина входного массива должна быть равна 5");
    
    array.forEach(function(element) {
		if (!Number.isInteger(element)) {
			throw new Error("Элементами массива должны быть целые числа");
		}
        if (!(element > 0 && element < 7)) {
            throw new Error("Элементами массива должны быть числа в интервале от 1 до 6");
		}
    });

}
/**
 * Определение повторений каждого элемента
 *
 * @param {Array} array пять костей, для которых нужно определить повторения
 * @returns {Object} число - количество повторений
 */
function getRepeat(array) {
    var result = {};
    array.forEach(function(element){
        result[element] = result[element] + 1 || 1;
    });
    
    return result;
}
module.exports = getPokerHand;
