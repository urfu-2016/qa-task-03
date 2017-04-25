const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
	it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
        const actual = getPokerHand([1, 1, 2, 3, 6]);

        assert.equal(actual, 'Пара');
    });
    it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 3]);

        assert.equal(actual, 'Две пары');
    });
    it('should return `Тройка` for [1, 6, 2, 2, 2]', () => {
        const actual = getPokerHand([1, 6, 2, 2, 2]);

        assert.equal(actual, 'Тройка');
    });
    it('should return `Фулл хаус` for [1, 1, 2, 2, 2]', () => {
        const actual = getPokerHand([1, 1, 2, 2, 2]);

        assert.equal(actual, 'Фулл хаус');
    });
    it('should return `Каре` for [1, 2, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 2, 1, 1, 1]);

        assert.equal(actual, 'Каре');
    });
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });
    it('should return `Наивысшее очко!` for [2, 3, 4, 5, 6]', () => {
        const actual = getPokerHand([2, 3, 4, 5, 6]);

        assert.equal(actual, 'Наивысшее очко!');
    });
    //Подсунул не тот кубик
    it('should return `Смухлевать решил?` for [2, 3, Schuller, 5, 6]', () => {
        const actual = getPokerHand([2, 3, 'Schuller', 5, 6]);

        assert.equal(actual, 'Смухлевать решил?');
    });
    //забыл один кубик дома
    it('should return `Смухлевать решил?` for [2, 3, 4, 5]', () => {
        const actual = getPokerHand([2, 3, 4, 5]);

        assert.equal(actual, 'Смухлевать решил?');
    });
    //Думал лишний кубик не заметят
    it('should return `Смухлевать решил?` for [2, 3, 4, 5, 6, 6]', () => {
        const actual = getPokerHand([2, 3, 4, 5, 6, 6]);

        assert.equal(actual, 'Смухлевать решил?');
    });
    //Взял кубики с большими числами
    it('should return `Смухлевать решил?` for [2, 3, 4, 9, 9]', () => {
        const actual = getPokerHand([2, 3, 4, 9, 9]);

        assert.equal(actual, 'Смухлевать решил?');
    });

});
