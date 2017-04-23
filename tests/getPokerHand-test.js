const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('GetPokerHand', () =>
{
    describe('GoodData', () =>
    {
        describe('Poker', () =>
        {
            it('Should return `Покер` for [1, 1, 1, 1, 1]', () =>
            {
                const actual = getPokerHand([1, 1, 1, 1, 1]);
                assert.equal(actual, 'Покер');
            });

            it('Should return `Покер` for [3, 3, 3, 3, 3]', () =>
            {
                const actual = getPokerHand([3, 3, 3, 3, 3]);
                assert.equal(actual, 'Покер');
            });

            it('Should return `Покер` for [6, 6, 6, 6, 6]', () =>
            {
                const actual = getPokerHand([6, 6, 6, 6, 6]);
                assert.equal(actual, 'Покер');
            });
        });

        describe('FourOfKind', () =>
        {
            it('Should return `Каре` for [3, 3, 3, 3, 4]', () =>
            {
                const actual = getPokerHand([3, 3, 3, 3, 4]);
                assert.equal(actual, 'Каре');
            });

            it('Should return `Каре` for [5, 5, 2, 5, 5]', () =>
            {
                const actual = getPokerHand([5, 5, 2, 5, 5]);
                assert.equal(actual, 'Каре');
            });

            it('Should return `Каре` for [2, 2, 2, 2, 5]', () =>
            {
                const actual = getPokerHand([2, 2, 2, 2, 5]);
                assert.equal(actual, 'Каре');
            });
        });

        describe('FullHouse', () =>
        {
            it('Should return `Фулл хаус` for [5, 5, 5, 6, 6]', () =>
            {
                const actual = getPokerHand([5, 5, 5, 6, 6]);
                assert.equal(actual, 'Фулл хаус');
            });

            it('Should return `Фулл хаус` for [2, 3, 2, 3, 2]', () =>
            {
                const actual = getPokerHand([2, 3, 2, 3, 2]);
                assert.equal(actual, 'Фулл хаус');
            });

            it('Should return `Фулл хаус` for [1, 1, 4, 4, 4]', () =>
            {
                const actual = getPokerHand([1, 1, 4, 4, 4]);
                assert.equal(actual, 'Фулл хаус');
            });

            it('Should return `Фулл хаус` for [3, 1, 1, 1, 3]', () =>
            {
                const actual = getPokerHand([3, 1, 1, 1, 3]);
                assert.equal(actual, 'Фулл хаус');
            });
        });

        describe('ThreeOfKind', () =>
        {
            it('Should return `Тройка` for [2, 2, 2, 6, 1]', () =>
            {
                const actual = getPokerHand([2, 2, 2, 6, 1]);
                assert.equal(actual, 'Тройка');
            });

            it('Should return `Тройка` for [5, 1, 1, 1, 3]', () =>
            {
                const actual = getPokerHand([5, 1, 1, 1, 3]);
                assert.equal(actual, 'Тройка');
            });

            it('Should return `Тройка` for [3, 4, 2, 2, 2]', () =>
            {
                const actual = getPokerHand([3, 4, 2, 2, 2]);
                assert.equal(actual, 'Тройка');
            });

            it('Should return `Тройка` for [4, 1, 4, 5, 4]', () =>
            {
                const actual = getPokerHand([4, 1, 4, 5, 4]);
                assert.equal(actual, 'Тройка');
            });
        });

        describe('TwoPair', () =>
        {
            it('Should return `Две пары` for [2, 2, 3, 3, 1]', () =>
            {
                const actual = getPokerHand([2, 2, 3, 3, 1]);
                assert.equal(actual, 'Две пары');
            });

            it('Should return `Две пары` for [4, 5, 4, 5, 1]', () =>
            {
                const actual = getPokerHand([4, 5, 4, 5, 1]);
                assert.equal(actual, 'Две пары');
            });

            it('Should return `Две пары` for [1, 6, 5, 6, 1]', () =>
            {
                const actual = getPokerHand([1, 6, 5, 6, 1]);
                assert.equal(actual, 'Две пары');
            });

            it('Should return `Две пары` for [3, 2, 2, 4, 4]', () =>
            {
                const actual = getPokerHand([3, 2, 2, 4, 4]);
                assert.equal(actual, 'Две пары');
            });
        });

        describe('OnePair', () =>
        {
            it('Should return `Пара` for [2, 2, 3, 6, 1]', () =>
            {
                const actual = getPokerHand([2, 2, 3, 6, 1]);
                assert.equal(actual, 'Пара');
            });

            it('Should return `Пара` for [1, 3, 4, 5, 1]', () =>
            {
                const actual = getPokerHand([1, 3, 4, 5, 1]);
                assert.equal(actual, 'Пара');
            });

            it('Should return `Пара` for [3, 6, 4, 5, 5]', () =>
            {
                const actual = getPokerHand([3, 6, 4, 5, 5]);
                assert.equal(actual, 'Пара');
            });

            it('Should return `Пара` for [2, 4, 3, 4, 1]', () =>
            {
                const actual = getPokerHand([2, 4, 3, 4, 1]);
                assert.equal(actual, 'Пара');
            });

            it('Should return `Пара` for [4, 1, 3, 3, 6]', () =>
            {
                const actual = getPokerHand([4, 1, 3, 3, 6]);
                assert.equal(actual, 'Пара');
            });
        });

        describe('HighCard', () =>
        {
            it('Should return `Наивысшее очко` for [5, 1, 4, 6, 2]', () =>
            {
                const actual = getPokerHand([5, 1, 4, 6, 2]);
                assert.equal(actual, 'Наивысшее очко');
            });

            it('Should return `Наивысшее очко` for [6, 3, 2, 1, 4]', () =>
            {
                const actual = getPokerHand([6, 3, 2, 1, 4]);
                assert.equal(actual, 'Наивысшее очко');
            });

            it('Should return `Наивысшее очко` for [3, 4, 1, 2, 5]', () =>
            {
                const actual = getPokerHand([3, 4, 1, 2, 5]);
                assert.equal(actual, 'Наивысшее очко');
            });
        });
    });

    describe('BadData', () =>
    {
        describe('NotAnArrayData', () =>
        {
            it('Should throw error when data is not an array for "IAmArray"', () =>
            {
                const cb = () => getPokerHand("IAmArray");
                assert.throws(cb, /The argument must be an array!/);
            });

            it('Should throw error when data is not an array for true', () =>
            {
                const cb = () => getPokerHand(true);
                assert.throws(cb, /The argument must be an array!/);
            });

            it('Should throw error when data is not an array for undefined', () =>
            {
                const cb = () => getPokerHand(undefined);
                assert.throws(cb, /The argument must be an array!/);
            });

            it('Should throw error when data is not an array for null', () =>
            {
                const cb = () => getPokerHand(null);
                assert.throws(cb, /The argument must be an array!/);
            });
        });

        describe('Not5ElementsInData', () =>
        {
            it('Should throw error when data length is not 5 for [0, 1, 2, 3, 4, 5]', () =>
            {
                const cb = () => getPokerHand([0, 1, 2, 3, 4, 5]);
                assert.throws(cb, /The array must contain 5 elements!/);
            });

            it('Should throw error when data length is not 5 for []', () =>
            {
                const cb = () => getPokerHand([]);
                assert.throws(cb, /The array must contain 5 elements!/);
            });

            it('Should throw error when data length is not 5 for [0, 1, 2]', () =>
            {
                const cb = () => getPokerHand([0, 1, 2]);
                assert.throws(cb, /The array must contain 5 elements!/);
            });
        });

        describe('NotAnIntegerData', () =>
        {
            it('Should throw error when data is not an integer for [1, 1, 2, -5.7, 4]', () =>
            {
                const cb = () => getPokerHand([1, 1, 2, -5.7, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for [3.5, 1, 2, 3, 4]', () =>
            {
                const cb = () => getPokerHand([3.5, 1, 2, 3, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for ["", 1, 2, 3, 4]', () =>
            {
                const cb = () => getPokerHand(["", 1, 2, 3, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for ["0", 1, 2, 3, 4]', () =>
            {
                const cb = () => getPokerHand(["0", 1, 2, 3, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for ["NAN", 1, 2, 3, 4]', () =>
            {
                const cb = () => getPokerHand(["NAN", 1, 2, 3, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for [1, 2, true, 3, 4]', () =>
            {
                const cb = () => getPokerHand([1, 2, true, 3, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for [1, 2, 3, 4, undefined]', () =>
            {
                const cb = () => getPokerHand([1, 2, 3, 4, undefined]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for [1, 2, 3, null, 4]', () =>
            {
                const cb = () => getPokerHand([1, 2, 3, null, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for [1, 2, 3, -Infinity, 4]', () =>
            {
                const cb = () => getPokerHand([1, 2, 3, -Infinity, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });

            it('Should throw error when data is not an integer for [1, 2, Infinity, 3, 4]', () =>
            {
                const cb = () => getPokerHand([1, 2, Infinity, 3, 4]);
                assert.throws(cb, /The result of the dice must be an integer!/);
            });
        });

        describe('LessThen1Data', () =>
        {
            it('Should throw error when data less then 1 for [0, 1, 2, 3, 4]', () =>
            {
                const cb = () => getPokerHand([0, 1, 2, 3, 4]);
                assert.throws(cb, /The result of the dice can`t be less than 1!/);
            });

            it('Should throw error when data less then 1 for [1, 2, -35, 3, 4]', () =>
            {
                const cb = () => getPokerHand([1, 2, -35, 3, 4]);
                assert.throws(cb, /The result of the dice can`t be less than 1!/);
            });
        });

        describe('MoreThen6Data', () =>
        {
            it('Should throw error when data more then 6 for [1, 2, 3, 4, 7]', () =>
            {
                const cb = () => getPokerHand([1, 2, 3, 4, 7]);
                assert.throws(cb, /The result of the dice can`t be more than 6!/);
            });

            it('Should throw error when data more then 6 for [1, 2, 231241, 4, 3]', () =>
            {
                const cb = () => getPokerHand([1, 2, 231241, 4, 3]);
                assert.throws(cb, /The result of the dice can`t be more than 6!/);
            });
        });
    });
});
