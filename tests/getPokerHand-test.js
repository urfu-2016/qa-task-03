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

    it ('should return `Каре` for [6, 6, 3, 6, 6]', () =>{
    	const actual = getPokerHand([6, 6, 3, 6, 6]);

    	assert.equal(actual, 'Каре');
    });

    it ('should return `Фулл хаус` for [5, 1, 5, 5, 1]', () =>{
    	const actual = getPokerHand([5, 1, 5, 5, 1]);

    	assert.equal(actual, 'Фулл хаус');
    });
    it ('should return `Фулл хаус` for [2, 4, 2, 4, 4]', () =>{
    	const actual = getPokerHand([2, 4, 2, 4, 4]);

    	assert.equal(actual, 'Фулл хаус');
    });

    it ('should return `Тройка` for [3, 1, 2, 1, 1]', () =>{
    	const actual = getPokerHand([3, 1, 2, 1, 1]);

    	assert.equal(actual, 'Тройка');
    });

	it ('should return `Две пары` for [4, 4, 1, 6, 1]', () =>{
    	const actual = getPokerHand([4, 4, 1, 6, 1]);

    	assert.equal(actual, 'Две пары');
    });

	it ('should return `Пара` for [6, 1, 2, 5, 5]', () =>{
    	const actual = getPokerHand([6, 1, 2, 5, 5]);

    	assert.equal(actual, 'Пара');
    });

	it ('should return `Наивысшее очко` for [3, 4, 5, 6, 2]', () =>{
    	const actual = getPokerHand([3, 4, 5, 6, 2]);

    	assert.equal(actual, 'Наивысшее очко');
    });

    it ('should throw error when arguments number is 0', () =>{
    	const actual = () => getPokerHand();

    	assert.throws(actual, /Функция принимает только 1 аргумент/);
    });

    it ('should throw error when arguments number is bigger than 1', () =>{
    	const actual = () => getPokerHand(1, 2, 3);

    	assert.throws(actual, /Функция принимает только 1 аргумент/);
    });

    it ('should throw error when argument is not an array', () =>{
    	const actual = () => getPokerHand(1);

    	assert.throws(actual, /Аргумент должен быть массивом/);
    });

	it ('should throw error when array length is smaller than 5', () =>{
    	const actual = () => getPokerHand([1, 2, 3, 4]);

    	assert.throws(actual, /Размер массива должен равняться 5/);
    });

    it ('should throw error when array length is bigger than 5', () =>{
    	const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]);

    	assert.throws(actual, /Размер массива должен равняться 5/);
    });

    it ('should throw error when array elements are not integers', () =>{
    	const actual = () => getPokerHand([1, 2.6, 3, 4, 5]);

    	assert.throws(actual, /Элементы массива должны быть целыми/);
    });

    it ('should throw error when array elements are not from {1, 2, 3, 4, 5, 6} set (smaller)', () =>{
    	const actual = () => getPokerHand([0, 3, 5, 4, 6]);

    	assert.throws(actual, /Элементы массива должны принадлежать множеству {1, 2, 3, 4, 5, 6}/);
    });

	it ('should throw error when array elements are not from {1, 2, 3, 4, 5, 6} set (bigger)', () =>{
    	const actual = () => getPokerHand([6, 3, 5, 9, 2]);

    	assert.throws(actual, /Элементы массива должны принадлежать множеству {1, 2, 3, 4, 5, 6}/);
    });

});
