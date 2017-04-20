const combinations = ['Покер', 'Каре', 'Фулл хаус', 'Тройка', 'Две пары', 'Пара'];
/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    if (dice === null || dice === undefined)
        return null;

    if (!Object.prototype.toString.call(dice).match('object Array'))
        throw new Error('Type error'); 
    
    const isElemsNum = dice.every(item => (Object.prototype.toString.call(item).match('object Number')) && !isNaN(item))
    
     if (!isElemsNum)
        throw new Error('Type error'); 

    if (dice.length < 5) 
        return null

    /** Так как без babel низя Object.values :( */
    let countsElemHash = (dice.reduce((res, item) => {
        res[item] = res[item] ? res[item] + 1 : 1;
        return res
    }, {}));
    let countsElem = Object.keys(countsElemHash).map(item => countsElemHash[item]);
    if (countsElem.includes(5)) return 'Покер';
    else if (countsElem.includes(4)) return 'Каре';
    else if (countsElem.includes(3) && countsElem.includes(2)) return 'Фулл хаус';
    else if (countsElem.includes(3)) return 'Тройка';
    else if (countsElem.includes(2) && countsElem.length === 3) return 'Две пары';
    else if (countsElem.includes(2)) return 'Пара';
    else return Math.max.apply(null, dice);
}

module.exports = getPokerHand;
