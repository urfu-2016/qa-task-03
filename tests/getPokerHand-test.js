const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    })
});


describe('getPokerHand', () => {
    it('should return `Каре` for [4, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([4, 1, 1, 1, 1]);

        assert.equal(actual, 'Каре');
    })
});

describe('getPokerHand', () => {
    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    })
});

describe('getPokerHand', () => {
    it('should return `Тройка` for [1, 1, 1, 5, 6]', () => {
        const actual = getPokerHand([1, 1, 1, 5, 6]);

        assert.equal(actual, 'Тройка');
    })
});

describe('getPokerHand', () => {
    it('should return `Две пары` for [1, 1, 2, 3, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 3]);

        assert.equal(actual, 'Две пары');
    })
});

describe('getPokerHand', () => {
    it('should return `Пара` for [1, 1, 4, 5, 6]', () => {
        const actual = getPokerHand([1, 1, 4, 5, 6]);

        assert.equal(actual, 'Пара');
    })
});

describe('getPokerHand', () => {
    it('should return `Наивысшее очко` for [5, 4, 3, 2, 1]', () => {
        const actual = getPokerHand([5, 4, 3, 2, 1]);

        assert.equal(actual, 'Наивысшее очко');
    })
});

describe('getPokerHand', () => {
    it('should throw error `Не массив` for 5', () => {
	try{
		const actual = getPokerHand(5);
		throw new Error('`getPokerHand` should throw error');
		} catch (error) {
			assert.equal(error.message, 'Не массив');
		}
    })
});

describe('getPokerHand', () => {
    it('should throw error `Элементов меньше 5-ти` for [1, 1, 4, 5]', () => {
        try {
		const actual = getPokerHand([1, 1, 4, 5]);
	 	throw new Error('`getPokerHand` should throw error');
	 	} catch (error) {
        		assert.equal(error.message, 'Элементов меньше 5-ти');
	}
    })
});

describe('getPokerHand', () => {
    it('should throw error `Элементов больше 5-ти` for [5, 2, 3, 5, 1, 1, 5]', () => {
	try{
        	const actual = getPokerHand([5, 2, 3, 5, 1, 1, 5]);
		throw new Error('`getPokerHand` should throw error');
		} catch (error) {
        		assert.equal(error.message, 'Элементов больше 5-ти');
		}
    })
});

describe('getPokerHand', () => {
    it('should throw error `Не массив` for ', () => {
	try{
		const actual = getPokerHand();
		throw new Error('`getPokerHand` should throw error');
		} catch (error) {
			assert.equal(error.message, 'Не массив');
		}
    })
});

describe('getPokerHand', () => {
    it('should throw error `Массив содержит элемент, не являющийся числом` for ["a", "b", "c", "d", "e"]', () => {
	try{
		const actual = getPokerHand(["a", "b", "c", "d", "e"]);
		throw new Error('`getPokerHand` should throw error');
	} catch (error) {
        	assert.equal(error.message, 'Массив содержит элемент, не являющийся числом');
	}
    })
});

describe('getPokerHand', () => {
    it('should throw error `Массив содержит элемент, больший 6` for [1, 2, 3, 4, 7]', () => {
	try{
        	const actual = getPokerHand([1, 2, 3, 4, 7]);
		throw new Error('`getPokerHand` should throw error');
	} catch (error) {
        assert.equal(error.message, 'Массив содержит элемент, больший 6');
	}
    })
});

describe('getPokerHand', () => {
    it('should throw error `Массив содержит элемент, меньший 1` for [0, 2, 3, 4, 2]', () => {
	try{
	        const actual = getPokerHand([0, 2, 3, 4, 2]);
		throw new Error('`getPokerHand` should throw error');
	} catch (error) {
        assert.equal(error.message, 'Массив содержит элемент, меньший 1');
	}
    })
});
