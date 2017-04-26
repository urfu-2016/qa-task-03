const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

});

describe('good situation', () => {
        describe('Покер', () => {
            it('should return `Покер` for [1, 1, 1, 1, 1]', () =>
            {
                const actual = getPokerHand([1, 1, 1, 1, 1]);
                assert.equal(actual, 'Покер');
            });
        });
 
 
        describe('Каре', () => {
            it('should return `Каре` for [1, 1, 1, 1, 5]', () =>
            {
                const actual = getPokerHand([1, 1, 1, 1, 5]);
                assert.equal(actual, 'Каре');
            });
        });

        describe('Фулл хаус', () => {
            it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () =>
            {
                const actual = getPokerHand([1, 1, 1, 2, 2]);
                assert.equal(actual, 'Фулл хаус');
            });
        });

        describe('Тройка', () => {
            it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
                const actual = getPokerHand([1, 1, 1, 2, 3]);
                assert.equal(actual, 'Тройка');
            });
        });

        describe('Две пары', () => {
            it('should return `Две пары` for [1, 1, 2, 2, 3]', () =>{
                const actual = getPokerHand([1, 1, 2, 2, 3]);
                assert.equal(actual, 'Две пары');
            });
        });

        describe('Пара', () => {
            it('should return `Пара` for [1, 6, 2, 6, 3]', () => {
                const actual = getPokerHand([1, 6, 2, 6, 3]);
                assert.equal(actual, 'Пара');
            });
        });

        describe('Наивысшее очко', () => {
            it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
                const actual = getPokerHand([1, 2, 3, 4, 5]);
                assert.equal(actual, 'Наивысшее очко');
            });
        });
    });
    
	describe('Bad situtiation', () => {
        describe('Not array', () => {
	it("Should throw error when there are no args", () => {
                const cb = () => getPokerHand();
                assert.throws(cb, 'Должен быть массив');
            });
			it("Should throw error when arg isn`t an array for 777", () => {
                const cb = () => getPokerHand(777);
                assert.throws(cb, 'Должен быть массив');
            });
            it("Should throw error when arg isn`t an array for 'string'", () => {
                const cb = () => getPokerHand('string');
                assert.throws(cb, 'Должен быть массив');
            });
            it("Should throw error when arg isn`t an array for NaN", () => {
                const cb = () => getPokerHand('NaN');
                assert.throws(cb, 'Должен быть массив');
            });
        });

        describe('Not five items', () => {
            it('Should throw error when the args are not 5 for [1]', () => {
                const cb = () => getPokerHand([1]);
                assert.throws(cb, 'Должно быть 5 значений');
            });
            it('Should throw error when the args are not 5 for [1, 2, 3, 4]', () => {
                const cb = () => getPokerHand([1, 2, 3, 4]);
                assert.throws(cb, 'Должно быть 5 значений');
            });
            it('Should throw error when the args are not 5 for [1, 2, 3, 4, 5, 6]', () => {
                const cb = () => getPokerHand([1, 2, 3, 4, 5, 6]);
                assert.throws(cb, 'Должно быть 5 значений');
            });
        });
 

        describe('Not an integer', () => {
			it("Should throw error when the args are not int for [1.9, 1, 2, 3, 4]", () => {
                const cb = () => getPokerHand([1.9, 1, 2, 3, 4]);
				assert.throws(cb, 'Значения должны быть целыми числами');
            });
            it("Should throw error when the args are not int for ['', 1, 2, 3, 4]", () => {
                const cb = () => getPokerHand(['', 1, 2, 3, 4]);
                assert.throws(cb, 'Значения должны быть целыми числами');
            });
            it("Should throw error when the args are not int for [1, 2, NaN, 4, 5]", () => {
                const cb = () => getPokerHand([1, 2, NaN, 4, 5]);
                assert.throws(cb, 'Значения должны быть целыми числами');
            });
            it("Should throw error when the args are not int for [1, 2, true, 4, 5]", () => {
                const cb = () => getPokerHand([1, 2, false, 4, 5]);
                assert.throws(cb, 'Значения должны быть целыми числами');
            });
            it("Should throw error when the args are not int for [1, 2, null, 4, 5]", () => {
                const cb = () => getPokerHand([1, 2, null, 4, 5]);
                assert.throws(cb, 'Значения должны быть целыми числами');
            });
        });

        describe('Out of range 1..6', () => {
            it('Should throw error when data not in the range 1..6 for [7, 1, 2, 3, 4]', () => {
                const cb = () => getPokerHand([7, 1, 2, 3, 4]);
                assert.throws(cb, 'Значения должны быть от 1 до 6');
            });
            it('Should throw error when data not in the range 1..6 for [1, 2, 3, 4, 0]', () => {
                const cb = () => getPokerHand([1, 2, 3, 4, 0]);
                assert.throws(cb, 'Значения должны быть от 1 до 6');
            });
            it('Should throw error when data not in the range 1..6 for [0, 1, -Infinity, 3, 4]', () => {
                const cb = () => getPokerHand([1, 1, -Infinity, 3, 4]);
                assert.throws(cb, 'Значения должны быть от 1 до 6');
            });
            it('Should throw error when data not in the range 1..6 for [0, 1, +Infinity, 3, 4]', () => {
                const cb = () => getPokerHand([1, 1, +Infinity, 3, 3]);
                assert.throws(cb, 'Значения должны быть от 1 до 6');
            });
            it('Should throw error when data not in the range 1..6 for [0, 1, -42, 3, 4]', () => {
                const cb = () => getPokerHand([1, 1, -25, 3, 4]);
                assert.throws(cb, 'Значения должны быть от 1 до 6');
            });
            it('Should throw error when data not in the range 1..6 for [0, 1, +42, 3, 4]', () => {
                const cb = () => getPokerHand([1, 1, +25, 3, 3]);
                assert.throws(cb, 'Значения должны быть от 1 до 6');
            });

        });
    });