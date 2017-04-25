/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    // Напишите ваш замечательный код здесь
	if (!Array.isArray(dice))
	{
		return 'Не массив'
	}
	dice.sort();
	var count = dice.length;
	if (count == 0)
	{
		return 'Пустой массив';
	}
	if (count != 5)
	{
		return 'Должно быть 5 костей';
	}
	y = [];
	var j = 0;
	var i = 0;
	while ( i < count)
	{
		x = dice[i];
		if (isNaN(x))
		{
			return 'В массиве могут быть только числа'
		}
		var Elem = 0;
		while (x == dice[j])
		{
			Elem++;
			j++;
		}
		y[i] = Elem;
		i = j;
	}
	if (y[0] == 5)
	{
		return 'Покер';
	}
	if (y[0] == 4 || y[1] == 4)
	{
		return 'Каре';
	}
	if ((y[0] == 3 && y[3] == 2)
		||(y[0] == 2 && y[2] == 3))
	{
		return 'Фулл хаус';
	}
	if ((y[0] == 3 && y[3] == 1 && y[4] == 1) || (y[0] == 1 && y[1] == 3 && y[4] == 1) || (y[0] == 1 && y[1] == 1 && y[2] == 3))
	{
		return 'Тройка';
	}
	if ((y[0] == 2 && y[2] == 1 && y[3] == 1 && y[4] == 1)
		|| (y[0] == 1 && y[1] == 2 && y[3] == 1 && y[4] == 1)
		|| (y[0] == 1 && y[1] == 1 && y[2] == 2 && y[4] == 1)
		|| (y[0] == 1 && y[1] == 1 && y[2] == 1 && y[3] == 2))
	{
		return 'Пара'
	}
	if ((y[0] == 2 && y[2] == 2)
		|| (y[0] == 2 && y[3] == 2)
		|| (y[1] == 2 && y[3] == 2))
	{
		return 'Две пары'
	}
	if (y[0] == 1 && y[1] == 1 && y[2] == 1 && y[3] == 1)
	{
		return 'Наивысшее очко'
	}
	
}
module.exports = getPokerHand;
