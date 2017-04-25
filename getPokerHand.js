const combinations = ['Покер', 'Каре', 'Фулл хаус', 'Тройка', 'Две пары', 'Пара'];
/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (!Array.isArray(dice))
        throw new Error('У аргумента должен быть тип массив'); 

    if (dice.length !== 5) 
        throw new Error('Массив должен быть длины 5'); 
    
    const isElemsNum = dice.every(item => Number.isInteger(item) && item > 0 && item < 6);
    
     if (!isElemsNum)
        throw new Error('Элементы массива дожны быть целые числа из отрезка [0, 5]'); 

    const countsElemHash = (dice.reduce((res, item) => {
        res[item] = res[item] ? res[item] + 1 : 1;
        return res
    }, {}));

    const countsElem = Object.keys(countsElemHash).map(item => countsElemHash[item]);
    if (countsElem.includes(5)) return 'Покер';
    else if (countsElem.includes(4)) return 'Каре';
    else if (countsElem.includes(3) && countsElem.includes(2)) return 'Фулл хаус';
    else if (countsElem.includes(3)) return 'Тройка';
    else if (countsElem.includes(2) && countsElem.length === 3) return 'Две пары';
    else if (countsElem.includes(2)) return 'Пара';
    else return 'Наивысшее очко'
}
module.exports = getPokerHand;
