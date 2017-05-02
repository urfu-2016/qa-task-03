const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });
	it('should return `Каре` for [1, 1, 1, 5, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 5, 1]);

        assert.equal(actual, 'Каре');
    });
	it('should return `Фулл хаус` for [1, 5, 1, 5, 1]', () => {
        const actual = getPokerHand([1, 5, 1, 5, 1]);

        assert.equal(actual, 'Фулл хаус');
    });
	it('should return `Тройка` for [1, 5, 1, 6, 1]', () => {
        const actual = getPokerHand([1, 5, 1, 6, 1]);

        assert.equal(actual, 'Тройка');
    });
	it('should return `Пара` for [1, 5, 3, 6, 1]', () => {
        const actual = getPokerHand([1, 5, 3, 6, 1]);

        assert.equal(actual, 'Пара');
    });
	it('should return `Две пары` for [1, 5, 3, 5, 1]', () => {
        const actual = getPokerHand([1, 5, 3, 5, 1]);

        assert.equal(actual, 'Две пары');
    });
	it('should return `Наивысшее очко` for [1, 5, 3, 2, 4]', () => {
        const actual = getPokerHand([1, 5, 3, 2, 4]);

        assert.equal(actual, 'Наивысшее очко');
    });

	
	it('should throw error when entered is not in the range from 1 to 6', () => {
    try {
        getPokerHand([1, 5, 3, 7, 4]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, '7 нет на ребре кубика');
    }
});
	
	it('should throw error when entered is not in the range from 1 to 6', () => {
    try {
        getPokerHand([1, 5.6 , 3, 7, 4]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено не число или число не является целым');
    }
});
	
	it('should throw error when entered is not in the range from 1 to 6', () => {
    try {
        getPokerHand([1, 0 , 3, 7, 4]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, '0 нет на ребре кубика');
    }
});


it('should throw error when not entered 5 numbers', () => {
    try {
        getPokerHand([1, 4 , 3, 6, 4, 1]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено не 5 чисел');
    }
});

it('should throw error when not entered 5 numbers', () => {
    try {
        getPokerHand([1, 4 , 3, 6]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено не 5 чисел');
    }
});
	
it('should throw error when count is not a number or is not an integer', () => {
    try {
        getPokerHand([1, 4, 3, 5,true ]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено не число или число не является целым');
    }
});	
it('should throw error when count is not a number or is not an integer', () => {
    try {
        getPokerHand([1, 4, 3, 5, 'hdhd' ]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено не число или число не является целым');
    }
});
it('should throw error when count is not a number or is not an integer', () => {
    try {
        getPokerHand([1, 4, null, 5, 6 ]);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено не число или число не является целым');
    }
});		
	
it('should throw error when count is not a array', () => {
    try {
        getPokerHand('34');
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введенный аргумент не является массивом');
    }
});		
	
it('should throw error when count more than one argument or not given an argument', () => {
    try {
        getPokerHand('34', 6);
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено более одного аргумета или функции не передан аргумент');
    }
});		
it('should throw error when count more than one argumentor not given an argument', () => {
    try {
        getPokerHand();
        throw new Error('`getPokerHand` should throw error')
    } catch (error) {
        assert.equal(error.message, 'Введено более одного аргумета или функции не передан аргумент');
    }
});		
    // Напишите тесты на ваш замечательный код здесь
});
