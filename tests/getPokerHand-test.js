const assert = require('assert');
const getPokerHand = require('../getPokerHand');
/*
 *[1,1,1,1,1] - Покер
 *[1,1,1,1,2] - Каре
 *[1,1,1,2,2] - Фул хаус
 *[1,1,1,2,3] - Тройка
 *[1,1,2,2,3] - Две пары
 *[1,1,2,3,4] - Пара
 *[1,2,3,4,5] - Наивысшее очко
 */
describe('getPokerHand', () => {

	// Сперва тестируем основные позитивные сценарии 
	// Проверяем, что выдает правильные названия комбинаций на "правильных данных"

    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });
    
    it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
    const actual = getPokerHand([1, 1, 1, 1, 2]);

    assert.equal(actual, 'Каре');
	});

    it('should return `Фул хаус` for [1, 1, 1, 2, 2]', () => {
    const actual = getPokerHand([1, 1, 1, 2, 2]);

    assert.equal(actual, 'Фул хаус');
	});

    it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
    const actual = getPokerHand([1, 1, 1, 2, 3]);

    assert.equal(actual, 'Тройка');
	});

    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
    const actual = getPokerHand([1, 1, 2, 2, 3]);

    assert.equal(actual, 'Две пары');
	});

    it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
    const actual = getPokerHand([1, 1, 2, 3, 4]);

    assert.equal(actual, 'Пара');
	});

    it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
    const actual = getPokerHand([1, 2, 3, 4, 5]);

    assert.equal(actual, 'Наивысшее очко');
	});

    // Негативные сценарии, пытаемся "сломать"

    // Проверяем, что тип аргумента не String и т.п.

    it('should throw `Необходимо подавать массив` for 'string'', () => {
    assert.throws(() => getPokerHand('string'), 'Необходимо подавать массив');

    });

    // Проверяем, что тип аргумента не "философский", т.е. не null или undefined

    it('should throw `Необходимо подавать массив` for null', () => {
    assert.throws(() => getPokerHand(null), 'Необходимо подавать массив');

    });

    it('should throw `Необходимо подавать массив` for undefined', () => {
	assert.throws(() => getPokerHand(undefined), 'Необходимо подавать массив');

    });

    // Далее проверка, что массив правильной длины и не пустой

    it('should throw `Массив должен состоять из 5 элементов` for [1,2]', () => {
    assert.throws(() => getPokerHand([1,2]), 'Массив должен состоять из 5 элементов');

    }); 

    it('should throw `Массив должен состоять из 5 элементов, нельзя пустой` for []', () => {
    assert.throws(() => getPokerHand([]), 'Массив должен состоять из 5 элементов');

    });

    // Теперь проверки на элементы массива (>6,  <1(+ и -))

    it('should throw `Элементы должны быть целые числа от 1 до 6` for [1, 1, 1, 1, 11]', () => {
    assert.throws(() => getPokerHand([1, 1, 1, 1, 11]), 'Элементы должны быть целые числа от 1 до 6');

    });

    it('should throw `Элементы должны быть целые числа от 1 до 6` for [1, 1, 1, 1, -1]', () => {
    assert.throws(() => getPokerHand([1, 1, 1, 1, 0]), 'Элементы должны быть целые числа от 1 до 6');

    });

    it('should throw `Элементы должны быть целые числа от 1 до 6` for [1, 1, 1, 1, -1]', () => {
    assert.throws(() => getPokerHand([1, 1, 1, 1, -11]), 'Элементы должны быть целые числа от 1 до 6');

    });

    // Массив не из чисел

    it('should throw `Элементы должны быть целые числа от 1 до 6` for ['a', 'b', 'c', 'd', 'e']', () => {
    assert.throws(() => getPokerHand(['a', 'b', 'c', 'd', 'e']), 'Элементы должны быть целые числа от 1 до 6');

    });

    // Массив из НеЧисел

    it('should throw `Элементы должны быть целые числа от 1 до 6` for [NaN, NaN, NaN, NaN, NaN]', () => {
    assert.throws(() => getPokerHand([NaN, NaN, NaN, NaN, NaN]), 'Элементы должны быть целые числа от 1 до 6');

    });

    // Массив из "философских" элементов, т.е. null или undefined

    it('should throw `Элементы должны быть целые числа от 1 до 6` for [undefined, undefined, undefined, undefined, undefined]', () => {
    assert.throws(() => getPokerHand([undefined, undefined, undefined, undefined, undefined]), 'Элементы должны быть целые числа от 1 до 6');

    });

    it('should throw `Элементы должны быть целые числа от 1 до 6` for [null, null, null, null, null]', () => {
    assert.throws(() => getPokerHand([null, null, null, null, null]), 'Элементы должны быть целые числа от 1 до 6');

    });

    // Напишите тесты на ваш замечательный код здесь
});
