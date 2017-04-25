/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
 
function getPokerHand(dice) {
    if(isPoker(dice))
		return 'Покер';
	count = getCount(dice)
	if(isCare(count))
		return 'Каре';
	if(isFullHouse(count))
		return 'Фулл хаус';
	if(isTriple(count))
		return 'Тройка';
	countOfPairs = getCountOfPairs(count);
	//WSH.Echo('countOfPairs = ' + countOfPairs)
	if(isTwoPairs(countOfPairs))
		return 'Две пары';
	if(isPair(countOfPairs))
		return 'Пара';
	return 'Наивысшее очко';
}

function getCount(dice){
	count = new Array(6);
	for(i = 0; i < count.length; i++){
		count[i] = 0;
	}
		
	for(i = 0; i < 5; i++){
		switch(dice[i]){
			case '1':
				count[0]++;
				break;
			case '2':
				count[1]++;
				break;
			case '3':
				count[2]++;
				break;
			case '4':
				count[3]++;
				break;
			case '5':
				count[4]++;
				break;
			case '6':
				count[5]++;
				break;
		}
	}
	//WSH.Echo('count ' + count)
	return count;
}

function isPoker(dice) {
	oneDice = dice[0];
	count = 1;
	for(i = 1; i < 5; i++) {
		if(dice[i] == oneDice)
			count++;
	}
	if(count == 5)
		return true;
	return false;
}

function isCare(count){
	if(count[0] == 4 || count[1] == 4 || count[2] == 4 || count[3] == 4 || count[4] == 4 || count[5] == 4){
		return true
	}
	return false
}

function isFullHouse(count){
	if((count[0] == 3 || count[1] == 3 || count[2] == 3 || count[3] == 3 || count[4] == 3 || count[5] == 3) && (count[0] == 2 || count[1] == 2 || count[2] == 2 || count[3] == 2 || count[4] == 2 || count[5] == 2)){
		return true;
	return false;
	}
}

function isTriple(count){
	if(count[0] == 3 || count[1] == 3 || count[2] == 3 || count[3] == 3 || count[4] == 3 || count[5] == 3)
		return true;
	return false;
}

function getCountOfPairs(count){
	countOfPairs = 0;
	for(i = 0; i < count.length; i++){
		if(count[i] == 2)
			countOfPairs++;
	}
	return countOfPairs;
}

function isTwoPairs(count){
	if(count == 2)
		return true;
	return false;
}

function isPair(count){
	if(count == 1)
		return true;
	return false;
}

module.exports = getPokerHand;
