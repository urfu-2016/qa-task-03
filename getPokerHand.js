/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
    if (dice && dice.length !== 5) {
    	throw Error('Кубиков должно быть 5');
    }

    let counts = {};
    let pairs = 0;
    let kare = false;
    let pocker = false;
    let set = false;
    for (let el of dice) {
    	if (typeof el !== 'number') {
    		throw Error('В кубике все грани являются числами');
    	}
    	if (!counts[el]) {
    		counts[el] = 0;	
    	}
    	counts[el]++;
    }
    
    for (el in counts) {
    	switch (counts[el]) {
    		case 2: 
    			pairs++;
    			break;
    		case 3:
    			set = true;
    			break
    		case 4:
    			kare = true;
    			break;
    		case 5:
    			pocker = true;
    			break;
    	}
    }
    if (pocker) {
    	return 'Покер';	
    }

    if (kare) {
    	return 'Каре';
    }

    if (pairs === 1 && set) {
    	return 'Фулл хаус';
    }

    if (set) {
    	return 'Тройка'
    }

    if (pairs === 2) {
    	return 'Две пары'
    }

    if (pairs === 1) {
    	return 'Пара'
    }

    return 'Наивысшее очко';
}

module.exports = getPokerHand;
