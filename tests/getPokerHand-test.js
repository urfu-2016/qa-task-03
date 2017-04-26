const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

describe('getPokerHand', () => {
    it('should return `Каре` for [4, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([4, 1, 1, 1, 1]);

        assert.equal(actual, 'Каре');
    });

describe('getPokerHand', () => {
    it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 1, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });
describe('getPokerHand', () => {
    it('should return `Тройка` for [1, 1, 1, 5, 6]', () => {
        const actual = getPokerHand([1, 1, 1, 5, 6]);

        assert.equal(actual, 'Тройка');
    });
describe('getPokerHand', () => {
    it('should return `Две пары` for [1, 1, 2, 3, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 3]);

        assert.equal(actual, 'Две пары');
    });
describe('getPokerHand', () => {
    it('should return `Пара` for [1, 1, 4, 5, 6]', () => {
        const actual = getPokerHand([1, 1, 4, 5, 6]);

        assert.equal(actual, 'Пара');
    });
describe('getPokerHand', () => {
    it('should return `Наивысшее очко` for [5, 4, 3, 2, 1]', () => {
        const actual = getPokerHand([5, 4, 3, 2, 1]);

        assert.equal(actual, 'Наивысшее очко');
    });

    // Напишите тесты на ваш замечательный код здесь
});
