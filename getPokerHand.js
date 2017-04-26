/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */

function countRanks(hand) {
    var result = [];
    for (var i = 0; i < 7; i++){
        result.push(0);
    }
    for (var j = 0; j < hand.length; j++){
        result[hand[j]] ++;
    }

    return result;

}

function getPokerHand(hand) {
	
	if(!Array.isArray(hand))
		throw new Error("Должен быть массив");
	
	if (hand.length !== 5)
		throw new Error("Должно быть 5 значений");
	hand.forEach(function(num){
		if (!Number.isInteger(num))
			throw new Error("Значения должны быть целыми числами");
		if (num < 1 || num > 6)
			throw new Error("Значения должны быть от 1 до 6");
	});
	
    var ranks = countRanks(hand);
    var maxEntriesCount = Math.max.apply(null, ranks);
    ranks.splice(ranks.indexOf(maxEntriesCount), 1);
    var secondaryMax = Math.max.apply(null, ranks);
    switch (maxEntriesCount) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            if (secondaryMax === 2)
                return 'Фулл хаус';
            else
                return 'Тройка';
        case 2:
            if (secondaryMax === 2)
                return 'Две пары';
            else
                return 'Пара';
        default:
            return 'Наивысшее очко';
    }
}

module.exports = getPokerHand;
