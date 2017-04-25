const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('Get poker hand', () =>
{
    describe('Valid data', () =>
    {
        it('Should return `Покер` for [3, 3, 3, 3, 3]', () =>
        {
            const actual = getPokerHand([3, 3, 3, 3, 3]);
            assert.equal(actual, 'Покер');
        });

        it('Should return `Каре` for [5, 5, 2, 5, 5]', () =>
        {
            const actual = getPokerHand([5, 5, 2, 5, 5]);
            assert.equal(actual, 'Каре');
        });

        it('Should return `Фулл хаус` for [2, 3, 2, 3, 2]', () =>
        {
            const actual = getPokerHand([2, 3, 2, 3, 2]);
            assert.equal(actual, 'Фулл хаус');
        });

        it('Should return `Тройка` for [3, 4, 2, 2, 2]', () =>
        {
            const actual = getPokerHand([3, 4, 2, 2, 2]);
            assert.equal(actual, 'Тройка');
        });

        it('Should return `Две пары` for [4, 5, 4, 5, 1]', () =>
        {
            const actual = getPokerHand([4, 5, 4, 5, 1]);
            assert.equal(actual, 'Две пары');
        });

        it('Should return `Пара` for [4, 1, 3, 3, 6]', () =>
        {
            const actual = getPokerHand([4, 1, 3, 3, 6]);
            assert.equal(actual, 'Пара');
        });

        it('Should return `Наивысшее очко` for [5, 1, 4, 6, 2]', () =>
        {
            const actual = getPokerHand([5, 1, 4, 6, 2]);
            assert.equal(actual, 'Наивысшее очко');
        });
    });

    describe('Invalid data', () =>
    {
        describe('Not an array data', () =>
        {
            it('Should throw error when data is not an array for "IAmArray"', () =>
            {
                const cb = () => getPokerHand("IAmArray");
                assert.throws(cb, /The argument must be an array!/);
            });
        });

        describe('Not 5 elements in data', () =>
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
        });

        describe('Not an integer data', () =>
        {
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
        });

        describe('Less then 1 data', () =>
        {
            it('Should throw error when data less then 1 for [0, 1, 2, 3, 4]', () =>
            {
                const cb = () => getPokerHand([0, 1, 2, 3, 4]);
                assert.throws(cb, /The result of the dice can`t be less than 1!/);
            });
        });

        describe('More then 6 data', () =>
        {
            it('Should throw error when data more then 6 for [1, 2, 3, 4, 7]', () =>
            {
                const cb = () => getPokerHand([1, 2, 3, 4, 7]);
                assert.throws(cb, /The result of the dice can`t be more than 6!/);
            });
        });
    });
});
