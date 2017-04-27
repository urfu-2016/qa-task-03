/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */ 
function getPokerHand(dice) {
	if( arguments.length!==1){
		throw new Error('Введено более одного аргумета или функции не передан аргумент');
		}
  
    if(!Array.isArray(dice)){
		throw new Error('Введенный аргумент не является массивом');
		}
	if(dice.length!==5){
		throw new Error('Введено не 5 чисел');
	}
	
	dice.sort();
	
	var numberRepeats = 1;
	var arrayRepeats = new Array();
	
	for ( i=0; i<5; i++){
		if(isNaN(dice[i])|| typeof dice[i] =="boolean"|| dice[i]==null){
			throw new Error('Введено не число');
			}
		
		if(!Number.isInteger(dice[i])|| dice[i]<1 || dice[i]>6){
			throw new Error(dice[i]+' нет на ребре кубика');
			}
		if( i!==4 && dice[i]==dice[i+1]){
			numberRepeats++;
			}
		else {
			arrayRepeats.push(numberRepeats); numberRepeats=1;
			}
	}
    switch(arrayRepeats.length){
	case 1: return 'Покер'; break;
	case 2: 
	    if(arrayRepeats.indexOf(4)!== -1) 
			return 'Каре';
        else		
		    return 'Фулл хаус';
		break;
	case 3: 
	    if(arrayRepeats.indexOf(2)!== -1) 
			return 'Две пары';
        else		
		    return 'Тройка';
		break;
	case 4: return 'Пара'; break;
	case 5: return 'Наивысшее очко'; break;	
	}
	
	
	
    
}

module.exports = getPokerHand;
