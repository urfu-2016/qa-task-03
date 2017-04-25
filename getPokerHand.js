/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */ 
function getPokerHand(dice) {
	if(dice.length!=5){
		throw new Error('Введено не 5 чисел');
	}
	dice.sort();
	dice.push(7);
	var numberRepeats = 1;
	var arrayRepeats = new Array();
	for ( i=0; i<5; i++){
		if(!Number.isInteger(dice[i])|| dice[i]<1 || dice[i]>6){
			throw new Error(dice[i]+' нет на ребре кубика'); break;
			}
		if(dice[i]==dice[i+1]){
			numberRepeats++;
			}
		else {
			arrayRepeats.push(numberRepeats); numberRepeats=1;
			}
	}
    if (arrayRepeats.indexOf(5)!= -1){return 'Покер';}
	if (arrayRepeats.indexOf(4)!= -1){return 'Каре';}
	if (arrayRepeats.indexOf(3)!= -1 && arrayRepeats.indexOf(2)!= -1){return 'Фулл хаус';}
	if (arrayRepeats.indexOf(3)!= -1 && arrayRepeats.indexOf(2) == -1){return 'Тройка';}
	if (arrayRepeats.indexOf(2) != -1 && arrayRepeats.length == 4){return 'Пара';}
	if (arrayRepeats.indexOf(2) != -1 && arrayRepeats.length == 3){return 'Две пары';}
	if (arrayRepeats.length==5){return 'Наивысшее очко';}
	
    
}

module.exports = getPokerHand;
