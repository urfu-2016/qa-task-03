const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {

    describe('Positive test', () => {
        it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 1, 1]);

            assert.equal(actual, 'Покер');
        });

        it('should return `Каре` for [1, 1, 1, 2, 1]', () => {
            const actual = getPokerHand([1, 1, 1, 2, 1]);

            assert.equal(actual, 'Каре');
        });

        it('should return `Фулл хаус` for [6, 1, 6, 1, 1]', () => {
            const actual = getPokerHand([6, 1, 6, 1, 1]);

            assert.equal(actual, 'Фулл хаус');
        });

        it('should return `Тройка` for [4, 4, 1, 4, 2]', () => {
            const actual = getPokerHand([4, 4, 1, 4, 2]);

            assert.equal(actual, 'Тройка');
        });

        it('should return `Две пары` for [3, 4, 1, 4, 3]', () => {
            const actual = getPokerHand([3, 4, 1, 4, 3]);

            assert.equal(actual, 'Две пары');
        });

        it('should return `Пара` for [3, 4, 1, 5, 3]', () => {
            const actual = getPokerHand([3, 4, 1, 5, 3]);

            assert.equal(actual, 'Пара');
        });

        it('should return `Наивысшее очко` for [3, 4, 1, 5, 2]', () => {
            const actual = getPokerHand([3, 4, 1, 5, 2]);

            assert.equal(actual, 'Наивысшее очко');
        });
    });


    describe('Negative test', () => {
        it('should throw Error if less than one argument', () => {
            const cb = () => getPokerHand();
            assert.throws(cb, /Функция getPokerHand принимает ровно один элемент/);
        });

        it('should throw Error if more than one argument', () => {
            const cb = () => getPokerHand([3, 4, 1, 4, 3], [3, 4, 1, 4, 3]);
            assert.throws(cb, /Функция getPokerHand принимает ровно один элемент/);
        });

        it('should throw Error if argument not array', () => {
            const cb = () => getPokerHand("3, 4, 1, 4, 3");
            assert.throws(cb, /Аргумент getPokerHand должен быть массивом/);
        });

        it('should throw Error if argument array contain less than 5 elements', () => {
            const cb = () => getPokerHand([3, 4, 1, 4]);
            assert.throws(cb, /Аргумент getPokerHand должен быть массивом ровно из пяти элементов/);
        });

        it('should throw Error if argument array contain more than 5 elements', () => {
            const cb = () => getPokerHand([3, 4, 1, 4, 3, 3]);
            assert.throws(cb, /Аргумент getPokerHand должен быть массивом ровно из пяти элементов/);
        });


        it('should throw Error if argument array contain not integer value', () => {
            const cb = () => getPokerHand([3, 4, '1', 4, 3]);
            assert.throws(cb, /Элементы массива должны быть целыми числами/);
        });

        it('should throw Error if argument array contain element more 6', () => {
            const cb = () => getPokerHand([3, 4, 1, 7, 3]);
            assert.throws(cb, /Элементы массива должны содержать числа от 1 до 6/);
        });

        it('should throw Error if argument array contain element less 1', () => {
            const cb = () => getPokerHand([3, 4, 0, 6, 3]);
            assert.throws(cb, /Элементы массива должны содержать числа от 1 до 6/);
        });

    });
});
