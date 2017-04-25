const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });


    it ('should return `Покер` for [2, 2, 2, 2, 2]', () =>{
    	const actual = getPokerHand([2, 2, 2, 2, 2]);

    	assert.equal(actual, 'Покер');
    });

    it ('should return `Каре` for [9, 9, 3, 9, 9]', () =>{
    	const actual = getPokerHand([9, 9, 3, 9, 9]);

    	assert.equal(actual, 'Каре');
    });

    it ('should return `Фулл хаус` for [8, 7, 8, 8, 7]', () =>{
    	const actual = getPokerHand([8, 7, 8, 8, 7]);

    	assert.equal(actual, 'Фулл хаус');
    });
    //it ('should return `Фулл хаус` for [8, 7, 8, 7, 7]', () =>{
    //	const actual = getPokerHand([8, 7, 8, 7, 7]);

    //	assert.equal(actual, 'Фулл хаус');
    //});

    it ('should return `Тройка` for [3, 1, 2, 1, 1]', () =>{
    	const actual = getPokerHand([3, 1, 2, 1, 1]);

    	assert.equal(actual, 'Тройка');
    });

	it ('should return `Две пары` for [4, 4, 1, 6, 1]', () =>{
    	const actual = getPokerHand([4, 4, 1, 6, 1]);

    	assert.equal(actual, 'Две пары');
    });

	it ('should return `Пара` for [8, 9, 7, 5, 5]', () =>{
    	const actual = getPokerHand([8, 9, 7, 5, 5]);

    	assert.equal(actual, 'Пара');
    });

	it ('should return `Наивысшее очко` for [3, 4, 5, 6, 7]', () =>{
    	const actual = getPokerHand([3, 4, 5, 6, 7]);

    	assert.equal(actual, 'Наивысшее очко');
    });

    // Напишите тесты на ваш замечательный код здесь
});
