function getPokerHand(dice) {
	if (arguments.length != 1 )
	{
		return 'Должен быть ровно 1 аргумент'
	}
	if (!Array.isArray(dice))
	{
		return 'На вход поступил не массив'
	}
	dice.sort();
	var count = dice.length;
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
		if ((x > 6 || x < 1) || !Number.isInteger(x))
		{
			return ('В массиве могут быть только целые числа от 1 до 6');
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
	y.sort();
	if (y[0] == 5)
	{
		return 'Покер';
	}
	if (y[1] == 4)
	{
		return 'Каре';
	}
	if (y[1] == 3)
	{
		return 'Фулл хаус';
	}
	if (y[2] == 3)
	{
		return 'Тройка';
	}
	if (y[3] == 2)
	{
		return 'Пара'
	}
	if (y[1] == 2)
	{
		return 'Две пары'
	}
	
	return 'Наивысшее очко'
	
}
module.exports = getPokerHand;
