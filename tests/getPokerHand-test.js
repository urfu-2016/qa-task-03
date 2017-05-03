const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    describe('Позитивные тесты', () => {
        describe('Покер', () => {
            it('вернуть `Покер` для [1, 1, 1, 1, 1]', () =>
            {
                const actual = getPokerHand([1, 1, 1, 1, 1]);
                assert.equal(actual, 'Покер');
            });
        });

        describe('Каре', () => {
            it('вернуть `Каре` для [2, 2, 2, 3, 2]', () =>{
                const actual = getPokerHand([2, 2, 2, 3, 2]);
                assert.equal(actual, 'Каре');
            });
        });

        describe('Фулл хаус', () => {
            it('вернуть `Фулл хаус` для [5, 1, 5, 5, 1]', () =>{
                const actual = getPokerHand([5, 1, 5, 5, 1]);
                assert.equal(actual, 'Фулл хаус');
            });
        });

        describe('Тройка', () => {
            it ('вернуть `Тройка` для [2, 2, 4, 6, 2]', () => {
                const actual = getPokerHand([2, 2, 4, 6, 2]);
                assert.equal(actual, 'Тройка');
            });
        });

        describe('Две пары', () => {
            it('вернуть `Две пары` для [1, 1, 2, 3, 3]', () =>{
                const actual = getPokerHand([1, 1, 2, 3, 3]);
                assert.equal(actual, 'Две пары');
            });
         });

        describe('Пара', () => {
            it('вернуть `Пара` для [4, 3, 2, 1, 4]', () => {
                const actual = getPokerHand([4, 3, 2, 1, 4]);
                assert.equal(actual, 'Пара');
            });
        });

        describe('Наивысшее очко', () => {
            it('вернуть `Наивысшее очко` для [1, 2, 3, 4, 5]', () => {
                const actual = getPokerHand([1, 2, 3, 4, 5]);
                assert.equal(actual, 'Наивысшее очко');
            });
        });
    });
	
    describe('Негативные тесты', () => {
        describe('Не массив', () => {
            it("Исключение 'Ожидается массив' для '12345'", () => {
                const cb = () => getPokerHand('12345');
                assert.throws(cb, /Ожидается массив/);
            });
            });

		
        describe('Не 1 аргумент', () => {
            it("Исключение 'Ожидается 1 аргумент' при отсутствии аргументов", () => {
                const cb = () => getPokerHand();
                assert.throws(cb, /Ожидается 1 аргумент/);
            });
            });
        });

        describe('Не 5 элементов в массиве', () => {
            it('Исключение "Число элементов в массиве должно быть равно 5" для [3]', () => {
                const cb = () => getPokerHand([3]);
                assert.throws(cb, /Число элементов в массиве должно быть равно 5/);
            });
        });

        describe('Не целое число', () => {
            it("Исключение 'Значения должны быть целыми числами' для [3.5, 1, 2, 3, 4]", () => {
                const cb = () => getPokerHand([3.5, 1, 2, 3, 4]);
                assert.throws(cb, /ожидаются целые числа/);
            }); 
        });

        describe('Числа, выходящие из диапозона 1-6', () => {
            it('Исключение "ожидаются числа в диапазоне от 1 до 6" для [0, 1, 2, 3, 4]', () => {
                const cb = () => getPokerHand([0, 1, 2, 3, 4]);
                assert.throws(cb, /ожидаются числа в диапазоне от 1 до 6/);
            });
        });
    });
