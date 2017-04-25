/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь

    
    var indexesOfEq = [];
    
    var iterCounter = 0
    for (var i = 0; i < dice.length; i++) {
    	if (indexesOfEq[0] != undefined && indexesOfEq[0].includes(i))
    		continue;
    	if (indexesOfEq[1] != undefined && indexesOfEq[1].includes(i))
    		continue;

    	for (var j = i+1; j < dice.length; j++) {

    		if(dice[i] == dice[j]){
                if (indexesOfEq[iterCounter] == undefined)
                    indexesOfEq[iterCounter] = [];
    			indexesOfEq[iterCounter].push(j);
            }

     	};
     	if (indexesOfEq[iterCounter] != undefined && indexesOfEq[iterCounter].length != 0)
     		iterCounter++;
    };

    if (indexesOfEq[0] == undefined)
    	return 'Наивысшее очко';
    else if (indexesOfEq[1] == undefined || indexesOfEq[1].length == 0) {
	    if (indexesOfEq[0].length == 4)
	 		return 'Покер';
	 	else if (indexesOfEq[0].length == 3)
	 		return 'Каре';
	 	else if (indexesOfEq[0].length == 2)
	 		return 'Тройка';
	 	else 
	 		return 'Пара';
 	}
 	else {
	    if ((indexesOfEq[0].length == 2 && indexesOfEq[1].length == 1) || (indexesOfEq[0].length == 1 && indexesOfEq[1].length == 2))
	    	return 'Фулл хаус';
		else
	    	return 'Две пары';
	}
}

module.exports = getPokerHand;
