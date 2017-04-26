/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */

function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
	dice.sort(function(a, b) {
	return a - b;
	}); 
	var num = [1,0,0,0,0];
	j = 0;
	for(var i = 1; i<dice.length; i++) 
		{
		if (dice[i]!=dice[j]) j=i;
		num[j]++;
		}
	max1 = -1;
	max2 = -1;
	for(var i = 0; i<num.length; i++) 
		if (num[i]>max1) 
			{
			max1=num[i];
			num[i]=-1;
			}

	for(var i = 0; i<num.length; i++) 
		if (num[i]>max2) 
			{
			max2=num[i];
			num[i]=-1;
			}
	var res = 'Покер';
	switch (max1) {
		case 5: res = 'Покер'; break;
		case 4: res = 'Каре'; break;
		case 3: 
			switch (max2) {
				case 2: res = 'Фулл хаус'; break;
				case 1: res = 'Тройка'; break;
		case 2:
			switch (max2) {
				case 2: res = 'Две пары'; break;
				case 1: res = 'Пара'; break;
		case 1: res = 'Наивысшее очко';
			}

	return res;
}

module.exports = getPokerHand;
