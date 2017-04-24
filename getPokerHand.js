/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
	validate(dice);
	
    const diceCount = getDiceCount(dice)
		.sort()
		.reverse();
		
	if (diceCount[0] === 5) {
		return 'Покер';
	}
	
	if (diceCount[0] === 4) {
		return 'Каре';
	}

	if (diceCount[0] === 3 && diceCount[1] === 2) {
		return 'Фулл хаус';
	}

	if (diceCount[0] === 3) {
		return 'Тройка';
	}

	if (diceCount[0] === 2 && diceCount[1] === 2) {
		return 'Две пары';
	}

	if (diceCount[0] === 2) {
		return 'Пара';
	}

	return 'Наивысшее очко';
}

function getDiceCount(dice) { 
	const diceCount = [0, 0, 0, 0, 0];
	
	dice.forEach(item => {
		diceCount[item - 1]++;
	});
	
	return diceCount;
}

function validate(dice) {
	if (!Array.isArray(dice)) {
		throw new Error('Argument should be array');
	}
	
	if (dice.length !== 5) {
		throw new Error ('Length should be 5');
	}
	
	dice.forEach(item => {
		if (!Number.isInteger(item) || item < 1 || item > 5) {
			throw new Error ('Array item should be integer in range from 1 to 5');
		}
	});
}

	
module.exports = getPokerHand;
