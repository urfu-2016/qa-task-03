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
    it('should return `Не массив` for 5', () => {
        const actual = getPokerHand(5);

        assert.equal(actual, 'Не массив');
    })
});

describe('getPokerHand', () => {
    it('should return `Элементов меньше 5-ти` for [1, 1, 4, 5]', () => {
        const actual = getPokerHand([1, 1, 4, 5]);

        assert.equal(actual, 'Элементов меньше 5-ти');
    })
});

describe('getPokerHand', () => {
    it('should return `Элементов больше 5-ти` for [5, 2, 3, 5, 1, 1, 5]', () => {
        const actual = getPokerHand([5, 2, 3, 5, 1, 1, 5]);

        assert.equal(actual, 'Элементов больше 5-ти');
    })
});

describe('getPokerHand', () => {
    it('should return `Не массив` for ', () => {
        const actual = getPokerHand();

        assert.equal(actual, 'Не массив');
    })
});

describe('getPokerHand', () => {
    it('should return `Массив содержит элемент, не являющийся числом` for ["a", "b", "c", "d", "e"]', () => {
        const actual = getPokerHand(["a", "b", "c", "d", "e"]);

        assert.equal(actual, 'Массив содержит элемент, не являющийся числом');
    })
});

describe('getPokerHand', () => {
    it('should return `Массив содержит элемент, больший 6` for [1, 2, 3, 4, 7]', () => {
        const actual = getPokerHand([1, 2, 3, 4, 7]);

        assert.equal(actual, 'Массив содержит элемент, больший 6');
    })
});

describe('getPokerHand', () => {
    it('should return `Массив содержит элемент, меньший 1` for [0, 2, 3, 4, 2]', () => {
        const actual = getPokerHand([0, 2, 3, 4, 2]);

        assert.equal(actual, 'Массив содержит элемент, меньший 1');
    })
});
