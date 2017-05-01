/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */


function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь

    try {

    dice.sort(); 

	} 

    catch (err) {

	res = ('Не массив');
	return res;

	}

    if (dice.length<5) {
	res = ('Элементов меньше 5-ти')
	return res;
	}

    if (dice.length>5) {
	res = ('Элементов больше 5-ти')
	return 'Элементов больше 5-ти';
	}


    var num = [1,0,0,0,0];
    
    	j = 0;
    	for(var i = 1; i<5; i++){
		if ((isNaN(dice[i])) || (isNaN(dice[j]))) {
			return 'Массив содержит элемент, не являющийся числом';
			}
		if ((dice[i]>6) || (dice[j]>6)) {
			return 'Массив содержит элемент, больший 6';
			}
		if ((dice[i]<1) || (dice[j]<1)) {
			return 'Массив содержит элемент, меньший 1';
			}
	        if (dice[i]!=dice[j]){
	            j=i;
	        }
	        num[j]++;
	    }


	

    max1 = -1;
    max2 = -1;

    for(var i = 0; i<5; i++){
        if (num[i]>max1){
            max1=num[i];
            num[i]=-1;
        }
    }

    for(var i = 0; i<5; i++) {
        if (num[i]>max2){
            max2=num[i];
            num[i]=-1;
        }
    }

    var res = 'Покер';
    switch (max1) {
        case 5: res = 'Покер'; break;
        case 4: res = 'Каре'; break;
        case 3:{
            switch (max2) {
                case 2: res = 'Фулл хаус'; break;
                case 1: res = 'Тройка'; break;
            }
	    break;
	    }
        case 2:{
            switch (max2) {
                case 2: res = 'Две пары'; break;
                case 1: res = 'Пара'; break;
            }
	    break;
	    }
        case 1: res = 'Наивысшее очко'; break;
    }

    return res;
}

module.exports = getPokerHand;
